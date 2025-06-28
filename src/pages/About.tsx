
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

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
            
            {/* Main Title */}
            <h1 className="text-[80px] font-bold text-[#17171E] mb-8 leading-tight">
              О КОМПАНИИ
            </h1>
          </div>
        </section>

        {/* Banner - same as homepage */}
        <Banner />
        
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
            <div className="bg-gray-100 overflow-hidden relative" style={{ height: '400px' }}>
              <div className="py-12 relative h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Statistics content */}
                  <div className="flex-1 z-10" style={{ paddingTop: '60px', paddingLeft: '60px' }}>
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
      </main>
      
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default About;
