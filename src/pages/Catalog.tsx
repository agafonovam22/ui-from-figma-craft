import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import CatalogFilters from '@/components/Catalog/CatalogFilters';
import CatalogBanner from '@/components/Catalog/CatalogBanner';
import CatalogControls from '@/components/Catalog/CatalogControls';
import CatalogGrid from '@/components/Catalog/CatalogGrid';
import { useProductSearch, Product } from '@/hooks/useProducts';
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
  const [selectedFilters, setSelectedFilters] = useState({
    price: '',
    brand: '',
    type: '',
    power: '',
    features: []
  });

  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Получаем поисковый запрос из URL
  const searchQuery = searchParams.get('q') || '';
  
  // Используем новый хук для поиска
  const { data: products = [], isLoading, error } = useProductSearch(searchQuery);

  // Функция поиска для внешних вызовов (с изменением URL)
  const handleSearch = (query: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newSearchParams.set('q', query);
    } else {
      newSearchParams.delete('q');
    }
    setSearchParams(newSearchParams);
    setCurrentPage(1); // Сбрасываем на первую страницу при поиске
  };

  // Сортировка товаров
  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return sorted;
    }
  }, [products, sortBy]);

  // Преобразование Product в формат для CatalogGrid
  const displayProducts = useMemo(() => {
    return sortedProducts.map(product => ({
      id: product.id,
      name: product.name,
      price: `${product.price}₽`,
      originalPrice: product.original_price ? `${product.original_price}₽` : null,
      discount: product.discount_percentage > 0 ? `${product.discount_percentage}%` : null,
      rating: product.rating || 4.5,
      reviews: product.reviews_count || 0,
      image: product.image_url,
      badge: product.is_available ? 'В наличии' : 'Нет в наличии',
      badgeColor: product.is_available ? 'bg-green-500' : 'bg-red-500',
      isAvailable: product.is_available,
      hasComparison: true,
      inStock: product.in_stock
    }));
  }, [sortedProducts]);

  // Пагинация
  const itemsPerPage = 12;
  const {
    paginatedData,
    totalPages,
    hasNextPage,
    hasPreviousPage
  } = usePagination({ 
    data: displayProducts, 
    itemsPerPage, 
    currentPage 
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Скроллим наверх при смене страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log('CATALOG RENDER - Products:', products.length);
  console.log('CATALOG RENDER - SearchQuery:', searchQuery);

  return (
    <>
      <Header onSearch={handleSearch} />
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
                  {searchQuery ? `Поиск: ${searchQuery}` : 'Каталог'}
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
                onSearch={handleSearch}
                searchQuery={searchQuery}
              />
              
              {isLoading ? (
                <div className="text-center py-8">
                  <p>Поиск товаров...</p>
                </div>
              ) : searchQuery && displayProducts.length === 0 ? (
                <div className="text-center py-8">
                  <p>По запросу "{searchQuery}" ничего не найдено</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <CatalogGrid 
                  products={paginatedData}
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  hasNextPage={hasNextPage}
                  hasPreviousPage={hasPreviousPage}
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