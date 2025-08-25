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

    return (
      <div key={categoryKey} className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-foreground font-manrope">
          {category.title}
        </h4>
        <div className="border border-border rounded-lg overflow-hidden">
          <Table>
            <TableBody>
              {Object.entries(category.items).map(([key, value]) => {
                let displayKey = key;
                let displayValue = value;
                
                // Extract brand from product name
                if (key === 'Бренд (id)') {
                  displayKey = 'Бренд';
                  displayValue = extractBrandFromProductName(productName) || value;
                }
                
                return (
                  <TableRow key={key} className="border-b border-border">
                    <TableCell className="font-medium text-muted-foreground py-3 px-4 w-1/2">
                      {displayKey}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-right">
                      {String(displayValue)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
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