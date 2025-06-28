
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-[#F8F9FA] py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-[48px] font-bold text-[#17171E] mb-6 leading-tight">
                  Well Fitness — <span className="text-[#F53B49]">надёжный партнёр</span> с 2005 года для сотен компаний от Калининграда до Владивостока.
                </h1>
                <div className="flex gap-4 mb-8">
                  <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                    Каталог
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                    Наши клиенты
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                    Наша команда
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                    Наш продукт
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                    Конкурсы
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/a9104ea4-4534-43dd-8095-40911e19bd24.png" 
                  alt="Тренажерный зал" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png" 
                  alt="Девушка занимается спортом" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1 bg-[#F8F9FA] p-8 rounded-lg">
                <p className="text-gray-600 mb-8">
                  Продукция компании хорошо известна по всей России, от Калининграда до Владивостока, и
                  пользуется заслуженным признанием у потребителей за хорошее качество и долговечность, а также
                  удобство и комфорт при работе.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">2005</div>
                    <div className="text-gray-600">Начало нашей истории</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">10 000+</div>
                    <div className="text-gray-600">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">60+</div>
                    <div className="text-gray-600">Сотрудников в команде</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">20+</div>
                    <div className="text-gray-600">Лет опыта в индустрии</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">3000+</div>
                    <div className="text-gray-600">Установленных единиц оборудования</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Geography Section */}
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[36px] font-bold text-[#17171E] mb-12">География продаж</h2>
            
            <div className="bg-white rounded-lg p-8 relative">
              <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
                
                {/* Map points simulation */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#F53B49] rounded-full"></div>
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-[#F53B49] rounded-full"></div>
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#F53B49] rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#F53B49] rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#F53B49] rounded-full"></div>
                
                <div className="text-center z-10">
                  <div className="text-gray-400 text-6xl mb-4">📍</div>
                  <p className="text-gray-600">Интерактивная карта с отметками наших клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today Section */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[36px] font-bold text-[#17171E] mb-12">Мы сегодня - это:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">📊</span>
                </div>
                <p className="text-gray-700">
                  Каждый тренажер мы готовы "пропустить" через наш сервис-центр с целью соответствия тренажера требованиям спортивной медицины и безопасности.
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🏆</span>
                </div>
                <p className="text-gray-700">
                  Сеть сервисных центров по всей России позволяет нам обеспечить качественное техническое сопровождение наших клиентов.
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🎯</span>
                </div>
                <p className="text-gray-700">
                  Комплексные предложения для создания современных спортивных залов "под ключ".
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">⚙️</span>
                </div>
                <p className="text-gray-700">
                  Высококачественные сервисные услуги: монтаж, наладка, сервисное обслуживание с гарантией до 3-х лет.
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">💡</span>
                </div>
                <p className="text-gray-700">
                  Проектные услуги и проектирование залов с учетом всех современных требований к фитнес-центрам.
                </p>
              </div>
              
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🔧</span>
                </div>
                <p className="text-gray-700">
                  Полный спектр услуг от консультации до ввода в эксплуатацию и дальнейшего сервисного обслуживания.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="col-span-1">
                <img 
                  src="/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png" 
                  alt="Спортивный зал" 
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png" 
                  alt="Тренировка в зале" 
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src="/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png" 
                  alt="Современный фитнес-центр" 
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Reasons */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-[36px] font-bold text-[#17171E] mb-12">В чем причина нашего успеха?</h2>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              К настоящему времени Well Fitness является одним из самых крупных российских поставщиков 
              фитнес-оборудования. Мы осуществляем поставки тренажеров как для домашнего использования, 
              так и для коммерческих фитнес-клубов, медицинских и оздоровительных центров.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-[#17171E] mb-3">Качество и надежность</h3>
                  <p className="text-gray-600">
                    Мы тщательно отбираем поставщиков и работаем только с проверенными брендами, 
                    гарантируя высокое качество всего оборудования.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-[#17171E] mb-3">Комплексный подход</h3>
                  <p className="text-gray-600">
                    От проектирования до запуска - мы сопровождаем клиентов на всех этапах 
                    создания современных спортивных залов.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-[#17171E] mb-3">Профессиональная команда</h3>
                  <p className="text-gray-600">
                    Наши специалисты имеют многолетний опыт в фитнес-индустрии и готовы 
                    предложить оптимальные решения для любых задач.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibent text-[#17171E] mb-3">Сервисная поддержка</h3>
                  <p className="text-gray-600">
                    Развитая сеть сервисных центров обеспечивает быстрое и качественное 
                    обслуживание оборудования по всей России.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Images */}
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png" 
                  alt="Спортивные сооружения" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded">
                  <p className="text-sm text-gray-700 max-w-xs">
                    Мы оснащаем как небольшие домашние спортивные помещения, 
                    так и крупные коммерческие фитнес-центры современным оборудованием.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png" 
                  alt="Городской пейзаж" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded">
                  <p className="text-sm text-gray-700 max-w-xs">
                    Наши клиенты находятся во всех крупных городах России, 
                    от Калининграда до Владивостока.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png" 
                alt="Активный образ жизни" 
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="bg-white p-6 rounded-b-lg">
                <p className="text-gray-700 text-center">
                  Эффективность этого комплекса достигается благодаря использованию современных разработок, 
                  что позволяет в полной мере использовать все возможности тренажеров. Грамотная инструкция 
                  для него написана специально с учетом потребностей российских пользователей.
                </p>
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
