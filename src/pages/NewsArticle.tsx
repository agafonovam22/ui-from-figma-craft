
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Link, useParams } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NewsArticle: React.FC = () => {
  const { articleSlug } = useParams();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
                <Link to="/news" className="hover:text-gray-600"> Новости и блог</Link> → 
                Wellfitness PRO в Сколково 2023
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              Wellfitness PRO в Сколково 2023
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
                        НОВОСТИ
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
                      Wellfitness PRO<br />
                      в Сколково<br />
                      2023
                    </h1>
                    
                    <div className="text-gray-600 text-sm">
                      30 Декабря 2024
                    </div>
                  </div>
                  
                  {/* Правая часть с изображением */}
                  <div className="absolute" style={{ right: '60px', top: '10px' }}>
                    <div className="relative">
                      <div className="w-[350px] h-[350px] bg-[#F53B49] rounded-full flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/74f19997-ebd9-40f6-bfec-557b17c512ab.png"
                          alt="Wellfitness PRO в Сколково"
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
                  В минувшие выходные в Сколково прошло крупнейшее мероприятие фитнес-России
                </h2>
                
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed text-base">
                    В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка. Мероприятие собрало более 2000 участников из разных регионов России и стран СНГ.
                  </p>
                  <p className="leading-relaxed text-base">
                    На выставке были представлены новейшие технологии и оборудование для фитнес-индустрии, включая инновационные тренажеры, системы виртуальной реальности для тренировок, а также программное обеспечение для управления фитнес-клубами.
                  </p>
                </div>
              </div>

              {/* Right side - Single large image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/2fad94b1-56ad-4c2d-8f5c-321bacbfbc30.png"
                  alt="Wellfitness PRO в Сколково"
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
                  Основные направления форума
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Бизнес-форум включал в себя серию докладов и мастер-классов от ведущих экспертов индустрии. Участники узнали о современных трендах в фитнесе, новых подходах к тренировкам и управлению фитнес-бизнесом.
                  </p>
                  <p>
                    Особое внимание было уделено темам цифровизации фитнес-услуг, развитию онлайн-тренировок и интеграции современных технологий в традиционные тренировочные процессы.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/982f79b8-645c-40bf-be50-f00072cecfa3.png"
                  alt="Фитнес оборудование"
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
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/746f9610-97c9-44d7-968c-c1b73580f04a.png"
                  alt="Участники мероприятия"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* Right side - Extended text content in bordered box */}
              <div className="border-2 border-solid border-black p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Выставка и новые технологии
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    На выставочной площадке было представлено более 100 компаний-участников, демонстрирующих новейшие достижения в области фитнес-технологий и оборудования.
                  </p>
                  <p>
                    Посетители могли ознакомиться с инновационными тренажерами, системами мониторинга здоровья, а также программными решениями для автоматизации работы фитнес-центров.
                  </p>
                  <p>
                    Особый интерес вызвали демонстрации виртуальных тренировок, интерактивных фитнес-зеркал и умных систем персонального тренинга, которые представляют будущее фитнес-индустрии.
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
              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex-shrink-0 w-80">
                  <img 
                    src="/lovable-uploads/74f19997-ebd9-40f6-bfec-557b17c512ab.png"
                    alt="Wellfitness PRO материалы"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-80">
                  <img 
                    src="/lovable-uploads/2fad94b1-56ad-4c2d-8f5c-321bacbfbc30.png"
                    alt="Выставочный зал"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-80">
                  <img 
                    src="/lovable-uploads/982f79b8-645c-40bf-be50-f00072cecfa3.png"
                    alt="Стенд TRUE и Octane"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-80">
                  <img 
                    src="/lovable-uploads/746f9610-97c9-44d7-968c-c1b73580f04a.png"
                    alt="Стенд Smith"
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-80">
                  <img 
                    src="/lovable-uploads/13f3a05b-86bd-4ba0-9330-ff803380ac98.png"
                    alt="Участники выставки"
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
              <button 
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9L1 5L5 1" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                onClick={scrollRight}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Long Text Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="max-w-[1200px]">
              <h2 className="text-3xl font-bold text-[#17171E] mb-8">
                Итоги и перспективы развития
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Мероприятие Wellfitness PRO в Сколково стало важной площадкой для обмена опытом и установления деловых контактов между представителями фитнес-индустрии. Участники отметили высокий уровень организации и актуальность представленных тем.
                  </p>
                  <p>
                    Особенно ценными оказались практические мастер-классы и демонстрации нового оборудования, которые позволили участникам получить конкретные навыки и знания для развития своего бизнеса.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Организаторы уже анонсировали проведение следующего форума в 2024 году, который обещает стать еще более масштабным и включить в себя новые направления развития фитнес-индустрии.
                  </p>
                  <p>
                    Планируется расширение выставочной площадки и привлечение большего числа международных участников, что позволит сделать мероприятие еще более значимым для развития отрасли в России.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Когда состоится следующее мероприятие Wellfitness PRO?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Следующее мероприятие Wellfitness PRO планируется провести в 2024 году. Точные даты будут объявлены дополнительно на официальном сайте организаторов.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Как принять участие в выставке в качестве экспонента?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Для участия в выставке необходимо подать заявку через официальный сайт мероприятия. Регистрация участников обычно начинается за 6 месяцев до проведения форума.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Какие направления будут представлены на следующем форуме?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Планируется расширение тематики форума за счет включения направлений wellness, спортивного питания, цифровых технологий в фитнесе и международного опыта развития индустрии.
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

export default NewsArticle;
