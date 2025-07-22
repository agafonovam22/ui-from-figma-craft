import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportCitySelector from '@/components/SupportCitySelector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [selectedCity, setSelectedCity] = useState('Москва');

  const tabs = [
    { id: 'delivery', label: 'Доставка и оплата' },
    { id: 'return', label: 'Условия возврата' },
    { id: 'warranty', label: 'Гарантия' },
    { id: 'questions', label: 'Вопросы и ответы' },
    { id: 'instructions', label: 'Инструкции' },
    { id: 'account', label: 'Личный кабинет' },
    { id: 'b2b', label: 'B2B кабинет' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
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
                <BreadcrumbPage>Доставка и оплата</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Доставка и оплата</h1>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-6 mb-12 text-white relative overflow-hidden" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  Разрабатаем<br />
                  3D-проект<br />
                  бесплатно!
                </h2>
                <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Оставить заявку
                </Button>
              </div>
              <div className="flex-1 flex justify-end">
                <img 
                  src="/lovable-uploads/1750c483-ca71-4fb0-85b9-fd2efc819a71.png"
                  alt="3D проект спортзала"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {/* City Selector */}
          <div className="mb-8">
            <SupportCitySelector 
              selectedCity={selectedCity} 
              onCitySelect={setSelectedCity} 
            />
          </div>

          {/* Tab Content */}
          {activeTab === 'delivery' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Самовывоз со склада */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4">Самовывоз со склада</h3>
                
                {/* Склад */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Склад</h4>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">В наличии</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">г. Москва, ул. Семеновская, д. 15, стр. 1</p>
                  <p className="text-gray-600 text-sm">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00, Вс: выходной</p>
                </div>

                <Separator className="my-4" />

                {/* Дополнительные склады */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Дополнительные склады</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-900">г. Санкт-Петербург, ул. Пушкинская, д. 10</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">В наличии</span>
                      </div>
                      <p className="text-xs text-gray-600">Пн-Пт: 10:00-19:00, Сб: 11:00-17:00</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-900">г. Екатеринбург, ул. Ленина, д. 25</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Под заказ</span>
                      </div>
                      <p className="text-xs text-gray-600">Пн-Пт: 9:00-18:00, Сб-Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Доставка по России */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4">Доставка по России</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Осуществляем доставку по всей территории России через проверенных партнеров. 
                  Срок доставки от 3 до 14 рабочих дней в зависимости от региона.
                </p>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Партнеры по доставке:</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                      <img src="/lovable-uploads/f4c3da36-0826-43f3-84e8-556a68d7997c.png" alt="DPD" className="h-6" />
                      <span className="text-sm font-medium">DPD</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                      <img src="/lovable-uploads/ef816493-63e0-456b-9a81-a821e2916f6b.png" alt="СДЭК" className="h-6" />
                      <span className="text-sm font-medium">СДЭК</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded">
                      <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Байкал сервис" className="h-6" />
                      <span className="text-sm font-medium">Байкал сервис</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'return' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">Условия возврата</h3>
              <p className="text-gray-700">Информация об условиях возврата товара...</p>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">Гарантия</h3>
              <p className="text-gray-700">Информация о гарантийных условиях...</p>
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">Вопросы и ответы</h3>
              <p className="text-gray-700">Часто задаваемые вопросы...</p>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">Инструкции</h3>
              <p className="text-gray-700">Инструкции по использованию...</p>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">Личный кабинет</h3>
              <p className="text-gray-700">Информация о личном кабинете...</p>
            </div>
          )}

          {activeTab === 'b2b' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">B2B кабинет</h3>
              <p className="text-gray-700">Информация о B2B кабинете...</p>
            </div>
          )}
        </div>
      </main>

      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Support;