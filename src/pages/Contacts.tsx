import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OfficeMap from '@/components/OfficeMap';
import PhotoSwiper from '@/components/PhotoSwiper';
import ShowroomMap from '@/components/ShowroomMap';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CallRequestDialog from '@/components/Header/CallRequestDialog';
import { MapPin, Phone, Clock, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
const Contacts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('moscow');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/lovable-uploads/a7a10f7b-32fb-4a8d-940d-364ba0c4a1d0.png', '/lovable-uploads/a9d600d0-b136-4d10-b09c-618bf653fa04.png', '/lovable-uploads/2b609d2f-6fc7-4781-b57a-142e817a9825.png', '/lovable-uploads/bce5f4f3-1a91-454a-b10f-92c2f907b7c1.png'];
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };
  return <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
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
        <h1 className="font-heading text-[48px] text-layout-dark-grey mb-6 leading-none md:text-[36px] md:mb-4">
          Контакты
        </h1>

        {/* Introductory Text */}
        <p className="text-gray-700 text-lg leading-relaxed text-left w-full mb-2 md:text-base">
          Хотите увидеть товары вживую, получить консультацию или оформить заказ?
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-left w-full mb-8 md:text-base md:mb-6">
          Мы всегда на связи.
        </p>

        {/* City Tabs */}
        <div className="flex gap-2 mb-8 md:flex-col md:gap-3 md:mb-6">
          <button onClick={() => setActiveTab('moscow')} className={`px-6 py-2 rounded-md font-medium transition-colors md:text-sm ${activeTab === 'moscow' ? 'bg-[#F53B49] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Контакты в Москве
          </button>
          <button onClick={() => setActiveTab('spb')} className={`px-6 py-2 rounded-md font-medium transition-colors md:text-sm ${activeTab === 'spb' ? 'bg-[#F53B49] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Контакты в Санкт-Петербурге
          </button>
        </div>

        {/* Company Store Section with Photo and Map */}
        <div className="mb-12 md:mb-8">
          <div className="bg-gray-50 rounded-lg flex h-[328px] overflow-hidden md:flex-col md:h-auto">
            {/* Text Section - Left Third */}
            <div className="flex-1 w-1/3 p-6 md:w-full md:p-4">
              {activeTab === 'moscow' ? <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-xl md:mb-3">
                    Шоу-рум WellFitness
                  </h2>
                  
                  <div className="space-y-3 text-gray-700 md:space-y-2">
                    <div className="flex items-start gap-2">
                      <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-sm md:text-xs">
                          Москва, ТЦ Капитолий, Правобережная улица, 1Б
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm md:text-xs">+7 (499) 677-56-32 доб. 337</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/5303d3e6-d397-4aa6-af39-40d3dbe6d3c4.png" alt="Режим работы" className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-sm md:text-xs">10:00 - 22:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 md:mt-4">
                    <CallRequestDialog>
                      <button className="px-4 py-2 bg-[#F53B49] text-white text-sm rounded-md hover:bg-[#e63946] transition-colors md:text-xs md:px-3">
                        Записаться на посещение
                      </button>
                    </CallRequestDialog>
                  </div>
                </> : <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 md:text-xl md:mb-3">
                    Склад
                  </h2>
                  
                  <div className="space-y-3 text-gray-700 md:space-y-2">
                    <div className="flex items-start gap-2">
                      <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-sm md:text-xs">
                          г. Санкт-Петербург, Красногвардейский пер 23 лит Е,<br />
                          Территория завода "Ильич". Заезд с Вазаского переулка
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm md:text-xs">8 (800) 775-12-17</p>
                      </div>
                    </div>
                  </div>
                </>}
            </div>
            
            {/* Photo Section - Middle Third */}
            <div className="flex-1 w-1/3 h-full overflow-hidden md:w-full md:h-48">
              <img src="/lovable-uploads/a75d40da-835e-454f-a1e4-62cb2a8a6d38.png" alt="Массажные кресла в шоуруме" className="w-full h-full object-cover" />
            </div>
            
            {/* Map Section - Right Third */}
            <div className="flex-1 w-1/3 h-full md:w-full md:h-48">
              <ShowroomMap coordinates={activeTab === 'spb' ? [30.324203737087338, 59.98157313429388] : undefined} isSpb={activeTab === 'spb'} />
            </div>
          </div>
        </div>

        {/* Office and Sales Departments - For both cities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 md:gap-3 md:mb-3">
          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Офис WellFitness</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/31c0ee66-1daf-4513-8947-c2990045d4a6.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Адрес</p>
                  <p className="text-sm md:text-xs">
                    Москва, ул. Маршала Прошлякова,<br />
                    д. 30, офис 407, БЦ «Зенит Плаза»
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/f90ab0e0-2a09-45ef-a7ac-3f95d97744c7.png" alt="Time" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Режим работы</p>
                  <p className="text-sm md:text-xs">09:30 – 17:30</p>
                </div>
              </div>

              <button onClick={() => {
              const address = "Москва, ул. Маршала Прошлякова, д. 30, офис 407, БЦ Зенит Плаза";
              const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
              window.open(googleMapsUrl, '_blank');
            }} className="w-full py-2 border border-[#F53B49] text-[#F53B49] text-sm rounded-md hover:bg-[#F53B49]/5 transition-colors md:text-xs md:py-1.5">
                Как проехать
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Отдел продаж PRO</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Телефон</p>
                  <p className="text-sm md:text-xs">{activeTab === 'spb' ? '88005553518' : '+7 (499) 677-56-32 доб. 5'}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">E-mail</p>
                  <p className="text-sm md:text-xs">pro@wellfitness.ru</p>
                   <p className="text-xs text-gray-500 mt-1 md:text-[10px]">
                     для консультаций<br />
                     по профессиональному оборудованию и комплексным решениям
                   </p>
                  <p className="text-sm mt-2 md:text-xs md:mt-1">zakaz@wellfitness.ru</p>
                   <p className="text-xs text-gray-500 mt-1 md:text-[10px]">
                     для приема дилерских заказов<br />
                     на оборудование, аксессуары, запчасти
                   </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Отдел продаж HOME</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Телефон</p>
                   <p className="text-sm md:text-xs">{activeTab === 'spb' ? '88003332595' : '+7 (499) 677-56-32 доб. 1-1'}</p>
                   {activeTab === 'moscow' && <p className="text-sm md:text-xs">+7 (499) 677-56-32 доб. 1-2</p>}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">E-mail</p>
                  <p className="text-sm md:text-xs">info@wellfitness.ru</p>
                   <p className="text-xs text-gray-500 mt-1 md:text-[10px]">
                     по общим вопросам, вопросам сотрудничества, жалобам<br />
                     и предложениям
                   </p>
                  <p className="text-sm mt-2 md:text-xs md:mt-1">agent@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1 md:text-[10px]">
                    для приема агентских заказов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accounting, Service and Logistics Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 md:gap-3 md:mb-8">
          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Отдел бухгалтерии</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Телефон</p>
                  <p className="text-sm md:text-xs">+7 (499) 677-56-32 доб. 4</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">E-mail</p>
                  <p className="text-sm md:text-xs">buh@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Сервисная служба</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Телефон</p>
                  <p className="text-sm md:text-xs">+7 (499) 677-56-32 доб. 2</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">E-mail</p>
                  <p className="text-sm md:text-xs">service@wellfitness.ru</p>
                  <p className="text-xs text-gray-500 mt-1 md:text-[10px]">
                    Звонки принимаются с 9 до 18, заявки на почту - круглосуточно.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 md:text-lg md:mb-3">Отдел логистики</h3>
            
            <div className="space-y-4 text-gray-700 md:space-y-3">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/82bf3bfd-4f25-47ab-bbce-696bba52d3bb.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Телефон</p>
                  <p className="text-sm md:text-xs">+7 (499) 677-56-32 доб. 3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/dd9c0181-26e7-4b1e-a41c-7ef47e57e5a6.png" alt="Email" className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">E-mail</p>
                  <p className="text-sm md:text-xs">logist@wellfitness.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouses - Only for Moscow */}
        {activeTab === 'moscow' && <div className="mb-12 md:mb-8">
            <h2 className="font-heading text-[32px] text-layout-dark-grey mb-6 leading-none md:text-[24px] md:mb-4">Склады</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4">
              <div className="bg-gray-50 rounded-lg p-4 md:p-3">
                <h3 className="font-heading text-[20px] text-layout-dark-grey mb-3 leading-none md:text-[18px] md:mb-2">Красногорск (Основной / МО)</h3>
                
                <div className="space-y-3 mb-4 md:space-y-2 md:mb-3">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1 md:text-xs">Адрес</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium md:text-xs">
                        Московская область, Красногорский р-н,<br />
                        пос. Гольево, ул. Центральная
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1 md:text-xs">Телефон</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium md:text-xs">+7 (499) 677-56-32 доб. 1</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-gray-50 rounded-lg p-4 md:p-3">
                <h3 className="font-heading text-[20px] text-layout-dark-grey mb-3 leading-none md:text-[18px] md:mb-2">Химки (МО)</h3>
                
                <div className="space-y-3 mb-4 md:space-y-2 md:mb-3">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png" alt="Location" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1 md:text-xs">Адрес</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium md:text-xs">
                        Московская область, г. Химки,<br />
                        мкр Сходня, ул. Некрасова, д. 2
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/c070b4b5-ffa6-4220-8bfd-ce9454b535c5.png" alt="Phone" className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] text-layout-grey-text mb-1 md:text-xs">Телефон</p>
                      <p className="text-[14px] text-layout-dark-grey font-medium md:text-xs">+7 (499) 677-56-32 доб. 1</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>}

        {/* Legal Information */}
        <div className="border border-[#F53B49] rounded-lg bg-white mb-12 md:mb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="legal-info" className="border-none">
              <AccordionTrigger className="px-6 pt-6 pb-2 text-left md:px-4 md:pt-4">
                <h2 className="font-heading text-[32px] text-layout-dark-grey leading-none md:text-[24px]">Юридическая информация</h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 md:px-4 md:pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 md:grid-cols-1">
                  <div className="space-y-4 md:space-y-3">
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Полное наименование организации</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">
                        Общество с ограниченной ответственностью "Оптима Импорт"
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Сокращенное наименование организации</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">ООО "Оптима Импорт"</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-3">
                      <div>
                        <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">ИНН</p>
                        <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">7734728519</p>
                      </div>
                      <div>
                        <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">КПП</p>
                        <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">773401001</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Юридический адрес</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">
                        123458, г. Москва, ул. Маршала Прошлякова, д.30, офис 407
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Фактический адрес</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">
                        123458, г. Москва, ул. Маршала Прошлякова, д.30, офис 407
                      </p>
                    </div>

                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Руководство</p>
                      <div className="text-[16px] text-layout-dark-grey font-medium space-y-1 md:text-sm">
                        <p>Генеральный директор: Ротенберг Евгений Ефимович</p>
                        <p>Главный бухгалтер: Охрянская Елена Анатольевна</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-3">
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Наименование банка</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">ПАО Сбербанк</p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Номер расчетного счета</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">40702810038000279897</p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Корреспондентский счет</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">30101810400000000225</p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">БИК</p>
                      <p className="text-[16px] text-layout-dark-grey font-medium md:text-sm">044525225</p>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Статистические коды</p>
                      <div className="text-[14px] text-layout-dark-grey font-medium space-y-1 md:text-xs">
                        <p>ОГРН 1147746799727</p>
                        <p>ОКПО 26478934</p>
                        <p>ОКОПФ 12165/ ОКФС 16</p>
                        <p>ОКТМО 45370000000 (ОКАТО 45283577000)</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[16px] text-layout-grey-text mb-1 md:text-sm">Контакты</p>
                      <div className="text-[16px] text-layout-dark-grey font-medium space-y-1 md:text-sm">
                        <p>Тел/Факс: 499-677-56-32</p>
                        <p>E-mail: info@wellfitness.ru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Contacts;