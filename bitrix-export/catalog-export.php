<?php
// Проверяем, что это GET запрос
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Устанавливаем заголовки
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');

// ID инфоблока каталога (измените на ваш)
define('CATALOG_IBLOCK_ID', 2);

$result = [
    'categories' => [],
    'products' => [],
    'total_categories' => 0,
    'total_products' => 0
];

try {
    // Получаем разделы (категории)
    $sections = CIBlockSection::GetList(
        ['SORT' => 'ASC'],
        [
            'IBLOCK_ID' => CATALOG_IBLOCK_ID,
            'ACTIVE' => 'Y'
        ],
        false,
        ['ID', 'NAME', 'CODE', 'DESCRIPTION', 'PICTURE', 'SECTION_PAGE_URL']
    );

    while ($section = $sections->Fetch()) {
        $imageUrl = '';
        if ($section['PICTURE']) {
            $file = CFile::GetFileArray($section['PICTURE']);
            if ($file) {
                $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $file['SRC'];
            }
        }

        $result['categories'][] = [
            'id' => $section['ID'],
            'name' => $section['NAME'],
            'code' => $section['CODE'],
            'description' => $section['DESCRIPTION'],
            'image_url' => $imageUrl,
            'url' => $section['SECTION_PAGE_URL']
        ];
    }

    // Получаем товары
    $products = CIBlockElement::GetList(
        ['SORT' => 'ASC'],
        [
            'IBLOCK_ID' => CATALOG_IBLOCK_ID,
            'ACTIVE' => 'Y'
        ],
        false,
        false,
        [
            'ID', 'NAME', 'CODE', 'PREVIEW_TEXT', 'DETAIL_TEXT', 
            'PREVIEW_PICTURE', 'DETAIL_PICTURE', 'IBLOCK_SECTION_ID',
            'PROPERTY_*'
        ]
    );

    while ($product = $products->GetNext()) {
        $imageUrl = '';
        
        // Получаем картинку товара
        if ($product['PREVIEW_PICTURE']) {
            $file = CFile::GetFileArray($product['PREVIEW_PICTURE']);
            if ($file) {
                $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $file['SRC'];
            }
        } elseif ($product['DETAIL_PICTURE']) {
            $file = CFile::GetFileArray($product['DETAIL_PICTURE']);
            if ($file) {
                $imageUrl = 'https://' . $_SERVER['HTTP_HOST'] . $file['SRC'];
            }
        }

        // Получаем цены (если подключен модуль Каталог)
        $price = 0;
        $originalPrice = null;
        $discountPercent = null;
        
        if (CModule::IncludeModule('catalog')) {
            $priceData = CPrice::GetList(
                [],
                ['PRODUCT_ID' => $product['ID']],
                false,
                false,
                ['PRICE', 'CURRENCY']
            );
            
            if ($priceRow = $priceData->Fetch()) {
                $price = floatval($priceRow['PRICE']);
            }
        }

        // Определяем наличие и статус
        $isAvailable = true;
        $inStock = true;
        $badge = 'В наличии';
        $badgeColor = 'green';

        // Можете добавить свои свойства для определения статуса
        if (isset($product['PROPERTY_AVAILABILITY_VALUE'])) {
            $isAvailable = $product['PROPERTY_AVAILABILITY_VALUE'] === 'Y';
            $inStock = $isAvailable;
            $badge = $isAvailable ? 'В наличии' : 'Нет в наличии';
            $badgeColor = $isAvailable ? 'green' : 'red';
        }

        // Рейтинг и отзывы (можете настроить под ваши свойства)
        $rating = 4.5; // По умолчанию
        $reviewsCount = 0;
        
        if (isset($product['PROPERTY_RATING_VALUE'])) {
            $rating = floatval($product['PROPERTY_RATING_VALUE']);
        }
        
        if (isset($product['PROPERTY_REVIEWS_COUNT_VALUE'])) {
            $reviewsCount = intval($product['PROPERTY_REVIEWS_COUNT_VALUE']);
        }

        $result['products'][] = [
            'id' => $product['ID'],
            'name' => $product['NAME'],
            'code' => $product['CODE'],
            'description' => $product['PREVIEW_TEXT'] ?: $product['DETAIL_TEXT'],
            'price' => $price,
            'original_price' => $originalPrice,
            'discount_percentage' => $discountPercent,
            'image_url' => $imageUrl,
            'category_id' => $product['IBLOCK_SECTION_ID'],
            'is_available' => $isAvailable,
            'in_stock' => $inStock,
            'rating' => $rating,
            'reviews_count' => $reviewsCount,
            'badge' => $badge,
            'badge_color' => $badgeColor,
            'has_comparison' => true
        ];
    }

    $result['total_categories'] = count($result['categories']);
    $result['total_products'] = count($result['products']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch catalog data: ' . $e->getMessage()]);
    exit;
}

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>