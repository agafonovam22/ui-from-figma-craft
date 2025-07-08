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

  return (
    <div 
      className="relative w-full h-[300px] overflow-hidden rounded-lg bg-gray-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Main carousel container with padding for side previews */}
      <div className="relative w-full h-full px-16">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${currentIndex * 0}px))`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === currentIndex - 1;
            const isNext = index === currentIndex + 1;
            const isVisible = isActive || isPrev || isNext;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  width: `${100 / images.length}%`,
                  transform: isActive 
                    ? 'scale(1) translateX(0)' 
                    : 'scale(0.85) translateX(0)',
                  zIndex: isActive ? 10 : 5
                }}
              >
                <div className={`w-full h-full mx-2 rounded-lg overflow-hidden ${
                  !isActive ? 'opacity-60' : ''
                }`}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    draggable={false}
                    onClick={() => !isActive && goToSlide(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows - only show on hover on desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/90 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/90 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Progress indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default PhotoSwiper;