
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
  const [products, setProducts] = useState<BitrixProduct[]>([]);
  const [loading, setLoading] = useState(false);

  // Инициализация поискового запроса из URL
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Fallback products for demo
  const fallbackProducts = [
    {
      id: 1,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610₽',
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 124,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Новинка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: null,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviews: 89,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Хит продаж',
      badgeColor: 'bg-orange-500',
      isAvailable: false,
      hasComparison: true,
      inStock: false
    },
    {
      id: 3,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610₽',
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviews: 67,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610₽',
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 156,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    }
  ];

  const allProducts = Array(16).fill(null).map((_, index) => ({
    ...fallbackProducts[index % 4],
    id: index + 1
  }));

  // Функция поиска товаров
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setLoading(true);
    
    try {
      if (query.trim()) {
        console.log('Searching for:', query);
        const searchResults = await bitrixApi.searchProducts(query);
        console.log('Search results received:', searchResults);
        console.log('Number of results:', searchResults.length);
        if (searchResults.length > 0) {
          console.log('First result:', searchResults[0]);
        }
        setProducts(searchResults);
        console.log('Products state updated with:', searchResults.length, 'products');
        console.log('State products after update:', searchResults.map(p => p.name).slice(0, 5));
        
        // Обновляем URL с поисковым запросом только если он отличается
        const currentQuery = searchParams.get('q');
        if (currentQuery !== query) {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set('q', query);
          setSearchParams(newSearchParams);
        }
      } else {
        // Если запрос пустой, загружаем все товары
        const allBitrixProducts = await bitrixApi.getProducts();
        setProducts(allBitrixProducts);
        
        // Убираем параметр поиска из URL только если он есть
        if (searchParams.has('q')) {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.delete('q');
          setSearchParams(newSearchParams);
        }
      }
    } catch (error) {
      console.error('Search error:', error);
      // В случае ошибки показываем пустой массив
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Загружаем товары при первом рендере или изменении URL
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    } else {
      // Загружаем все товары если нет поискового запроса
      const loadProducts = async () => {
        console.log('useEffect: Loading all products...');
        setLoading(true);
        try {
          const allBitrixProducts = await bitrixApi.getProducts();
          console.log('useEffect: Loaded products:', allBitrixProducts.length);
          setProducts(allBitrixProducts);
          console.log('useEffect: Products state updated');
        } catch (error) {
          console.error('useEffect: Error loading products:', error);
          setProducts([]);
        } finally {
          setLoading(false);
        }
      };
      loadProducts();
    }
  }, [searchParams]);

  // Простая проверка состояния для отладки
  console.log('CATALOG RENDER - Products:', products.length);
  console.log('CATALOG RENDER - SearchQuery:', searchQuery);
  
  const displayProducts = products.length > 0 ? products.map(product => ({
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
  })) : (!searchQuery ? allProducts : []);
  
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
              ) : searchQuery && products.length === 0 ? (
                <div className="text-center py-8">
                  <p>По запросу "{searchQuery}" ничего не найдено</p>
                  <p className="text-gray-500 mt-2">Попробуйте изменить поисковый запрос</p>
                </div>
              ) : (
                <CatalogGrid 
                  products={displayProducts} 
                  bitrixUrl="https://cp44652.tw1.ru/catalog.php"
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
