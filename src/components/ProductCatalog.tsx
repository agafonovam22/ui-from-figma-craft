import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard.legacy';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');

  // Маппинг категорий к поисковым запросам
  const categoryToSearchQuery: Record<string, string> = {
    'treadmill': 'беговая дорожка',
    'bike': 'велотренажер', 
    'rowing': 'гребной',
    'strength': 'силовая станция',
    'inversion': 'инверсионный',
    'accessories': 'аксессуары',
    'street': 'уличные',
    'elliptical': 'эллиптический',
    'tennis': 'теннис',
    'skiing': 'лыжи'
  };

  const homeProducts = [
    {
      id: 1,
      image: '/lovable-uploads/e7893606-f51a-4e53-9c80-ab83d081c16c.png',
      category: 'treadmill',
      price: 'от 33 900 ₽',
      linkTo: '/catalog?category=treadmills&purpose=home'
    },
    {
      id: 2,
      image: '/lovable-uploads/41b47400-6434-4309-9474-38fd8527c0f9.png',
      category: 'bike',
      price: 'от 35 900 ₽',
      linkTo: '/catalog?category=exercise-bikes&purpose=home'
    },
    {
      id: 3,
      image: '/lovable-uploads/7eb18ab6-a47c-4127-a2e4-520345b3a636.png',
      category: 'rowing',
      price: 'от 49 900 ₽',
      linkTo: '/catalog?category=rowing-machines&purpose=home'
    },
    {
      id: 4,
      image: '/lovable-uploads/9deaa8d7-89aa-4671-b709-82d6af4d5f19.png',
      category: 'strength',
      price: 'от 9 900 ₽',
      linkTo: '/catalog?category=strength-equipment&purpose=home'
    },
    {
      id: 5,
      image: '/lovable-uploads/dcac2877-3c35-4f7d-8abf-95aacc72562e.png',
      category: 'inversion',
      price: 'от 12 900 ₽',
      linkTo: '/catalog?category=inversion-tables&purpose=home'
    },
    {
      id: 6,
      image: '/lovable-uploads/34f32079-9172-481c-a342-ebee3d47cd47.png',
      category: 'accessories',
      price: '220 ₽',
      linkTo: '/catalog?category=home-accessories&purpose=home'
    },
    {
      id: 7,
      image: '/lovable-uploads/c05b2484-8dc7-4ac6-bd32-3876e288da9a.png',
      category: 'street',
      price: 'от 800 ₽',
      linkTo: '/catalog?category=outdoor-sports&purpose=home'
    },
    {
      id: 8,
      image: '/lovable-uploads/0c78e89b-223e-41c0-a7c1-3e594b9c0a92.png',
      category: 'elliptical',
      price: 'от 45 900 ₽',
      linkTo: '/catalog?category=elliptical&purpose=home'
    },
    {
      id: 9,
      image: '/lovable-uploads/bc820bdc-17a0-4d70-a621-8d5a0ebf37ad.png',
      category: 'tennis',
      price: 'от 24 900 ₽',
      linkTo: '/catalog?category=table-tennis&purpose=home'
    },
    {
      id: 10,
      image: '/lovable-uploads/7919df46-5d23-4cdc-8384-edd08bf27547.png',
      category: 'accessories',
      price: 'от 700 ₽',
      linkTo: '/catalog?category=home-accessories&purpose=home'
    },
    {
      id: 11,
      image: '/lovable-uploads/2384c4ae-190f-4278-aaf8-daaa6e67e846.png',
      category: 'home',
      linkTo: '/catalog'
    }
  ];

  const fitnessProducts = [
    {
      id: 13,
      image: '/lovable-uploads/e7893606-f51a-4e53-9c80-ab83d081c16c.png',
      category: 'treadmill',
      linkTo: '/catalog?q=беговая дорожка'
    },
    {
      id: 14,
      image: '/lovable-uploads/41b47400-6434-4309-9474-38fd8527c0f9.png',
      category: 'bike',
      linkTo: '/catalog?q=велотренажер'
    },
    {
      id: 15,
      image: '/lovable-uploads/7eb18ab6-a47c-4127-a2e4-520345b3a636.png',
      category: 'rowing',
      linkTo: '/catalog?q=гребной'
    },
    {
      id: 16,
      image: '/lovable-uploads/9deaa8d7-89aa-4671-b709-82d6af4d5f19.png',
      category: 'strength',
      linkTo: '/catalog?q=силовая станция'
    },
    {
      id: 17,
      image: '/lovable-uploads/dcac2877-3c35-4f7d-8abf-95aacc72562e.png',
      category: 'inversion',
      linkTo: '/catalog?q=инверсионный'
    },
    {
      id: 18,
      image: '/lovable-uploads/34f32079-9172-481c-a342-ebee3d47cd47.png',
      category: 'accessories',
      linkTo: '/catalog?q=аксессуары'
    },
    {
      id: 19,
      image: '/lovable-uploads/c05b2484-8dc7-4ac6-bd32-3876e288da9a.png',
      category: 'street',
      linkTo: '/catalog?q=уличные'
    },
    {
      id: 20,
      image: '/lovable-uploads/0c78e89b-223e-41c0-a7c1-3e594b9c0a92.png',
      category: 'elliptical',
      linkTo: '/catalog?q=эллиптический'
    },
    {
      id: 21,
      image: '/lovable-uploads/bc820bdc-17a0-4d70-a621-8d5a0ebf37ad.png',
      category: 'tennis',
      linkTo: '/catalog?q=теннис'
    },
    {
      id: 22,
      image: '/lovable-uploads/7919df46-5d23-4cdc-8384-edd08bf27547.png',
      category: 'accessories',
      linkTo: '/catalog?q=аксессуары'
    },
    {
      id: 23,
      image: '/lovable-uploads/2384c4ae-190f-4278-aaf8-daaa6e67e846.png',
      category: 'fitness',
      linkTo: '/catalog'
    }
  ];

  const currentProducts = activeFilter === 'home' ? homeProducts : fitnessProducts;

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-[30px]">
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
              Фитнес-клуба
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-6"
             style={{
               gap: window.innerWidth >= 1920 ? '20px' : '10px',
               maxWidth: window.innerWidth >= 1920 ? '1580px' : 'none',
               margin: window.innerWidth >= 1920 ? '0 auto 24px auto' : 'auto'
             }}>
          {currentProducts.slice(0, 6).map((product) => (
            <div key={product.id} 
                 style={{
                   width: window.innerWidth >= 1920 ? '228px' : 'auto',
                   height: window.innerWidth >= 1920 ? '281px' : 'auto'
                 }}>
              <ProductCard product={product} variant="grid" linkTo={product.linkTo} />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px]"
             style={{
               gap: window.innerWidth >= 1920 ? '20px' : '10px',
               maxWidth: window.innerWidth >= 1920 ? '1580px' : 'none',
               margin: window.innerWidth >= 1920 ? '0 auto' : 'auto'
             }}>
          {currentProducts.slice(6, 10).map((product) => (
            <div key={product.id}
                 style={{
                   width: window.innerWidth >= 1920 ? '228px' : 'auto',
                   height: window.innerWidth >= 1920 ? '281px' : 'auto'
                 }}>
              <ProductCard product={product} variant="grid" linkTo={product.linkTo} />
            </div>
          ))}
          <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2 h-[300px]"
               style={{
                 width: window.innerWidth >= 1920 ? '708px' : 'auto',
                 height: window.innerWidth >= 1920 ? '281px' : '300px'
               }}>
            <img 
              src="/lovable-uploads/09316891-e20e-4a75-a9df-6bc5afc0bf97.png" 
              alt="Перейти в каталог"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute top-4 left-4 text-white font-benzin text-lg font-normal">
              {activeFilter === 'home' ? 'Для дома' : 'Для фитнес-клуба'}
            </div>
            <Link 
              to={activeFilter === 'home' ? '/catalog?purpose=home' : '/catalog?purpose=fitness'}
              className="absolute bottom-4 left-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-colors flex items-center gap-2"
            >
              Перейти в каталог <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
