
import React, { useState, useRef } from 'react';
import { optimizeImageUrl } from '@/utils/imageOptimization';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useCart } from '@/contexts/CartContext';
import NewProductsSkeleton from '@/components/NewProductsSkeleton';

interface NewProductsProps {
  title?: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ title = "Новинки" }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  // Используем тот же кэшированный запрос, что и в каталоге
  const { data: allProductsData, isLoading, error } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      console.log('🔄 Загружаем товары для новинок...');
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 30 * 60 * 1000, // 30 минут
  });

  const bitrixProducts = allProductsData?.products || [];

  const handleBuyClick = (e: React.MouseEvent, product: any) => {
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

  // Prioritize CardioPower T40 and T20 treadmills as first two products
  const t40Product = bitrixProducts.find(product => 
    product.name.toLowerCase().includes('cardiopower t40')
  );
  const t20Product = bitrixProducts.find(product => 
    product.name.toLowerCase().includes('cardiopower t20')
  );
  
  const priorityProducts = [t40Product, t20Product].filter(Boolean);
  const otherProducts = bitrixProducts.filter(product => 
    !product.name.toLowerCase().includes('cardiopower t40') &&
    !product.name.toLowerCase().includes('cardiopower t20')
  );
  
  const displayProducts = [
    ...priorityProducts,
    ...otherProducts.slice(0, 5 - priorityProducts.length)
  ].slice(0, 5);

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
          className="grid grid-cols-5 gap-5 mb-6"
        >
          {displayProducts.map((product, index) => (
            <div 
              key={product.id}
              className="relative group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale"
              style={{ height: '440px' }}
              onMouseEnter={() => setHoveredProduct(parseInt(product.id))}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Бейджи */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.badge && (
                  <span className={`${product.badge_color === 'green' ? 'bg-green-500' : product.badge_color === 'red' ? 'bg-red-500' : product.badge_color === 'blue' ? 'bg-blue-500' : 'bg-green-500'} text-white text-xs px-2 py-1 rounded font-semibold`}>
                    {product.badge}
                  </span>
                )}
                {!product.badge && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    НОВИНКА
                  </span>
                )}
              </div>

              {/* Сердечко и сравнение */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                  <svg className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                  <svg className="w-4 h-4 text-gray-600 hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </button>
              </div>

              <Link 
                to={`/product/${product.id}`}
                className="block h-full flex flex-col"
              >
                {/* Изображение товара */}
                <div className="h-60 bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
                   <img 
                     src={optimizeImageUrl((product.gallery_images && product.gallery_images.length > 0) ? product.gallery_images[0] : '/placeholder.svg', 400, 320)} 
                     alt={product.name || "Товар"}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ imageRendering: 'crisp-edges' }}
                    loading="lazy"
                  />
                </div>

                {/* Информация о товаре */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Статус наличия */}
                    {product.is_available && product.in_stock && (
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">В наличии</span>
                      </div>
                    )}

                    {/* Название товара */}
                    <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-2 leading-relaxed">
                      {product.name}
                    </h3>

                    {/* Рейтинг */}
                    {product.rating > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{product.rating}/5</span>
                      </div>
                    )}
                  </div>

                  {/* Цена и кнопка */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {product.original_price && product.original_price > product.price && (
                        <span className="text-sm text-gray-400 line-through">{product.original_price.toLocaleString()} ₽</span>
                      )}
                      <span className="font-bold text-gray-900 text-lg">{product.price.toLocaleString()} ₽</span>
                    </div>
                    <button 
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors hover-scale"
                      onClick={(e) => handleBuyClick(e, product)}
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </Link>
            </div>
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

export default NewProducts;
