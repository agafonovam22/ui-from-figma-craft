
import React, { useRef } from 'react';
import { CategoryItem } from './types';

const CategoryButton: React.FC<{ category: CategoryItem; isActive?: boolean }> = ({ 
  category, 
  isActive = false 
}) => (
  <button
    className={`flex h-[46px] items-center gap-2 bg-[#262631] px-5 py-3 rounded-[5px] max-sm:whitespace-nowrap max-sm:px-4 max-sm:py-3 hover:bg-[#3a3a47] transition-colors group flex-shrink-0`}
    onClick={category.onClick}
    aria-label={`Категория: ${category.label}`}
  >
    <span className="text-sm font-normal leading-[14px] text-[#778093] group-hover:text-white transition-colors whitespace-nowrap">
      {category.label}
    </span>
  </button>
);

const ScrollButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void; disabled?: boolean }> = ({ 
  direction, 
  onClick, 
  disabled = false 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-8 h-8 rounded-full bg-[#5C6476] flex items-center justify-center transition-opacity ${
      disabled ? 'opacity-30 cursor-not-allowed' : 'opacity-50 hover:opacity-70'
    }`}
    aria-label={direction === 'left' ? 'Прокрутить влево' : 'Прокрутить вправо'}
  >
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={direction === 'left' ? "M7 1L4 4L1 1" : "M1 1L4 4L7 1"} 
        stroke="white" 
        strokeWidth="2" 
        transform={direction === 'left' ? "rotate(90 4 2.5)" : "rotate(-90 4 2.5)"}
      />
    </svg>
  </button>
);

const BottomMenu: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const categories: CategoryItem[] = [
    {
      id: 'cardio',
      label: 'Кардиотренировки',
      icon: '',
      onClick: () => console.log('Cardio clicked')
    },
    {
      id: 'strength',
      label: 'Силовые тренировки',
      icon: '',
      onClick: () => console.log('Strength clicked')
    },
    {
      id: 'free-weights',
      label: 'Свободные веса',
      icon: '',
      onClick: () => console.log('Free weights clicked')
    },
    {
      id: 'active-recreation',
      label: 'Активный отдых',
      icon: '',
      onClick: () => console.log('Active recreation clicked')
    },
    {
      id: 'massage-rehabilitation',
      label: 'Массаж и реабилитация',
      icon: '',
      onClick: () => console.log('Massage and rehabilitation clicked')
    },
    {
      id: 'novelties',
      label: 'Новинки',
      icon: '',
      onClick: () => console.log('Novelties clicked')
    },
    {
      id: 'promotions',
      label: 'Акции',
      icon: '',
      onClick: () => console.log('Promotions clicked')
    },
    {
      id: 'accessories',
      label: 'Аксессуары',
      icon: '',
      onClick: () => console.log('Accessories clicked')
    }
  ];

  // Дублируем категории для бесконечной прокрутки
  const duplicatedCategories = [...categories, ...categories];

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 200; // примерная ширина одного элемента
      const nextIndex = currentIndex + 1;
      
      // Прокручиваем к следующему элементу
      const scrollPosition = nextIndex * itemWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Если дошли до конца первого набора категорий, сбрасываем на начало
      if (nextIndex >= categories.length) {
        setTimeout(() => {
          container.scrollTo({
            left: 0,
            behavior: 'auto'
          });
          setCurrentIndex(0);
        }, 300); // Ждем завершения анимации
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };

  return (
    <nav 
      className="flex w-full justify-center items-center gap-[5px] bg-[#262631] px-2 sm:px-4 lg:px-[60px] py-1 max-md:overflow-x-auto"
      style={{ padding: '4px 60px' }}
      role="navigation"
      aria-label="Категории товаров"
    >
      <div className="flex w-full max-w-[1800px] h-[54px] items-center gap-[5px] relative max-md:w-auto max-md:min-w-full flex-shrink-0">
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-[5px] overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedCategories.map((category, index) => (
            <div key={`${category.id}-${Math.floor(index / categories.length)}`} className="flex items-center gap-[5px]">
              <CategoryButton category={category} />
              {index < duplicatedCategories.length - 1 && (
                <div className="w-px h-9 opacity-20 bg-[#5C6476] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex absolute right-0 items-center bg-gradient-to-l from-[#262631] via-[#262631] to-transparent pl-8">
          <ScrollButton direction="right" onClick={scrollToNext} />
        </div>
      </div>
    </nav>
  );
};

export default BottomMenu;
