import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import CatalogFilters from '@/components/Catalog/CatalogFilters';
import CatalogBanner from '@/components/Catalog/CatalogBanner';
import CatalogControls from '@/components/Catalog/CatalogControls';
import CatalogGrid from '@/components/Catalog/CatalogGrid';
import { useProductSearch, Product } from '@/hooks/useProducts';
import { usePaginatedProducts } from '@/hooks/usePaginatedProducts';
import { useDebounce } from '@/hooks/useDebounce';
import { FilterState } from '@/types/filters';
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
  
  // Состояние фильтров
  const [filters, setFilters] = useState<FilterState>({
    price: {
      min: 0,
      max: 200000,
      ranges: []
    },
    brands: [],
    purposeTypes: [],
    powerRange: {},
    equipmentTypes: []
  });
  
  // Получаем поисковый запрос из URL
  const queryParam = searchParams.get('q') || '';
  
  // Добавляем debounce для поиска (задержка 300мс)
  const debouncedSearchQuery = useDebounce(queryParam, 300);
  
  // Используем оптимизированный хук с пагинацией
  const { 
    products: catalogProducts, 
    isLoading, 
    error, 
    total,
    totalPages,
    currentPage,
    hasNextPage,
    hasPrevPage
  } = usePaginatedProducts(
    pageNumber, 
    12, // items per page
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
      price: { min: 0, max: 200000, ranges: [] },
      brands: [],
      purposeTypes: [],
      powerRange: {},
      equipmentTypes: []
    });
    setPageNumber(1);
  };

  // Применение фильтров к товарам
  const filteredProducts = useMemo(() => {
    let filtered = catalogProducts;

    // Фильтр по цене
    if (filters.price.ranges.length > 0) {
      filtered = filtered.filter(product => {
        return filters.price.ranges.some(range => {
          switch(range) {
            case 'до 500':
              return product.price <= 500;
            case 'до 20000':
              return product.price <= 20000;
            case 'до 50000':
              return product.price <= 50000;
            case 'до 100000':
              return product.price <= 100000;
            default:
              return true;
          }
        });
      });
    } else if (filters.price.min > 0 || filters.price.max < 200000) {
      filtered = filtered.filter(product => 
        product.price >= filters.price.min && product.price <= filters.price.max
      );
    }

    // Фильтр по брендам
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => {
        const brandName = product.characteristics?.['Бренд (id)'] || 
                         product.characteristics?.['Бренд'] || '';
        return filters.brands.some(brand => 
          brandName.toLowerCase().includes(brand.toLowerCase())
        );
      });
    }

    // Фильтр по типу назначения
    if (filters.purposeTypes.length > 0) {
      filtered = filtered.filter(product => {
        const purposeType = product.characteristics?.['Тип назначения'] || '';
        return filters.purposeTypes.some(type => {
          if (type === 'Домашние') {
            return purposeType.includes('Для дома');
          }
          if (type === 'Профессиональные') {
            return purposeType.includes('Для фитнес-клубов');
          }
          return purposeType.includes(type);
        });
      });
    }

    // Фильтр по типу оборудования
    if (filters.equipmentTypes.length > 0) {
      filtered = filtered.filter(product => {
        const equipmentType = product.characteristics?.['Тип оборудования'] || '';
        return filters.equipmentTypes.includes(equipmentType);
      });
    }

    return filtered;
  }, [catalogProducts, filters]);

  // Получение уникальных значений для фильтров из данных
  const filterOptions = useMemo(() => {
    const brands = new Set<string>();
    const equipmentTypes = new Set<string>();
    
    catalogProducts.forEach(product => {
      // Собираем бренды
      const brand = product.characteristics?.['Бренд (id)'] || 
                   product.characteristics?.['Бренд'] || '';
      if (brand) brands.add(brand);
      
      // Собираем типы оборудования
      const equipmentType = product.characteristics?.['Тип оборудования'] || '';
      if (equipmentType) equipmentTypes.add(equipmentType);
    });

    return {
      brands: Array.from(brands),
      equipmentTypes: Array.from(equipmentTypes)
    };
  }, [catalogProducts]);

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

  // Преобразование в формат для отображения
  const catalogItems = useMemo(() => {
    return sortedItems.map(item => ({
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
  }, [sortedItems]);

  // Используем пагинацию из хука
  const handlePageNavigation = (newPage: number) => {
    setPageNumber(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header onSearch={handleSearchQuery} />
      <div className="min-h-screen bg-white">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
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

        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
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
            <div className="flex-1 mt-[94px]">
              <CatalogBanner />
              <CatalogControls 
                sortBy={sortBy} 
                setSortBy={setSortBy}
                onSearch={handleSearchQuery}
                searchQuery={queryParam}
              />
              
              {isLoading ? (
                <div className="text-center py-8">
                  <p>Поиск товаров...</p>
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
                  currentPage={currentPage}
                  onPageChange={handlePageNavigation}
                  hasNextPage={hasNextPage}
                  hasPreviousPage={hasPrevPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </>
  );
};

export default Catalog;