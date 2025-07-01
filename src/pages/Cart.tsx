
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from 'lucide-react';
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
      inStock: true
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      quantity: 2,
      inStock: true
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 p-6 bg-white border rounded-lg shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    {item.discount && (
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                        -{item.discount}%
                      </span>
                    )}
                    <span className="text-xl font-bold text-gray-900">
                      {item.price.toLocaleString()} ₽
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through">
                        {item.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button className="p-2 hover:bg-gray-100">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 border-x">{item.quantity}</span>
                      <button className="p-2 hover:bg-gray-100">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <span className={`text-sm ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {item.inStock ? 'В наличии' : 'Нет в наличии'}
                    </span>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Trash2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Итого к оплате</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span className="text-green-600">Бесплатно</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
              </div>
              
              <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white py-3 text-base font-medium mb-3">
                Оформить заказ
              </Button>
              
              <Link to="/catalog">
                <Button variant="outline" className="w-full border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white py-3 text-base font-medium">
                  Продолжить покупки
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Cart;
