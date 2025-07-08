
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { MapPin, Phone, Clock, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const Contacts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('moscow');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png',
    '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png',
    '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-700">
                Главная
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                Контакты
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="font-heading text-[48px] text-layout-dark-grey mb-10 leading-none">
          Контакты
        </h1>

        {/* City Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('moscow')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'moscow'
                ? 'bg-[#F53B49] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Контакты в Москве
          </button>
          <button
            onClick={() => setActiveTab('spb')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'spb'
                ? 'bg-[#F53B49] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Контакты в Санкт-Петербурге
          </button>
        </div>

        {/* Company Store Section with Map */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-lg p-6 flex gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Фирменный магазин<br />Well Fitness
              </h2>
              
              <div className="space-y-4 text-gray-700 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Адрес</p>
                    <p className="text-sm">
                      Москва, ТРК VEGAS Крокус Сити,<br />
                      м.Мякинино, ул. Международная 12,<br />
                      G6 км МКАД
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                    <p className="text-sm">+7 (499) 677-56-32</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Режим работы</p>
                    <p className="text-sm">10:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#F53B49] text-white text-sm rounded-md hover:bg-[#e63946] transition-colors">
                  Оставить заявку
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  Как проехать
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="w-full h-[280px] bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="w-full h-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#F53B49] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              <div className="w-1/3 h-[200px] bg-gray-200 rounded-lg"></div>
              <div className="w-1/3 h-[200px] bg-gray-200 rounded-lg"></div>
              <div className="w-1/3 h-[200px] bg-gray-200 rounded-lg"></div>
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-[#F53B49]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Office and Sales Department */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Офис</h3>
            
            <div className="space-y-4 text-gray-700 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Адрес</p>
                  <p className="text-sm">
                    Москва ул. Маршала Прокляхова<br />
                    30 офис 407 БЦ Этмект Плаза
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Режим работы</p>
                  <p className="text-sm">10:00 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[150px] bg-gray-200 rounded-lg mb-4 relative">
              <div className="w-full h-full bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#F53B49] rounded-full"></div>
              </div>
            </div>

            <button className="w-full py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
              Как проехать
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Отдел продаж</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 1</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">info@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    по вопросам консультирования, поставкам, гарантийным<br />
                    претензиям
                  </p>
                  <p className="text-sm mt-2">zakaz@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    для оформления заказов на оборудование, инвентарь
                  </p>
                  <p className="text-sm mt-2">agent@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounting and Service Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Отдел бухгалтерии</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">info@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Сервисная служба</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">service@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouses */}
        <div className="mb-12">
          <h2 className="font-heading text-[32px] text-layout-dark-grey mb-6 leading-none">Склады</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-[24px] text-layout-dark-grey mb-4 leading-none">Склад. Москва</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Адрес</p>
                    <p className="text-[16px] text-layout-dark-grey font-medium">
                      Московская область,<br />
                      Красногорский р-н пос.Гольево,<br />
                      Транспортная ул. дом #1
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                    <p className="text-[16px] text-layout-dark-grey font-medium">+7 (499) 677-56-32 доб. 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-heading text-[24px] text-layout-dark-grey mb-4 leading-none">Дополнительный склад. Москва</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Адрес</p>
                    <p className="text-[16px] text-layout-dark-grey font-medium">
                      Москва, ул. Промышленная 1А
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                    <p className="text-[16px] text-layout-dark-grey font-medium">+7 (499) 677-56-32 доб. 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
