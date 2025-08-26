import React from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { useNewProducts } from '@/hooks/useSharedProducts';

interface ViewedProductsProps {
  currentProductId?: string;
}

const ViewedProducts: React.FC<ViewedProductsProps> = ({ currentProductId }) => {
  // Используем тот же хук для получения товаров, но фильтруем текущий товар
  const { products: allProducts, isLoading, error } = useNewProducts(6);
  
  // Фильтруем текущий товар из списка и берем ровно 5 товаров
  const displayProducts = allProducts.filter(product => 
    product.id.toString() !== currentProductId
  ).slice(0, 5);

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

  if (error || displayProducts.length === 0) {
    return null; // Не показываем блок если нет товаров или ошибка
  }

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">Вы смотрели</h2>
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