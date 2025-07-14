
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard';
import { Link, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from 'lucide-react';
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
  
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    type: true,
    power: true,
    trainer: true
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };
  
  const products = [
    {
      id: 1,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 124,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Новинка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: null,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviews: 89,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Хит продаж',
      badgeColor: 'bg-orange-500',
      isAvailable: false,
      hasComparison: true,
      inStock: false
    },
    {
      id: 3,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviews: 67,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 156,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    }
  ];

  const allProducts = Array(8).fill(null).map((_, index) => ({
    ...products[index % 4],
    id: index + 1
  }));
  
  // В реальном приложении здесь бы был запрос к API для получения данных бренда
  const getBrandName = (slug: string) => {
    switch(slug) {
      case 'bowflex': return 'BowFlex';
      case 'true': return 'TRUE';
      case 'cardio-power': return 'Cardio Power';
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
                        {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : 'Качественное спортивное оборудование'}
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
        <section className="w-full py-8">
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
                  {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : 'МЫ – TRUE'}
                </h2>
                
                <div className="mb-8">
                  {brandSlug === 'cardio-power' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        CardioPower – это передовые технологии, надежность и доступность в мире кардиотренажеров. С 2010 года мы создаем оборудование, которое помогает добиваться результатов – как дома, так и в профессиональных залах. Наши тренажеры выбирают те, кто ценит качество, безопасность и инновации без переплат.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope mb-4">
                        Мы делаем только то, в чем действительно сильны:
                      </p>
                      <ul className="text-gray-600 text-sm leading-relaxed font-manrope mb-4 ml-4">
                        <li>- Беговые дорожки, где каждый шаг – это комфорт и мощность</li>
                        <li>- Эллипсы с плавностью профессионального уровня</li>
                        <li>- Сайклы, заряженные энергией групповых тренировок</li>
                        <li>- Гребные тренажеры для комплексной нагрузки</li>
                      </ul>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Наша философия проста: «Хороший кардиотренажер – не роскошь, а ваш надежный партнер».
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        TRUE Fitness – премиальное оборудование для тех, кто ценит качество и надежность
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        TRUE – один из ведущих мировых брендов премиального фитнес-оборудования, входящий в топ-5 крупнейших производителей индустрии. С 1972 года мы создаем тренажеры, которые сочетают инновационные технологии, безупречную надежность и эргономичный дизайн.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {brandSlug === 'cardio-power' ? 'Кому подходит CardioPower?' : 'Наше оборудование выбирают:'}
                </h2>
                
                {brandSlug === 'cardio-power' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для дома</strong> – если хотите эффективное кардио без компромиссов: от утренних пробежек до интервальных тренировок.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для фитнес-клубов</strong> – профессиональные кардиотренажеры, выдерживающие многочасовые нагрузки каждый день.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для тренеров и спортсменов</strong> – точная биомеханика и настраиваемые программы для работы на выносливость, жиросжигание и функциональный тренинг.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      CardioPower — это технологии, созданные специально для кардио. Будь то бег, интервалы, ВИИТ или восстановительные тренировки — с нашим оборудованием вы получите максимум от каждого занятия.
                    </p>
                  </>
                ) : (
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
                )}
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
        <section className="w-full py-8">
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
                      {brandSlug === 'cardio-power' ? 'Почему CardioPower?' : 'Лидер в индустрии'}
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      {brandSlug === 'cardio-power' ? '' : '50+ лет на рынке, собственные инженерные разработки и строгий контроль производства'}
                    </p>
                  </div>
                  
                  {brandSlug === 'cardio-power' ? (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-[#F53B49] mr-3 text-lg">🔹</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Самая широкая линейка кардиотренажеров в России
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#F53B49] mr-3 text-lg">🔹</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Безопасность и комфорт благодаря продуманным системам амортизации и защиты от перегрузок
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#F53B49] mr-3 text-lg">🔹</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Технологии для реальных результатов: от базовых моделей до премиальных решений
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#F53B49] mr-3 text-lg">🔹</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Доступная цена без ущерба качеству – оптимизированное производство и логистика
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-[#F53B49] mr-3 text-lg">🔹</span>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Сервис и поддержка для быстрых поставок запчастей и помощи специалистов
                        </p>
                      </div>
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {brandSlug === 'cardio-power' ? 'Ключевые преимущества' : 'TRUE – это не просто тренажеры, это инвестиция в долгосрочный результат'}
                </h2>
                
                {brandSlug === 'cardio-power' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    CardioPower – это преемственность традициям качества. Наша продукция собирается из самых качественных комплектующих и проходит многоэтапную систему контроля качества. Наши тренажеры рассчитаны на долгосрочную службу в условиях интенсивной эксплуатации. Мы уделяем особое внимание работе послепродажного сервиса, обеспечивая оперативную техническую поддержку и наличие склада запасных частей.
                  </p>
                ) : (
                  <>
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
                  </>
                )}
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

        {/* Catalog Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Все товары {brandName}
            </h2>
            
            <div className="flex gap-8">
              {/* Left Sidebar - Full Filters (without brand filter) */}
              <div className="w-64 flex-shrink-0">
                {/* Filters Container */}
                <div className="bg-[#F8F8FD] rounded-lg p-6 mb-6">
                  <h2 className="text-[20px] font-semibold text-[#262631] mb-6" style={{fontFamily: 'Benzin-Semibold'}}>Фильтр</h2>
                  {/* Price Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('price')}
                    >
                      Цена
                      {expandedFilters.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    
                    {expandedFilters.price && (
                      <>
                        {/* Price Range Slider */}
                        <div className="mb-4">
                          <div className="flex justify-between text-[14px] text-gray-600 mb-2" style={{fontFamily: 'Manrope'}}>
                            <span>{priceRange[0].toLocaleString()} ₽</span>
                            <span>{priceRange[1].toLocaleString()} ₽</span>
                          </div>
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={150000}
                            min={0}
                            step={1000}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 500 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 20 000 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 50 000 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 100 000 ₽
                          </label>
                          <button className="text-[#F53B49] text-[12px] mt-5 text-center w-full" style={{fontFamily: 'Benzin-Regular'}}>Показать все</button>
                        </div>
                      </>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Type Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('type')}
                    >
                      Тип назначения
                      {expandedFilters.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.type && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Домашние
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Полупрофессиональные
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Профессиональные
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Реабилитация
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Power Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('power')}
                    >
                      Мощность двигателя
                      {expandedFilters.power ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.power && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        {/* Input fields for power range */}
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="flex-1">
                            <input 
                              type="text" 
                              placeholder="от 1.2500"
                              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                              style={{fontFamily: 'Manrope'}}
                            />
                          </div>
                          <div className="flex-1">
                            <input 
                              type="text" 
                              placeholder="до 24 560"
                              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                              style={{fontFamily: 'Manrope'}}
                            />
                          </div>
                        </div>
                        
                        {/* Checkbox options */}
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          до 3 л.с.
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          3-4 л.с.
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Trainer Type Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('trainer')}
                    >
                      Тип тренажера
                      {expandedFilters.trainer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.trainer && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        <label className="flex items-center">
                          <input type="radio" name="trainer-type" className="mr-2" />
                          Магнитный
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="trainer-type" className="mr-2" />
                          Полупрофессиональный
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Apply Filters Button */}
                  <Button 
                    className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-3 h-12 rounded-lg text-[12px]" 
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Применить
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#F53B49] text-[#F53B49] bg-transparent hover:bg-[#F53B49] hover:text-white h-12 rounded-lg text-[12px]" 
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Показать все
                  </Button>
                </div>
              </div>

              {/* Main Content - только горизонтальные фильтры без поиска и сортировки */}
              <div className="flex-1">
                {/* Horizontal Filter Tags только без поиска и сортировки */}
                <div className="bg-[#F8F8FD] rounded-lg p-4 mb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Removable filter */}
                    <div className="flex items-center bg-[#262631] text-white px-4 py-2 rounded-full font-benzin" style={{ fontSize: '12px' }}>
                      В наличии
                      <button className="ml-2 text-white hover:text-gray-300">
                        ×
                      </button>
                    </div>
                    
                    {/* Status filters */}
                    <button className="bg-white text-[#F53B49] border border-[#F53B49] px-4 py-2 rounded-full font-benzin hover:bg-[#F53B49] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Акция
                    </button>
                    
                    <button className="bg-white text-[#31BF00] border border-[#31BF00] px-4 py-2 rounded-full font-benzin hover:bg-[#31BF00] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Новинка
                    </button>
                    
                    <button className="bg-white text-[#4B7EE8] border border-[#4B7EE8] px-4 py-2 rounded-full font-benzin hover:bg-[#4B7EE8] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Хит продаж
                    </button>
                    
                    {/* Dropdown filters */}
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Максимальный вес
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Длина полотна, см
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Ширина полотна, см
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Скорость полотна, км/ч
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Производитель
                    </button>
                  </div>
                </div>
                {/* Products Grid - only 8 products (2 rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {allProducts.slice(0, 8).map((productData) => (
                    <ProductCard key={productData.id} product={productData} />
                  ))}
                </div>

                {/* Show More Button - Red color */}
                <div className="text-center mb-8">
                  <Button 
                    className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 rounded-lg text-[14px]"
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Показать еще
                  </Button>
                </div>

                {/* Pagination - Round with active page styling and arrows */}
                <div className="flex justify-center items-center space-x-2 mb-8">
                  {/* Left arrow */}
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-medium hover:bg-gray-50 flex items-center justify-center">
                    ←
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-[#262631] text-white text-[14px] font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-medium hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-medium hover:bg-gray-50">
                    3
                  </button>
                  <span className="text-gray-400">...</span>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-medium hover:bg-gray-50">
                    15
                  </button>
                  
                  {/* Right arrow */}
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-medium hover:bg-gray-50 flex items-center justify-center">
                    →
                  </button>
                </div>
              </div>
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
