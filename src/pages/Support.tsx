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
        {activeTab === 'delivery' && (
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] mb-12">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/abd58070-8439-4f7c-8105-b00eed3b572f.png"
                alt="Доставка и оплата"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
        
        {activeTab !== 'delivery' && (
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
        )}

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
              <Accordion type="multiple" className="space-y-2">
                {[
                  {
                    name: "BowFlex",
                    categories: [
                      {
                        name: "Беговые дорожки",
                        equipment: [
                          "Беговая дорожка CardioPower T10",
                          "Беговая дорожка CardioPower T10",
                          "Беговая дорожка CardioPower T10",
                          "Беговая дорожка CardioPower T10",
                          "Беговая дорожка CardioPower T10",
                          "Беговая дорожка CardioPower T10"
                        ]
                      },
                      {
                        name: "Велотренажеры",
                        equipment: [
                          "Велотренажер BowFlex C6",
                          "Велотренажер BowFlex VeloCore",
                          "Велотренажер BowFlex Max Trainer"
                        ]
                      },
                      {
                        name: "Гребные тренажеры",
                        equipment: [
                          "Гребной тренажер BowFlex PR1000",
                          "Гребной тренажер BowFlex PR3000"
                        ]
                      },
                      {
                        name: "Эллиптические тренажеры",
                        equipment: [
                          "Эллиптический тренажер BowFlex Max Trainer M6",
                          "Эллиптический тренажер BowFlex Max Trainer M8"
                        ]
                      },
                      {
                        name: "Велотренажеры",
                        equipment: [
                          "Велотренажер BowFlex C6 V2",
                          "Велотренажер BowFlex VeloCore 16"
                        ]
                      }
                    ]
                  },
                  {
                    name: "TRUE",
                    categories: [
                      {
                        name: "Беговые дорожки",
                        equipment: [
                          "Беговая дорожка TRUE PS100",
                          "Беговая дорожка TRUE PS300",
                          "Беговая дорожка TRUE PS800"
                        ]
                      },
                      {
                        name: "Велотренажеры",
                        equipment: [
                          "Велотренажер TRUE CS200",
                          "Велотренажер TRUE CS400"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Schwinn",
                    categories: [
                      {
                        name: "Велотренажеры",
                        equipment: [
                          "Велотренажер Schwinn IC4",
                          "Велотренажер Schwinn IC8",
                          "Велотренажер Schwinn Airdyne AD7"
                        ]
                      },
                      {
                        name: "Эллиптические тренажеры",
                        equipment: [
                          "Эллиптический тренажер Schwinn 470",
                          "Эллиптический тренажер Schwinn 570E"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Cardio Power",
                    categories: [
                      {
                        name: "Беговые дорожки",
                        equipment: [
                          "Беговая дорожка CardioPower T15",
                          "Беговая дорожка CardioPower T20",
                          "Беговая дорожка CardioPower T25"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Life Fitness",
                    categories: [
                      {
                        name: "Беговые дорожки",
                        equipment: [
                          "Беговая дорожка Life Fitness T3",
                          "Беговая дорожка Life Fitness T5",
                          "Беговая дорожка Life Fitness T7"
                        ]
                      },
                      {
                        name: "Велотренажеры",
                        equipment: [
                          "Велотренажер Life Fitness C1",
                          "Велотренажер Life Fitness C3"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Technogym",
                    categories: [
                      {
                        name: "Беговые дорожки",
                        equipment: [
                          "Беговая дорожка Technogym Run Now",
                          "Беговая дорожка Technogym Artis Run"
                        ]
                      },
                      {
                        name: "Эллиптические тренажеры",
                        equipment: [
                          "Эллиптический тренажер Technogym Cross Personal",
                          "Эллиптический тренажер Technogym Artis Synchro"
                        ]
                      }
                    ]
                  }
                ].map((brand, brandIndex) => (
                  <AccordionItem key={brandIndex} value={`brand-${brandIndex}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger 
                      className="bg-gray-100 hover:bg-gray-200 data-[state=open]:bg-[#262631] data-[state=open]:text-white px-6 py-4 text-left hover:no-underline transition-colors text-[#262631]"
                      style={{ fontFamily: 'Benzin-Regular', fontSize: '16px' }}
                    >
                      {brand.name}
                    </AccordionTrigger>
                    <AccordionContent className="p-0 border-l-2 border-gray-300 ml-6">
                      <div className="space-y-[6px] pl-6">
                        {brand.categories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="bg-gray-100 rounded-lg overflow-hidden">
                            <Accordion type="multiple">
                              <AccordionItem value={`category-${brandIndex}-${categoryIndex}`} className="border-0">
                                <AccordionTrigger 
                                  className="bg-gray-100 hover:bg-gray-200 px-6 py-4 text-left hover:no-underline"
                                  style={{ fontFamily: 'Benzin-Regular', fontSize: '16px' }}
                                >
                                  {category.name}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 pt-2 bg-white">
                                  <div className="space-y-0">
                                    {category.equipment.map((equipment, equipmentIndex) => (
                                      <div key={equipmentIndex} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                                        <span 
                                          className="text-gray-700"
                                          style={{ fontFamily: 'Benzin-Regular', fontSize: '16px' }}
                                        >
                                          {equipment}
                                        </span>
                                        <button className="bg-[#F53B49] hover:bg-[#E02D3B] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                                          Скачать
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {activeTab === 'delivery' && (
            <div className="space-y-12">
              {/* Город доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <h3 style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '20px',
                      lineHeight: '1.2'
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
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/a7b6a3ba-1c90-405d-8a26-02ea55f0de59.png" alt="СДЭК" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/35079b73-9796-4789-896a-edf17dfdfea8.png" alt="DPD" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/3807c83a-2401-4466-a3ca-9d11dddb84ba.png" alt="Байкал Сервис" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/c124b62c-d31b-4c07-95b5-a36fc92cb431.png" alt="ПЭК" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/0370ab41-7348-4546-9182-bd6884e3ec7a.png" alt="Транс" className="h-12 w-20 object-contain" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/97a21e58-c916-4444-b98b-38103f5db560.png" alt="MagicTrans" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/c1aed9f7-f49d-4524-abd4-b7b7ddb766c8.png" alt="KIT" className="h-8 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/97da0d95-2030-46e7-a7c2-9a5f8147faaf.png" alt="Деловые Линии" className="h-12 w-20 object-contain" />
                          </div>
                          <div className="h-px bg-gray-300"></div>
                          <div className="flex items-center justify-center p-3">
                            <img src="/lovable-uploads/79627d81-cce2-4a1d-9218-e34c6a33ddc0.png" alt="Энергия" className="h-12 w-20 object-contain" />
                          </div>
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
                            Расчет от менеджера
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
                        <h4 className="text-lg font-medium mb-4">Возврат товара ненадлежащего качества (бракованного товара)</h4>
                        <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                          Согласно Закону о защите прав потребителей, вы вправе вернуть товар ненадлежащего качества (с браком, дефектами или несоответствием заявленным характеристикам) при дистанционном способе покупки.
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

               {/* Разделительная линия */}
               <div className="h-px bg-gray-300"></div>

               {/* Важно */}
               <div className="flex gap-8">
                 <div className="w-80 flex-shrink-0">
                   <h3 style={{
                     fontFamily: 'Benzin-Medium',
                     fontSize: '20px'
                   }}>Важно:</h3>
                 </div>
                 <div className="flex-1">
                   <div className="bg-red-50 border-l-4 border-[#F53B49] p-6 rounded-lg">
                     <ul className="space-y-3 text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                       <li>• Требования о возврате не применяются, если недостатки возникли по вашей вине (неправильная эксплуатация, механические повреждения и т.д.).</li>
                       <li>• Для технически сложных товаров действуют особые условия возврата в течение 15 дней.</li>
                       <li>• Мы гарантируем соблюдение всех ваших прав в соответствии с законодательством РФ.</li>
                       <li>• Сроки и условия могут уточняться в соответствии с действующим законодательством о защите прав потребителей.</li>
                     </ul>
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
                <AccordionItem value="item-0" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Чем занимается компания?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Эксклюзивный поставщик тренажеров и спортивного оборудования для фитнес-клубов и домашнего тренинга с 20-летним опытом, лидер рынка спортивного оборудования.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Какие есть способы оплатить покупку?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Вы можете оплатить покупку удобным для вас способом:<br />
                    • Онлайн-оплата банковской картой (Visa, Mastercard, МИР)<br />
                    • Наличными курьеру при получении заказа<br />
                    • Безналичный расчёт по выставленному счёту (для юрлиц и ИП)<br />
                    • Наложенный платеж (оплата при получении в отделении транспортной компании)<br />
                    • Рассрочка (доступные программы уточняйте у менеджеров)<br />
                    • Оплата картой при получении (в пунктах выдачи или курьеру)<br />
                    Выбирайте удобный вариант и оформляйте заказ!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Есть ли Trade-in?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Trade-in доступен только для линейки WellFitness Pro (опт, фитнес-клубы, коммерческое использование).<br /><br />
                    <strong>Как это работает:</strong><br />
                    Наши специалисты оценят ваше текущее оборудование<br />
                    Вычитаем его стоимость из цены нового<br />
                    Организуем замену «под ключ»<br /><br />
                    <strong>Преимущества:</strong><br />
                    • Экономия до 40% на обновлении парка<br />
                    • Бесплатный демонтаж и вывоз старого оборудования<br />
                    • Минимальный простой зала
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Где следить за новостями компании и новыми поступлениями?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Мы регулярно публикуем актуальную информацию через официальные каналы:<br /><br />
                    Наш сайт – главный источник новостей, анонсов и обновлений ассортимента<br />
                    Email-рассылки – подпишитесь, чтобы получать важные объявления первыми<br />
                    Социальные сети – оперативные публикации в наших сообществах (ссылки на сайте)<br />
                    Служба поддержки – менеджеры всегда на связи для консультаций<br /><br />
                    Хотите первыми узнавать о новинках? Подпишитесь на рассылку или следите за нами в соцсетях!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Можно ли отменить заказ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    После подтверждения заказа мы сразу начинаем его комплектацию и подготовку к отправке, поэтому внести изменения или отменить заказ, к сожалению, невозможно.<br /><br />
                    <strong>Что можно сделать?</strong><br />
                    Если вам нужны дополнительные товары — оформите новый заказ<br />
                    Если какие-то позиции стали неактуальны — свяжитесь с менеджером для уточнения условий возврата после получения<br /><br />
                    Мы всегда готовы помочь! Обращайтесь — найдём удобное решение.<br />
                    <em>Ваш комфорт — наш приоритет.</em>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Возможно ли кастомизировать тренажеры для фитнес-клуба?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    <strong>Кастомизация тренажеров для фитнес-клуба</strong><br />
                    Да, мы предлагаем услугу индивидуального оформления оборудования для коммерческих залов.<br /><br />
                    <strong>Что можно кастомизировать:</strong><br />
                    • Цветовое решение (под ваш фирменный стиль)<br />
                    • Нанесение логотипа/названия клуба<br />
                    • Выбор обивки и материалов<br /><br />
                    <strong>Как заказать:</strong><br />
                    Оставьте заявку через форму на сайте<br />
                    Наш менеджер свяжется для обсуждения деталей<br />
                    Подготовим индивидуальное коммерческое предложение<br /><br />
                    <em>Сроки и стоимость кастомизации уточняйте у специалистов.</em>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Как выбрать тренажер?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Выбор тренажера зависит от нескольких ключевых факторов. В первую очередь определитесь с целью тренировок: для похудения и развития выносливости лучше подойдут кардиотренажеры (беговые дорожки, эллипсоиды, велотренажеры), а для набора мышечной массы - силовые установки (мультистанции, свободные веса, силовые рамы).<br /><br />
                    Важное значение имеют доступное пространство и бюджет: для небольших домашних помещений стоит рассмотреть компактные или складные модели, тогда как для коммерческих залов можно выбирать профессиональное оборудование с большими габаритами.<br /><br />
                    Обратите внимание на уровень шума (особенно важно для квартир), максимальный вес пользователя и нагрузку.<br /><br />
                    Если сомневаетесь в выборе, лучше проконсультироваться со специалистом - наши менеджеры помогут подобрать оптимальное решение под ваши задачи и условия эксплуатации.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    В чем разница между домашними и профессиональными моделями?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Главные отличия заключаются в надежности, функционале и сроке службы:<br /><br />
                    <strong>1. Конструкция и материалы</strong><br />
                    Профессиональные: усиленная сталь, износостойкие компоненты, выдерживают 10-15 часов ежедневной эксплуатации.<br /><br />
                    <strong>2. Нагрузка и пользователи</strong><br />
                    Домашние: максимум 100-150 кг веса пользователя, до 3 человек в семье.<br />
                    Профессиональные: до 150-200 кг, подходят для потоковых тренировок в залах.<br /><br />
                    <strong>3. Функционал</strong><br />
                    Домашние: базовые программы.<br />
                    Профессиональные: продвинутые настройки, системы охлаждения.<br /><br />
                    <strong>4. Гарантия и обслуживание</strong><br />
                    Домашние: гарантия 2 года, ремонт возможен не всегда.<br />
                    Профессиональные: гарантия до 5 лет, сервисное обслуживание от производителя.<br /><br />
                    Нужна помощь в подборе? Оставьте заявку — предложим оптимальный вариант под ваш бюджет и задачи!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Как выбрать оснащение под размеры зала? Есть ли 3D-проектирование?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Правильная планировка фитнес-пространства — залог комфорта клиентов и эффективного использования площади. Мы предлагаем бесплатную разработку 3D-проекта вашего зала, который решит ключевые задачи:<br /><br />
                    <strong>Что вы получите от 3D-проекта?</strong><br />
                    ✔ Точный расчет оборудования — подберем тренажеры по количеству и типу, исключив лишние затраты<br />
                    ✔ Оптимальную расстановку — с учетом зон кардио, силовых тренировок и свободного пространства<br />
                    ✔ 3D-визуализацию — увидите, как будет выглядеть зал до покупки оборудования<br />
                    ✔ Экономию бюджета и времени — избежите ошибок в планировке и перестановках<br /><br />
                    <strong>Хотите увидеть свой зал в 3D?</strong><br />
                    Отправьте запрос или позвоните нам — спроектируем зал под ваши задачи!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Есть ли рассрочка на покупку оборудования?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ оплаты «Кредит».<br /><br />
                    Вы будете перенаправлены на сайт банка для заполнения анкеты. После заполнения анкеты с вами свяжется представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.<br /><br />
                    Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз.<br /><br />
                    Пожалуйста, будьте готовы предоставить паспорт при получении кредита. Также банки вправе потребовать иные дополнительные документы и подтверждение доходов заемщика.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Есть ли доставка?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    <strong>Доставка тренажеров по Москве и России</strong><br /><br />
                    
                    <strong>По Москве и МО</strong><br />
                    <strong>Курьерская доставка</strong><br />
                    Срок: 1-2 дня после заказа<br />
                    Время: ежедневно 9:00–21:00<br />
                    Подъем на этаж и сборка: уточняйте у менеджера<br /><br />
                    
                    <strong>Самовывоз (бесплатно):</strong><br />
                    <strong>Красногорск (основной склад)</strong><br />
                    МО, пос. Гольево, ул. Центральная<br />
                    <strong>Химки</strong><br />
                    мкр Сходня, ул. Некрасова, д. 2<br />
                    <strong>Санкт-Петербург</strong><br />
                    Красногвардейский пер., 23 лит Е<br /><br />
                    
                    <strong>По России</strong><br />
                    Транспортными компаниями (СДЭК, Деловые Линии и др.):<br />
                    Отправка со склада: 1-2 рабочих дня<br />
                    Срок доставки: зависит от ТК и региона<br />
                    Оплата доставки: при получении (по тарифам ТК)<br /><br />
                    
                    <strong>Важно:</strong><br />
                    Для точного расчета стоимости и сроков оформите заказ или закажите звонок — менеджер подберет оптимальный вариант!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12-new" className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-4 px-4 bg-gray-50 border border-gray-200 rounded-lg" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Как происходит обслуживание фитнес-клубов?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-[10px] border-l-4 border-gray-300 pl-6" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                    Мы обеспечиваем комплексный сервис для поддержания оборудования в идеальном состоянии, что помогает избежать дорогостоящего ремонта и продлевает срок службы тренажеров.<br /><br />
                    
                    <strong>Что входит в обслуживание?</strong><br />
                    Регулярные проверки износа деталей и узлов<br />
                    Смазка и регулировка механических частей<br />
                    Диагностика электроники (для кардиотренажеров)<br />
                    Замена расходников (ремни, ролики, подшипники)<br />
                    Ремонт любой сложности с оригинальными запчастями
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
