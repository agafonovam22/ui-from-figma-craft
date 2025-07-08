
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OfficeMap from '@/components/OfficeMap';
import PhotoSwiper from '@/components/PhotoSwiper';
import ShowroomMap from '@/components/ShowroomMap';
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
    '/lovable-uploads/32968eea-0eb6-4361-94d2-2871b2bec66f.png',
    '/lovable-uploads/92e9b953-ee04-4867-8d5b-1bfcf39adcee.png',
    '/lovable-uploads/e236b9ee-b2a8-44b0-8e42-a9ea45b4382d.png'
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
        <h1 className="font-heading text-[48px] text-layout-dark-grey mb-6 leading-none">
          Контакты
        </h1>

        {/* Introductory Text */}
        <p className="text-gray-700 text-lg leading-relaxed text-left w-full mb-8">
          Хотите увидеть товары вживую, получить консультацию или оформить заказ? Мы всегда на связи.
        </p>

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
          <div className="bg-gray-50 rounded-lg flex h-[328px] overflow-hidden">
            <div className="flex-1 w-1/3 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Шоу-рум WellFitness
              </h2>
              
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm">
                      Москва, ТЦ Капитолий, Правобережная улица, 1Б
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm">+7 (499) 677-56-32 доб. 337</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src="/lovable-uploads/5303d3e6-d397-4aa6-af39-40d3dbe6d3c4.png" alt="Режим работы" className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-sm">10:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="px-4 py-2 bg-[#F53B49] text-white text-sm rounded-md hover:bg-[#e63946] transition-colors">
                  Оставить заявку
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  Как проехать
                </button>
              </div>
            </div>
            
            <div className="w-2/3 h-full">
              <ShowroomMap />
            </div>
          </div>
        </div>

        {/* Photo Swiper Gallery */}
        <div className="mb-12">
          <PhotoSwiper 
            images={images}
            autoplay={true}
            autoplayInterval={5000}
          />
        </div>

        {/* Office, Map and Sales Department */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-50 rounded-lg p-6 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Офис</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/31c0ee66-1daf-4513-8947-c2990045d4a6.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Адрес</p>
                    <p className="text-sm">
                      Москва, ул. Маршала Прошлякова,<br />
                      д. 30, офис 407, БЦ "Зенит Плаза"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <img src="/lovable-uploads/f90ab0e0-2a09-45ef-a7ac-3f95d97744c7.png" alt="Time" className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[16px] text-layout-grey-text mb-1">Режим работы</p>
                    <p className="text-sm">09:30 – 17:30</p>
                  </div>
                </div>

                <button className="w-full py-2 border border-[#F53B49] text-[#F53B49] text-sm rounded-md hover:bg-[#F53B49]/5 transition-colors">
                  Как проехать
                </button>
              </div>

              <div className="h-[200px] rounded-lg overflow-hidden">
                <OfficeMap />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Отдел продаж</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 1-1</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 1-2</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">info@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    по общим вопросам, вопросам сотрудничества, жалобам и<br />
                    предложениям
                  </p>
                  <p className="text-sm mt-2">zakaz@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    для приема дилерских заказов на оборудование, аксессуары,<br />
                    запчасти
                  </p>
                  <p className="text-sm mt-2">agent@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    для приема агентских заказов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounting, Service and Logistics Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Отдел бухгалтерии</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 4</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">buh@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Сервисная служба</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 2</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">service@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Звонки принимаются с 9 до 18, заявки на почту - круглосуточно.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Отдел логистики</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">Телефон</p>
                  <p className="text-sm">+7 (499) 677-56-32 доб. 3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">E-mail</p>
                  <p className="text-sm">logist@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouses */}
        <div className="mb-12">
          <h2 className="font-heading text-[32px] text-layout-dark-grey mb-6 leading-none">Склады</h2>
          
          {activeTab === 'moscow' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-heading text-[20px] text-layout-dark-grey mb-3 leading-none">Красногорск (Основной / МО)</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Адрес</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">
                        Московская область, Красногорский р-н,<br />
                        пос. Гольево, ул. Центральная
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Телефон</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">+7 (499) 677-56-32 доб. 1</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 border border-[#F53B49] text-[#F53B49] text-sm rounded-md hover:bg-[#F53B49]/5 transition-colors">
                  Как проехать
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-heading text-[20px] text-layout-dark-grey mb-3 leading-none">Химки (МО)</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Адрес</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">
                        Московская область, г. Химки,<br />
                        мкр Сходня, ул. Некрасова, д. 2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Телефон</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">+7 (499) 677-56-32 доб. 1</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 border border-[#F53B49] text-[#F53B49] text-sm rounded-md hover:bg-[#F53B49]/5 transition-colors">
                  Как проехать
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-heading text-[20px] text-layout-dark-grey mb-3 leading-none">Санкт-Петербург (СПБ)</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Адрес</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">
                        г. Санкт-Петербург, Красногвардейский пер 23 лит Е,<br />
                        Территория завода "Ильич". Заезд с Вазаского переулка
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1">Телефон</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium">+7 (905) 254-28-04</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 border border-[#F53B49] text-[#F53B49] text-sm rounded-md hover:bg-[#F53B49]/5 transition-colors">
                  Как проехать
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Legal Information */}
        <div className="border border-[#F53B49] rounded-lg p-6 bg-white mb-12">
          <h2 className="font-heading text-[32px] text-layout-dark-grey mb-6 leading-none">Юридическая информация</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Полное наименование организации</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">
                  Общество с ограниченной ответственностью "Оптима Импорт"
                </p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Сокращенное наименование организации</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">ООО "Оптима Импорт"</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">ИНН</p>
                  <p className="text-[16px] text-layout-dark-grey font-medium">7734728519</p>
                </div>
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1">КПП</p>
                  <p className="text-[16px] text-layout-dark-grey font-medium">773401001</p>
                </div>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Юридический адрес</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">
                  123458, г. Москва, ул. Маршала Прошлякова, д.30, офис 407
                </p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Фактический адрес</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">
                  123458, г. Москва, ул. Маршала Прошлякова, д.30, офис 407
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Наименование банка</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">ПАО Сбербанк</p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Номер расчетного счета</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">40702810038000279897</p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Корреспондентский счет</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">30101810400000000225</p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">БИК</p>
                <p className="text-[16px] text-layout-dark-grey font-medium">044525225</p>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Статистические коды</p>
                <div className="text-[14px] text-layout-dark-grey font-medium space-y-1">
                  <p>ОГРН 1147746799727</p>
                  <p>ОКПО 26478934</p>
                  <p>ОКОПФ 12165/ ОКФС 16</p>
                  <p>ОКТМО 45370000000 (ОКАТО 45283577000)</p>
                </div>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Контакты</p>
                <div className="text-[16px] text-layout-dark-grey font-medium space-y-1">
                  <p>Тел/Факс: 499-677-56-32</p>
                  <p>E-mail: info@wellfitness.ru</p>
                </div>
              </div>
              
              <div>
                <p className="text-[16px] text-layout-grey-text mb-1">Руководство</p>
                <div className="text-[16px] text-layout-dark-grey font-medium space-y-1">
                  <p>Генеральный директор: Ротенберг Евгений Ефимович</p>
                  <p>Главный бухгалтер: Охрянская Елена Анатольевна</p>
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
