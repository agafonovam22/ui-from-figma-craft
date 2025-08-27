import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import CatalogFilters from '@/components/Catalog/CatalogFilters';
import CatalogBanner from '@/components/Catalog/CatalogBanner';
import CatalogControls from '@/components/Catalog/CatalogControls';
import CatalogGrid from '@/components/Catalog/CatalogGrid';
import { useSharedProducts } from '@/hooks/useSharedProducts';
import { usePaginatedProducts } from '@/hooks/usePaginatedProducts';
import { useDebounce } from '@/hooks/useDebounce';
import { FilterState } from '@/types/filters';
// Не используем API для брендов - используем фиксированный список
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('popular');
  const [pageNumber, setPageNumber] = useState(1);
  // Фиксированный список брендов с маппингом к ID
  const BRAND_NAME_TO_ID: Record<string, string[]> = {
    'SMITH': ['38771', '38777'],
    'TRUE': ['38761'],
    'Bowflex': ['38753'],
    'Schwinn': ['38770'],
    'Peach Builder': ['50252'],
    'Sole': ['38767'],
    'Variosling': ['38766'],
    'CardioPower': ['38752'],
    'Slide&Fit': ['38815'],
    'cardiopower-pro': ['38769'],
    'SCHOLLE': ['38762'],
    'INSPIRE': ['49255'],
    'hyfit': ['49256'],
    'maxgym': ['49654'],
    'MAXFIT': [],
    'Proski': ['38782'],
    'Meridien': ['38765'],
    'kernel': ['38764'],
    'CENTR': ['49278'],
    'Sintesi': [],
    'VISBODY': [],
    'Nautilus': ['38768'],
    'Octane': ['38772'],
    'Gym80': ['38773'],
    'Eclipse': ['38775'],
    'LiveUp': ['38781']
  };
  
  const ALL_BRAND_NAMES = Object.keys(BRAND_NAME_TO_ID);
  
  // Состояние фильтров
  const [filters, setFilters] = useState<FilterState>({
    price: {
      min: 0,
      max: 1500000,
      ranges: []
    },
    brands: [],
    purposeTypes: [],
    powerRange: {},
    equipmentTypes: []
  });
  
  // Получаем поисковый запрос из URL
  const queryParam = searchParams.get('q') || '';
  
  // Получаем категорию из URL
  const categoryParam = searchParams.get('category') || '';
  
  // Получаем тип назначения из URL
  const purposeParam = searchParams.get('purpose') || '';
  
  // Добавляем debounce для поиска (задержка 300мс)
  const debouncedSearchQuery = useDebounce(queryParam, 300);
  
  // Маппинг категорий из URL к типам оборудования в API
  const CATEGORY_TO_EQUIPMENT_TYPE: Record<string, string[]> = {
    'treadmills': ['Беговая дорожка'],
    'elliptical': ['Эллиптический тренажер'],
    'exercise-bikes': ['Велотренажер'],
    'rowing-machines': ['Гребной тренажер'],
    'strength-equipment': ['Силовой тренажер', 'Мультистанция'],
    'massage-equipment': ['Массажное кресло', 'Массажер'],
    'inversion-tables': ['Инверсионный стол'],
    'trampolines': ['Батут'],
    'free-weights': ['Гантели', 'Штанга', 'Диски'],
    'home-accessories': ['Аксессуары'],
    'table-tennis': ['Теннисный стол'],
    'ski-simulators': ['Горнолыжный тренажер'],
    'outdoor-sports': ['Уличный тренажер'],
    'game-tables': ['Игровой стол'],
    'equipment-accessories': ['Аксессуары к тренажерам']
  };
  
  // Ключевые слова для поиска (fallback когда нет точного типа оборудования)
  const CATEGORY_KEYWORDS: Record<string, string[]> = {
    'treadmills': ['беговая', 'дорожка', 'treadmill'],
    'elliptical': ['эллиптический', 'эллипс', 'elliptical'],
    'exercise-bikes': ['велотренажер', 'велосипед', 'bike', 'cycling'],
    'rowing-machines': ['гребной', 'rowing'],
    'strength-equipment': ['силовой', 'тренажер', 'strength'],
    'massage-equipment': ['массажное', 'массажер', 'massage'],
    'inversion-tables': ['инверсионный', 'inversion'],
    'trampolines': ['батут', 'trampoline'],
    'free-weights': ['гантели', 'штанга', 'диски', 'weights'],
    'home-accessories': ['аксессуары'],
    'table-tennis': ['теннис', 'tennis'],
    'ski-simulators': ['горнолыжный', 'ski'],
    'outdoor-sports': ['уличный', 'outdoor'],
    'game-tables': ['игровой стол', 'game'],
    'equipment-accessories': ['аксессуары']
  };
  
  // Автоматическая установка фильтра по категории из URL
  React.useEffect(() => {
    if (categoryParam && CATEGORY_TO_EQUIPMENT_TYPE[categoryParam]) {
      const equipmentTypes = CATEGORY_TO_EQUIPMENT_TYPE[categoryParam];
      setFilters(prev => ({
        ...prev,
        equipmentTypes: equipmentTypes
      }));
    } else if (!categoryParam) {
      // Если категория убрана из URL, сбрасываем фильтр по типу оборудования
      setFilters(prev => ({
        ...prev,
        equipmentTypes: []
      }));
    }
  }, [categoryParam]);

  // Автоматическая установка фильтра по назначению из URL
  React.useEffect(() => {
    if (purposeParam) {
      let purposeType = '';
      if (purposeParam === 'home') {
        purposeType = 'Домашние';
      } else if (purposeParam === 'fitness') {
        purposeType = 'Профессиональные';
      }
      
      if (purposeType) {
        setFilters(prev => ({
          ...prev,
          purposeTypes: [purposeType]
        }));
      }
    } else {
      // Если тип назначения убран из URL, сбрасываем фильтр
      setFilters(prev => ({
        ...prev,
        purposeTypes: []
      }));
    }
  }, [purposeParam]);
  
  // Убираем useEffect - используем фиксированный список
  
  // Используем оптимизированную загрузку
  const { 
    products: allCatalogProducts, 
    isLoading, 
    error, 
    total
  } = usePaginatedProducts(
    1, 
    1000, // Загружаем все товары
    debouncedSearchQuery
  );

  // Функция поиска с обновлением URL
  const handleSearchQuery = (searchTerm: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      newParams.set('q', searchTerm);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
    setPageNumber(1); // Сброс на первую страницу
  };

  // Функции обработки фильтров
  const handlePriceChange = (priceFilter: FilterState['price']) => {
    setFilters(prev => ({ ...prev, price: priceFilter }));
  };

  const handleBrandsChange = (brands: string[]) => {
    setFilters(prev => ({ ...prev, brands }));
  };

  const handlePurposeTypesChange = (purposeTypes: string[]) => {
    setFilters(prev => ({ ...prev, purposeTypes }));
  };

  const handlePowerRangeChange = (powerRange: FilterState['powerRange']) => {
    setFilters(prev => ({ ...prev, powerRange }));
  };

  const handleEquipmentTypesChange = (equipmentTypes: string[]) => {
    setFilters(prev => ({ ...prev, equipmentTypes }));
  };

  const handleApplyFilters = () => {
    setPageNumber(1); // Сброс на первую страницу при применении фильтров
  };

  const handleResetFilters = () => {
    setFilters({
      price: { min: 0, max: 1500000, ranges: [] },
      brands: [],
      purposeTypes: [],
      powerRange: {},
      equipmentTypes: []
    });
    setPageNumber(1);
  };

  // Применение фильтров к товарам (оптимизированная версия)
  const filteredProducts = useMemo(() => {
    let filtered = allCatalogProducts;

    // Фильтр по цене
    if (filters.price.ranges.length > 0) {
      filtered = filtered.filter(product => {
        return filters.price.ranges.some(range => {
          switch(range) {
            case 'до 500': return product.price <= 500;
            case 'до 20000': return product.price <= 20000;
            case 'до 50000': return product.price <= 50000;
            case 'до 100000': return product.price <= 100000;
            default: return true;
          }
        });
      });
    } else if (filters.price.min > 0 || filters.price.max < 1500000) {
      filtered = filtered.filter(product => 
        product.price >= filters.price.min && product.price <= filters.price.max
      );
    }

    // Фильтр по брендам
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => {
        const productBrandId = product.characteristics?.['Бренд (id)'] || '';
        return filters.brands.some(brandName => {
          const brandIds = BRAND_NAME_TO_ID[brandName] || [];
          return brandIds.includes(productBrandId);
        });
      });
    }

    // Фильтр по типу назначения
    if (filters.purposeTypes.length > 0) {
      filtered = filtered.filter(product => {
        const purposeType = product.characteristics?.['Тип назначения'] || '';
        return filters.purposeTypes.some(type => {
          if (type === 'Домашние') return purposeType.includes('Для дома');
          if (type === 'Профессиональные') return purposeType.includes('Для фитнес-клубов');
          if (type === 'Полупрофессиональные') return purposeType.includes('Полупрофессиональное');
          if (type === 'Реабилитация') return purposeType.includes('Реабилитация');
          return purposeType.includes(type);
        });
      });
    }

    // Фильтр по типу оборудования или категории
    if (filters.equipmentTypes.length > 0) {
      // Проверяем если это категория из URL
      if (categoryParam && CATEGORY_KEYWORDS[categoryParam]) {
        const keywords = CATEGORY_KEYWORDS[categoryParam];
        filtered = filtered.filter(product => {
          // Сначала проверяем по точному типу оборудования
          const equipmentType = product.characteristics?.['Тип оборудования'] || '';
          if (filters.equipmentTypes.includes(equipmentType)) {
            return true;
          }
          
          // Если точного типа нет, ищем по ключевым словам в названии
          const productNameLower = product.name.toLowerCase();
          return keywords.some(keyword => productNameLower.includes(keyword.toLowerCase()));
        });
      } else {
        // Обычная фильтрация по типу оборудования
        filtered = filtered.filter(product => {
          const equipmentType = product.characteristics?.['Тип оборудования'] || '';
          return filters.equipmentTypes.includes(equipmentType);
        });
      }
    }

    // Фильтр по мощности двигателя
    if (filters.powerRange.min !== undefined || filters.powerRange.max !== undefined) {
      filtered = filtered.filter(product => {
        const powerStr = product.characteristics?.['Мощность двигателя'] || '';
        if (!powerStr) return false;
        
        // Извлекаем числовое значение из строки (например, "2.5 л.с." или "1.8 кВт")
        const powerMatch = powerStr.match(/[\d.,]+/);
        if (!powerMatch) return false;
        
        const power = parseFloat(powerMatch[0].replace(',', '.'));
        
        if (filters.powerRange.min !== undefined && power < filters.powerRange.min) {
          return false;
        }
        if (filters.powerRange.max !== undefined && power > filters.powerRange.max) {
          return false;
        }
        
        return true;
      });
    }

    return filtered;
  }, [allCatalogProducts, filters]);

  // Получение уникальных значений для фильтров из данных
  const filterOptions = useMemo(() => {
    const equipmentTypes = new Set<string>();
    
    allCatalogProducts.forEach(product => {
      const equipmentType = product.characteristics?.['Тип оборудования'] || '';
      if (equipmentType) equipmentTypes.add(equipmentType);
    });

    return {
      brands: ALL_BRAND_NAMES,
      equipmentTypes: Array.from(equipmentTypes)
    };
  }, [allCatalogProducts]);

  // Сортировка товаров
  const sortedItems = useMemo(() => {
    const items = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        return items.sort((a, b) => a.price - b.price);
      case 'price-high':
        return items.sort((a, b) => b.price - a.price);
      case 'name':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return items;
    }
  }, [filteredProducts, sortBy]);

  // Пагинация отфильтрованных товаров (16 карточек на странице)
  const paginatedProducts = useMemo(() => {
    const itemsPerPage = 16;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedItems.slice(startIndex, endIndex);
  }, [sortedItems, pageNumber]);
  
  const totalPages = Math.ceil(sortedItems.length / 16);
  const hasNextPage = pageNumber < totalPages;
  const hasPrevPage = pageNumber > 1;

  // Преобразование в формат для отображения (используем пагинированные товары)
  const catalogItems = useMemo(() => {
    return paginatedProducts.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      original_price: item.original_price,
      discount_percentage: item.discount_percentage,
      gallery_images: item.gallery_images,
      rating: item.rating,
      reviews_count: item.reviews_count,
      in_stock: item.in_stock,
      is_available: item.is_available,
      quantity: item.quantity,
      badge: item.is_available ? 'В наличии' : 'Нет в наличии',
      badge_color: item.is_available ? 'green' : 'red'
    }));
  }, [paginatedProducts]);

  // Используем пагинацию из хука
  const handlePageNavigation = (newPage: number) => {
    setPageNumber(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header onSearch={handleSearchQuery} />
      <div className="min-h-screen bg-white">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] tablet-container mobile-container py-2">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {queryParam ? `Поиск: ${queryParam}` : 'Каталог'}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] tablet-container mobile-container py-2">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <CatalogFilters
              filters={filters}
              filterOptions={filterOptions}
              onPriceChange={handlePriceChange}
              onBrandsChange={handleBrandsChange}
              onPurposeTypesChange={handlePurposeTypesChange}
              onPowerRangeChange={handlePowerRangeChange}
              onEquipmentTypesChange={handleEquipmentTypesChange}
              onApplyFilters={handleApplyFilters}
              onResetFilters={handleResetFilters}
            />

            {/* Main Content */}
            <div className="flex-1">
              <CatalogBanner />
              <div className="tablet-catalog-controls">
                <CatalogControls 
                  sortBy={sortBy} 
                  setSortBy={setSortBy}
                  onSearch={handleSearchQuery}
                  searchQuery={queryParam}
                />
              </div>
              
              {isLoading ? (
                <div className="space-y-6">
                  {/* Skeleton для товаров */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div key={index} className="bg-white rounded-lg border p-4 animate-pulse">
                        <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : queryParam && catalogItems.length === 0 ? (
                <div className="text-center py-8">
                  <p>По запросу "{queryParam}" ничего не найдено</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос или фильтры</p>
                </div>
              ) : catalogItems.length === 0 ? (
                <div className="text-center py-8">
                  <p>Товары не найдены</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить фильтры</p>
                </div>
              ) : (
                <CatalogGrid 
                  products={catalogItems}
                  totalPages={totalPages}
                  currentPage={pageNumber}
                  onPageChange={handlePageNavigation}
                  hasNextPage={hasNextPage}
                  hasPreviousPage={hasPrevPage}
                  onLoadMore={() => handlePageNavigation(pageNumber + 1)}
                  showLoadMore={hasNextPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="w-full mb-[60px]">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] tablet-container">
          <div className="mt-[100px] tablet-section">
            <div className="w-full h-px bg-gray-300 mb-[60px]"></div>
            <div>
              <h2 className="text-2xl font-bold mb-6 tablet-heading-lg">Блок под сео текст</h2>
              <div className="grid grid-cols-2 tablet-grid-2 gap-8 text-sm text-gray-600 leading-relaxed tablet-text-sm">
                <div>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablet-section">
        <EmailSubscription />
      </div>
      <div className="h-[70px]"></div>
      <Footer />
    </>
  );
};

export default Catalog;