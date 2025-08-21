import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import CatalogFilters from '@/components/Catalog/CatalogFilters';
import CatalogBanner from '@/components/Catalog/CatalogBanner';
import CatalogControls from '@/components/Catalog/CatalogControls';
import CatalogGrid from '@/components/Catalog/CatalogGrid';
import { useProductSearch } from '@/hooks/useProducts';
import { usePagination } from '@/hooks/usePagination';
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
  
  // Получаем поисковый запрос из URL
  const queryParam = searchParams.get('q') || '';
  
  // Используем хук для поиска товаров
  const { data: allProducts = [], isLoading, error } = useProductSearch(queryParam);

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

  // Сортировка товаров
  const sortedItems = useMemo(() => {
    const items = [...allProducts];
    
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
  }, [allProducts, sortBy]);

  // Преобразование в формат для отображения
  const catalogItems = useMemo(() => {
    return sortedItems.map(item => ({
      id: item.id,
      name: item.name,
      price: `${item.price}₽`,
      originalPrice: item.original_price ? `${item.original_price}₽` : null,
      discount: item.discount_percentage > 0 ? `${item.discount_percentage}%` : null,
      rating: item.rating || 4.5,
      reviews: item.reviews_count || 0,
      image: item.image_url,
      badge: item.is_available ? 'В наличии' : 'Нет в наличии',
      badgeColor: item.is_available ? 'bg-green-500' : 'bg-red-500',
      isAvailable: item.is_available,
      hasComparison: true,
      inStock: item.in_stock
    }));
  }, [sortedItems]);

  // Пагинация
  const itemsPerPage = 12;
  const paginationResult = usePagination({ 
    data: catalogItems, 
    itemsPerPage, 
    currentPage: pageNumber 
  });

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
            <CatalogFilters />

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
                  <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <CatalogGrid 
                  products={paginationResult.paginatedData}
                  totalPages={paginationResult.totalPages}
                  currentPage={pageNumber}
                  onPageChange={handlePageNavigation}
                  hasNextPage={paginationResult.hasNextPage}
                  hasPreviousPage={paginationResult.hasPreviousPage}
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