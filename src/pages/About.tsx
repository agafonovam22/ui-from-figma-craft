
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
            <div className="mb-8">
              <span className="text-gray-400 text-sm">Главная → О компании</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-[80px] font-bold text-[#17171E] mb-16 leading-tight">
              О КОМПАНИИ
            </h1>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left side - Text and navigation */}
              <div className="flex-1">
                <h2 className="text-[48px] font-normal text-[#17171E] mb-8 leading-tight">
                  Well Fitness — <span className="text-[#F53B49]">надёжный партнёр с 2005 года</span><br />
                  для сотен компаний<br />
                  от Калининграда<br />
                  до Владивостока.
                </h2>
                
                {/* Navigation tabs */}
                <div className="flex gap-4 mb-8">
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
              
              {/* Right side - Image */}
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/c79ce5b4-e65e-4374-8f85-8614962b7c3e.png" 
                  alt="Тренажерный зал с оборудованием" 
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
              {/* Left side - Image */}
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png" 
                  alt="Девушка в спортивной одежде" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Right side - Stats */}
              <div className="flex-1 bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                  За годы успешного развития нам удалось консолидировать в своем ассортименте 
                  продукцию лучших мировых брендов, собрать команду профессионалов, 
                  завоевать доверие десятков тысяч лояльных покупателей и стать настоящим лидером 
                  рынка.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">2005</div>
                    <div className="text-gray-600">Год появления на рынке</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">10 000+</div>
                    <div className="text-gray-600">Складских помещений</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">60+</div>
                    <div className="text-gray-600">Квалифицированных сотредников</div>
                  </div>
                  <div>
                    <div className="text-[48px] font-bold text-[#17171E] mb-2">20+</div>
                    <div className="text-gray-600">Ведущих мировых брендов</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="text-[48px] font-bold text-[#17171E] mb-2">3000+</div>
                  <div className="text-gray-600">SKU</div>
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
