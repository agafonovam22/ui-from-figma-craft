
import React, { useState } from 'react';

const Banner: React.FC = () => {
  const images = [
    '/lovable-uploads/e1a82eb1-a6f1-4c96-bbe5-5d7207e98494.png',
    '/lovable-uploads/a24ad4fc-e1b3-4a45-8910-5901ff3df18a.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full">
      <div className="responsive-container">
        <div className="overflow-hidden relative rounded-lg" style={{ height: 'clamp(250px, 25vh, 400px)' }}>
          {/* Изображение на всю ширину */}
          <div className="relative h-full">
            <img 
              src={images[currentIndex]}
              alt={`Banner slide ${currentIndex + 1}`}
              className="responsive-image w-full h-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Навигационные точки */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded cursor-pointer transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#F53B49]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
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
