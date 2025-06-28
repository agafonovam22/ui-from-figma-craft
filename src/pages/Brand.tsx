
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
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
  const brandName = brandSlug === 'bowflex' ? 'BowFlex' : 'kernel';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
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
            
            {/* Main Title */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              {brandName}
            </h1>
          </div>
        </section>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="bg-gray-100 overflow-hidden relative" style={{ height: '300px' }}>
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
                      Качественное<br />
                      спортивное<br />
                      оборудование
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

        {/* Main Content - Text left, Large image right */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                  О бренде {brandName}
                </h2>
                
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Right side - Single large image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                  alt={`${brandName} продукция`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* First additional section - Text left, Image right */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Text content in dotted border box */}
              <div className="border-2 border-dashed border-blue-300 p-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Преимущества бренда {brandName}
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              {/* Right side - Equipment image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop"
                  alt="Спортивное оборудование"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Линейка продуктов
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                    alt="Беговые дорожки"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Беговые<br />
                    дорожки
                  </h3>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                    alt="Эллиптические тренажеры"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Эллиптические<br />
                    тренажеры
                  </h3>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
                    alt="Велотренажеры"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Велотренажеры<br />
                    и спин-байки
                  </h3>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
                    alt="Силовые тренажеры"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Силовые<br />
                    тренажеры
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Bottom Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="bg-gray-100 overflow-hidden relative" style={{ height: '400px' }}>
              <div className="py-12 relative h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Левая часть с текстом */}
                  <div className="flex-1 max-w-lg z-10" style={{ paddingTop: '60px', paddingLeft: '60px' }}>
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
                      className="text-5xl mb-8 leading-tight"
                      style={{
                        color: '#262631',
                        fontWeight: 400,
                        lineHeight: '105%'
                      }}
                    >
                      Профессиональное<br />
                      спортивное<br />
                      оборудование
                    </h1>
                    
                    <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                      Связаться с нами
                    </button>
                  </div>
                  
                  {/* Правая часть с изображением */}
                  <div className="absolute" style={{ right: '60px', top: '30px' }}>
                    <div className="relative">
                      <div className="w-[450px] h-[450px] bg-[#F53B49] rounded-full flex items-center justify-center">
                        <img 
                          src={brandSlug === 'bowflex' ? '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png' : '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'}
                          alt={`${brandName} оборудование`}
                          className="w-[450px] h-[450px] object-contain"
                          style={{ objectPosition: 'center right', transform: 'translateX(30px)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Навигационные точки */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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
      </main>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Brand;
