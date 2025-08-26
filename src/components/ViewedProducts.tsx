import React, { useMemo } from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { useViewedProducts } from '@/hooks/useViewedProducts';
import { useQuery } from '@tanstack/react-query';

interface ViewedProductsProps {
  currentProductId?: string;
  currentProductCategoryId?: string;
}

const ViewedProducts: React.FC<ViewedProductsProps> = ({ currentProductId, currentProductCategoryId }) => {
  const { getViewedProductIds } = useViewedProducts();
  
  // Получаем ID просмотренных товаров (исключая текущий)
  const viewedProductIds = useMemo(() => {
    return getViewedProductIds(currentProductId);
  }, [getViewedProductIds, currentProductId]);
  
  // Получаем все товары для фильтрации просмотренных
  const { data: allProductsData, isLoading: isAllProductsLoading } = useQuery({
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

  // Фильтруем просмотренные товары и товары из категории  
  const displayProducts = useMemo(() => {
    if (!allProductsData?.products) return [];
    
    // Сначала пытаемся найти просмотренные товары
    if (viewedProductIds.length > 0) {
      const viewedProducts = viewedProductIds
        .map(id => allProductsData.products.find((p: any) => p.id.toString() === id))
        .filter(Boolean)
        .slice(0, 5);
      
      if (viewedProducts.length > 0) {
        return viewedProducts;
      }
    }
    
    // Если нет просмотренных товаров, показываем товары из той же категории
    if (currentProductCategoryId) {
      const categoryProducts = allProductsData.products
        .filter((product: any) => 
          product.characteristics?.["Тип оборудования"] === currentProductCategoryId && 
          product.id.toString() !== currentProductId
        )
        .slice(0, 5);
      
      if (categoryProducts.length > 0) {
        return categoryProducts;
      }
    }
    
    // Если нет категории, показываем случайные товары (исключая текущий)
    return allProductsData.products
      .filter((product: any) => product.id.toString() !== currentProductId)
      .slice(0, 5);
  }, [allProductsData?.products, viewedProductIds, currentProductCategoryId, currentProductId]);

  const isLoading = isAllProductsLoading;
  const showViewedTitle = viewedProductIds.length > 0 && displayProducts.some(p => 
    viewedProductIds.includes(p.id.toString())
  );

  if (isLoading) {
    return (
      <section className="w-full py-6 bg-white">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">Вы смотрели</h2>
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
    return null; // Не показываем блок если нет товаров
  }

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">
            {showViewedTitle ? 'Вы смотрели' : 'Похожие товары'}
          </h2>
        </div>
        
        <div className="grid grid-cols-5 gap-[10px]">
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