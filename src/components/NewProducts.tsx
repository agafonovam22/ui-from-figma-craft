
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewProductsProps {
  title?: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ title = "Новинки" }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const products = [
    {
      id: 1,
      name: 'Беговая дорожка CardioPower T20',
      image: '/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png',
      price: '45 000 ₽',
      oldPrice: '50 000 ₽',
      badge: 'НОВИНКА',
      badgeColor: 'bg-green-500',
      rating: 4.5,
      availability: 'В наличии',
      specs: [
        'Модель: CardioPower T20',
        'Максимальная скорость: 20 км/ч',
        'Мощность двигателя: 2.5 л.с.',
        'Размер бегового полотна: 48×140 см',
        'Угол наклона: 0-12%',
        'Максимальный вес пользователя: 130 кг',
        'Складная конструкция',
        'Цена: 45 000 руб.'
      ]
    },
    {
      id: 2,
      name: 'Беговая дорожка CardioPower T40',
      image: '/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png',
      price: '65 000 ₽',
      oldPrice: '72 000 ₽',
      badge: 'НОВИНКА',
      badgeColor: 'bg-green-500',
      rating: 4.5,
      availability: 'В наличии',
      specs: [
        'Модель: CardioPower T40',
        'Максимальная скорость: 22 км/ч',
        'Мощность двигателя: 3.5 л.с.',
        'Размер бегового полотна: 55×150 см',
        'Угол наклона: 0-15%',
        'Максимальный вес пользователя: 150 кг',
        'Встроенный пульсометр',
        'Цена: 65 000 руб.'
      ]
    },
    {
      id: 3,
      image: '/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png',
      specs: [
        'Максимальный вес пользователя: 100 кг',
        'Система нагружения: воздушная',
        'Длина хода: 54 см',
        'Дисплей LCD 3.5"',
        'Программы тренировок: 6',
        'Складная конструкция',
        'Транспортировочные ролики',
        'Размеры: 210×56×86 см'
      ]
    },
    {
      id: 4,
      image: '/lovable-uploads/4daf7315-525c-4043-a1d0-72dcc05b49bf.png',
      specs: [
        'Максимальный вес пользователя: 130 кг',
        'Длина шага: 40 см',
        'Система нагружения: магнитная',
        'Уровни нагрузки: 20',
        'Дисплей LCD 5"',
        'Программы тренировок: 15',
        'Встроенный пульсометр',
        'Размеры: 170×65×160 см'
      ]
    },
    {
      id: 5,
      image: '/lovable-uploads/225fbdeb-52a8-41c5-8d82-91fda1b8d960.png',
      specs: [
        'Максимальный вес: 150 кг',
        'Углы наклона: 7 позиций',
        'Стойка для штанги в комплекте',
        'Регулируемые упоры',
        'Подушки из экокожи',
        'Стальная рама 50×50 мм',
        'Нескользящие ножки',
        'Размеры: 140×110×45 см'
      ]
    }
  ];

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
          className="flex gap-[10px] mb-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="relative flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden border"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Бейджи */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.badge && (
                  <span className={`${product.badgeColor} text-white text-xs px-2 py-1 rounded font-semibold`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Сердечко и сравнение */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </button>
              </div>

              <Link 
                to={`/product/${product.id}`}
                className="block"
              >
                {/* Изображение товара */}
                <div className="h-48 bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name || "Товар"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Информация о товаре */}
                <div className="p-4">
                  {/* Статус наличия */}
                  {product.availability && (
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">{product.availability}</span>
                    </div>
                  )}

                  {/* Название товара */}
                  {product.name && (
                    <h3 className="font-medium text-[#262631] text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                  )}

                  {/* Рейтинг */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`} 
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

                  {/* Цена */}
                  {product.price && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                        )}
                        <span className="font-bold text-[#262631]">{product.price}</span>
                      </div>
                      <button className="bg-[#F53B49] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#E52B38] transition-colors">
                        Купить
                      </button>
                    </div>
                  )}
                </div>
              </Link>
              
              {/* Выпадающий блок с характеристиками внизу карточки */}
              {hoveredProduct === product.id && product.specs && (
                <div 
                  className="absolute z-50 bg-white rounded-lg shadow-2xl border p-4 w-full left-0 top-full mt-2 animate-fade-in"
                >
                  <h3 className="font-benzin-semibold text-[#262631] mb-3 text-sm">
                    Характеристики товара
                  </h3>
                  <ul className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <li 
                        key={specIndex}
                        className="text-xs text-[#666] flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-[#F53B49] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
