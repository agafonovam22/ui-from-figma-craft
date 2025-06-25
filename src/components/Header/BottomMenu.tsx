import React, { useRef } from 'react';
import { CategoryItem } from './types';

const CategoryButton: React.FC<{ category: CategoryItem; isActive?: boolean }> = ({ 
  category, 
  isActive = false 
}) => (
  <button
    className={`flex h-[46px] items-center gap-2.5 bg-[#262631] px-6 py-3.5 rounded-[5px] max-sm:whitespace-nowrap max-sm:px-4 max-sm:py-3.5 hover:bg-[#3a3a47] transition-colors ${
      isActive ? 'bg-[#F53B49] hover:bg-[#e63946]' : ''
    }`}
    onClick={category.onClick}
    aria-label={`Категория: ${category.label}`}
  >
    <div dangerouslySetInnerHTML={{ __html: category.icon }} />
    <span className={`text-sm font-normal leading-[14px] ${
      isActive ? 'text-white' : 'text-[#778093]'
    }`}>
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
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1111 18.8115V18.8426C19.1111 19.1448 18.8667 19.3937 18.56 19.3937H0.551111C0.248889 19.3937 0 19.1493 0 18.8426V18.8115C0 18.5093 0.244444 18.2604 0.551111 18.2604H18.5644C18.8667 18.2604 19.1111 18.5093 19.1111 18.8115ZM18.5689 14.8737C18.4444 14.7581 18.3111 14.6693 18.1644 14.5981C18.1511 14.5937 18.1378 14.5893 18.1244 14.5804C17.9111 14.4826 17.6756 14.4293 17.4311 14.4293C17.3822 14.4293 17.3378 14.4293 17.2889 14.4337L16.1644 14.527H16.16L0.928889 15.7715C0.408889 15.8159 0 16.2559 0 16.7804C0 17.3404 0.453333 17.7937 1.01333 17.7937H17.4311C18.36 17.7937 19.1111 17.0381 19.1111 16.1137C19.1111 15.6337 18.92 15.1937 18.5689 14.8737Z" fill="#778093"/></svg>',
      onClick: () => console.log('Treadmills clicked')
    },
    {
      id: 'dumbbells',
      label: 'Гантели и ряды',
      icon: '<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9"><path d="M12.6373 7.03285C13.0048 6.38518 13.1994 5.65377 13.2022 4.90909C13.2022 2.20211 10.6331 0 7.47498 0C4.31675 0 1.7476 2.20211 1.7476 4.90909C1.75053 5.65377 1.94508 6.38515 2.31253 7.03285C1.58127 7.75038 1.00816 8.61293 0.630031 9.5651C0.2519 10.5173 0.0771013 11.538 0.116864 12.5617C0.156585 13.5854 0.409974 14.5896 0.860757 15.5095C1.31154 16.4295 1.94975 17.2451 2.73441 17.9038C2.80822 17.966 2.90163 18 2.99812 18H11.9517C12.0484 18 12.1417 17.9659 12.2154 17.9038C13.0001 17.2451 13.6383 16.4296 14.0891 15.5096C14.5399 14.5896 14.7933 13.5855 14.8331 12.5617C14.8728 11.538 14.698 10.5173 14.3198 9.56509C13.9417 8.61292 13.3686 7.75038 12.6373 7.03285Z" fill="#778093"/></g></svg>',
      onClick: () => console.log('Dumbbells clicked')
    },
    {
      id: 'bikes',
      label: 'Велотренажеры',
      icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.10695 10.4153L3.41602 8.24624H5.13477L5.68477 9.9753C5.1341 10.0115 4.5969 10.1613 4.10695 10.4153ZM4.9182 19.2462L5.82227 18.2116C5.2349 18.1913 4.65897 18.0436 4.13445 17.7784L2.8557 19.2462H4.9182Z" fill="#778093"/></svg>',
      onClick: () => console.log('Bikes clicked')
    },
    {
      id: 'multistations',
      label: 'Мультистанции',
      icon: '<svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9383 19.6145H10.7441V16.2398H6.45614V19.6145H1.26232C1.05044 19.6147 0.847288 19.699 0.697425 19.8487C0.547562 19.9985 0.463218 20.2016 0.462891 20.4135V21.201C0.463218 21.4129 0.547562 21.616 0.697425 21.7658C0.847288 21.9155 1.05044 21.9998 1.26232 22H15.9379C16.1498 21.9998 16.353 21.9155 16.5028 21.7658C16.6527 21.616 16.737 21.4129 16.7374 21.201V20.4135C16.7371 20.2017 16.6529 19.9986 16.5031 19.8488C16.3533 19.699 16.1502 19.6147 15.9383 19.6145Z" fill="#778093"/></svg>',
      onClick: () => console.log('Multistations clicked')
    },
    {
      id: 'trampolines',
      label: 'Батуты',
      icon: '<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.7496 5.5642C3.53524 6.00703 3.52498 6.50644 3.7496 6.97045C4.73468 9.00994 9.51935 9.57881 11.8693 9.64186C12.3203 9.65442 12.799 9.65555 13.2836 9.64186C15.5921 9.57994 20.4133 9.02011 21.4033 6.97045C21.6177 6.52758 21.628 6.02822 21.4033 5.5642C20.4159 3.5198 15.6144 2.95533 13.2836 2.8928C12.8123 2.87981 12.3407 2.87981 11.8693 2.8928C9.5591 2.95476 4.73942 3.51502 3.7496 5.5642Z" fill="#778093"/></svg>',
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
      className="flex w-full justify-center items-center gap-[5px] bg-[#262631] px-0 py-1 max-md:overflow-x-auto"
      role="navigation"
      aria-label="Категории товаров"
    >
      <div className="flex w-full max-w-[1660px] items-center gap-[5px] relative max-md:w-auto max-md:min-w-full">
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-[5px] overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <CategoryButton category={category} isActive={index === 0} />
              {index < categories.length - 1 && (
                <div className="w-px h-9 opacity-20 bg-[#5C6476] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="hidden md:flex absolute right-0 items-center gap-2 bg-gradient-to-l from-[#262631] via-[#262631] to-transparent pl-8">
          <ScrollButton direction="left" onClick={() => scroll('left')} />
          <ScrollButton direction="right" onClick={() => scroll('right')} />
        </div>
      </div>
    </nav>
  );
};

export default BottomMenu;
