
import React from 'react';

const ProductCatalog: React.FC = () => {
  const products = [
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
      title: 'Горнолыжные тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png',
      category: 'ski'
    },
    {
      id: 8,
      title: 'Уличные виды спорта',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png',
      category: 'outdoor'
    },
    {
      id: 9,
      title: 'Эллиптические тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png',
      category: 'elliptical'
    },
    {
      id: 10,
      title: 'Настольный теннис',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/f99f3115-1f00-49f0-af93-08b6318f8cf4.png',
      category: 'tabletennis'
    },
    {
      id: 11,
      title: 'Аксессуары к тренажерам',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      category: 'accessories-equipment'
    }
  ];

  const specialProduct = {
    title: 'Для фитнес-клуба',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    buttonText: 'Перейти в каталог',
    image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png'
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <h2 className="text-4xl font-bold text-[#262631] mb-12">
          Каталог продукции
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
          {/* Первые 7 товаров в стандартном размере */}
          {products.slice(0, 7).map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square mb-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-[#262631] mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.price}</p>
              {product.id === 1 && (
                <button className="bg-[#262631] text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors">
                  Перейти →
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Вторая строка со специальным блоком и оставшимися товарами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 mt-6">
          {/* Специальный блок для фитнес-клуба - занимает 2 колонки */}
          <div className="lg:col-span-2 bg-[#3A3A45] rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{specialProduct.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {specialProduct.description}
              </p>
              <button className="bg-white text-[#262631] px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                {specialProduct.buttonText} →
              </button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img 
                src={specialProduct.image}
                alt="Тренажер для фитнес-клуба"
                className="w-full h-full object-contain opacity-20"
              />
            </div>
          </div>
          
          {/* Остальные товары */}
          {products.slice(7).map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square mb-4 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-[#262631] mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.price}</p>
            </div>
          ))}
        </div>
        
        {/* Кнопка "Показать все" */}
        <div className="mt-12 flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
