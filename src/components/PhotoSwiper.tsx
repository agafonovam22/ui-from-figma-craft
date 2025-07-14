import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoSwiperProps {
  images: string[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const PhotoSwiper: React.FC<PhotoSwiperProps> = ({ 
  images, 
  autoplay = true, 
  autoplayInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay || isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, images.length]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Нет изображений для отображения</p>
      </div>
    );
  }

  // Helper function to get previous index with circular navigation
  const getPrevIndex = (index: number) => (index - 1 + images.length) % images.length;
  
  // Helper function to get next index with circular navigation
  const getNextIndex = (index: number) => (index + 1) % images.length;

  return (
    <div 
      className="relative w-screen h-[300px] overflow-hidden group -mx-2 sm:-mx-4 lg:-mx-[60px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Main carousel container extending beyond viewport symmetrically */}
      <div className="relative w-[120%] h-full -ml-[10%] flex items-center justify-center">
        {/* Previous image - always show with circular navigation */}
        <div 
          className="absolute left-[8%] w-[25%] h-[80%] cursor-pointer z-10 opacity-50 hover:opacity-70 transition-all duration-300"
          onClick={() => goToSlide(getPrevIndex(currentIndex))}
        >
          <img
            src={images[getPrevIndex(currentIndex)]}
            alt={`Slide ${getPrevIndex(currentIndex) + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            draggable={false}
          />
        </div>

        {/* Current central image */}
        <div className="relative w-[50%] h-full mx-auto z-20">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            draggable={false}
          />
          
          {/* Navigation arrows positioned by the central image */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg z-30"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg z-30"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Next image - always show with circular navigation */}
        <div 
          className="absolute right-[8%] w-[25%] h-[80%] cursor-pointer z-10 opacity-50 hover:opacity-70 transition-all duration-300"
          onClick={() => goToSlide(getNextIndex(currentIndex))}
        >
          <img
            src={images[getNextIndex(currentIndex)]}
            alt={`Slide ${getNextIndex(currentIndex) + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            draggable={false}
          />
        </div>
      </div>

      {/* Progress indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay for better UI visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default PhotoSwiper;