
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');

  const homeProducts = [
    {
      id: 1,
      image: '/lovable-uploads/adc295d0-3df0-4921-bf2d-590bbe41296d.png',
      category: 'treadmill'
    },
    {
      id: 2,
      image: '/lovable-uploads/052844f7-bb47-4b45-ba40-d4123336188f.png',
      category: 'bike'
    },
    {
      id: 3,
      image: '/lovable-uploads/465cd1ff-17d9-433c-834d-3c4eb1b0607c.png',
      category: 'rowing'
    },
    {
      id: 4,
      image: '/lovable-uploads/c493cd4e-d0cd-4df5-b2bf-f6a4ae3dc165.png',
      category: 'strength'
    },
    {
      id: 5,
      image: '/lovable-uploads/efbda2a7-32c3-4183-aee8-179088031eb1.png',
      category: 'inversion'
    },
    {
      id: 6,
      image: '/lovable-uploads/80aa55be-947f-4d32-b001-8d28a6b48d11.png',
      category: 'accessories'
    },
    {
      id: 7,
      image: '/lovable-uploads/ba5d833b-7740-4da6-a952-ebefe2bf10ef.png',
      category: 'elliptical'
    },
    {
      id: 8,
      image: '/lovable-uploads/744c0c6f-bb19-4939-82f1-cf7f5c03f909.png',
      category: 'stepper'
    },
    {
      id: 9,
      image: '/lovable-uploads/842da711-ef80-457f-b98c-1dfaa642526b.png',
      category: 'abs'
    },
    {
      id: 10,
      image: '/lovable-uploads/1750d2c2-52ec-4fb6-8d57-e1787f527e83.png',
      category: 'bars'
    },
    {
      id: 11,
      image: '/lovable-uploads/2384c4ae-190f-4278-aaf8-daaa6e67e846.png',
      category: 'skiing'
    }
  ];

  const fitnessProducts = [
    {
      id: 13,
      image: '/lovable-uploads/adc295d0-3df0-4921-bf2d-590bbe41296d.png',
      category: 'treadmill-pro'
    },
    {
      id: 14,
      image: '/lovable-uploads/c493cd4e-d0cd-4df5-b2bf-f6a4ae3dc165.png',
      category: 'multistation'
    },
    {
      id: 15,
      image: '/lovable-uploads/052844f7-bb47-4b45-ba40-d4123336188f.png',
      category: 'bike-commercial'
    },
    {
      id: 16,
      image: '/lovable-uploads/c493cd4e-d0cd-4df5-b2bf-f6a4ae3dc165.png',
      category: 'power-rack'
    },
    {
      id: 17,
      image: '/lovable-uploads/ba5d833b-7740-4da6-a952-ebefe2bf10ef.png',
      category: 'cardio-zone'
    },
    {
      id: 18,
      image: '/lovable-uploads/465cd1ff-17d9-433c-834d-3c4eb1b0607c.png',
      category: 'functional'
    },
    {
      id: 19,
      image: '/lovable-uploads/ba5d833b-7740-4da6-a952-ebefe2bf10ef.png',
      category: 'elliptical-pro'
    },
    {
      id: 20,
      image: '/lovable-uploads/efbda2a7-32c3-4183-aee8-179088031eb1.png',
      category: 'rehabilitation'
    },
    {
      id: 21,
      image: '/lovable-uploads/465cd1ff-17d9-433c-834d-3c4eb1b0607c.png',
      category: 'trx'
    },
    {
      id: 22,
      image: '/lovable-uploads/465cd1ff-17d9-433c-834d-3c4eb1b0607c.png',
      category: 'rowing-pro'
    },
    {
      id: 23,
      image: '/lovable-uploads/744c0c6f-bb19-4939-82f1-cf7f5c03f909.png',
      category: 'crossfit'
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
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
        
        {/* Второй ряд - 5 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {currentProducts.slice(6, 11).map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </Link>
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
