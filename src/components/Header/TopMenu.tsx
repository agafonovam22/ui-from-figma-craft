
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem, ButtonProps } from './types';
import CitySelector from './CitySelector';
import CallRequestDialog from './CallRequestDialog';
import BurgerMenu from './BurgerMenu';

const ActionButton: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "text-[10px] md:text-[8px] lg:text-[10px] font-normal leading-[10px] md:leading-[8px] lg:leading-[10px] gap-2 md:gap-1 lg:gap-2 px-3 md:px-2 lg:px-3 py-2.5 md:py-1.5 lg:py-2.5 rounded-[5px] transition-colors flex-shrink-0";
  const variantClasses = {
    primary: "text-white hover:bg-white/10",
    secondary: "text-[#262631] bg-white hover:bg-gray-100",
    outline: "text-white hover:bg-white/10",
    danger: "text-white bg-[#F53B49] hover:bg-[#e63946]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const TopMenu: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');

  // Загружаем сохраненный город при инициализации компонента
  useEffect(() => {
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
      setSelectedCity(savedCity);
    }
  }, []);

  const navigationItems: NavigationItem[] = [
    { label: 'О компании', href: '/about' },
    { label: 'Бренды', href: '/brands' },
    { label: 'Сервис', href: '/services' },
    { label: 'Для Бизнеса', href: '/uslugi/business' },
    { label: 'Поддержка', href: '/support' },
    { label: 'Рассрочка', href: '/uslugi/individuals' },
    { label: 'Где купить', href: '/where-to-buy' },
    { label: 'Контакты', href: '/contacts' }
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    // Сохраняем выбранный город в localStorage
    localStorage.setItem('selectedCity', city);
    console.log('Selected city:', city);
  };

  return (
    <header className="flex w-full justify-center items-center bg-[#17171E] px-2 sm:px-4 md:px-6 lg:px-[60px] py-0 border-b border-solid border-[rgba(255,255,255,0.10)]">
      <div className="flex w-full max-w-[1800px] h-[53px] md:h-[40px] lg:h-[53px] justify-between items-center gap-2 md:gap-1.5 lg:gap-[30px] flex-shrink-0">
        <CitySelector selectedCity={selectedCity} onCitySelect={handleCitySelect} />
        
        {/* Desktop navigation - hidden on tablet */}
        <nav className="hidden lg:flex items-start gap-[15px]" role="navigation" aria-label="Основная навигация">
          {navigationItems.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                to={item.href}
                className="text-layout-grey-nav font-benzin text-[10px] font-normal leading-[10px] hover:text-white transition-colors whitespace-nowrap"
                style={{ lineHeight: '100%' }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href || '#'}
                className="text-layout-grey-nav font-benzin text-[10px] font-normal leading-[10px] hover:text-white transition-colors whitespace-nowrap"
                style={{ lineHeight: '100%' }}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Tablet & desktop buttons - adjusted for tablet */}
        <div className="hidden md:flex lg:flex items-end gap-2 md:gap-1 lg:gap-2">
          <ActionButton variant="primary" onClick={() => console.log('Dealers clicked')}>
            Для дилеров
          </ActionButton>
          <ActionButton variant="secondary" onClick={() => console.log('Suppliers clicked')}>
            For suppliers
          </ActionButton>
        </div>

        {/* Phone and call button - adjusted for tablet */}
        <div className="hidden md:flex lg:flex items-end gap-2 md:gap-1 lg:gap-2">
          <a 
            href={selectedCity === 'Москва' ? "tel:+74996775632" : "tel:88003332595"} 
            className="text-[10px] md:text-[8px] lg:text-[10px] font-normal leading-[10px] md:leading-[8px] lg:leading-[10px] gap-2 md:gap-1 lg:gap-2 px-3 md:px-2 lg:px-3 py-2.5 md:py-1.5 lg:py-2.5 rounded-[5px] transition-colors text-white hover:bg-white/10 flex-shrink-0"
          >
            {selectedCity === 'Москва' ? '+7 499 677 56 32' : '8 800 333 25 95'}
          </a>
          <CallRequestDialog>
            <ActionButton variant="danger">
              Заказать звонок
            </ActionButton>
          </CallRequestDialog>
        </div>

        {/* Burger menu for tablet only */}
        <BurgerMenu navigationItems={navigationItems} />
      </div>
    </header>
  );
};

export default TopMenu;
