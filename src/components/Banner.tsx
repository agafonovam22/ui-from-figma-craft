
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between min-h-[400px]">
          {/* Левая часть с текстом */}
          <div className="flex-1 max-w-lg z-10">
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
          
          {/* Правая часть с изображением - обрезанный круг */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center">
            <div className="relative">
              <div className="w-[500px] h-[500px] bg-[#F53B49] rounded-full flex items-center justify-center translate-x-[150px]">
                <img 
                  src="/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png"
                  alt="Мужчина на велотренажере"
                  className="w-[420px] h-[420px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Навигационные точки */}
        <div className="flex justify-center mt-8 space-x-2">
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
    </section>
  );
};

export default Banner;
