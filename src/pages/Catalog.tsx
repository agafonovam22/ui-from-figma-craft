
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
  
  // Fallback товары для случая когда API не работает
  const fallbackProducts = [
    {
      id: 1,
      name: 'Беговая дорожка CardioPower TR150',
      price: '115900',
      originalPrice: null,
      discount: null,
      rating: 4.53,
      reviews: 262,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'В наличии',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true,
      available: true
    },
    {
      id: 2,
      name: 'Беговая дорожка CardioPower T50',
      price: '76900',
      originalPrice: null,
      discount: null,
      rating: 4.71,
      reviews: 34,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'В наличии',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true,
      available: true
    },
    {
      id: 3,
      name: 'Беговая дорожка Schwinn 510T',
      price: '89900',
      originalPrice: null,
      discount: null,
      rating: 4.71,
      reviews: 62,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'В наличии',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true,
      available: true
    },
    {
      id: 4,
      name: 'Беговая дорожка TRUE Alpine Runner + консоль C455OR',
      price: '1075000',
      originalPrice: null,
      discount: null,
      rating: 5.21,
      reviews: 42,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'В наличии',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true,
      available: true
    }
  ];
  
  const mockProducts = Array(16).fill(null).map((_, index) => ({
    ...fallbackProducts[index % fallbackProducts.length],
    id: index + 1
  }));
  
  // Мемоизированные товары с пагинацией
  const paginatedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);
  
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  
  const displayProducts = React.useMemo(() => {
    // Если есть реальные товары - используем их
    if (paginatedProducts.length > 0) {
      return paginatedProducts.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price ? `${product.price}₽` : null,
        originalPrice: product.originalPrice ? `${product.originalPrice}₽` : null,
        discount: null,
        rating: 4.5 + Math.random(),
        reviews: Math.floor(Math.random() * 200) + 10,
        image: product.image,
        badge: product.available ? 'В наличии' : 'Нет в наличии',
        badgeColor: product.available ? 'bg-green-500' : 'bg-red-500',
        isAvailable: product.available,
        hasComparison: true,
        inStock: product.available
      }));
    }
    
    // Fallback - используем моковые данные с правильной структурой
    return mockProducts.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price ? `${product.price}₽` : null,
      originalPrice: product.originalPrice,
      discount: product.discount,
      rating: product.rating,
      reviews: product.reviews,
      image: product.image,
      badge: product.badge,
      badgeColor: product.badgeColor,
      isAvailable: product.isAvailable,
      hasComparison: product.hasComparison,
      inStock: product.inStock
    }));
  }, [paginatedProducts, mockProducts]);
  
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
              ) : searchQuery && filteredProducts.length === 0 ? (
                <div className="text-center py-8">
                  <p>По запросу "{searchQuery}" ничего не найдено</p>
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
