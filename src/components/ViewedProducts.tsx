import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import { useNewProducts } from '@/hooks/useSharedProducts';

interface ViewedProductsProps {
  currentProductId?: string;
}

const ViewedProducts: React.FC<ViewedProductsProps> = ({ currentProductId }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Используем тот же хук для получения товаров, но фильтруем текущий товар
  const { products: allProducts, isLoading, error } = useNewProducts(6);
  
  // Фильтруем текущий товар из списка
  const displayProducts = allProducts.filter(product => 
    product.id.toString() !== currentProductId
  ).slice(0, 5);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section className="w-full py-6 bg-white">
        <div className="max-w-[1800px] mx-auto px-[30px]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">Вы смотрели</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
      <div className="max-w-[1800px] mx-auto px-[30px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">Вы смотрели</h2>
          
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px]">
              <ProductCard
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewedProducts;