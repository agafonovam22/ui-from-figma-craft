import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewProductsSkeleton from '@/components/NewProductsSkeleton';
import ProductCard from '@/components/shared/ProductCard';
import { useNewProducts } from '@/hooks/useSharedProducts';

interface NewProductsProps {
  title?: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ title = "Новинки" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Используем оптимизированный хук - загружаем 5 товаров, но показываем разное количество через CSS
  const { products: displayProducts, isLoading, error } = useNewProducts(5);

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
    return <NewProductsSkeleton title={title} />;
  }

  if (error) {
    return (
      <section className="w-full py-6 bg-white">
        <div className="max-w-[1800px] mx-auto px-[30px]">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-red-600 mb-2">Ошибка загрузки товаров</p>
              <p className="text-gray-500 text-sm">{error?.message || 'Неизвестная ошибка'}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-[30px] md:px-[20px] lg:px-[30px]">
        <div className="flex items-center justify-between mb-8 md:mb-6 lg:mb-8">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-[#262631] font-benzin-semibold">{title}</h2>
          
          {/* Кнопки прокрутки */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-4 lg:gap-2.5 mb-6"
        >
          {displayProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`${index >= 3 ? 'hidden md:hidden lg:block' : ''}`}
            >
              <ProductCard 
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  original_price: product.original_price,
                  discount_percentage: product.discount_percentage,
                  gallery_images: product.gallery_images,
                  rating: product.rating,
                  reviews_count: product.reviews_count,
                  in_stock: product.in_stock,
                  is_available: product.is_available,
                  quantity: product.quantity,
                  badge: product.badge,
                  badge_color: product.badge_color
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 md:px-6 lg:px-8 py-3 md:py-2 lg:py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin md:text-sm lg:text-base">
            Показать все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;