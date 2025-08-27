import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getBrandName, getUsageName, getEquipmentTypeName } from '@/utils/brandMapping';

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

    // Get brand name from characteristics or fallback to static
    const brandId = characteristics['Бренд (id)'];
    const brandName = getBrandName(brandId) || 'CardioPower';

    // Get usage/purpose name from characteristics
    const usageId = characteristics['Назначение'] || characteristics['Использование'] || characteristics['Тип назначения'];
    console.log('🔍 Usage ID из API:', usageId);
    const usageName = getUsageName(usageId) || 'реабилитационная';

    // Get equipment type name from characteristics
    const equipmentTypeId = characteristics['Тип оборудования'];
    console.log('🔍 Equipment Type ID из API:', equipmentTypeId);
    const equipmentTypeName = getEquipmentTypeName(equipmentTypeId) || 'Беговые дорожки для дома';

    // Логируем все характеристики для отладки
    console.log('🔍 Все характеристики товара:', characteristics);

    const categories = {
      basic: {
        title: 'Основные характеристики',
        items: {
          'Тип продукции': equipmentTypeName,
          'Бренд': brandName,
          'Назначение': usageName,
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
      pulseControl: {
        title: 'Контроль пульса',
        items: {
          'Сенсоры пульса': 'есть',
          'Поддержка кардиопояса': 'есть',
          'Кардиопояс': 'опция'
        } as Record<string, string>,
        keywords: ['Контроль пульса', 'Сенсоры пульса', 'Кардиопояс']
      },
      workingDimensions: {
        title: 'Габариты в рабочем состоянии',
        items: {
          'Размер в рабочем состоянии Длина, см': '190',
          'Размер в рабочем состоянии Ширина, см': '85',
          'Размер в рабочем состоянии Высота, см': '143'
        } as Record<string, string>,
        keywords: ['Габариты в рабочем состоянии', 'Размер в рабочем состоянии']
      },
      packageDimensions: {
        title: 'Упаковка',
        items: {
          'Габариты упаковки Длина, см': '202',
          'Габариты упаковки Ширина, см': '91',
          'Габариты упаковки Высота, см': '38'
        } as Record<string, string>,
        keywords: ['Габариты упаковки', 'Упаковка', 'Размеры упаковки']
      },
      packaging: {
        title: 'Упаковка',
        items: {} as Record<string, string>,
        keywords: ['Габариты упаковки', 'Упаковка', 'Размеры упаковки']
      },
      weight: {
        title: 'Вес',
        items: {
          'Вес Нетто, кг': '120',
          'Вес Брутто, кг': '130'
        } as Record<string, string>,
        keywords: ['Вес товара', 'Вес изделия', 'Вес нетто', 'Вес брутто']
      },
      warranty: {
        title: 'Гарантия и Сертификация',
        items: {
          'Гарантия на домашнее использование': '2 года',
          'Страна бренда': 'Германия',
          'Страна изготовления': 'КНР',
          'Артикул': 'TR150',
          'Сертификаты': 'CE, RoHS, EN957'
        } as Record<string, string>,
        keywords: ['Гарантия', 'Сертификат', 'Сертификация']
      },
      additionalSpecs: {
        title: 'Дополнительные характеристики',
        items: {
          'Диаметр передних валов, мм': '60',
          'Диаметр задних валов, мм': '50',
          'Держатель для бутылки': 'есть',
          'Подставка под планшет': 'есть',
          'Транспортировочные колеса': 'есть',
          'Компенсаторы неровностей пола': 'есть',
          'Рама': 'усиленная сталь'
        } as Record<string, string>,
        keywords: ['Дополнительные характеристики']
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
      
      // Check each category except 'other', 'basic', 'console', 'pulseControl', 'workingDimensions', 'packageDimensions', 'weight', 'warranty', 'additionalSpecs' (we use static data for these)
      Object.entries(categories).forEach(([categoryKey, category]) => {
        if (categoryKey === 'other' || categoryKey === 'basic' || categoryKey === 'console' || categoryKey === 'pulseControl' || categoryKey === 'workingDimensions' || categoryKey === 'packageDimensions' || categoryKey === 'weight' || categoryKey === 'warranty' || categoryKey === 'additionalSpecs' || categorized) return;
        
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
      
      // Extract brand from product name or use brand mapping
      if (key === 'Бренд (id)') {
        displayKey = 'Бренд';
        displayValue = getBrandName(value) || value;
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

    return null;
  };

  const renderBasicCharacteristics = () => {
    const basicCategory = categorizedCharacteristics.basic;
    const hasItems = Object.keys(basicCategory.items).length > 0;
    if (!hasItems) return null;

    // Group characteristics into pairs for two columns
    const characteristics = Object.entries(basicCategory.items);
    const characteristicPairs = [];
    
    for (let i = 0; i < characteristics.length; i += 2) {
      const firstChar = characteristics[i];
      const secondChar = characteristics[i + 1];
      
      characteristicPairs.push({
        first: firstChar ? { displayKey: firstChar[0], displayValue: firstChar[1] } : null,
        second: secondChar ? { displayKey: secondChar[0], displayValue: secondChar[1] } : null,
        firstKey: firstChar?.[0],
        secondKey: secondChar?.[0]
      });
    }

    const renderCharacteristicContent = (char: any) => {
      const { displayKey, displayValue } = char;
      
      return (
        <div className="flex justify-between items-start gap-4">
          <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{displayKey}:</span>
          <div className="text-sm text-foreground text-right">
            <span>{String(displayValue).replace(/<[^>]*>/g, '').trim()}</span>
          </div>
        </div>
      );
    };

    return (
      <div className="mb-8">
        <h4 className="text-lg mb-4 text-foreground" style={{ fontFamily: 'Benzin-Medium' }}>
          {basicCategory.title}
        </h4>
        <div className="overflow-hidden">
          <div className="">
            {characteristicPairs.map((pair, index) => (
              <div key={`${pair.firstKey}-${pair.secondKey || 'single'}-${index}`} className="p-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                  {/* First characteristic */}
                  <div className="flex-1">
                    {pair.first && (
                      <div className="py-1">
                        {index === 0 && <div className="border-t border-border mb-1"></div>}
                        {renderCharacteristicContent(pair.first)}
                        <div className="mt-1 border-b border-border"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Second characteristic */}
                  {pair.second ? (
                    <div className="flex-1">
                      <div className="py-1">
                        {index === 0 && <div className="border-t border-border mb-1"></div>}
                        {renderCharacteristicContent(pair.second)}
                        <div className="mt-1 border-b border-border"></div>
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

  const renderMultimediaCharacteristics = () => {
    const multimediaCategory = categorizedCharacteristics.console;
    const hasItems = Object.keys(multimediaCategory.items).length > 0;
    if (!hasItems) return null;

    const characteristics = Object.entries(multimediaCategory.items);
    const midpoint = Math.ceil(characteristics.length / 2);
    const leftColumn = characteristics.slice(0, midpoint);
    const rightColumn = characteristics.slice(midpoint);

    const renderCharacteristicContent = (key: string, value: string) => {
      return (
        <div className="flex justify-between items-start gap-4 py-1.5">
          <span className="text-sm font-medium text-muted-foreground flex-shrink-0">{key}:</span>
          <div className="text-sm text-foreground text-right">
            <span>{String(value).replace(/<[^>]*>/g, '').trim()}</span>
          </div>
        </div>
      );
    };

    const renderColumn = (columnItems: [string, any][]) => (
      <div className="space-y-0">
        <div className="border-t border-border"></div>
        {columnItems.map(([key, value]) => (
          <div key={key}>
            {renderCharacteristicContent(key, value)}
            <div className="border-b border-border"></div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="mb-8">
        <h4 className="text-lg mb-4 text-foreground" style={{ fontFamily: 'Benzin-Medium' }}>
          {multimediaCategory.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div>{renderColumn(leftColumn)}</div>
          
          {/* Right column */}
          <div>{renderColumn(rightColumn)}</div>
        </div>
      </div>
    );
  };

  const renderThreeColumnSection = () => {
    const pulseControl = categorizedCharacteristics.pulseControl;
    const workingDimensions = categorizedCharacteristics.workingDimensions;
    const packageDimensions = categorizedCharacteristics.packageDimensions;
    
    const hasPulseItems = Object.keys(pulseControl.items).length > 0;
    const hasWorkingItems = Object.keys(workingDimensions.items).length > 0;
    const hasPackageItems = Object.keys(packageDimensions.items).length > 0;
    
    if (!hasPulseItems && !hasWorkingItems && !hasPackageItems) return null;

    const renderMiniTable = (category: any, title: string) => {
      const hasItems = Object.keys(category.items).length > 0;
      if (!hasItems) return null;

      return (
        <div>
          <h4 className="text-lg mb-4 text-foreground" style={{ fontFamily: 'Benzin-Medium' }}>
            {title}
          </h4>
          <div className="space-y-0">
            {Object.entries(category.items).map(([key, value], index) => (
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
        </div>
      );
    };

    return (
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Контроль пульса */}
          {renderMiniTable(pulseControl, 'Контроль пульса')}
          
          {/* Column 2: Габариты в рабочем состоянии */}
          {renderMiniTable(workingDimensions, 'Габариты в рабочем состоянии')}
          
          {/* Column 3: Упаковка */}
          {renderMiniTable(packageDimensions, 'Упаковка')}
        </div>
      </div>
    );
  };

  const renderSecondThreeColumnSection = () => {
    const weight = categorizedCharacteristics.weight;
    const warranty = categorizedCharacteristics.warranty;
    const additionalSpecs = categorizedCharacteristics.additionalSpecs;
    
    const hasWeightItems = Object.keys(weight.items).length > 0;
    const hasWarrantyItems = Object.keys(warranty.items).length > 0;
    const hasAdditionalItems = Object.keys(additionalSpecs.items).length > 0;
    
    if (!hasWeightItems && !hasWarrantyItems && !hasAdditionalItems) return null;

    const renderMiniTable = (category: any, title: string) => {
      const hasItems = Object.keys(category.items).length > 0;
      if (!hasItems) return null;

      return (
        <div>
          <h4 className="text-lg mb-4 text-foreground" style={{ fontFamily: 'Benzin-Medium' }}>
            {title}
          </h4>
          <div className="space-y-0">
            {Object.entries(category.items).map(([key, value], index) => (
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
        </div>
      );
    };

    return (
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Вес */}
          {renderMiniTable(weight, 'Вес')}
          
          {/* Column 2: Гарантия и Сертификация */}
          {renderMiniTable(warranty, 'Гарантия и Сертификация')}
          
          {/* Column 3: Дополнительные характеристики */}
          {renderMiniTable(additionalSpecs, 'Дополнительные характеристики')}
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

    return null;
  };

  return (
    <div className={`space-y-8 font-manrope ${className}`}>
      {/* Основные характеристики */}
      {renderBasicCharacteristics()}
      
      {/* Мультимедиа */}
      {renderMultimediaCharacteristics()}
      
      {/* Габариты в рабочем состоянии */}
      {renderTable(categorizedCharacteristics.dimensions, 'dimensions')}
      
      {/* Консоль */} 
      {productId !== '532' && renderTable(categorizedCharacteristics.console, 'console')}
      
      {/* Three column section: Контроль пульса, Габариты в рабочем состоянии, Упаковка */}
      {renderThreeColumnSection()}
      
      {/* Second three column section: Вес, Гарантия и Сертификация, Дополнительные характеристики */}
      {renderSecondThreeColumnSection()}
      
      {/* Упаковка (старая версия - оставляем для обратной совместимости) */}
      {renderTable(categorizedCharacteristics.packaging, 'packaging')}
      
      {/* Вес (старая версия - оставляем для обратной совместимости) */}
      {renderTable(categorizedCharacteristics.weight, 'weight')}
      
      {/* Гарантия и сертификация (старая версия - оставляем для обратной совместимости) */}
      {renderTable(categorizedCharacteristics.warranty, 'warranty')}
      
      {/* Combined bottom section: Страна производства + Дополнительные характеристики */}
      {renderCombinedBottomSection()}
    </div>
  );
};

export default ProductCharacteristicsTable;