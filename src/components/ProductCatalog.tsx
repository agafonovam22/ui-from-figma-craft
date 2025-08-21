import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useBitrixCatalog } from '@/hooks/useBitrixCatalog';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');
  
  // Используем реальные данные из Bitrix API
  const { products: bitrixProducts, loading, error } = useBitrixCatalog("https://cp44652.tw1.ru/catalog.php");
  
  // Используем реальные товары для обоих фильтров
  const homeProducts = bitrixProducts.map(product => ({
    id: product.id,
    name: product.name,
    image: product.image_url,
    price: `${product.price.toLocaleString()} ₽`
  }));

  const fitnessProducts = bitrixProducts.map(product => ({
    id: product.id,
    name: product.name,
    image: product.image_url,
    price: `${product.price.toLocaleString()} ₽`
  }));

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
        
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F53B49] mx-auto mb-4"></div>
              <p className="text-gray-600">Загрузка товаров...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600 mb-2">Ошибка загрузки товаров</p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-6">
              {currentProducts.slice(0, 6).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img 
                      src={product.image || '/placeholder.svg'} 
                      alt={product.name || "Товар"}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-[#F53B49] font-bold">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px]">
              {currentProducts.slice(6, 10).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img 
                      src={product.image || '/placeholder.svg'} 
                      alt={product.name || "Товар"}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-[#F53B49] font-bold">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2 h-[300px]">
                <img 
                  src="/lovable-uploads/09316891-e20e-4a75-a9df-6bc5afc0bf97.png" 
                  alt="Перейти в каталог"
                  className="w-full h-full object-cover object-right"
                />
                <div className="absolute top-4 left-4 text-white font-benzin text-lg font-normal">
                  {activeFilter === 'home' ? 'Для дома' : 'Для фитнес-клуба'}
                </div>
                <Link 
                  to={activeFilter === 'home' ? '/catalog?type=home' : '/catalog?type=fitness'}
                  className="absolute bottom-4 left-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-colors flex items-center gap-2"
                >
                  Перейти в каталог <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </>
        )}
        
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
