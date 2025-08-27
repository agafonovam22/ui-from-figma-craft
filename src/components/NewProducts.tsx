import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewProductsSkeleton from '@/components/NewProductsSkeleton';
import { useNewProducts } from '@/hooks/useSharedProducts';
import { optimizeImageUrl } from '@/utils/imageOptimization';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface NewProductsProps {
  title?: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ title = "Новинки" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Используем оптимизированный хук
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
      <div className="max-w-[1800px] mx-auto px-[30px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">{title}</h2>
          
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 overflow-x-auto"
        >
          {displayProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin">
            Показать все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

// Простая карточка товара для новинок в стиле десктопной версии
const NewProductCard: React.FC<{ product: any }> = ({ product }) => {
  const { addItem } = useCart();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: (product.gallery_images && product.gallery_images.length > 0) ? 
        optimizeImageUrl(product.gallery_images[0], 200, 200) : '/placeholder.svg',
      is_available: product.is_available || true
    });
  };

  const discount = product.original_price && product.original_price > product.price ? 
    Math.round(((product.original_price - product.price) / product.original_price) * 100) : 0;

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative p-4 flex-1">
          {/* Изображение товара */}
          <div className="relative mb-4 h-40 bg-gray-50 rounded-lg overflow-hidden">
            <img 
              src={optimizeImageUrl((product.gallery_images && product.gallery_images.length > 0) ? 
                product.gallery_images[0] : '/placeholder.svg', 320, 240)} 
              alt={product.name || "Товар"}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            
            {/* Бейдж новинки */}
            <div className="absolute top-2 left-2">
              {product.badge ? (
                <span className={`${
                  product.badge_color === 'green' ? 'bg-green-500' : 
                  product.badge_color === 'red' ? 'bg-red-500' : 
                  product.badge_color === 'blue' ? 'bg-blue-500' : 
                  'bg-green-500'
                } text-white text-xs px-2 py-1 rounded font-medium`}>
                  {product.badge}
                </span>
              ) : (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
                  НОВИНКА
                </span>
              )}
            </div>

            {/* Бейдж скидки */}
            {discount > 0 && (
              <div className="absolute top-2 right-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
                  -{discount}%
                </span>
              </div>
            )}
          </div>

          {/* Информация о товаре */}
          <div className="space-y-2">
            {/* Статус наличия */}
            <div className="flex items-center gap-1">
              {product.in_stock ? (
                <>
                  <span className="text-xs text-green-600 font-medium">В наличии</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </>
              ) : (
                <>
                  <span className="text-xs text-red-600 font-medium">Нет в наличии</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </>
              )}
            </div>

            {/* Название товара */}
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-relaxed min-h-[2.5rem]">
              {product.name}
            </h3>

            {/* Рейтинг */}
            {product.rating && product.rating > 0 && (
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs text-gray-500">
                  {product.rating}/5
                  {product.reviews_count && ` (${product.reviews_count})`}
                </span>
              </div>
            )}

            {/* Цена */}
            <div className="space-y-1">
              {product.original_price && product.original_price > product.price && (
                <div className="text-xs text-gray-400 line-through">
                  {product.original_price.toLocaleString()} ₽
                </div>
              )}
              <div className="text-lg font-bold text-gray-900">
                {product.price.toLocaleString()} ₽
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка покупки */}
        <div className="p-4 pt-0">
          <Button 
            className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white text-sm"
            onClick={handleBuyClick}
          >
            Купить
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default NewProducts;