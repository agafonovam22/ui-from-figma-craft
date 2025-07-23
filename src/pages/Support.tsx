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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SupportCitySelector from '@/components/SupportCitySelector';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [selectedCity, setSelectedCity] = useState('Москва');

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

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs and Title */}
          <Breadcrumb className="mb-6">
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
        </div>

        {/* Hero Section */}
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-8 text-white relative overflow-hidden h-[328px] flex items-center">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  Разрабатаем<br />
                  3D-проект<br />
                  бесплатно!
                </h2>
                <button className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Оставить заявку
                </button>
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
        </div>

        {/* Tabs Section */}
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
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
          {activeTab === 'instructions' && (
            <div className="space-y-4">
              <div className="space-y-2">
                {[
                  { name: "BowFlex" },
                  { name: "TRUE" },
                  { name: "Schwinn" },
                  { name: "Cardio Power" },
                  { name: "Life Fitness" },
                  { name: "Technogym" }
                ].map((brand, brandIndex) => (
                  <div key={brandIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="bg-gray-100 px-6 py-4 text-left text-[#262631]"
                      style={{ fontFamily: 'Benzin-Regular', fontSize: '16px' }}
                    >
                      {brand.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-12">
              {/* Город доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <h3 style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '20px'
                    }}>
                      Город доставки
                    </h3>
                    <SupportCitySelector 
                      selectedCity={selectedCity} 
                      onCitySelect={setSelectedCity}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#262631] text-[16px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Доставка по {selectedCity} осуществляется в течение 1-2 дней с момента заказа.<br />
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Стоимость доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Стоимость доставки</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="mb-4 pb-3 border-b" style={{
                        fontFamily: 'Benzin-Medium',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}>Заказ от 30 001 ₽</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b">
                          <span style={{
                            color: 'var(--Dark-Grey, #262631)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '120%',
                            letterSpacing: '0.32px'
                          }}>Автомобильная доставка по г. Москве в пределах МКАД</span>
                          <span className="text-[#F53B49] font-semibold" style={{
                            fontFamily: 'Manrope',
                            fontSize: '16px'
                          }}>Бесплатно</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span style={{
                            color: 'var(--Dark-Grey, #262631)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '120%',
                            letterSpacing: '0.32px'
                          }}>Автомобильная доставка по Московской Области</span>
                          <span className="text-[#F53B49] font-semibold whitespace-nowrap" style={{
                            fontFamily: 'Manrope',
                            fontSize: '16px'
                          }}>30₽/км</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span style={{
                            color: 'var(--Dark-Grey, #262631)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '120%',
                            letterSpacing: '0.32px'
                          }}>Курьерская доставка (вес до 3 кг)</span>
                          <span className="text-[#F53B49] font-semibold" style={{
                            fontFamily: 'Manrope',
                            fontSize: '16px'
                          }}>500₽</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-gray-50 p-6 rounded-lg h-fit">
                      <h4 className="mb-4 pb-3 border-b" style={{
                        fontFamily: 'Benzin-Medium',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}>Заказ до 30 000 ₽</h4>
                      <div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span style={{
                            color: 'var(--Dark-Grey, #262631)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '120%',
                            letterSpacing: '0.32px'
                          }}>Автомобильная доставка по г. Москве в пределах МКАД</span>
                          <span className="text-[#F53B49] font-semibold" style={{
                            fontFamily: 'Manrope',
                            fontSize: '16px'
                          }}>1000 ₽</span>
                        </div>
                        <div className="h-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

               {/* Самовывоз со склада */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="mb-6" style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Самовывоз со склада</h3>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    {/* Main Warehouse */}
                    <div>
                      <h4 className="mb-2" style={{
                        fontFamily: 'Benzin-Medium',
                        fontSize: '16px'
                      }}>Склад</h4>
                      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                        <div className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                          <div>Московская область, Красногорский р-н, д.</div>
                          <div>Гольево, улица Центральная ул., с44,</div>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="text-sm text-green-600 font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>В наличии</div>
                            <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>пн - пт с 09:30-18:00</div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="h-px bg-gray-300"></div>
                    
                    {/* Additional Warehouse */}
                    <div>
                      <h4 className="mb-2" style={{
                        fontFamily: 'Benzin-Medium',
                        fontSize: '16px'
                      }}>Дополнительный склад</h4>
                      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                        <div className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                          <div>Красногвардейский пер 23 лит Е, территория</div>
                          <div>завода "Ильич", заезд с Вязского переулка.</div>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="text-sm text-green-600 font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>В наличии</div>
                            <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>пн - пт с 10:00-18:00</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 ml-[60px]" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                          <div>Выдача осуществляется оформленных заказов,</div>
                          <div>при согласовании даты и времени приезда</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Доставка по России */}
              <div className="flex gap-8 mb-8">
                <div className="w-80 flex-shrink-0">
                  <h4 className="mb-4" style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Доставка по России</h4>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Определяется сроками доставки транспортной компании. Доставка товара на склад транспортной компании осуществляется в течение 1-2 дней с момента заказа, в режиме работы: Понедельник - Пятница
                      </p>
                      <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Стоимость доставки определяется тарифами транспортных компаний, оплата за доставку осуществляется при получении товара
                      </p>
                    </div>

                    {/* Transport Companies */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-0">
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>DPD</div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>СДЭК</div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Байкал сервис</div>
                        </div>
                        <div className="space-y-0">
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>DPD</div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>СДЭК</div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="font-medium py-3" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Байкал сервис</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Калькулятор доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h4 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Калькулятор доставки</h4>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 p-6 rounded-lg h-[364px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 h-full">
                      {/* Calculator Form */}
                       <div className="space-y-3 flex flex-col h-full">
                         <input
                           type="text"
                           placeholder="Пункт отправления"
                           className="w-full p-3 border rounded-lg bg-gray-100 benzin-placeholder"
                           style={{fontFamily: 'Manrope', fontSize: '16px'}}
                         />
                         <input
                           type="text"
                           placeholder="Пункт назначения"
                           className="w-full p-3 border rounded-lg bg-gray-100 benzin-placeholder"
                           style={{fontFamily: 'Manrope', fontSize: '16px'}}
                         />
                         <input
                           type="text"
                           placeholder="Габариты груза, м"
                           className="w-full p-3 border rounded-lg bg-gray-100 benzin-placeholder"
                           style={{fontFamily: 'Manrope', fontSize: '16px'}}
                         />
                         <div className="grid grid-cols-2 gap-2 flex-1">
                           <input
                             type="number"
                             placeholder="Вес груза, кг"
                             className="p-3 border rounded-lg bg-gray-100 benzin-placeholder"
                             style={{fontFamily: 'Manrope', fontSize: '16px'}}
                           />
                           <input
                             type="number"
                             placeholder="Объем груза, м³"
                             className="p-3 border rounded-lg bg-gray-100 benzin-placeholder"
                             style={{fontFamily: 'Manrope', fontSize: '16px'}}
                           />
                         </div>
                         <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 mt-auto"
                           style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                           Рассчитать
                         </button>
                      </div>

                      {/* Delivery Options */}
                       <div className="space-y-3 overflow-y-auto">
                        <div className="space-y-3">
                           <div className="grid grid-cols-3 gap-4 items-center">
                             <div>
                               <div className="font-medium" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>СДЭК</div>
                               <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До 2 дней</div>
                             </div>
                             <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До пункта выдачи</div>
                             <div className="font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>2 000 ₽</div>
                           </div>
                          <div className="h-px bg-gray-300"></div>
                           <div className="grid grid-cols-3 gap-4 items-center">
                             <div>
                               <div className="font-medium" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>СДЭК</div>
                               <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До 2 дней</div>
                             </div>
                             <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До двери</div>
                             <div className="font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>2 000 ₽</div>
                           </div>
                          <div className="h-px bg-gray-300"></div>
                           <div className="grid grid-cols-3 gap-4 items-center">
                             <div>
                               <div className="font-medium" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Деловые линии</div>
                               <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До 2 дней</div>
                             </div>
                             <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До пункта выдачи</div>
                             <div className="font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>2 000 ₽</div>
                           </div>
                          <div className="h-px bg-gray-300"></div>
                           <div className="grid grid-cols-3 gap-4 items-center">
                             <div>
                               <div className="font-medium" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Деловые линии</div>
                               <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До 2 дней</div>
                             </div>
                             <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>До пункта выдачи</div>
                             <div className="font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>2 000 ₽</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Оплата для физ. лиц */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h4 className="mb-6" style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Оплата для физ. лиц</h4>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] mb-[10px]">
                    {/* Оплата наличными */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата наличными</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Возможна при оформлении всех способов доставки со всех субъектах РФ, где есть наши филиалы и терминалы наших партнеров, предоставляющих курьерские услуги.
                      </p>
                    </div>

                    {/* Оплата картой */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата картой</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Возможна при оформлении всех способов доставки, во время самовывоза, а также курьеру при получении.
                      </p>
                    </div>

                    {/* Оплата онлайн */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата онлайн</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
                    {/* Наложенный платеж */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Наложенный платеж</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        При отправке в регионы. Рассчитывается по тарифам транспортных компаний и осуществляется с помощью партнеров перевозчиков «ПЭК» и «Деловые линии»
                      </p>
                    </div>

                    {/* В рассрочку */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>В рассрочку</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        от банков партнеров ОТП, Халва, Тинькофф, Сбербанк
                      </p>
                    </div>

                    {/* Безналичная оплата */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                      <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Безналичная оплата</h5>
                      <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Выставление счета
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Оплата для юр. лиц */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h4 className="mb-6" style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Оплата для юр. лиц</h4>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {/* Оплата онлайн */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                      <h5 className="text-lg font-medium mb-3" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата онлайн</h5>
                      <p className="text-sm" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                      </p>
                    </div>

                    {/* Безналичная оплата */}
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                      <h5 className="text-lg font-medium mb-3" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Безналичная оплата</h5>
                      <p className="text-sm" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        Выставление счета
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'return' && (
            <div className="space-y-8">
              {/* Город доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <h3 style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '20px'
                    }}>
                      Город доставки
                    </h3>
                    <SupportCitySelector 
                      selectedCity={selectedCity} 
                      onCitySelect={setSelectedCity}
                    />
                  </div>
                </div>
                 <div className="flex-1">
                   <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                     Согласно Закону о защите прав потребителей, при дистанционном способе покупки обмен товара происходит через оформление возврата.
                   </p>
                   <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                     Вы не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                   </p>
                 </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Возврат товара по качеству */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Возврат товара по качеству</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* Возврат товара надлежащего качества */}
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <h4 className="text-lg font-medium mb-4">Возврат товара надлежащего качества</h4>
                       <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Возврат товара надлежащего качества, если он не подходит по размеру, цвету, фасону или любой другой причине, производится на основании заявления на возврат, которое необходимо подать в течение 14 дней с момента покупки товара, не считая дня покупки.
                       </p>
                       <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         При возврате товара надлежащего качества возвращается только стоимость товара. Стоимость доставки, а также стоимость обратной пересылки (если она производилась за Ваш счет) не компенсируются.
                       </p>
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Вы не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                       </p>
                     </div>

                     {/* Возврат товара ненадлежащего качества */}
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <h4 className="text-lg font-medium mb-4">Возврат товара ненадлежащего качества</h4>
                       <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Возврат товара ненадлежащего качества, если он не подходит по размеру, цвету, фасону или любой другой причине, производится на основании заявления на возврат, которое необходимо подать в течение 14 дней с момента покупки товара, не считая дня покупки.
                       </p>
                       <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         При возврате товара ненадлежащего качества возвращается только стоимость товара. Стоимость доставки, а также стоимость обратной пересылки (если она производилась за Ваш счет) не компенсируются.
                       </p>
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Вы не вправе отказаться от товара ненадлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                       </p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Разделительная линия */}
              <div className="h-px bg-gray-300"></div>

              {/* Условия возврата товара */}
              <div className="flex gap-8 mb-8">
                <div className="w-80 flex-shrink-0">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Условия возврата товара</h3>
                </div>
                <div className="flex-1">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-4">Возврат товара надлежащего качества возможен при условии:</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                          <div className="text-[#F53B49] font-bold text-2xl flex-shrink-0">
                            1
                          </div>
                           <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                             Сохранения его потребительских свойств и товарного вида (отсутствие следов эксплуатации и носки, наличие оригинальной и неповрежденной упаковки и ярлыков).
                           </p>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="text-[#F53B49] font-bold text-2xl flex-shrink-0">
                            2
                          </div>
                           <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                             Наличия документа, подтверждающего факт и условия покупки товара (кассовый чек или товарный чек)*.
                           </p>
                        </div>
                      </div>
                    </div>

                    {/* Разделительная линия */}
                    <div className="h-px bg-gray-300 my-6"></div>

                    <div>
                      <h4 className="text-lg font-medium mb-4">Возврат товара не надлежащего качества возможен при условии:</h4>
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Возврат товара ненадлежащего качества возможен при условии сохранения документа, подтверждающего факт и условия покупки указанного товара (кассовый чек или товарный чек)*.
                       </p>
                    </div>
                  </div>
                </div>
               </div>

               {/* Разделительная линия */}
               <div className="h-px bg-gray-300"></div>

               {/* Сроки возврата денежных средств */}
              <div className="flex gap-8 mb-8">
                <div className="w-80 flex-shrink-0">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Сроки возврата денежных средств</h3>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 p-6 rounded-lg">
                     <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                       Срок возврата денежных средств зависит от способа возврата товара и составляет не более 10 дней с даты поступления возвращенного товара в интернет-магазин вместе с заполненным заявлением на возврат. По итогам проведения экспертизы товара принимается решение о возврате или не возврате денежных средств.
                     </p>
                  </div>
                </div>
               </div>

               {/* Разделительная линия */}
               <div className="h-px bg-gray-300"></div>

               {/* Возврат денег при наличной форме оплаты заказа */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Возврат денег при наличной форме оплаты заказа осуществляется</h3>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 p-6 rounded-lg">
                     <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                       При возврате товара через розничный магазин - наличными в розничном магазине при возврате через партнерскую курьерскую компанию - только на лицевой счет клиента. Реквизиты Вашего банковского счета и банка необходимо указать в заявлении на возврат.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-8">
              {/* Warranty Period Section */}
              <div>
                <div className="flex gap-8 mb-8">
                  <div className="w-80 flex-shrink-0">
                    <h3 style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '20px'
                    }}>Гарантийный период на продукцию составляет</h3>
                  </div>
                   <div className="flex-1">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-8">
                       {/* Running Equipment */}
                       <div>
                         <div className="bg-gray-100 p-6 rounded-lg">
                           <h4 className="text-lg font-medium mb-6" style={{fontFamily: 'Benzin-Medium', fontSize: '18px'}}>Беговые дорожки</h4>
                           <div className="space-y-2">
                             <div className="flex justify-between items-center py-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Sole Fitness</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                             <div className="h-px bg-gray-300"></div>
                             <div className="flex justify-between items-center py-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Nautilus</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                             <div className="py-1">
                               <div className="flex justify-between items-center mb-1">
                                 <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>на мотор</span>
                                 <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>3 года</span>
                               </div>
                               <div className="flex justify-between items-center mb-1">
                                 <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>беговое полотно</span>
                                 <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>6 месяцев</span>
                               </div>
                               <div className="flex justify-between items-center">
                                 <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>рама</span>
                                 <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>10 лет</span>
                               </div>
                             </div>
                             <div className="h-px bg-gray-300"></div>
                             <div className="flex justify-between items-center py-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Bowflex</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                             <div className="h-px bg-gray-300"></div>
                             <div className="flex justify-between items-center py-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>CardioPower</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                             <div className="h-px bg-gray-300"></div>
                             <div className="flex justify-between items-center py-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Optima Fitness</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                           </div>
                         </div>
                         <div className="mt-[10px]">
                           <button className="w-full bg-[#F53B49] text-white px-8 py-3 rounded hover:bg-[#e63946] transition-colors font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                             Скачать файлы по рекомендации тех. обслуживания
                           </button>
                         </div>
                       </div>

                       {/* Elliptical Equipment */}
                       <div className="bg-gray-100 p-6 rounded-lg h-fit">
                         <h4 className="text-lg font-medium mb-6" style={{fontFamily: 'Benzin-Medium', fontSize: '18px'}}>Эллиптические тренажеры</h4>
                         <div className="space-y-2">
                           <div className="flex justify-between items-center py-1">
                             <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Sole Fitness</span>
                             <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                           </div>
                           <div className="h-px bg-gray-300"></div>
                           <div className="py-1">
                             <div className="flex justify-between items-center mb-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Nautilus</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                             </div>
                             <div className="flex justify-between items-center mb-1">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>на мотор</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>10 лет</span>
                             </div>
                             <div className="flex justify-between items-center">
                               <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>рама</span>
                               <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>10 лет</span>
                             </div>
                           </div>
                           <div className="h-px bg-gray-300"></div>
                           <div className="flex justify-between items-center py-1">
                             <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Bowflex</span>
                             <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                           </div>
                           <div className="h-px bg-gray-300"></div>
                           <div className="flex justify-between items-center py-1">
                             <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>CardioPower</span>
                             <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                           </div>
                           <div className="h-px bg-gray-300"></div>
                           <div className="flex justify-between items-center py-1">
                             <span className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>Optima Fitness</span>
                             <span className="text-[#F53B49] font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>24 месяца</span>
                           </div>
                         </div>
                       </div>
                     </div>

                   </div>
                </div>
               </div>

               {/* Разделительная линия */}
               <div className="h-px bg-gray-300"></div>

               {/* Warranty Loss Section */}
              <div className="flex gap-8 mb-12">
                 <div className="w-80 flex-shrink-0">
                   <h3 style={{
                     fontFamily: 'Benzin-Medium',
                     fontSize: '20px',
                     color: '#262631'
                   }}>Гарантия теряет силу</h3>
                   <p style={{
                     fontFamily: 'Benzin-Medium',
                     fontSize: '20px',
                     color: '#262631'
                   }} className="mt-2">в случаях</p>
                 </div>
                 <div className="flex-1">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] mb-[10px]">
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Истечения гарантийного срока, указанного в гарантийном талоне
                       </p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Отсутствия или неправильного заполнения гарантийного талона
                       </p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         При неправильной эксплуатации тренажера и не соблюдении рекомендаций по техническому обслуживанию
                       </p>
                     </div>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px]">
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         На все части тренажера подверженные естественному износу и относящиеся к расходным материалам
                       </p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                       <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Ненадлежащего ремонта, переделки или механических повреждений нанесенных изделию во время транспортировки, хранения и использования изделия покупателем или третьими лицами
                       </p>
                     </div>
                   </div>

                   <div className="bg-gray-50 p-6 rounded-lg">
                     <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                       При появлении дефектов на поверхностях и в их структуре, вызванных внешними воздействиями (таким как: перепады напряжения в сети электропитания, повышенной влажности и сухости воздуха в помещении, нарушения температурного режима и т.д.)
                     </p>
                   </div>
                </div>
               </div>

               {/* Разделительная линия */}
               <div className="h-px bg-gray-300"></div>

               {/* Recommendations Section */}
              <div>
                <div className="border-2 border-[#F53B49] rounded-lg p-8">
                  <h3 className="mb-6" style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px'
                  }}>Рекомендации по тех. обслуживанию тренажера</h3>
                   <p className="text-gray-700 mb-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                     Производится покупателем самостоятельно (не реже 1 раз в 6 месяцев или чаще в случаях усиленной эксплуатации)
                   </p>

                   <div className="space-y-6">
                     <div>
                       <p className="font-medium text-gray-900 mb-2" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         <strong>Беговые дорожки:</strong> смазка беговой деки / регулировка натяжения бегового полотна
                       </p>
                       <div className="text-sm text-gray-700 space-y-1">
                         <p style={{fontFamily: 'Manrope', fontSize: '16px'}}>Легкая эксплуатация (меньше 3 час/нед) — каждые 60 дней</p>
                         <p style={{fontFamily: 'Manrope', fontSize: '16px'}}>Средняя эксплуатация (3-5 час/нед) — каждые 45 дней</p>
                         <p style={{fontFamily: 'Manrope', fontSize: '16px'}}>Повышенная эксплуатация (больше 5 час/нед) — каждые 30 дней</p>
                       </div>
                     </div>

                     <div>
                       <p className="font-medium text-gray-900 mb-2" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         <strong>Эллиптические тренажеры / Велотренажеры:</strong> протирка болтов соединений
                       </p>
                       <p className="text-sm text-gray-700 mb-2" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         Рекомендована установка ИБП (источника бесперебойного питания)
                       </p>
                       <p className="text-sm text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                         К расходным материалам относятся: Ремни, беговые полотна, беговые деки.
                       </p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua?
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex gap-4 mt-8">
                <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                  Сервис
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                  Помощь покупателю
                </button>
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-4">
              {/* Беговые дорожки */}
              <Collapsible 
                open={openSections['treadmills']} 
                onOpenChange={() => toggleSection('treadmills')}
                className="border border-gray-200 rounded-lg"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-800 text-white rounded-t-lg hover:bg-gray-700 transition-colors">
                  <span className="font-medium">Беговые дорожки</span>
                  {openSections['treadmills'] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white">
                  <div className="divide-y divide-gray-100">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4">
                        <span className="text-gray-700">Беговая дорожка CardioPower T10</span>
                        <button className="bg-[#F53B49] text-white px-4 py-2 rounded hover:bg-[#e63946] transition-colors text-sm">
                          Скачать
                        </button>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Велотренажеры */}
              <Collapsible 
                open={openSections['bikes']} 
                onOpenChange={() => toggleSection('bikes')}
                className="border border-gray-200 rounded-lg"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 text-gray-700 rounded-t-lg hover:bg-gray-200 transition-colors">
                  <span className="font-medium">Велотренажеры</span>
                  {openSections['bikes'] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white">
                  <div className="space-y-2 p-4">
                    {/* Гребные тренажеры */}
                    <Collapsible 
                      open={openSections['rowing']} 
                      onOpenChange={() => toggleSection('rowing')}
                      className="border border-gray-100 rounded"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                        <span className="text-sm">Гребные тренажеры</span>
                        {openSections['rowing'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white">
                        <div className="p-2">
                          <p className="text-sm text-gray-600">Гребные тренажеры контент</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Эллиптические тренажеры */}
                    <Collapsible 
                      open={openSections['elliptical']} 
                      onOpenChange={() => toggleSection('elliptical')}
                      className="border border-gray-100 rounded"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                        <span className="text-sm">Эллиптические тренажеры</span>
                        {openSections['elliptical'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white">
                        <div className="p-2">
                          <p className="text-sm text-gray-600">Эллиптические тренажеры контент</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Велотренажеры */}
                    <Collapsible 
                      open={openSections['bikes-sub']} 
                      onOpenChange={() => toggleSection('bikes-sub')}
                      className="border border-gray-100 rounded"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                        <span className="text-sm">Велотренажеры</span>
                        {openSections['bikes-sub'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="bg-white">
                        <div className="p-2">
                          <p className="text-sm text-gray-600">Велотренажеры контент</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Bowflex sections */}
              {['Bowflex', 'Bowflex', 'Bowflex', 'Bowflex', 'Bowflex', 'Bowflex'].map((title, index) => (
                <Collapsible 
                  key={`bowflex-${index}`}
                  open={openSections[`bowflex-${index}`]} 
                  onOpenChange={() => toggleSection(`bowflex-${index}`)}
                  className="border border-gray-200 rounded-lg"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-100 text-gray-700 rounded-t-lg hover:bg-gray-200 transition-colors">
                    <span className="font-medium">{title}</span>
                    {openSections[`bowflex-${index}`] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-white">
                    <div className="p-4">
                      <p className="text-gray-600">Контент для {title}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          )}

          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 style={{
                fontFamily: 'Benzin-Medium',
                fontSize: '20px'
              }}>Личный кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о личном кабинете.</p>
              </div>
            </div>
          )}

          {activeTab === 'b2b' && (
            <div className="space-y-6">
              <h3 style={{
                fontFamily: 'Benzin-Medium',
                fontSize: '20px'
              }}>B2B кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о B2B кабинете для корпоративных клиентов.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
