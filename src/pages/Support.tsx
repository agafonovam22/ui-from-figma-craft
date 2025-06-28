
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  const tabs = [
    { id: 'delivery', label: 'Доставка и оплата' },
    { id: 'return', label: 'Условия возврата' },
    { id: 'warranty', label: 'Гарантия' },
    { id: 'faq', label: 'Вопросы и ответы' },
    { id: 'instructions', label: 'Инструкции' },
    { id: 'personal', label: 'Личный кабинет' },
    { id: 'b2b', label: 'B2B кабинет' }
  ];

  const getActiveTabLabel = () => {
    const activeTabObject = tabs.find(tab => tab.id === activeTab);
    return activeTabObject ? activeTabObject.label : 'Поддержка';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-6">
        {/* Breadcrumbs and Title */}
        <section className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Поддержка</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {getActiveTabLabel()}
          </h1>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {getActiveTabLabel()}
                </h1>
                <div className="lg:w-1/3">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    Рекламный баннер
                  </h2>
                  <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                    Оставить заявку
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/8fee6b4e-43a4-44f5-aa6b-31a85b990f11.png"
                  alt="3D визуализация фитнес зала"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'delivery' && (
            <div className="space-y-8">
              {/* Delivery Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Город доставки <span className="text-[#F53B49]">Москва</span>
                </h3>
                <p className="text-gray-700">
                  Доставка по Москве осуществляется в течение 1-2 дней с момента заказа.<br />
                  Ежедневно с 9:00 до 21:00
                </p>
              </div>

              {/* Delivery Cost */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Стоимость доставки</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Заказ от 30 001 ₽</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-gray-700">Автомобильная доставка по г. Москве в пределах МКАД</span>
                        <span className="text-[#F53B49] font-semibold">Бесплатно</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-gray-700">Автомобильная доставка по Московской Области</span>
                        <span className="text-[#F53B49] font-semibold">30₽/км</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-gray-700">Курьерская доставка (вес до 3 кг)</span>
                        <span className="text-[#F53B49] font-semibold">500₽</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Заказ до 30 000 ₽</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-gray-700">Автомобильная доставка по г. Москве в пределах МКАД</span>
                        <span className="text-[#F53B49] font-semibold">1000 ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'return' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Условия возврата</h3>
              <div className="prose max-w-none">
                <p>Здесь будет информация об условиях возврата товаров.</p>
              </div>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Гарантия</h3>
              <div className="prose max-w-none">
                <p>Здесь будет информация о гарантийных условиях.</p>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Часто задаваемые вопросы</h3>
              <div className="prose max-w-none">
                <p>Здесь будут ответы на часто задаваемые вопросы.</p>
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Инструкции</h3>
              <div className="prose max-w-none">
                <p>Здесь будут инструкции по использованию.</p>
              </div>
            </div>
          )}

          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Личный кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о личном кабинете.</p>
              </div>
            </div>
          )}

          {activeTab === 'b2b' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">B2B кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о B2B кабинете для корпоративных клиентов.</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
