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
    className={`flex h-[46px] items-center gap-2 bg-[#262631] px-3 py-3 rounded-[5px] hover:bg-[#3a3a47] transition-colors group w-full min-w-0 justify-center`}
    aria-label={`Категория: ${category.label}`}
  >
    {category.icon && (
      <span className="text-[#778093] group-hover:text-white transition-colors flex-shrink-0">
        {category.icon}
      </span>
    )}
    <span className="text-sm font-normal leading-[14px] text-[#778093] group-hover:text-white transition-colors text-center truncate">
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
      className="flex w-full justify-center items-center bg-[#262631] px-2 sm:px-4 lg:px-[60px] py-1"
      style={{ padding: '4px 60px' }}
      role="navigation"
      aria-label="Категории товаров"
    >
      <div className="flex w-full max-w-[1200px] h-[54px] items-center relative mx-auto">
        <div 
          ref={scrollContainerRef}
          className="flex items-center justify-between gap-[20px] w-full flex-nowrap overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden md:overflow-x-visible"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedCategories.slice(0, categories.length).map((category, index) => (
            <div key={category.id} className="flex items-center flex-1 flex-shrink-0 min-w-0">
              <CategoryButton category={category} />
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