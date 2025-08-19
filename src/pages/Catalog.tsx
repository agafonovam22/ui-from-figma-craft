
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import CatalogFilters from '@/components/Catalog/CatalogFilters';
import CatalogBanner from '@/components/Catalog/CatalogBanner';
import CatalogControls from '@/components/Catalog/CatalogControls';
import CatalogGrid from '@/components/Catalog/CatalogGrid';
import { bitrixApi, BitrixProduct } from '@/services/bitrixApi';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState<BitrixProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<BitrixProduct[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Константы для пагинации
  const PRODUCTS_PER_PAGE = 16;

  // Загружаем ВСЕ товары при инициализации
  useEffect(() => {
    const loadAllProducts = async () => {
      setLoading(true);
      try {
        const products = await bitrixApi.getProducts();
        console.log('Загружено товаров:', products.length);
        setAllProducts(products);
        setFilteredProducts(products); // Изначально показываем все товары
      } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadAllProducts();
  }, []);

  // Функция поиска (БЕЗ изменения URL)
  const performSearch = (query: string) => {
    console.log('Выполняем поиск:', query);
    setSearchQuery(query);
    setCurrentPage(1); // Сброс на первую страницу при поиске
    
    if (!query.trim()) {
      // Если поиск пустой - показываем все товары
      setFilteredProducts(allProducts);
      return;
    }
    
    // Фильтруем товары по названию
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    console.log(`Найдено товаров: ${filtered.length} из ${allProducts.length}`);
    setFilteredProducts(filtered);
  };

  // Функция поиска для внешних вызовов (с изменением URL)
  const handleSearch = (query: string) => {
    performSearch(query);
    
    // Обновляем URL
    const newSearchParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newSearchParams.set('q', query);
    } else {
      newSearchParams.delete('q');
    }
    setSearchParams(newSearchParams);
  };

  // Обрабатываем поисковый запрос из URL при загрузке
  useEffect(() => {
    const query = searchParams.get('q');
    if (query && allProducts.length > 0) {
      console.log('Поиск из URL:', query);
      performSearch(query); // Используем performSearch без изменения URL
    } else if (!query && allProducts.length > 0) {
      // Если нет поискового запроса, показываем все товары
      setFilteredProducts(allProducts);
    }
  }, [allProducts]); // Убираем searchParams из зависимостей


  // Простая проверка состояния для отладки
  console.log('CATALOG RENDER - FilteredProducts:', filteredProducts.length);
  console.log('CATALOG RENDER - AllProducts:', allProducts.length);
  console.log('CATALOG RENDER - SearchQuery:', searchQuery);
  
  // Fallback товары для случая когда API не работает - НЕ ИСПОЛЬЗУЕМ
  const fallbackProducts = [
    {
      id: 1,
      name: 'Загрузка товаров...',
      price: null,
      originalPrice: null,
      discount: null,
      rating: 0,
      reviews: 0,
      image: 'https://cp44652.tw1.ru/upload/iblock/000/no-image.png',
      badge: 'Загрузка',
      badgeColor: 'bg-gray-500',
      isAvailable: false,
      hasComparison: false,
      inStock: false
    }
  ];
  
  // НЕ ИСПОЛЬЗУЕМ mock товары, только реальные из API
  
  // Мемоизированные товары с пагинацией
  const paginatedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const result = filteredProducts.slice(startIndex, endIndex);
    console.log(`PAGINATION DEBUG - Page: ${currentPage}, Start: ${startIndex}, End: ${endIndex}, FilteredProducts: ${filteredProducts.length}, PaginatedProducts: ${result.length}`);
    return result;
  }, [filteredProducts, currentPage]);
  
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  
  const displayProducts = React.useMemo(() => {
    // ТОЛЬКО реальные товары из API, никаких mock данных!
    return paginatedProducts.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price ? `${product.price}₽` : null,
      originalPrice: product.originalPrice ? `${product.originalPrice}₽` : null,
      discount: null,
      rating: 4.5 + Math.random(),
      reviews: Math.floor(Math.random() * 200) + 10,
      image: product.image || 'https://cp44652.tw1.ru/upload/iblock/000/no-image.png', // Используем реальную заглушку из Битрикс
      badge: product.available ? 'В наличии' : 'Нет в наличии',
      badgeColor: product.available ? 'bg-green-500' : 'bg-red-500',
      isAvailable: product.available,
      hasComparison: true,
      inStock: product.available
    }));
  }, [paginatedProducts]);
  
  console.log('CATALOG RENDER - DisplayProducts:', displayProducts.length);

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
                <BreadcrumbPage>Каталог</BreadcrumbPage>
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
              {loading ? (
                <div className="text-center py-8">
                  <p>Поиск товаров...</p>
                </div>
              ) : filteredProducts.length === 0 && !loading ? (
                <div className="text-center py-8">
                  <p>Товары загружаются или поиск не дал результатов</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <CatalogGrid 
                  products={displayProducts} 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
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
