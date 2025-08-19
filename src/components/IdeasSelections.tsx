
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bitrixApi, BitrixProduct } from '@/services/bitrixApi';

const IdeasSelections: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<BitrixProduct[]>([]);
  const [loading, setLoading] = useState(false);

  // Загружаем реальные товары из Bitrix API
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const bitrixProducts = await bitrixApi.getProducts();
        // Берём первые 4 товара для отображения
        setProducts(bitrixProducts.slice(0, 4));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

  if (loading) {
    return (
      <section className="w-full bg-white py-6">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="text-center py-8">Загрузка товаров...</div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="w-full bg-white py-6">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="text-center py-8">Товары не найдены</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Лучшие предложения</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Ideas Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-[10px] mb-8 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative flex-shrink-0 w-80 rounded-lg overflow-hidden h-[444px] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-benzin text-lg font-normal mb-1">{product.name}</h3>
                <p className="text-sm opacity-90">{product.price} ₽</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-all duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                Перейти <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeasSelections;
