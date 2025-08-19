
import React, { useState } from 'react';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      category: "МАССАЖНЫЕ КРЕСЛА",
      title: "MÉRIDIEN VITALITÉ",
      subtitle: "Перезагрузка после работы одним нажатием кнопки",
      image: "/lovable-uploads/03241356-36a6-492a-ac55-02792561b6b0.png",
      alt: "Массажное кресло MÉRIDIEN VITALITÉ"
    },
    {
      id: 2,
      category: "ТРЕНАЖЕРЫ",
      title: "INSPIRE & CENTR",
      subtitle: "Тренируйся как в зале только дома",
      description: "- 50% до 30 сентября",
      image: "/lovable-uploads/98d55c55-cedb-4f36-a209-9f9b51e11192.png",
      alt: "Тренажеры INSPIRE & CENTR"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        <div className="bg-gray-100 overflow-hidden relative rounded-lg" style={{ height: '400px' }}>
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
                    {slides[currentSlide].category}
                  </span>
                </div>
                
                <h1 
                  className="text-5xl mb-4 leading-tight"
                  style={{
                    color: '#262631',
                    fontWeight: 400,
                    lineHeight: '105%'
                  }}
                >
                  {slides[currentSlide].title}
                </h1>
                
                <p 
                  className="text-lg mb-4"
                  style={{
                    color: '#262631',
                    fontWeight: 400,
                  }}
                >
                  {slides[currentSlide].subtitle}
                </p>
                
                {slides[currentSlide].description && (
                  <p 
                    className="text-2xl mb-8 font-bold"
                    style={{
                      color: '#F53B49',
                    }}
                  >
                    {slides[currentSlide].description}
                  </p>
                )}
                
                <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors font-benzin">
                  Перейти в каталог
                </button>
              </div>
              
              {/* Правая часть с изображением */}
              <div className="absolute right-0 top-0 w-full h-full">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-contain object-right"
                />
              </div>
            </div>
            
            {/* Навигационные точки */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 rounded transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-[#F53B49]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Стрелки навигации */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
          >
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
