import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { extractBrandFromProductName } from '@/utils/extractBrand';

interface ProductCharacteristicsTableProps {
  characteristics: any;
  productName: string;
  className?: string;
}

const ProductCharacteristicsTable: React.FC<ProductCharacteristicsTableProps> = ({ 
  characteristics,
  productName,
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
      'Каталог 1'
    ];

    const categories = {
      basic: {
        title: 'Основные характеристики',
        items: {} as Record<string, string>,
        keywords: ['Бренд', 'Артикул', 'Тип оборудования', 'Тип назначения', 'Использование', 'Размер', 'Длина', 'Ширина', 'Высота', 'Габариты', 'см', 'Вес', 'кг']
      },
      dimensions: {
        title: 'Габариты в рабочем состоянии',
        items: {} as Record<string, string>,
        keywords: ['Габариты в рабочем состоянии', 'Размеры в рабочем состоянии']
      },
      console: {
        title: 'Консоль',
        items: {} as Record<string, string>,
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
      
      // Check each category except 'other'
      Object.entries(categories).forEach(([categoryKey, category]) => {
        if (categoryKey === 'other' || categorized) return;
        
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

    const renderValue = (value: any) => {
      const valueStr = String(value);
      
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
      
      // Check if value contains HTML tags
      const hasHtmlTags = valueStr.includes('<') && valueStr.includes('>');
      if (hasHtmlTags) {
        return (
          <div 
            className="text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: valueStr }}
          />
        );
      }
      
      // Default: show as text
      return <span>{valueStr}</span>;
    };

    const renderCharacteristicContent = (processedChar: any) => {
      const { displayKey, displayValue } = processedChar;
      
      return (
        <div className="flex justify-between items-start gap-4">
          <span className="text-sm font-medium text-foreground flex-shrink-0">{displayKey}:</span>
          <div className="text-sm text-muted-foreground text-right">
            {renderValue(displayValue)}
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
              <div key={`${pair.firstKey}-${pair.secondKey || 'single'}-${index}`} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* First characteristic */}
                  <div className="flex-1">
                    {pair.first && renderCharacteristicContent(pair.first)}
                    {index < characteristicPairs.length - 1 && (
                      <div className="mt-2 border-b border-border"></div>
                    )}
                  </div>
                  
                  {/* Second characteristic */}
                  {pair.second ? (
                    <div className="flex-1">
                      {renderCharacteristicContent(pair.second)}
                      {index < characteristicPairs.length - 1 && (
                        <div className="mt-2 border-b border-border"></div>
                      )}
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

  return (
    <div className={`space-y-8 font-manrope ${className}`}>
      {/* Основные характеристики */}
      {renderTable(categorizedCharacteristics.basic, 'basic')}
      
      {/* Габариты в рабочем состоянии */}
      {renderTable(categorizedCharacteristics.dimensions, 'dimensions')}
      
      {/* Консоль */} 
      {renderTable(categorizedCharacteristics.console, 'console')}
      
      {/* Упаковка */}
      {renderTable(categorizedCharacteristics.packaging, 'packaging')}
      
      {/* Вес */}
      {renderTable(categorizedCharacteristics.weight, 'weight')}
      
      {/* Гарантия и сертификация */}
      {renderTable(categorizedCharacteristics.warranty, 'warranty')}
      
      {/* Страна производства */}
      {renderTable(categorizedCharacteristics.location, 'location')}
      
      {/* Дополнительные характеристики */}
      {renderTable(categorizedCharacteristics.other, 'other')}
    </div>
  );
};

export default ProductCharacteristicsTable;