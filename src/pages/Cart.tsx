
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, Heart, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  quantity: number;
  inStock: boolean;
  color?: string;
  diameter?: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

const Cart: React.FC = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      quantity: 1,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      quantity: 1,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      quantity: 1,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const discount = 4610;
  const bonus = 260;

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.885L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" 
            fill={star <= rating ? "#FFA500" : "#E0E0E0"}
          />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}/5</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Корзина</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина ({totalItems})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-3 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start gap-6 p-6 bg-white border rounded-lg">
                {/* Product Badge */}
                {item.isNew && (
                  <div className="absolute bg-green-500 text-white text-xs px-2 py-1 rounded uppercase font-medium">
                    НОВИНКА
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
                
                <div className="flex-1">
                  <StarRating rating={item.rating} />
                  
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                    {item.name}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <div>Цвет: {item.color}</div>
                    <div>Диаметр: {item.diameter}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-green-600 text-sm">● В наличии</span>
                    <span className="text-green-600 text-sm">●●○</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Quantity Control */}
                      <div className="flex items-center border rounded">
                        <button className="p-2 hover:bg-gray-100 text-gray-600">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x min-w-[3rem] text-center">{item.quantity}</span>
                        <button className="p-2 hover:bg-gray-100 text-gray-600">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        {item.discount && (
                          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                            -{item.discount}% В ОБЗОРЕ
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {item.price.toLocaleString()} ₽
                      </div>
                      {item.originalPrice && (
                        <div className="text-gray-400 line-through text-sm">
                          {item.originalPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Action Icons */}
                <div className="flex flex-col gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                    <BarChart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Оформить</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Товары, {totalItems} шт</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Скидка</span>
                  <span className="text-red-500">-{discount.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Бонусы</span>
                  <span className="text-green-600">+{bonus} Б</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold">
                  <span>Итого</span>
                  <span>{(total - discount).toLocaleString()} ₽</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="bonus" className="rounded" />
                  <label htmlFor="bonus" className="text-sm">
                    Использовать бонусные баллы. Требуется <Link to="/auth" className="text-blue-600 underline">авторизация</Link>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white py-3 text-base font-medium">
                  Оформить заказ
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white py-3 text-base font-medium"
                >
                  Купить в 1 клик
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full py-3 text-base font-medium"
                >
                  Сделать коммерческое предложение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You Viewed Section */}
      <div className="py-8">
        <NewProducts title="Вы смотрели" />
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Cart;
