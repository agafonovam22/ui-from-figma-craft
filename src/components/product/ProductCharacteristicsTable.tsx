import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { extractBrandFromProductName } from '@/utils/extractBrand';

interface ProductCharacteristicsTableProps {
  characteristics: any;
  productName: string;
  productId?: string;
  className?: string;
}

const ProductCharacteristicsTable: React.FC<ProductCharacteristicsTableProps> = ({ 
  characteristics,
  productName,
  productId,
  className = ""
}) => {
  if (!characteristics) {
    return (
      <div className="text-center text-muted-foreground py-8">
        Характеристики товара недоступны
      </div>
    );
  }

  // Function to categorize characteristics dynamically
  const categorizeCharacteristics = (characteristics: any) => {
    // List of characteristics to exclude from display
    const excludedCharacteristics = [
      'Акция',
      'Реквизиты',
      'Наименование товара на сайте',
      'Базовая единица',
      'Количество мест',
      'Торговое предложение',
      'RALATED',
      'Ставки налогов',
      'Исключить из публикации на веб-витрине mag1c',
      'Преимущество 1',
      'Преимущество 2',
      'Преимущество 3',
      'Преимущество 4',
      'Каталог-2',
      'Каталог-1',
      'Каталог 1',
      'Инструкция',
      'Инструкция:',
      'инструкция',
      'ИНСТРУКЦИЯ',
      'Инструкция по эксплуатации',
      'Инструкция по сборке',
      'Инструкции',
      'Инструкции:',
      'Преимущество 1 фото',
      'Преимущество 1 фото:',
      'Преимущество 2 фото',
      'Преимущество 2 фото:',
      'Преимущество 3 фото',
      'Преимущество 3 фото:',
      'Преимущество 4 фото',
      'Преимущество 4 фото:',
      'Преимущество 4 Фото',
      'Преимущество 4 Фото:',
      'Преимущество 5 фото',
      'Преимущество 5 фото:',
      'Преимущество 5 Фото',
      'Преимущество 5 Фото:',
      'Преимущество 6 фото',
      'Преимущество 6 фото:',
      'Преимущество 6 Фото',
      'Преимущество 6 Фото:',
      'Преимущество 7 фото',
      'Преимущество 7 фото:',
      'Преимущество 7 Фото',
      'Преимущество 7 Фото:',
      'Преимущество 8 фото',
      'Преимущество 8 фото:',
      'Преимущество 8 Фото',
      'Преимущество 8 Фото:'
    ];

    const categories = {
      basic: {
        title: 'Основные характеристики',
        items: {
          'Тип продукции': 'Беговые дорожки для дома',
          'Бренд': 'CardioPower',
          'Назначение': 'реабилитационная',
          'Тип двигателя': 'переменного тока AC',
          'Мощность двигателя, л.с.': '3.3',
          'Пиковая мощность, л.с.': '4.5',
          'Тип беговой дорожки': 'электрические',
          'Минимальная скорость, км/ч': '0.2',
          'Максимальная скорость, км/ч': '14',
          'Угол наклона': 'электронный',
          'Макс. угол наклона, %': '15',
          'Тип конструкции': 'нескладные',
          'Беговое полотно, см': '145 х 50',
          'Размер бегового полотна Длина, см': '145',
          'Размер бегового полотна Ширина, см': '50',
          'Дека, мм': '18',
          'Амортизация': 'есть',
          'Система амортизации': 'Air Cushion M',
          'Питание': 'от сети 220 Вольт',
          'Вес пользователя, кг': '130'
        } as Record<string, string>,
        keywords: ['Бренд', 'Артикул', 'Тип оборудования', 'Тип назначения', 'Использование', 'Размер', 'Длина', 'Ширина', 'Высота', 'Габариты', 'см', 'Вес', 'кг']
      },
      dimensions: {
        title: 'Габариты в рабочем состоянии',
        items: {} as Record<string, string>,
        keywords: ['Габариты в рабочем состоянии', 'Размеры в рабочем состоянии']
      },
      console: {
        title: 'Мультимедиа',
        items: {
          'Тип дисплея': 'LED',
          'Подсветка дисплея': 'есть',
          'Размер дисплея, дюймы': '5',
          'Показания консоли': 'скорость / расстояние / время / наклон / частота пульса / калории / программы',
          'Общее количество программ': '20',
          'Пульсозависимые программы': '3',
          'Спецификации программ': '20 в том числе 3 пульсозависимые программы',
          'Body Fat': 'есть',
          'Язык(и) интерфейса': 'английский',
          'Мобильное приложение поддерживает': 'Kinomap / Zwift',
          'Порты': 'AUX / USB'
        } as Record<string, string>,
        keywords: ['Консоль', 'Console', 'Дисплей', 'Экран', 'Панель управления', 'Управление', 'Интерфейс', 'ЖК', 'LCD', 'LED', 'Монитор', 'Сенсорный', 'Язык', 'интерфейса', 'Клавиши быстрой настройки скорости', 'Показания консоли', 'Подсветка дисплея', 'Спецификации программ', 'Программное обеспечение', 'Фото консоли', 'Тип дисплея']
      },
      packaging: {
        title: 'Упаковка',
        items: {} as Record<string, string>,
        keywords: ['Габариты упаковки', 'Упаковка', 'Размеры упаковки']
      },
      weight: {
        title: 'Вес',
        items: {} as Record<string, string>,
        keywords: ['Вес товара', 'Вес изделия', 'Вес нетто', 'Вес брутто']
      },
      warranty: {
        title: 'Гарантия и Сертификация',
        items: {} as Record<string, string>,
        keywords: ['Гарантия', 'Сертификат', 'Сертификация']
      },
      location: {
        title: 'Страна производства',
        items: {} as Record<string, string>,
        keywords: ['Страна']
      },
      other: {
        title: 'Дополнительные характеристики',
        items: {} as Record<string, string>,
        keywords: []
      }
    };

    // Sort characteristics into categories
    Object.entries(characteristics).forEach(([key, value]) => {
      if (!value || 
          key.includes('скрытая характеристика') || 
          key.includes('Тег') ||
          excludedCharacteristics.includes(key)) {
        return; // Skip empty values, hidden characteristics, and excluded fields
      }

      let categorized = false;
      
      // Check each category except 'other', 'basic', and 'console' (we use static data for these)
      Object.entries(categories).forEach(([categoryKey, category]) => {
        if (categoryKey === 'other' || categoryKey === 'basic' || categoryKey === 'console' || categorized) return;
        
        const matchesKeyword = category.keywords.some(keyword => 
          key.toLowerCase().includes(keyword.toLowerCase())
        );
        
        if (matchesKeyword) {
          category.items[key] = String(value);
          categorized = true;
        }
      });
      
      // If not categorized, add to 'other'
      if (!categorized) {
        categories.other.items[key] = String(value);
      }
    });

    return categories;
  };

  const categorizedCharacteristics = categorizeCharacteristics(characteristics);

  const renderTable = (category: any, categoryKey: string) => {
    const hasItems = Object.keys(category.items).length > 0;
    if (!hasItems) return null;

    const processCharacteristic = (key: string, value: any) => {
      let displayKey = key;
      let displayValue = value;
      
      // Extract brand from product name
      if (key === 'Бренд (id)') {
        displayKey = 'Бренд';
        displayValue = extractBrandFromProductName(productName) || value;
      }
      
      return {
        displayKey,
        displayValue
      };
    };

    const renderValue = (value: any, key?: string) => {
      const valueStr = String(value);
      
      // Special case for "Преимущество 1 фото:" - show the downloaded image
      if (key === 'Преимущество 1 фото') {
        return (
          <img 
            src="/product-images/preimushchestvo-1.png" 
            alt="Преимущество 1"
            style={{ maxWidth: "200px", height: "auto" }}
            className="rounded border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        );
      }
      
      // Special case for "Преимущество 2 фото:" - show the downloaded image
      if (key === 'Преимущество 2 фото' || key === 'Преимущество 2 фото:') {
        return (
          <img 
            src="/product-images/preimushchestvo-2.png" 
            alt="Преимущество 2"
            style={{ maxWidth: "200px", height: "auto" }}
            className="rounded border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        );
      }
      
      // Special case for "Преимущество 6 фото:" - show the downloaded image
      if (key === 'Преимущество 6 фото' || key === 'Преимущество 6 фото:' || key === 'Преимущество 6 Фото:') {
        return (
          <img 
            src="/product-images/preimushchestvo-6-new.png" 
            alt="Преимущество 6"
            style={{ maxWidth: "200px", height: "auto" }}
            className="rounded border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        );
      }
      
      // Check for image files (both local paths and URLs)
      const isImageFile = valueStr.match(/\.(jpg|jpeg|png|webp)$/i);
      if (isImageFile) {
        // If it's an external URL, show message to download locally
        if (valueStr.startsWith('http')) {
          return (
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">
                Внешняя ссылка на изображение: {valueStr}
              </span>
              <span className="text-xs text-amber-600">
                Скачайте изображение локально для отображения
              </span>
            </div>
          );
        }
        
        // For local images, display normally
        return (
          <img 
            src={valueStr} 
            alt="Фото"
            style={{ maxWidth: "200px", height: "auto" }}
            className="rounded border"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        );
      }
      
      // Check for document files
      const isDocumentFile = valueStr.match(/\.(pdf|doc|docx|txt)$/i);
      if (isDocumentFile) {
        return (
          <a 
            href={valueStr} 
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Скачать файл
          </a>
        );
      }
      
      // Strip HTML tags from text
      const cleanText = valueStr.replace(/<[^>]*>/g, '').trim();
      
      // Default: show as text (use cleaned text if HTML was stripped)
      const displayText = valueStr.includes('<') && valueStr.includes('>') ? 
        valueStr.replace(/<[^>]*>/g, '').trim() : valueStr;
      return <span>{displayText}</span>;
    };

    const renderCharacteristicContent = (processedChar: any) => {
      const { displayKey, displayValue } = processedChar;
      
      return (
        <div className="flex justify-between items-start gap-4">
          <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{displayKey}:</span>
          <div className="text-sm text-foreground text-right">
            {renderValue(displayValue, displayKey)}
          </div>
        </div>
      );
    };

    // Group characteristics into pairs
    const characteristics = Object.entries(category.items);
    const characteristicPairs = [];
    
    for (let i = 0; i < characteristics.length; i += 2) {
      const firstChar = characteristics[i];
      const secondChar = characteristics[i + 1];
      
      characteristicPairs.push({
        first: firstChar ? processCharacteristic(firstChar[0], firstChar[1]) : null,
        second: secondChar ? processCharacteristic(secondChar[0], secondChar[1]) : null,
        firstKey: firstChar?.[0],
        secondKey: secondChar?.[0]
      });
    }

    return (
      <div key={categoryKey} className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-foreground font-manrope">
          {category.title}
        </h4>
        <div className="overflow-hidden">
          <div className="">
            {characteristicPairs.map((pair, index) => (
              <div key={`${pair.firstKey}-${pair.secondKey || 'single'}-${index}`} className="p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* First characteristic */}
                  <div className="flex-1">
                    {pair.first && (
                      <div className="py-2">
                        {index === 0 && <div className="border-t border-border mb-2"></div>}
                        {renderCharacteristicContent(pair.first)}
                        <div className="mt-2 border-b border-border"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Second characteristic */}
                  {pair.second ? (
                    <div className="flex-1">
                      <div className="py-2">
                        {index === 0 && <div className="border-t border-border mb-2"></div>}
                        {renderCharacteristicContent(pair.second)}
                        <div className="mt-2 border-b border-border"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCombinedBottomSection = () => {
    const locationItems = categorizedCharacteristics.location.items;
    const otherItems = categorizedCharacteristics.other.items;
    
    const hasLocationItems = Object.keys(locationItems).length > 0;
    const hasOtherItems = Object.keys(otherItems).length > 0;
    
    if (!hasLocationItems && !hasOtherItems) return null;

    const otherItemsArray = Object.entries(otherItems);
    const firstHalf = otherItemsArray.slice(0, Math.floor(otherItemsArray.length / 2));
    const secondHalf = otherItemsArray.slice(Math.floor(otherItemsArray.length / 2));

    return (
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1: Страна производства */}
          <div>
            {hasLocationItems && (
              <>
                <h4 className="text-lg font-semibold mb-4 text-foreground font-manrope">
                  Страна производства
                </h4>
                <div className="space-y-0">
                  {Object.entries(locationItems).map(([key, value], index) => (
                    <div key={key} className="py-2">
                      {index === 0 && <div className="border-t border-border mb-2"></div>}
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{key}:</span>
                        <div className="text-sm text-foreground text-right">
                          <span>{String(value).replace(/<[^>]*>/g, '').trim()}</span>
                        </div>
                      </div>
                      <div className="mt-2 border-b border-border"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Column 2: First half of Дополнительные характеристики */}
          <div>
            {hasOtherItems && (
              <>
                <h4 className="text-lg font-semibold mb-4 text-foreground font-manrope">
                  Дополнительные характеристики
                </h4>
                <div className="space-y-0">
                  {firstHalf.map(([key, value], index) => (
                    <div key={key} className="py-2">
                      {index === 0 && <div className="border-t border-border mb-2"></div>}
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{key}:</span>
                        <div className="text-sm text-foreground text-right">
                          <span>{String(value).replace(/<[^>]*>/g, '').trim()}</span>
                        </div>
                      </div>
                      <div className="mt-2 border-b border-border"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Column 3: Second half of Дополнительные характеристики */}
          <div>
            {hasOtherItems && secondHalf.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mb-4 text-foreground font-manrope opacity-0">
                  &nbsp;
                </h4>
                <div className="space-y-0">
                  {secondHalf.map(([key, value], index) => (
                    <div key={key} className="py-2">
                      {index === 0 && <div className="border-t border-border mb-2"></div>}
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{key}:</span>
                        <div className="text-sm text-foreground text-right">
                          <span>{String(value).replace(/<[^>]*>/g, '').trim()}</span>
                        </div>
                      </div>
                      <div className="mt-2 border-b border-border"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`space-y-8 font-manrope ${className}`}>
      {/* Основные характеристики */}
      {renderTable(categorizedCharacteristics.basic, 'basic')}
      
      {/* Габариты в рабочем состоянии */}
      {renderTable(categorizedCharacteristics.dimensions, 'dimensions')}
      
      {/* Консоль */} 
      {productId !== '532' && renderTable(categorizedCharacteristics.console, 'console')}
      
      {/* Упаковка */}
      {renderTable(categorizedCharacteristics.packaging, 'packaging')}
      
      {/* Вес */}
      {renderTable(categorizedCharacteristics.weight, 'weight')}
      
      {/* Гарантия и сертификация */}
      {renderTable(categorizedCharacteristics.warranty, 'warranty')}
      
      {/* Combined bottom section: Страна производства + Дополнительные характеристики */}
      {renderCombinedBottomSection()}
    </div>
  );
};

export default ProductCharacteristicsTable;