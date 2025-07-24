
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
        <div className="bg-gray-100 h-[405px] flex flex-row items-start justify-center gap-8 px-8 py-16">
          {/* Success Icon */}
          <img 
            src="/lovable-uploads/2120adc6-229a-4e1a-bfc7-04a00ff57bcc.png" 
            alt="Success" 
            className="w-48 h-48 flex-shrink-0"
          />

          {/* Content */}
          <div>
            {/* Success Text */}
            <div className="mb-6">
              <h1 className="text-gray-900 mb-1" style={{ fontFamily: 'Benzin-Medium', fontSize: '32px' }}>Спасибо!</h1>
              <h2 className="text-gray-900" style={{ fontFamily: 'Benzin-Medium', fontSize: '32px' }}>Заказ успешно оформлен</h2>
            </div>

            {/* Order Number */}
            <div className="mb-6">
              <div className="border-2 bg-blue-50 px-6 py-3 rounded-lg inline-block" style={{ borderColor: '#4B7EE8' }}>
                <span style={{ fontFamily: 'Benzin-Regular', fontSize: '14px', color: '#4B7EE8' }}>
                  Номер заказа: {orderNumber}
                </span>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8 text-gray-600 leading-tight">
              <p className="mb-1" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                Ваша заявка №{orderNumber} от {new Date().toLocaleDateString('ru-RU')} оформлена
              </p>
              <p className="mb-1" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
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
