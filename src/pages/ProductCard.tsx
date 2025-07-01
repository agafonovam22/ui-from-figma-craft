
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/" className="hover:text-gray-700">Главная</a>
            <span>/</span>
            <a href="/catalog" className="hover:text-gray-700">Каталог</a>
            <span>/</span>
            <span className="text-gray-900">Товар {id}</span>
          </div>
        </nav>

        {/* Back button */}
        <Button variant="ghost" className="mb-6 p-0 h-auto">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к каталогу
        </Button>

        {/* Product content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Product ${i}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Название товара {id}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(127 отзывов)</span>
                </div>
                <span className="text-sm text-green-600">В наличии</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">45 000 ₽</div>
              <div className="text-lg text-gray-500 line-through">52 000 ₽</div>
              <div className="text-sm text-red-600">Скидка 13%</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цвет
                </label>
                <div className="flex space-x-2">
                  {['Черный', 'Белый', 'Серый'].map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-gray-400"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Размер
                </label>
                <div className="flex space-x-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-gray-400"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1">
                Добавить в корзину
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>• Бесплатная доставка от 3000 ₽</p>
              <p>• Гарантия 2 года</p>
              <p>• Возврат в течение 14 дней</p>
            </div>
          </div>
        </div>

        {/* Product description */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Описание товара</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Подробное описание товара {id}. Здесь будет содержаться вся необходимая 
              информация о характеристиках, материалах, особенностях использования и 
              других важных деталях.
            </p>
            <p>
              Дополнительная информация о товаре, его преимуществах и рекомендациях 
              по использованию.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
