
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
    {category.iconImage ? (
      <img src={category.iconImage} alt={category.label} className="w-5 h-5 flex-shrink-0" />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: category.icon }} />
    )}
    <span className="text-sm font-normal leading-[14px] text-[#778093] group-hover:text-white transition-colors">
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

  const categories: CategoryItem[] = [
    {
      id: 'treadmills',
      label: 'Беговые дорожки',
      icon: '',
      iconImage: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      onClick: () => console.log('Treadmills clicked')
    },
    {
      id: 'dumbbells',
      label: 'Гантели и ряды',
      icon: '',
      iconImage: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      onClick: () => console.log('Dumbbells clicked')
    },
    {
      id: 'bikes',
      label: 'Велотренажеры',
      icon: '',
      iconImage: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png',
      onClick: () => console.log('Bikes clicked')
    },
    {
      id: 'multistations',
      label: 'Мультистанции',
      icon: '',
      iconImage: '/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png',
      onClick: () => console.log('Multistations clicked')
    },
    {
      id: 'trampolines',
      label: 'Батуты',
      icon: '',
      iconImage: '/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png',
      onClick: () => console.log('Trampolines clicked')
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
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
          {categories.map((category, index) => (
            <div key={category.id} className="flex items-center gap-[5px]">
              <CategoryButton category={category} />
              {index < categories.length - 1 && (
                <div className="w-px h-9 opacity-20 bg-[#5C6476] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex absolute right-0 items-center bg-gradient-to-l from-[#262631] via-[#262631] to-transparent pl-8">
          <ScrollButton direction="right" onClick={() => scroll('right')} />
        </div>
      </div>
    </nav>
  );
};

export default BottomMenu;
