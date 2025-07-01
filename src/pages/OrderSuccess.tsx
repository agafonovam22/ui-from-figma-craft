
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
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-8">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>

          {/* Success Text */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Спасибо!</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Заказ успешно оформлен</h2>

          {/* Order Number */}
          <div className="mb-6">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block">
              <span className="font-medium">Номер заказа: {orderNumber}</span>
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-8 text-gray-600 max-w-md">
            <p className="mb-2">Ваш заявка №{orderNumber} от {new Date().toLocaleDateString('ru-RU')} оформлена</p>
            <p className="mb-2">Вся актуальная информация о статусе исполнения заказа придет</p>
            <p>на указанный email: <span className="text-blue-600">mail@site.com</span></p>
          </div>

          {/* Return Button */}
          <Button 
            asChild
            className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 text-lg font-medium"
          >
            <Link to="/">Вернуться на главную</Link>
          </Button>
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
