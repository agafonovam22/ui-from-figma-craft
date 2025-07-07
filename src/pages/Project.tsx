
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Project: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
            <div className="mb-8">
              <span className="text-gray-400 text-xs">
                <Link to="/" className="hover:text-gray-600">Главная</Link> → 
                <Link to="/about" className="hover:text-gray-600"> О компании</Link> → 
                Lorem Ipsum
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              Lorem Ipsum
            </h1>
          </div>
        </section>

        {/* Banner - keeping the same banner from About page */}
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
                        ZERO RUNNER
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
                      Бег с нулевой<br />
                      ударной нагрузкой<br />
                      на суставы
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
                          src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png?v=1"
                          alt="Мужчина на беговой дорожке"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                  alt="Lorem Ipsum project"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
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

              {/* Right side - Trampolines image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop"
                  alt="Батуты"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second additional section - Image left, Extended text right */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Woman image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                  alt="Женщина с ноутбуком"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* Right side - Extended text content in bordered box */}
              <div className="border-2 border-solid border-black p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Carousel container */}
            <div className="relative mb-16">
              <div className="flex gap-4 overflow-hidden">
                <div className="flex-shrink-0 w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                    alt="Спортивное оборудование"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                    alt="Женщина тренируется"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
                    alt="Люди бегают"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className="w-8 h-1 bg-[#F53B49] rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
              </div>

              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9L1 5L5 1" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Text and Image Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Text content in two columns */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#17171E] mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Large image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=500&fit=crop"
                  alt="Спортивные тренировки"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Long Text Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="max-w-[1200px]">
              <h2 className="text-3xl font-bold text-[#17171E] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-gray-600 text-sm leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Преимущества
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 - Trampoline */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
                    alt="Батут"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    2 варианта цвета<br />
                    защитного мата
                  </h3>
                </div>
              </div>

              {/* Card 2 - Marina/Port */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                    alt="Марина"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Совершенное качества<br />
                    прыжка
                  </h3>
                </div>
              </div>

              {/* Card 3 - Jumping Person */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                    alt="Прыжок"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Безопасный защитный<br />
                    мат
                  </h3>
                </div>
              </div>

              {/* Card 4 - Trampoline in Garden */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
                    alt="Батут в саду"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    Качественная защитная<br />
                    сеть
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="border-2 border-red-300 rounded-lg p-12 bg-red-50">
              <h2 className="text-3xl font-bold text-[#17171E] mb-8">
                Рекомендации
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-gray-600 text-sm leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Вопрос-ответ
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {/* First FAQ Item - Expanded by default */}
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 leading-relaxed">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Second FAQ Item */}
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Third FAQ Item */}
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Bottom Banner from Main Page - новый баннер по образцу с главной */}
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
                        ZERO RUNNER
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
                      Бег с нулевой<br />
                      ударной нагрузкой<br />
                      на суставы
                    </h1>
                    
                    <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                      Узнать больше
                    </button>
                  </div>
                  
                  {/* Правая часть с изображением */}
                  <div className="absolute" style={{ right: '60px', top: '30px' }}>
                    <div className="relative">
                      <div className="w-[450px] h-[450px] bg-[#F53B49] rounded-full flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png?v=1"
                          alt="Мужчина на беговой дорожке"
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

export default Project;
