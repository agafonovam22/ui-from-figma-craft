import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');

  const homeProducts = [
    {
      id: 1,
      image: '/lovable-uploads/e7893606-f51a-4e53-9c80-ab83d081c16c.png',
      category: 'treadmill'
    },
    {
      id: 2,
      image: '/lovable-uploads/41b47400-6434-4309-9474-38fd8527c0f9.png',
      category: 'bike'
    },
    {
      id: 3,
      image: '/lovable-uploads/7eb18ab6-a47c-4127-a2e4-520345b3a636.png',
      category: 'rowing'
    },
    {
      id: 4,
      image: '/lovable-uploads/9deaa8d7-89aa-4671-b709-82d6af4d5f19.png',
      category: 'strength'
    },
    {
      id: 5,
      image: '/lovable-uploads/dcac2877-3c35-4f7d-8abf-95aacc72562e.png',
      category: 'inversion'
    },
    {
      id: 6,
      image: '/lovable-uploads/34f32079-9172-481c-a342-ebee3d47cd47.png',
      category: 'accessories'
    },
    {
      id: 7,
      image: '/lovable-uploads/ef816493-63e0-456b-9a81-a821e2916f6b.png',
      category: 'elliptical'
    },
    {
      id: 8,
      image: '/lovable-uploads/88c44b8a-27d1-46e8-85f5-3ac95201bf35.png',
      category: 'stepper'
    },
    {
      id: 9,
      image: '/lovable-uploads/54f02e6f-19d4-4fdd-8311-dc574e386bc3.png',
      category: 'abs'
    },
    {
      id: 10,
      image: '/lovable-uploads/e98f3175-2d34-4325-8fdc-246b9abcedeb.png',
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
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-[#262631]">
            Каталог продукции
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveFilter('home')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'home'
                  ? 'bg-[#F53B49] text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Тренажеры для дома
            </button>
            <button
              onClick={() => setActiveFilter('fitness')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'fitness'
                  ? 'bg-[#F53B49] text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Фитнес клуба
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {currentProducts.slice(0, 6).map((product) => (
            <div 
              key={product.id} 
              className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-[300px]"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover object-center"
              />
              <Link 
                to="/product-card"
                className="absolute bottom-4 left-4 bg-[#262631] text-white px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#F53B49] transition-colors"
              >
                от 29 990 ₽
              </Link>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {currentProducts.slice(6, 10).map((product) => (
            <div 
              key={product.id} 
              className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-[300px]"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <Link 
            to="/catalog"
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2 h-[300px]"
          >
            <img 
              src="/lovable-uploads/956cbbc6-fbc2-4dec-a47f-035bf5c9bdad.png" 
              alt="Перейти в каталог"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        
        <div className="mt-8 flex justify-start">
          <Link 
            to={activeFilter === 'home' ? '/home-fitness-equipment' : '/gym-equipment'}
            className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin font-normal"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
