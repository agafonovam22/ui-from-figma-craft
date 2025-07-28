
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
      image: '/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png',
      specs: [
        'Максимальный вес пользователя: 120 кг',
        'Скорость: 1-16 км/ч',
        'Угол наклона: 0-15%',
        'Размер бегового полотна: 42×125 см',
        'Дисплей LCD 5"',
        'Программы тренировок: 12',
        'Складная конструкция',
        'Размеры: 160×70×135 см'
      ]
    },
    {
      id: 2,
      image: '/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png',
      specs: [
        'Максимальный вес пользователя: 110 кг',
        'Система нагружения: магнитная',
        'Уровни нагрузки: 16',
        'Маховик: 6 кг',
        'Дисплей LCD 4"',
        'Программы тренировок: 9',
        'Встроенные динамики',
        'Размеры: 95×55×140 см'
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
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
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
              className="relative flex-shrink-0 w-72"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link 
                to={`/product/${product.id}`}
                className="block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt="Товар"
                  className="w-full h-full object-cover"
                />
              </Link>
              
              {/* Выпадающий блок с характеристиками внизу карточки */}
              {hoveredProduct === product.id && (
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
