
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState('товары');

  const tabs = [
    { id: 'товары', label: 'Товары', count: 10 },
    { id: 'новости', label: 'Новости', count: 10 },
    { id: 'статьи', label: 'Статьи', count: 10 },
    { id: 'блоги', label: 'Блоги', count: 10 },
    { id: 'идеи', label: 'Идеи и подборки', count: 10 }
  ];

  // Данные для товаров (все одинаковые батуты как на макете)
  const products = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    name: "Гребной тренажер CardioPowe PRO CR300",
    image: "/lovable-uploads/be85c55b-4881-41b1-beb7-89b0cea7d083.png",
    price: "4 610 ₽",
    rating: 4.5,
    reviews: 4,
    badges: index % 5 === 0 ? ['АКЦИЯ', 'ХИТ ПРОДАЖ'] : 
           index % 5 === 1 ? ['АКЦИЯ', 'ХИТ ПРОДАЖ'] :
           index % 5 === 2 ? ['ОТЛИЧНОЕ ПРЕДЛОЖЕНИЕ'] :
           index % 5 === 3 ? ['НОВИНКА'] : ['НОВИНКА'],
    availability: index % 3 === 0 ? 'Осталось мало' : 
                 index % 3 === 1 ? 'Нет в наличии' : 'В наличии',
    availabilityColor: index % 3 === 0 ? 'text-orange-500' : 
                      index % 3 === 1 ? 'text-red-500' : 'text-green-500',
    discount: index % 4 === 0 ? 15 : index % 4 === 1 ? 20 : null,
    isInShop: index % 2 === 0
  }));

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'АКЦИЯ': return 'bg-red-500';
      case 'ХИТ ПРОДАЖ': return 'bg-blue-500';
      case 'ОТЛИЧНОЕ ПРЕДЛОЖЕНИЕ': return 'bg-orange-500';
      case 'НОВИНКА': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-gray-700">Главная</a>
          <span>›</span>
          <span>Поиск</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Поиск</h1>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Товары</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative p-4">
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} className={`${getBadgeColor(badge)} text-white text-xs px-2 py-1`}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-contain"
                    />
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      product.availability === 'В наличии' ? 'bg-green-500' : 
                      product.availability === 'Осталось мало' ? 'bg-orange-500' : 'bg-red-500'
                    }`} />
                    <span className={`text-xs ${product.availabilityColor}`}>
                      {product.availability}
                    </span>
                    <div className="flex gap-1">
                      <div className={`w-2 h-2 rounded-full ${product.availability === 'В наличии' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <div className={`w-2 h-2 rounded-full ${product.availability !== 'Нет в наличии' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.isInShop && (
                      <span className="text-xs text-blue-600">Есть в шоуруме</span>
                    )}
                  </div>

                  {/* Action Button */}
                  {product.availability === 'Нет в наличии' ? (
                    <button className="w-full py-2 px-4 border border-red-500 text-red-500 text-sm rounded hover:bg-red-50 transition-colors">
                      Запросить цену
                    </button>
                  ) : (
                    <button className="w-full py-2 px-4 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors">
                      Купить
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors">
              Показать все
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
