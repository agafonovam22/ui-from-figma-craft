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
import { Trash2, Plus, Minus, Heart, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useComparison } from '@/contexts/ComparisonContext';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleComparison, isInComparison } = useComparison();

  const discount = 0; // или вычислить реальную скидку
  const bonus = Math.floor(totalPrice * 0.01); // 1% от суммы

  const handleAddToFavorites = (item: any) => {
    toggleFavorite({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url
    });
  };

  const handleAddToComparison = (item: any) => {
    toggleComparison({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url
    });
  };

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
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-lg text-gray-500 mb-4 font-manrope">Корзина пуста</h2>
            <Link to="/catalog">
              <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white font-manrope text-xs">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-3 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="relative group rounded-lg overflow-hidden mb-4 flex" style={{ backgroundColor: '#F8F8FD', minHeight: '120px' }}>
                  {/* Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-white text-xs px-2 py-1 rounded-full font-benzin-semibold" style={{ backgroundColor: '#31BF00' }}>
                      Новинка
                    </span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="relative w-32 h-full flex items-center justify-center p-3" style={{ backgroundColor: '#F8F8FD' }}>
                    <div className="absolute top-0 -right-4 w-20 h-20 z-0">
                      <img 
                        src="/lovable-uploads/5e75cf63-44ac-40f1-932d-ab5786810641.png" 
                        alt="" 
                        className="w-full h-full object-contain opacity-30"
                      />
                    </div>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-contain z-10 relative"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px bg-gray-200 my-3"></div>
                  
                  {/* Product Info */}
                  <div className="flex-1 p-3 pr-4 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-40 pointer-events-none"></div>
                    
                    {/* Action Icons */}
                    <div className="absolute top-2 right-2 z-10 flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-gray-100"
                        onClick={() => handleAddToComparison(item)}
                      >
                        <BarChart3 className={`w-4 h-4 ${isInComparison(item.id) ? 'text-blue-600' : 'text-gray-400'}`} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-gray-100"
                        onClick={() => handleAddToFavorites(item)}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-red-100"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </Button>
                    </div>

                    {/* Discount Badge - Top Right */}
                    <div className="absolute top-2 right-20 z-10 flex items-center gap-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
                        -15%
                      </span>
                      <span className="text-xs text-gray-500 line-through">6 000₽</span>
                    </div>

                    {/* Quantity Controls and Price - Bottom Right */}
                    <div className="absolute bottom-2 right-2 z-10 flex items-center space-x-4">
                      {/* Price */}
                      <div className="text-lg font-bold text-gray-900">
                        {item.price.toLocaleString()} ₽
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-8 h-8 p-0 text-xs rounded-full border-gray-300"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm font-benzin-semibold min-w-[20px] text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-8 h-8 p-0 text-xs rounded-full border-gray-300"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < 4 ? "#F99808" : "#D1D5DB"}>
                          <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07 9.09 11 6 9.385 2.91 11 3.5 7.07 1 4.635l3.455-.505L6 1z" />
                        </svg>
                      ))}
                      <span className="text-xs ml-1 text-orange-400 font-benzin">4/5</span>
                    </div>
                    
                    {/* Product Name */}
                    <div className="mb-2 pr-40">
                      {(() => {
                        const parts = item.name.split(/\s+(?=[A-Z][a-z]*\s*[A-Z0-9])|(?<=\w)\s+(?=[A-Z][a-z]*\s+Kit|(?:[A-Z]+\d*)+)/);
                        if (parts.length > 1) {
                          return (
                            <>
                              <h3 className="text-gray-900 text-sm leading-relaxed font-benzin">
                                {parts[0]}
                              </h3>
                              <p className="text-gray-900 text-sm font-benzin-semibold">
                                {parts.slice(1).join(' ')}
                              </p>
                            </>
                          );
                        } else {
                          return (
                            <h3 className="text-gray-900 text-sm line-clamp-2 leading-relaxed font-benzin">
                              {item.name}
                            </h3>
                          );
                        }
                      })()}
                    </div>

                    {/* Product Details */}
                    <div className="text-xs text-gray-500 mb-2 font-benzin pr-40">
                      <span>Цвет: Зеленый</span>
                      <span className="ml-4">Диаметр, ft: 14</span>
                    </div>
                    
                    {/* Availability */}
                    <div className="flex items-center justify-start gap-1 mb-2">
                      <span className="text-xs text-green-600 font-benzin-semibold">В наличии</span>
                      <div className="flex gap-0.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 border border-green-500 rounded-full"></div>
                      </div>
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
                    <span className="font-medium">{totalPrice.toLocaleString()} ₽</span>
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
                    <span>{(totalPrice - discount).toLocaleString()} ₽</span>
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
        )}
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