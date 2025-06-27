import React from 'react';

const NewProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Гребной тренажер CardioPower PRO CR300',
      rating: 4.5,
      price: '4 610 ₽',
      originalPrice: '5 000₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Сетевая цена'
    },
    {
      id: 2,
      title: 'Гребной тренажер CardioPower PRO CR300',
      rating: 4.5,
      price: '4 610 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Сетевая цена'
    },
    {
      id: 3,
      title: 'Гребной тренажер CardioPower PRO CR300',
      rating: 4.5,
      price: '4 610 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Хит в наличии'
    },
    {
      id: 4,
      title: 'Гребной тренажер CardioPower PRO CR300',
      rating: 4.5,
      price: '4 610 ₽',
      originalPrice: '5 000₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка 10%'
    },
    {
      id: 5,
      title: 'Гребной тренажер CardioPower PRO CR300',
      rating: 4.5,
      price: '4 610 ₽',
      originalPrice: '5 000₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка 10%'
    }
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <h2 className="text-2xl font-bold text-[#262631] mb-8">Новинки</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
              {/* Badge */}
              <div className="flex justify-start mb-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  product.badge === 'Сетевая цена' ? 'bg-red-100 text-red-600' :
                  product.badge === 'Хит в наличии' ? 'bg-blue-100 text-blue-600' :
                  product.badge === 'Скидка 10%' ? 'bg-green-100 text-green-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-sm font-medium text-[#262631] mb-3 line-clamp-2">{product.title}</h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex text-yellow-400">
                  {'★'.repeat(4)}
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-sm text-gray-500">{product.rating}/5</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#262631]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Button */}
              <button className={`w-full py-2 px-4 rounded text-sm font-medium transition-colors ${
                product.id === 3 
                  ? 'border border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white'
                  : 'bg-[#F53B49] text-white hover:bg-red-600'
              }`}>
                {product.id === 3 ? 'Запросить цену' : 'Купить'}
              </button>
            </div>
          ))}
        </div>
        
        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
