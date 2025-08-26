import React, { useMemo, useEffect, useState } from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { useQuery } from '@tanstack/react-query';

interface ViewedProductsProps {
  currentProductId?: string;
  currentProductCategoryId?: string;
}

const ViewedProducts: React.FC<ViewedProductsProps> = ({ currentProductId, currentProductCategoryId }) => {
  const [viewedIds, setViewedIds] = useState<string[]>([]);

  // Загружаем просмотренные товары из localStorage при инициализации
  useEffect(() => {
    const stored = localStorage.getItem('viewedProducts');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const ids = parsed.map((item: any) => item.id);
        setViewedIds(ids);
        console.log('🔍 Загружены просмотренные товары:', ids);
      } catch (error) {
        console.warn('Ошибка загрузки просмотренных товаров:', error);
      }
    }
  }, []);

  // Добавляем текущий товар в просмотренные
  useEffect(() => {
    if (currentProductId) {
      const stored = localStorage.getItem('viewedProducts') || '[]';
      try {
        const parsed = JSON.parse(stored);
        // Удаляем если уже есть
        const filtered = parsed.filter((item: any) => item.id !== currentProductId);
        // Добавляем в начало
        const updated = [{ id: currentProductId, timestamp: Date.now() }, ...filtered].slice(0, 10);
        localStorage.setItem('viewedProducts', JSON.stringify(updated));
        
        const ids = updated.map((item: any) => item.id);
        setViewedIds(ids);
        console.log('🔍 Товар добавлен в просмотренные:', currentProductId, 'Всего:', ids);
      } catch (error) {
        console.warn('Ошибка сохранения товара:', error);
      }
    }
  }, [currentProductId]);

  // Получаем все товары
  const { data: allProductsData, isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  // Отфильтровываем товары для отображения
  const displayProducts = useMemo(() => {
    if (!allProductsData?.products) {
      console.log('🔍 Нет данных товаров');
      return [];
    }

    // Исключаем текущий товар из просмотренных
    const viewedToShow = viewedIds.filter(id => id !== currentProductId);
    
    console.log('🔍 Фильтрация товаров:', {
      currentProductId,
      viewedIds,
      viewedToShow,
      totalProducts: allProductsData.products.length
    });

    if (viewedToShow.length > 0) {
      // Показываем просмотренные товары
      const viewedProducts = viewedToShow
        .map(id => allProductsData.products.find((p: any) => p.id.toString() === id))
        .filter(Boolean)
        .slice(0, 5);
      
      if (viewedProducts.length > 0) {
        console.log('🔍 Показываем просмотренные товары:', viewedProducts.length);
        return viewedProducts;
      }
    }

    // Если нет просмотренных, показываем случайные товары (исключая текущий)
    const randomProducts = allProductsData.products
      .filter((product: any) => product.id.toString() !== currentProductId)
      .slice(0, 5);
    
    console.log('🔍 Показываем случайные товары:', randomProducts.length);
    return randomProducts;
  }, [allProductsData?.products, viewedIds, currentProductId]);

  // Определяем заголовок
  const showViewedTitle = viewedIds.length > 1 && displayProducts.some(p => 
    viewedIds.includes(p.id.toString()) && p.id.toString() !== currentProductId
  );

  if (isLoading) {
    return (
      <section className="w-full py-6 bg-white">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">Загрузка...</h2>
          </div>
          <div className="grid grid-cols-5 gap-[10px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (displayProducts.length === 0) {
    console.log('🔍 Нет товаров для отображения');
    return null;
  }

  return (
    <section className="w-full section-spacing bg-white">
      <div className="responsive-container">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">
            {showViewedTitle ? 'Вы смотрели' : 'Похожие товары'}
          </h2>
        </div>
        
        <div className="products-grid">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                original_price: product.original_price,
                gallery_images: product.gallery_images,
                is_available: product.is_available,
                badge: product.badge,
                badge_color: product.badge_color
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewedProducts;