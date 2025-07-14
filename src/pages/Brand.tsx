
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import IdeasSelections from '@/components/IdeasSelections';
import { Link, useParams } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Brand: React.FC = () => {
  const { brandSlug } = useParams();
  
  // В реальном приложении здесь бы был запрос к API для получения данных бренда
  const getBrandName = (slug: string) => {
    switch(slug) {
      case 'bowflex': return 'BowFlex';
      case 'true': return 'TRUE';
      default: return 'kernel';
    }
  };
  
  const brandName = getBrandName(brandSlug || 'kernel');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Главная</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/brands">Бренды</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{brandName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="bg-white overflow-hidden relative" style={{ height: '300px' }}>
              <div className="py-12 relative h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Левая часть с текстом */}
                  <div className="flex-1 max-w-lg z-10" style={{ paddingTop: '40px', paddingLeft: '60px' }}>
                    <div className="mb-6">
                      <span 
                        className="text-sm tracking-[3.78px] uppercase"
                        style={{ 
                          color: '#F53B49',
                          fontWeight: 400,
                          lineHeight: '110%'
                        }}
                      >
                        {brandName.toUpperCase()}
                      </span>
                    </div>
                    
                     <h1 
                       className="text-4xl mb-6 leading-tight"
                       style={{
                         color: '#262631',
                         fontWeight: 400,
                         lineHeight: '105%'
                       }}
                     >
                       {brandSlug === 'true' ? 'МЫ – TRUE' : 'Качественное спортивное оборудование'}
                     </h1>
                    
                    <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                      Узнать больше
                    </button>
                  </div>
                  
                  {/* Правая часть с изображением */}
                  <div className="absolute" style={{ right: '60px', top: '10px' }}>
                    <div className="relative">
                      <div className="w-[350px] h-[350px] bg-[#F53B49] rounded-full flex items-center justify-center">
                        <img 
                          src={brandSlug === 'bowflex' ? '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png' : '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'}
                          alt={`${brandName} оборудование`}
                          className="w-[350px] h-[350px] object-contain"
                          style={{ objectPosition: 'center right', transform: 'translateX(20px)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Навигационные точки */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  <div className="w-8 h-1 bg-[#F53B49] rounded"></div>
                  <div className="w-2 h-1 bg-gray-300 rounded"></div>
                  <div className="w-2 h-1 bg-gray-300 rounded"></div>
                  <div className="w-2 h-1 bg-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* Стрелки навигации */}
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9L1 5L5 1" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* First Content Block - Image Left, Text Right */}
        <section className="w-full py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src="/lovable-uploads/db8f1471-5f7e-46c9-b5f0-0791269c93b7.png"
                  alt="Спортивные тренировки"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  МЫ – TRUE
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                    TRUE Fitness – премиальное оборудование для тех, кто ценит качество и надежность
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    TRUE – один из ведущих мировых брендов премиального фитнес-оборудования, входящий в топ-5 крупнейших производителей индустрии. С 1972 года мы создаем тренажеры, которые сочетают инновационные технологии, безупречную надежность и эргономичный дизайн.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Block - Text Left, Image Right */}
        <section className="w-full py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Наше оборудование выбирают:
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Фитнес-клубы премиум-класса</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      для коммерческого использования с высокой нагрузкой
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Тренеры и спортсмены</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      для профессиональных тренировок
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Владельцы домашних студий</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      кто ценит долговечность и премиальный комфорт
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/25a08481-5846-4c6a-8f84-9089de2749fd.png"
                  alt="Тренировки и статистика"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Banner from About page */}
        <section className="w-full py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg" style={{ height: '408px' }}>
              <img 
                src="/lovable-uploads/b04fa555-f20a-4548-bca0-6ff520c1c93c.png"
                alt="О компании - статистика"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center right' }}
              />
              {/* Statistics content overlay */}
              <div className="absolute top-2.5 right-2.5 bottom-2.5 w-[650px] bg-white rounded-lg p-6 shadow-lg">
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Лидер в индустрии
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      50+ лет на рынке, собственные инженерные разработки и строгий контроль производства
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Технологии и безопасность</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        передовые системы амортизации, износостойкие компоненты и интеллектуальное управление
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Экономия на обслуживании</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        минимальные затраты благодаря надежной конструкции и доступности запчастей
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Content Block - Text Left, Image Right */}
        <section className="w-full py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  TRUE – это не просто тренажеры, это инвестиция в долгосрочный результат
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                  Наше оборудование выбирают, потому что оно:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Работает безотказно</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        даже при интенсивной эксплуатации
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Сохраняет актуальность</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        регулярные апгрейды и совместимость с новыми технологиями
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Обеспечивает максимальный комфорт</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        продуманная эргономика снижает нагрузку на суставы
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/61aab835-fb0d-4b1e-a7b4-70a5ff2c4cf7.png"
                  alt="Качество и надежность TRUE"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Ideas and Selections */}
        <IdeasSelections />

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {/* First FAQ Item */}
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Какая гарантия предоставляется на оборудование {brandName}?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p>
                      На все оборудование {brandName} предоставляется расширенная гарантия от 2 до 5 лет в зависимости от модели. Гарантия покрывает все механические части, электронику и двигатели.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Second FAQ Item */}
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Есть ли сервисное обслуживание оборудования {brandName}?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Да, мы предоставляем полный спектр сервисных услуг включая установку, настройку, техническое обслуживание и ремонт оборудования {brandName}.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Third FAQ Item */}
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Можно ли заказать индивидуальную конфигурацию оборудования?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Да, мы предлагаем индивидуальные решения и можем адаптировать оборудование под специфические требования вашего спортивного зала или домашнего использования.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

      </main>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Brand;
