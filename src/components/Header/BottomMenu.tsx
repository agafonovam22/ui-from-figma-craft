
import React, { useRef } from 'react';
import { CategoryItem } from './types';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Интерфейс для подкатегорий
interface SubCategory {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface CategoryWithDropdown extends CategoryItem {
  dropdownContent?: {
    columns: {
      title: string;
      items: SubCategory[];
    }[];
    imageUrl?: string;
    imageAlt?: string;
  };
}

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

const CategoryWithDropdownMenu: React.FC<{ category: CategoryWithDropdown }> = ({ category }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className="flex h-[46px] items-center gap-2 bg-[#262631] px-5 py-3 rounded-[5px] text-sm font-normal leading-[14px] text-[#778093] hover:text-white hover:bg-[#3a3a47] transition-colors group flex-shrink-0 data-[state=open]:bg-[#3a3a47] data-[state=open]:text-white">
      {category.label}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="bg-white border shadow-lg rounded-lg p-6 w-[800px] z-50 absolute left-0 top-full">
      <div className="grid grid-cols-3 gap-8">
        {category.dropdownContent?.columns.map((column, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-base mb-3">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <button
                    onClick={item.onClick}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors block w-full text-left py-1"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
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

  const categories: CategoryWithDropdown[] = [
    {
      id: 'cardio',
      label: 'Кардиотренировки',
      icon: '',
      dropdownContent: {
        columns: [
          {
            title: 'Для дома',
            items: [
              { label: 'Беговые дорожки', onClick: () => console.log('Treadmills') },
              { label: 'Велотренажеры', onClick: () => console.log('Exercise bikes') },
              { label: 'Эллиптические тренажеры', onClick: () => console.log('Elliptical') },
              { label: 'Степперы', onClick: () => console.log('Steppers') }
            ]
          },
          {
            title: 'Для зала',
            items: [
              { label: 'Профессиональные тренажеры', onClick: () => console.log('Pro equipment') },
              { label: 'Кардиозона', onClick: () => console.log('Cardio zone') },
              { label: 'Аксессуары', onClick: () => console.log('Accessories') }
            ]
          },
          {
            title: 'Бренды',
            items: [
              { label: 'TechnoGym', onClick: () => console.log('TechnoGym') },
              { label: 'Life Fitness', onClick: () => console.log('Life Fitness') },
              { label: 'Matrix', onClick: () => console.log('Matrix') },
              { label: 'Precor', onClick: () => console.log('Precor') }
            ]
          }
        ]
      }
    },
    {
      id: 'strength',
      label: 'Силовые тренировки',
      icon: '',
      dropdownContent: {
        columns: [
          {
            title: 'Для дома',
            items: [
              { label: 'Домашние тренажеры', onClick: () => console.log('Home gym') },
              { label: 'Многофункциональные комплексы', onClick: () => console.log('Multi-gym') },
              { label: 'Турники и брусья', onClick: () => console.log('Pull-up bars') },
              { label: 'Скамьи', onClick: () => console.log('Benches') }
            ]
          },
          {
            title: 'Для зала',
            items: [
              { label: 'Силовые станции', onClick: () => console.log('Power stations') },
              { label: 'Машины Смита', onClick: () => console.log('Smith machines') },
              { label: 'Стойки для приседаний', onClick: () => console.log('Squat racks') },
              { label: 'Кроссовер', onClick: () => console.log('Cable crossover') }
            ]
          },
          {
            title: 'Бренды',
            items: [
              { label: 'Hammer Strength', onClick: () => console.log('Hammer Strength') },
              { label: 'Body Solid', onClick: () => console.log('Body Solid') },
              { label: 'PowerTec', onClick: () => console.log('PowerTec') },
              { label: 'Hoist', onClick: () => console.log('Hoist') }
            ]
          }
        ]
      }
    },
    {
      id: 'free-weights',
      label: 'Свободные веса',
      icon: '',
      dropdownContent: {
        columns: [
          {
            title: 'Гантели',
            items: [
              { label: 'Разборные гантели', onClick: () => console.log('Adjustable dumbbells') },
              { label: 'Неразборные гантели', onClick: () => console.log('Fixed dumbbells') },
              { label: 'Гантели с резиновым покрытием', onClick: () => console.log('Rubber dumbbells') }
            ]
          },
          {
            title: 'Штанги и грифы',
            items: [
              { label: 'Олимпийские грифы', onClick: () => console.log('Olympic bars') },
              { label: 'Диски для штанги', onClick: () => console.log('Weight plates') },
              { label: 'EZ-грифы', onClick: () => console.log('EZ bars') }
            ]
          },
          {
            title: 'Бренды',
            items: [
              { label: 'York Barbell', onClick: () => console.log('York Barbell') },
              { label: 'CAP Barbell', onClick: () => console.log('CAP Barbell') },
              { label: 'Ivanko', onClick: () => console.log('Ivanko') }
            ]
          }
        ]
      }
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
      className="relative w-full bg-[#262631] py-1"
      role="navigation"
      aria-label="Категории товаров"
    >
      <div 
        ref={scrollContainerRef}
        className="flex items-center gap-[5px] px-4 lg:px-[60px] h-[54px] overflow-x-auto scrollbar-hide max-w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[5px] bg-transparent whitespace-nowrap">
            {categories.map((category, index) => (
              <React.Fragment key={category.id}>
                {category.dropdownContent ? (
                  <CategoryWithDropdownMenu category={category} />
                ) : (
                  <div className="flex items-center">
                    <CategoryButton category={category} />
                  </div>
                )}
                {index < categories.length - 1 && (
                  <div className="w-px h-9 opacity-20 bg-[#5C6476] flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* Кнопки прокрутки */}
      <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-[#262631] via-[#262631] to-transparent pl-8">
        <ScrollButton direction="right" onClick={scrollToNext} />
      </div>
    </nav>
  );
};

export default BottomMenu;
