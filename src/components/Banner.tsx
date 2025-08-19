
import React, { useState } from 'react';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/03241356-36a6-492a-ac55-02792561b6b0.png",
      alt: "Массажное кресло MÉRIDIEN VITALITÉ"
    },
    {
      id: 2,
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
        <div className="overflow-hidden relative rounded-lg" style={{ height: '400px' }}>
          {/* Изображение на всю ширину */}
          <div className="w-full h-full">
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
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
