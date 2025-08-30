import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from './types';
import { 
  Zap, 
  RotateCcw, 
  Bike, 
  Waves, 
  Dumbbell, 
  Heart, 
  FlipVertical, 
  Circle, 
  Weight, 
  Home, 
  Target, 
  Mountain, 
  TreePine, 
  Gamepad2, 
  Settings 
} from 'lucide-react';

const CategoryButton: React.FC<{ category: CategoryItem; isActive?: boolean }> = ({ 
  category, 
  isActive = false 
}) => (
  <Link
    to={`/catalog?category=${category.id}`}
    className={`flex h-[46px] md:h-[32px] lg:h-[46px] items-center gap-2 md:gap-1 lg:gap-2 bg-[#262631] px-5 md:px-2.5 lg:px-5 py-3 md:py-1.5 lg:py-3 rounded-[5px] max-sm:whitespace-nowrap max-sm:px-4 max-sm:py-3 hover:bg-[#3a3a47] transition-colors group flex-shrink-0`}
    aria-label={`Категория: ${category.label}`}
  >
    {category.icon && (
      <span className="text-[#778093] group-hover:text-white transition-colors [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-3 md:[&>svg]:h-3 lg:[&>svg]:w-4 lg:[&>svg]:h-4">
        {category.icon}
      </span>
    )}
    <span className="text-sm md:text-xs lg:text-sm font-normal leading-[14px] md:leading-[10px] lg:leading-[14px] text-[#778093] group-hover:text-white transition-colors whitespace-nowrap">
      {category.label}
    </span>
  </Link>
);

const ScrollButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void; disabled?: boolean }> = ({ 
  direction, 
  onClick, 
  disabled = false 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-8 h-8 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full bg-[#5C6476] flex items-center justify-center transition-opacity ${
      disabled ? 'opacity-30 cursor-not-allowed' : 'opacity-50 hover:opacity-70'
    }`}
    aria-label={direction === 'left' ? 'Прокрутить влево' : 'Прокрутить вправо'}
  >
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[6px] md:h-[4px] lg:w-[8px] lg:h-[6px]">
      <path 
        d={direction === 'left' ? "M7 1L4 4L1 1" : "M1 1L4 4L7 1"} 
        stroke="white" 
        strokeWidth="2" 
        className="md:stroke-[1.5] lg:stroke-[2]"
        transform={direction === 'left' ? "rotate(90 4 2.5)" : "rotate(-90 4 2.5)"}
      />
    </svg>
  </button>
);

const BottomMenu: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  console.log('BottomMenu component loaded successfully');
  
  // Статичные категории товаров
  const categories: CategoryItem[] = [
    {
      id: 'treadmills',
      label: 'Беговые дорожки',
      icon: <Zap size={16} />
    },
    {
      id: 'elliptical',
      label: 'Эллиптические тренажеры',
      icon: <RotateCcw size={16} />
    },
    {
      id: 'exercise-bikes',
      label: 'Велотренажеры',
      icon: <Bike size={16} />
    },
    {
      id: 'rowing-machines',
      label: 'Гребные тренажеры',
      icon: <Waves size={16} />
    },
    {
      id: 'strength-equipment',
      label: 'Силовые тренажеры',
      icon: <Dumbbell size={16} />
    },
    {
      id: 'massage-equipment',
      label: 'Массажное оборудование',
      icon: <Heart size={16} />
    },
    {
      id: 'inversion-tables',
      label: 'Инверсионные столы',
      icon: <FlipVertical size={16} />
    },
    {
      id: 'trampolines',
      label: 'Батуты',
      icon: <Circle size={16} />
    },
    {
      id: 'free-weights',
      label: 'Свободные веса',
      icon: <Weight size={16} />
    },
    {
      id: 'home-accessories',
      label: 'Аксессуары для дома',
      icon: <Home size={16} />
    },
    {
      id: 'table-tennis',
      label: 'Настольный теннис',
      icon: <Target size={16} />
    },
    {
      id: 'ski-simulators',
      label: 'Горнолыжные тренажеры',
      icon: <Mountain size={16} />
    },
    {
      id: 'outdoor-sports',
      label: 'Уличные виды спорта',
      icon: <TreePine size={16} />
    },
    {
      id: 'game-tables',
      label: 'Игровые столы',
      icon: <Gamepad2 size={16} />
    },
    {
      id: 'equipment-accessories',
      label: 'Аксессуары к тренажерам',
      icon: <Settings size={16} />
    }
  ];

  console.log('Categories loaded:', categories.length);

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
      className="flex w-full justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px] bg-[#262631] px-2 sm:px-4 md:px-4 lg:px-[60px] py-1 max-md:overflow-x-auto"
      role="navigation"
      aria-label="Категории товаров"
    >
      <div className="flex w-full max-w-[1800px] h-[54px] md:h-[32px] lg:h-[54px] items-center gap-[5px] md:gap-[2px] lg:gap-[5px] relative max-md:w-auto max-md:min-w-full flex-shrink-0">
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-[5px] md:gap-[2px] lg:gap-[5px] overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedCategories.map((category, index) => (
            <div key={`${category.id}-${Math.floor(index / categories.length)}`} className="flex items-center gap-[5px] md:gap-[2px] lg:gap-[5px]">
              <CategoryButton category={category} />
              {index < duplicatedCategories.length - 1 && (
                <div className="w-px h-9 md:h-6 lg:h-9 opacity-20 bg-[#5C6476] flex-shrink-0" />
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