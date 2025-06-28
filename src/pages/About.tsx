import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
            <div className="mb-8">
              <span className="text-gray-400 text-sm">Главная → О компании</span>
            </div>
            
            {/* Main Title - уменьшен в 2 раза */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              О КОМПАНИИ
            </h1>
          </div>
        </section>

        {/* Banner - уменьшен на 100px */}
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
                  
                  {/* Правая часть с изображением - уменьшенный круг */}
                  <div className="absolute" style={{ right: '60px', top: '10px' }}>
                    <div className="relative">
                      <div className="w-[350px] h-[350px] bg-[#F53B49] rounded-full flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png?v=1"
                          alt="Мужчина на беговой дорожке"
                          className="w-[350px] h-[350px] object-contain"
                          style={{ objectPosition: 'center right', transform: 'translateX(20px)' }}
                          onError={(e) => {
                            console.log('Ошибка загрузки изображения:', e);
                          }}
                          onLoad={() => {
                            console.log('Изображение успешно загружено');
                          }}
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
        
        {/* Navigation tabs */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="flex gap-4">
              <button className="bg-[#F53B49] text-white px-6 py-3 rounded text-sm font-medium">
                О нас
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                Наша миссия
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                Наша команда
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                Наши проекты
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                Новости
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Banner - same size as main banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="bg-gray-100 overflow-hidden relative" style={{ height: '300px' }}>
              <div className="py-12 relative h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Statistics content */}
                  <div className="flex-1 z-10" style={{ paddingTop: '40px', paddingLeft: '60px' }}>
                    <div className="grid grid-cols-3 gap-8 max-w-lg">
                      <div>
                        <div className="text-[48px] font-bold text-[#17171E] mb-2">2005</div>
                        <div className="text-gray-600 text-sm">Год появления на рынке</div>
                      </div>
                      <div>
                        <div className="text-[48px] font-bold text-[#17171E] mb-2">10 000+</div>
                        <div className="text-gray-600 text-sm">Складских помещений</div>
                      </div>
                      <div>
                        <div className="text-[48px] font-bold text-[#17171E] mb-2">60+</div>
                        <div className="text-gray-600 text-sm">Квалифицированных сотрудников</div>
                      </div>
                      <div>
                        <div className="text-[48px] font-bold text-[#17171E] mb-2">20+</div>
                        <div className="text-gray-600 text-sm">Ведущих мировых брендов</div>
                      </div>
                      <div>
                        <div className="text-[48px] font-bold text-[#17171E] mb-2">3000+</div>
                        <div className="text-gray-600 text-sm">SKU</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* География продаж */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              География продаж
            </h2>
            
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/80ae9fd1-6366-4282-90a5-44d024b6ccac.png"
                alt="Карта России с городами присутствия"
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </section>

        {/* Мы сегодня - это */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[40px] font-bold text-[#17171E] mb-12 leading-tight">
              Мы сегодня - это:
            </h2>
            
            {/* Шесть информационных блоков */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Слаженная команда людей, любящих спорт и здоровый образ жизни знающих свое дело и ориентирующихся во всех нюансах фитнес оборудования;
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Склад запчастей для обеспечения качественного сервиса и бесперебойной работы оборудования;
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Строгое соблюдение всех обязательств перед партнерами;
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Широкая номенклатура качественной продукции ведущих мировых брендов с огромным выбором товаров в наличии;
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Полный послепродажный сервис с информационной и технической поддержкой;
                </p>
              </div>

              <div className="bg-white p-6">
                <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Отличные цены и эксклюзивные условия для постоянных партнеров.
                </p>
              </div>
            </div>

            {/* Карусель изображений */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
                        alt="Фитнес оборудование"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop"
                        alt="Тренировка в спортзале"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop"
                        alt="Спортивная активность"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>

              {/* Навигационные точки */}
              <div className="flex justify-center mt-6 gap-2">
                <div className="w-8 h-1 bg-[#F53B49] rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
                <div className="w-2 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* В чем причина нашего успеха? */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              В чем причина нашего успеха?
            </h2>
            
            <p className="text-gray-700 text-base mb-12 max-w-6xl leading-relaxed">
              На сегодняшний день в каталоге Well Fitness представлены лучшие мировые бренды спортивного оборудования, среди которых Sole Fitness, Nautilus Fitness, Bowflex, CardioPower, PROSKI Simulator, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и функциональности, возглавляет ведущие мировые рейтинги и пользуется доверием покупателей по всему миру. Если вы ищете надежного поставщика спортивного оборудования - мы будем рады видеть вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского сотрудничества!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Первый блок */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop")'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm leading-relaxed">
                      Во-первых, мы особенно дорожим своей безупречной репутацией и регулярно повышаем планку качества сервиса. Знак, находясь другим может оказаться доверие покупателя, специалисты Well Fitness всегда ориентируются на интересы клиентов.
                    </p>
                  </div>
                </div>
              </div>

              {/* Второй блок */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=300&fit=crop")'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm leading-relaxed">
                      Во-вторых, мы поставляем только самую качественную и надежную продукцию. Перед выводом на российский рынок, мы тщательно тестируем каждую модель, поэтому все предлагаемое оборудование высоко ценится покупателями и имеет минимум сервисных проблем.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Третий блок - полная ширина */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=300&fit=crop")'}}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white max-w-4xl">
                  <p className="text-sm leading-relaxed">
                    Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют от нас анализа существенных финансовых и административных условий. С другой стороны начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default About;
