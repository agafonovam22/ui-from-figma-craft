
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');

  const homeProducts = [
    {
      id: 1,
      title: 'Беговые дорожки',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png',
      category: 'treadmill'
    },
    {
      id: 2,
      title: 'Велотренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png',
      category: 'bike'
    },
    {
      id: 3,
      title: 'Гребные тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      category: 'rowing'
    },
    {
      id: 4,
      title: 'Силовые тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'strength'
    },
    {
      id: 5,
      title: 'Инверсионные столы',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      category: 'inversion'
    },
    {
      id: 6,
      title: 'Аксессуары для дома',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      category: 'accessories'
    },
    {
      id: 7,
      title: 'Эллиптические тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png',
      category: 'elliptical'
    },
    {
      id: 8,
      title: 'Степперы',
      price: 'от 19 990 ₽',
      image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png',
      category: 'stepper'
    },
    {
      id: 9,
      title: 'Тренажеры для пресса',
      price: 'от 15 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'abs'
    },
    {
      id: 10,
      title: 'Турники и брусья',
      price: 'от 9 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'bars'
    },
    {
      id: 11,
      title: 'Массажеры',
      price: 'от 12 990 ₽',
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      category: 'massage'
    },
    {
      id: 12,
      title: 'Коврики и маты',
      price: 'от 2 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      category: 'mats'
    }
  ];

  const fitnessProducts = [
    {
      id: 13,
      title: 'Профессиональные беговые дорожки',
      price: 'от 89 990 ₽',
      image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png',
      category: 'treadmill-pro'
    },
    {
      id: 14,
      title: 'Мультистанции',
      price: 'от 159 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'multistation'
    },
    {
      id: 15,
      title: 'Коммерческие велотренажеры',
      price: 'от 79 990 ₽',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png',
      category: 'bike-commercial'
    },
    {
      id: 16,
      title: 'Силовые рамы',
      price: 'от 129 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'power-rack'
    },
    {
      id: 17,
      title: 'Кардио зона',
      price: 'от 199 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png',
      category: 'cardio-zone'
    },
    {
      id: 18,
      title: 'Функциональные тренажеры',
      price: 'от 89 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      category: 'functional'
    },
    {
      id: 19,
      title: 'Профессиональные эллипсоиды',
      price: 'от 119 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png',
      category: 'elliptical-pro'
    },
    {
      id: 20,
      title: 'Тренажеры для реабилитации',
      price: 'от 99 990 ₽',
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      category: 'rehabilitation'
    },
    {
      id: 21,
      title: 'Системы TRX',
      price: 'от 39 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      category: 'trx'
    },
    {
      id: 22,
      title: 'Профессиональные гребные',
      price: 'от 149 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      category: 'rowing-pro'
    },
    {
      id: 23,
      title: 'Кроссфит оборудование',
      price: 'от 69 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'crossfit'
    },
    {
      id: 24,
      title: 'Аксессуары для фитнес-клуба',
      price: 'от 9 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      category: 'accessories-gym'
    }
  ];

  const currentProducts = activeFilter === 'home' ? homeProducts : fitnessProducts;

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <div className="flex items-center gap-8 mb-12">
          <h2 className="text-2xl font-bold text-[#262631]">
            Каталог продукции
          </h2>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveFilter('home')}
              className={`text-lg font-medium transition-colors relative ${
                activeFilter === 'home'
                  ? 'text-[#F53B49]'
                  : 'text-gray-500 hover:text-[#262631]'
              }`}
            >
              Тренажеры для дома
              {activeFilter === 'home' && (
                <div className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#F53B49]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveFilter('fitness')}
              className={`text-lg font-medium transition-colors relative ${
                activeFilter === 'fitness'
                  ? 'text-[#F53B49]'
                  : 'text-gray-500 hover:text-[#262631]'
              }`}
            >
              Фитнес клуба
              {activeFilter === 'fitness' && (
                <div className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#F53B49]"></div>
              )}
            </button>
          </div>
        </div>
        
        {/* Первый ряд - 6 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {currentProducts.slice(0, 6).map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square mb-2 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-[#262631] mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.price}</p>
              {(product.id === 1 || product.id === 13) && (
                <button className="bg-[#262631] text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
                  Перейти →
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Второй ряд - 6 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {currentProducts.slice(6, 12).map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square mb-2 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-[#262631] mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.price}</p>
            </div>
          ))}
        </div>
        
        {/* Кнопка "Показать все" */}
        <div className="mt-8 flex justify-start">
          <Link 
            to={activeFilter === 'home' ? '/home-fitness-equipment' : '/gym-equipment'}
            className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
