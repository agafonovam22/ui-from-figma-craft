import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { bitrixApi, BitrixProduct } from '@/services/bitrixApi';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');
  const [products, setProducts] = useState<BitrixProduct[]>([]);
  const [loading, setLoading] = useState(false);

  // Загружаем реальные товары из Bitrix API
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const bitrixProducts = await bitrixApi.getProducts();
        setProducts(bitrixProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Показываем только первые товары для демонстрации (можно добавить фильтрацию по категориям)
  const currentProducts = products.slice(0, 10);

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
          <div className="text-center py-8">Загрузка товаров...</div>
        ) : currentProducts.length === 0 ? (
          <div className="text-center py-8">Товары не найдены</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-6">
              {currentProducts.slice(0, 6).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    isAvailable: product.available,
                    rating: product.rating || 0,
                    reviews: product.reviews_count || 0
                  }}
                  variant="grid" 
                  linkTo="/product-card" 
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px]">
              {currentProducts.slice(6, 10).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    isAvailable: product.available,
                    rating: product.rating || 0,
                    reviews: product.reviews_count || 0
                  }}
                  variant="grid" 
                  linkTo="/product-card" 
                />
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