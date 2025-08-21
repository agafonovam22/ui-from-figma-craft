<?php
// Добавляем отображение ошибок для отладки
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

// Подключаем модуль инфоблоков
if (!CModule::IncludeModule("iblock")) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Cannot include iblock module']);
    exit;
}

// ID инфоблока каталога - попробуем разные ID
$POSSIBLE_IBLOCK_IDS = [4, 1, 2, 3, 5, 6, 7, 8]; // Список возможных ID для проверки

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
        'total_categories' => 0,
        'debug_info' => [
            'server_name' => $_SERVER['HTTP_HOST'],
            'iblocks_found' => []
        ]
    ];

    // Сначала найдем все инфоблоки каталогов
    $rsIBlocks = CIBlock::GetList([], ['TYPE' => 'catalog']);
    while ($iblock = $rsIBlocks->Fetch()) {
        $count = CIBlockElement::GetList(
            [],
            ["IBLOCK_ID" => $iblock['ID'], "ACTIVE" => "Y"],
            [],
            false
        );
        $result['debug_info']['iblocks_found'][] = [
            'id' => $iblock['ID'],
            'name' => $iblock['NAME'],
            'code' => $iblock['CODE'],
            'active_elements' => $count
        ];
    }

    // Найдем инфоблок с наибольшим количеством товаров
    $best_iblock = null;
    $max_count = 0;
    foreach ($result['debug_info']['iblocks_found'] as $iblock_info) {
        if ($iblock_info['active_elements'] > $max_count) {
            $max_count = $iblock_info['active_elements'];
            $best_iblock = $iblock_info['id'];
        }
    }

    if (!$best_iblock) {
        throw new Exception('No catalog iblocks found with products');
    }

    $IBLOCK_ID = $best_iblock;
    $result['debug_info']['selected_iblock'] = $IBLOCK_ID;
    $result['debug_info']['selected_iblock_count'] = $max_count;

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

    // Получаем товары из выбранного инфоблока
    $filter = [
        "IBLOCK_ID" => $IBLOCK_ID,
        "ACTIVE" => "Y"
    ];
    
    // Убираем лимит чтобы получить все товары
    $rsProducts = CIBlockElement::GetList(
        ["SORT" => "ASC", "NAME" => "ASC"],
        $filter,
        false,
        false, // Убираем лимит
        [
            "ID", "NAME", "CODE", "PREVIEW_TEXT", "DETAIL_TEXT", 
            "PREVIEW_PICTURE", "DETAIL_PICTURE", "IBLOCK_SECTION_ID",
            "PROPERTY_*"
        ]
    );
    
    // Считаем общее количество товаров в инфоблоке (включая неактивные)
    $totalCount = CIBlockElement::GetList(
        [],
        ["IBLOCK_ID" => $IBLOCK_ID],
        [],
        false
    );
    
    $activeCount = CIBlockElement::GetList(
        [],
        $filter,
        [],
        false
    );
    
    $result['debug_info']['total_in_iblock'] = $totalCount;
    $result['debug_info']['active_in_iblock'] = $activeCount;

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

        // Получаем картинку в высоком качестве
        $imageUrl = '';
        $pictureId = $product['DETAIL_PICTURE'] ?: $product['PREVIEW_PICTURE']; // Сначала детальная, потом превью
        if ($pictureId) {
            $imageFile = CFile::GetFileArray($pictureId);
            if ($imageFile) {
                // Проверяем размер изображения и при необходимости создаем версию в хорошем качестве
                $originalUrl = 'https://' . $_SERVER['HTTP_HOST'] . $imageFile['SRC'];
                
                // Если изображение маленькое, пытаемся получить версию побольше
                if ($imageFile['WIDTH'] < 400 || $imageFile['HEIGHT'] < 400) {
                    // Создаем резайз с качественными параметрами
                    $resizeImage = CFile::ResizeImageGet(
                        $pictureId,
                        ['width' => 800, 'height' => 800], // Большой размер
                        BX_RESIZE_IMAGE_PROPORTIONAL, // Пропорциональное изменение
                        true, // Обрезать по размеру
                        false, // Фильтры
                        false, // Не применять водяные знаки
                        90 // Качество JPEG 90%
                    );
                    
                    if ($resizeImage && $resizeImage['src']) {
                        $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $resizeImage['src'];
                    } else {
                        $imageUrl = $originalUrl;
                    }
                } else {
                    $imageUrl = $originalUrl;
                }
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
            'code' => $product['CODE']
        ];
    }

    $result['total_categories'] = count($result['categories']);
    $result['total_products'] = count($result['products']);
    
    // Добавим информацию о других инфоблоках
    $result['debug_info']['other_iblocks'] = [];
    $rsIBlocks = CIBlock::GetList([], ['TYPE' => 'catalog']);
    while ($iblock = $rsIBlocks->Fetch()) {
        $count = CIBlockElement::GetList(
            [],
            ["IBLOCK_ID" => $iblock['ID'], "ACTIVE" => "Y"],
            [],
            false
        );
        $result['debug_info']['other_iblocks'][] = [
            'id' => $iblock['ID'],
            'name' => $iblock['NAME'],
            'active_elements' => $count
        ];
    }

    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'message' => $e->getMessage(),
        'trace' => $e->getTraceAsString(),
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