
import React from 'react';

const Banner: React.FC = () => {
  return (
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
              
              {/* Правая часть с изображением - увеличенное фото смещенное вправо */}
              <div className="absolute" style={{ right: '45px', top: '30px' }}>
                <div className="relative">
                  <div className="w-[500px] h-[500px] bg-[#F53B49] rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png?v=1"
                      alt="Мужчина на беговой дорожке"
                      className="w-[480px] h-[480px] object-contain"
                      style={{ objectPosition: 'center center' }}
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
  );
};

export default Banner;
