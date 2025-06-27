import React from 'react';

const NewProducts: React.FC = () => {
  const newProducts = [
    {
      id: 1,
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      oldPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 5,
      status: 'sale',
      statusText: 'АКЦИЯ',
      availability: 'Осталось мало',
      availabilityColor: 'red',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'ХИТ ПРОДАЖ'
    },
    {
      id: 2,
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      oldPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 5,
      status: 'sale',
      statusText: 'АКЦИЯ',
      availability: 'Осталось мало',
      availabilityColor: 'red',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'ХИТ ПРОДАЖ'
    },
    {
      id: 3,
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      oldPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 5,
      status: 'gift',
      statusText: 'ОТЛИЧНЫЙ ПОДАРОК',
      availability: 'Нет в наличии',
      availabilityColor: 'gray',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png'
    },
    {
      id: 4,
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      oldPrice: '5 000₽',
      discount: '-15%',
      rating: 4.5,
      reviews: 5,
      status: 'new',
      statusText: 'НОВИНКА',
      availability: 'В наличии',
      availabilityColor: 'green',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      inStock: 'Есть в шоуруме'
    },
    {
      id: 5,
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      oldPrice: '5 000₽',
      discount: '-15%',
      rating: 4.5,
      reviews: 5,
      status: 'new',
      statusText: 'НОВИНКА',
      availability: 'В наличии',
      availabilityColor: 'green',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      inStock: 'Есть в шоуруме'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-sm ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getStatusBadge = (status: string, statusText: string, badge?: string) => {
    if (badge) {
      return (
        <span className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
          {badge}
        </span>
      );
    }
    
    const statusColors = {
      sale: 'bg-red-500',
      gift: 'bg-orange-500',
      new: 'bg-green-500'
    };
    
    return (
      <span className={`absolute top-3 left-3 ${statusColors[status as keyof typeof statusColors]} text-white px-2 py-1 rounded text-xs font-medium`}>
        {statusText}
      </span>
    );
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-[#262631]">
            Новинки
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L1 5L5 9" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#262631] text-white flex items-center justify-center hover:bg-gray-800">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {newProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer relative">
              {getStatusBadge(product.status, product.statusText, product.badge)}
              
              {/* Иконки в правом верхнем углу */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L7 11H9L11 3H13" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.5C7.5 14.5 1.5 10.5 1.5 5.5C1.5 3.5 3 2 5 2C6.5 2 8 3 8 3S9.5 2 11 2C13 2 14.5 3.5 14.5 5.5C14.5 10.5 8.5 14.5 8 14.5Z" stroke={product.id === 3 ? "#F53B49" : "#666"} strokeWidth="1.5" fill={product.id === 3 ? "#F53B49" : "none"}/>
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6" stroke="#666" strokeWidth="1.5" fill="none"/>
                    <path d="M8 5V8L10 10" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {product.discount && (
                <div className="absolute top-3 right-16 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  {product.discount}
                </div>
              )}
              
              <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className={`text-xs mb-2 flex items-center gap-1`}>
                <span className={`w-2 h-2 rounded-full ${
                  product.availabilityColor === 'red' ? 'bg-red-500' : 
                  product.availabilityColor === 'green' ? 'bg-green-500' : 'bg-gray-400'
                }`}></span>
                <span className={
                  product.availabilityColor === 'red' ? 'text-red-600' : 
                  product.availabilityColor === 'green' ? 'text-green-600' : 'text-gray-600'
                }>
                  {product.availability}
                </span>
                {product.inStock && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-2"></span>
                    <span className="text-green-600">{product.inStock}</span>
                  </>
                )}
              </div>
              
              <h3 className="text-sm font-medium text-[#262631] mb-3 leading-relaxed">{product.title}</h3>
              
              <div className="flex items-center gap-1 mb-3">
                {renderStars(product.rating)}
                <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-[#262631]">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                )}
              </div>
              
              {product.id === 3 ? (
                <button className="w-full border-2 border-[#F53B49] text-[#F53B49] py-2 px-4 rounded text-sm font-medium hover:bg-[#F53B49] hover:text-white transition-colors">
                  Запросить цену
                </button>
              ) : (
                <button className="w-full bg-[#F53B49] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#e63946] transition-colors">
                  Купить
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
