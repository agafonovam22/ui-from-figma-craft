
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
      image: "/lovable-uploads/6d5d3486-5263-42ec-9091-5d9522a235e6.png",
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
      image: "/lovable-uploads/6d5d3486-5263-42ec-9091-5d9522a235e6.png",
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
      image: "/lovable-uploads/6d5d3486-5263-42ec-9091-5d9522a235e6.png",
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
      <span className="text-sm ml-1" style={{ color: '#F99808', fontFamily: 'Benzin-Regular' }}>{rating}/5</span>
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
              <div 
                key={item.id} 
                className="flex items-start gap-4 p-6 border rounded-lg relative"
                style={{ 
                  backgroundImage: `url('/lovable-uploads/4896027a-18fe-4908-8e78-65d1972fa865.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Product Badge */}
                {item.isNew && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded uppercase font-medium z-10">
                    НОВИНКА
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-[120px] h-[120px] object-cover rounded"
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <StarRating rating={item.rating} />
                  
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                    <div>Гребной тренажер</div>
                    <div>CardioPowe PRO CR300</div>
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-3">
                    <div className="flex gap-4">
                      <span>Цвет: <span className="font-medium" style={{ color: '#262631' }}>{item.color}</span></span>
                      <span>Диаметр, ft: <span className="font-medium">{item.diameter}</span></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium" style={{ color: '#31BF00' }}>В наличии</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#31BF00' }}></span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#31BF00' }}></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    </div>
                  </div>
                </div>
                
                {/* Price and Controls */}
                <div className="flex flex-col items-end gap-4">
                  {/* Action Icons */}
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded text-gray-400 transition-colors">
                      <BarChart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded text-gray-400 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded text-gray-400 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Price Section */}
                  <div className="text-right">
                    {item.discount && (
                      <div className="mb-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
                          -{item.discount}%
                        </span>
                        <span className="text-xs text-gray-500 ml-2">5 000₽</span>
                      </div>
                    )}
                    
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {item.price.toLocaleString()} ₽
                    </div>
                    
                    {item.originalPrice && (
                      <div className="text-gray-400 line-through text-sm">
                        {item.originalPrice.toLocaleString()} ₽
                      </div>
                    )}
                  </div>
                  
                  {/* Quantity Control */}
                  <div className="flex items-center border rounded-lg">
                    <button className="p-2 hover:bg-gray-100 text-gray-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x min-w-[3rem] text-center font-medium">{item.quantity}</span>
                    <button className="p-2 hover:bg-gray-100 text-gray-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-t-lg p-6 mb-6 relative" style={{ 
              borderBottom: '2px dashed #ccc',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0'
            }}>
              {/* Углубления по бокам снизу */}
              <div className="absolute bottom-0 left-3 w-3 h-3 bg-white rounded-full transform translate-y-1/2"></div>
              <div className="absolute bottom-0 right-3 w-3 h-3 bg-white rounded-full transform translate-y-1/2"></div>
              
              <h2 className="text-gray-900 mb-6 mt-0" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Оформить</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                  <span className="text-gray-600">Товары, {totalItems} шт</span>
                  <span className="font-medium">{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                  <span className="text-gray-600">Скидка</span>
                  <span className="text-red-500 font-medium">-{discount.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                  <span className="text-gray-600">Бонусы</span>
                  <span className="text-green-600 font-medium">+{bonus} Б</span>
                </div>
                <div className="border-t border-dashed border-gray-400 pt-4 flex justify-between" style={{ fontFamily: 'Benzin-Semibold', fontSize: '16px' }}>
                  <span>Итого</span>
                  <span>{(total - discount).toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
              
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="bonus" className="mt-1 rounded" />
                <label htmlFor="bonus" className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope', fontSize: '14px' }}>
                  Использовать бонусные баллы. Требуется <Link to="/auth" className="text-blue-600 underline">авторизации</Link>
                </label>
              </div>
            </div>
            
            <div className="space-y-[10px]">
              <div className="flex gap-[10px]">
                <Link to="/checkout" className="flex-1">
                  <Button 
                    className="bg-[#F53B49] hover:bg-[#e63946] text-white py-3 rounded-lg"
                    style={{ 
                      fontFamily: 'Benzin-Regular', 
                      fontSize: '12px',
                      width: 'calc(100% - 2.5px)'
                    }}
                  >
                    Оформить заказ
                  </Button>
                </Link>
                
                <div className="flex-1">
                  <Button 
                    variant="outline" 
                    className="border-2 border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white py-3 rounded-lg"
                    style={{ 
                      fontFamily: 'Benzin-Regular', 
                      fontSize: '12px',
                      width: 'calc(100% - 2.5px)'
                    }}
                  >
                    Купить в 1 клик
                  </Button>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-2 border-gray-300 text-[#F53B49] hover:bg-gray-50 py-3 rounded-lg"
                style={{ fontFamily: 'Benzin-Regular', fontSize: '12px' }}
              >
                Сделать коммерческое предложение
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* You Viewed Section */}
      <div className="py-16 bg-gray-50">
        <NewProducts title="Вы смотрели" />
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Cart;
