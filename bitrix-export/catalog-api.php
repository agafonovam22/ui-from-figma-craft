<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

// Подключаем модуль инфоблоков
CModule::IncludeModule("iblock");

// ID инфоблока каталога (замените на ваш ID)
$IBLOCK_ID = 4; // Ваш ID из ссылки

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Устанавливаем заголовки для JSON и CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

try {
    $result = [
        'categories' => [],
        'products' => [],
        'timestamp' => date('c'),
        'total_products' => 0,
        'total_categories' => 0
    ];

    // Получаем разделы (категории)
    $rsCategories = CIBlockSection::GetList(
        ["SORT" => "ASC", "NAME" => "ASC"],
        ["IBLOCK_ID" => $IBLOCK_ID, "ACTIVE" => "Y"],
        false,
        ["ID", "NAME", "CODE", "DESCRIPTION", "PICTURE", "SECTION_PAGE_URL"]
    );

    while ($category = $rsCategories->Fetch()) {
        $imageUrl = '';
        if ($category['PICTURE']) {
            $imageFile = CFile::GetFileArray($category['PICTURE']);
            if ($imageFile) {
                $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $imageFile['SRC'];
            }
        }

        $result['categories'][] = [
            'id' => $category['ID'],
            'name' => $category['NAME'],
            'slug' => $category['CODE'] ?: transliterate($category['NAME']),
            'description' => $category['DESCRIPTION'],
            'image_url' => $imageUrl,
            'url' => $category['SECTION_PAGE_URL']
        ];
    }

    // Получаем товары
    $rsProducts = CIBlockElement::GetList(
        ["SORT" => "ASC", "NAME" => "ASC"],
        [
            "IBLOCK_ID" => $IBLOCK_ID,
            "ACTIVE" => "Y"
        ],
        false,
        false,
        [
            "ID", "NAME", "CODE", "PREVIEW_TEXT", "DETAIL_TEXT", 
            "PREVIEW_PICTURE", "DETAIL_PICTURE", "IBLOCK_SECTION_ID",
            "PROPERTY_*"
        ]
    );

    while ($product = $rsProducts->Fetch()) {
        // Получаем цены
        $price = 0;
        $originalPrice = null;
        
        // Если используется модуль каталога
        if (CModule::IncludeModule("catalog")) {
            $priceRes = CPrice::GetList(
                [],
                ["PRODUCT_ID" => $product['ID']]
            );
            if ($priceData = $priceRes->Fetch()) {
                $price = floatval($priceData['PRICE']);
                $originalPrice = floatval($priceData['PRICE_SCALE'] ?? $price);
            }
        }

        // Получаем картинку
        $imageUrl = '';
        $pictureId = $product['PREVIEW_PICTURE'] ?: $product['DETAIL_PICTURE'];
        if ($pictureId) {
            $imageFile = CFile::GetFileArray($pictureId);
            if ($imageFile) {
                $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $imageFile['SRC'];
            }
        }

        // Вычисляем скидку
        $discountPercentage = null;
        if ($originalPrice && $originalPrice > $price) {
            $discountPercentage = round((($originalPrice - $price) / $originalPrice) * 100);
        }

        // Получаем свойства
        $available = true;
        $inStock = true;
        $rating = 0;
        $reviewsCount = 0;

        // Если есть свойство "Доступность"
        if (isset($product['PROPERTY_AVAILABLE_VALUE'])) {
            $available = $product['PROPERTY_AVAILABLE_VALUE'] === 'Да';
        }

        // Если есть свойство "В наличии"
        if (isset($product['PROPERTY_IN_STOCK_VALUE'])) {
            $inStock = $product['PROPERTY_IN_STOCK_VALUE'] === 'Да';
        }

        // Получаем все характеристики товара
        $characteristics = [];
        
        // Получаем детальные свойства элемента
        $dbProps = CIBlockElement::GetProperty($IBLOCK_ID, $product['ID'], "sort", "asc");
        while ($prop = $dbProps->Fetch()) {
            if (!empty($prop['VALUE']) && $prop['CODE']) {
                // Пропускаем системные свойства
                if (in_array($prop['CODE'], ['AVAILABLE', 'IN_STOCK'])) {
                    continue;
                }
                
                // Получаем правильное значение в зависимости от типа свойства
                $value = $prop['VALUE'];
                
                // Если это списочное свойство (тип L), получаем расшифрованное значение
                if ($prop['PROPERTY_TYPE'] === 'L' && !empty($prop['VALUE_ENUM'])) {
                    $value = $prop['VALUE_ENUM'];
                }
                // Если есть VALUE_ENUM, но PROPERTY_TYPE не определен, тоже используем его
                elseif (!empty($prop['VALUE_ENUM']) && is_numeric($prop['VALUE'])) {
                    $value = $prop['VALUE_ENUM'];
                }
                
                $characteristics[] = [
                    'code' => $prop['CODE'],
                    'name' => $prop['NAME'],
                    'value' => $value,
                    'description' => $prop['DESCRIPTION'] ?? null
                ];
            }
        }

        $result['products'][] = [
            'id' => $product['ID'],
            'name' => $product['NAME'],
            'description' => $product['PREVIEW_TEXT'] ?: $product['DETAIL_TEXT'],
            'price' => $price,
            'original_price' => $originalPrice,
            'discount_percentage' => $discountPercentage,
            'image_url' => $imageUrl,
            'category_id' => $product['IBLOCK_SECTION_ID'],
            'is_available' => $available,
            'in_stock' => $inStock,
            'rating' => $rating,
            'reviews_count' => $reviewsCount,
            'badge' => $discountPercentage ? "Скидка {$discountPercentage}%" : null,
            'badge_color' => $discountPercentage ? 'red' : null,
            'has_comparison' => false,
            'bitrix_id' => $product['ID'],
            'code' => $product['CODE'],
            'characteristics' => $characteristics
        ];
    }

    $result['total_categories'] = count($result['categories']);
    $result['total_products'] = count($result['products']);

    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'message' => $e->getMessage(),
        'timestamp' => date('c')
    ], JSON_UNESCAPED_UNICODE);
}

// Функция транслитерации для slug
function transliterate($text) {
    $converter = [
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd',
        'е' => 'e', 'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 'и' => 'i',
        'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n',
        'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't',
        'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c', 'ч' => 'ch',
        'ш' => 'sh', 'щ' => 'sch', 'ь' => '', 'ы' => 'y', 'ъ' => '',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
        'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D',
        'Е' => 'E', 'Ё' => 'E', 'Ж' => 'Zh', 'З' => 'Z', 'И' => 'I',
        'Й' => 'Y', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N',
        'О' => 'O', 'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T',
        'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C', 'Ч' => 'Ch',
        'Ш' => 'Sh', 'Щ' => 'Sch', 'Ь' => '', 'Ы' => 'Y', 'Ъ' => '',
        'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya'
    ];
    
    $text = strtr($text, $converter);
    $text = strtolower($text);
    $text = preg_replace('~[^-a-z0-9_]+~u', '-', $text);
    $text = trim($text, '-');
    
    return $text;
}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>