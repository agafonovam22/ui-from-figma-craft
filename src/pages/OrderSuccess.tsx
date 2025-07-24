
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
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  // Генерируем случайный номер заказа для демонстрации
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

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
              <BreadcrumbPage>Оформление</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Success Message */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 py-16">
          {/* Success Icon */}
          <div className="w-32 h-32 border-4 border-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-16 h-16 text-red-500" strokeWidth={3} />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Success Text */}
            <h1 className="text-gray-900 mb-2" style={{ fontFamily: 'Benzin-Semibold', fontSize: '40px' }}>Спасибо!</h1>
            <h2 className="text-gray-900 mb-8" style={{ fontFamily: 'Benzin-Semibold', fontSize: '40px' }}>Заказ успешно оформлен</h2>

            {/* Order Number */}
            <div className="mb-6">
              <div className="border-2 border-blue-400 bg-blue-50 text-blue-600 px-6 py-3 rounded-lg inline-block">
                <span style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Номер заказа: {orderNumber}</span>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8 text-gray-600 max-w-2xl">
              <p className="mb-2" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                Ваша заявка №{orderNumber} от {new Date().toLocaleDateString('ru-RU')} оформлена
              </p>
              <p className="mb-2" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                Вся актуальная информация о статусе исполнения заказа придет
              </p>
              <p style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                на указанный email: <span className="text-red-500">mail@site.com</span>
              </p>
            </div>

            {/* Return Button */}
            <Button 
              asChild
              className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-4 text-lg rounded-lg"
              style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}
            >
              <Link to="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
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

export default OrderSuccess;
