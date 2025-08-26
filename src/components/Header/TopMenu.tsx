
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem, ButtonProps } from './types';
import CitySelector from './CitySelector';
import CallRequestDialog from './CallRequestDialog';

const ActionButton: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "text-[10px] font-normal leading-[10px] gap-2 px-3 py-2.5 rounded-[5px] transition-colors flex-shrink-0";
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
    <header className="flex w-full justify-center items-center bg-[#17171E] py-0 border-b border-solid border-[rgba(255,255,255,0.10)]">
      <div className="flex w-full max-w-[1920px] mx-auto px-4 lg:px-8 h-[53px] justify-between items-center min-w-0">
        <div className="flex-shrink-0 w-auto">
          <CitySelector selectedCity={selectedCity} onCitySelect={handleCitySelect} />
        </div>
        
        <nav className="hidden md:flex items-center justify-center flex-1 max-w-[700px] mx-auto gap-1" role="navigation" aria-label="Основная навигация">
          {navigationItems.map((item, index) => (
            item.href ? (
              <Link
                key={index}
                to={item.href}
                className="text-layout-grey-nav font-benzin text-[9px] font-normal leading-[9px] hover:text-white transition-colors whitespace-nowrap inline-block px-0.5"
                style={{ lineHeight: '100%', display: 'inline-block' }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href || '#'}
                className="text-layout-grey-nav font-benzin text-[9px] font-normal leading-[9px] hover:text-white transition-colors whitespace-nowrap inline-block px-0.5"
                style={{ lineHeight: '100%', display: 'inline-block' }}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-1 max-sm:hidden flex-shrink-0 w-auto max-w-[600px]">
          <ActionButton variant="primary" onClick={() => console.log('Dealers clicked')} className="text-[8px] px-2 py-2">
            Дилеры
          </ActionButton>
          <ActionButton variant="secondary" onClick={() => console.log('Suppliers clicked')} className="text-[8px] px-2 py-2">
            Suppliers
          </ActionButton>
          
          <a 
            href={selectedCity === 'Москва' ? "tel:+74996775632" : "tel:88003332595"} 
            className="text-[8px] font-normal leading-[8px] px-2 py-2 rounded-[5px] transition-colors text-white hover:bg-white/10 flex-shrink-0 whitespace-nowrap"
          >
            {selectedCity === 'Москва' ? '+7 499 677 56 32' : '8 800 333 25 95'}
          </a>
          
          <CallRequestDialog>
            <ActionButton variant="danger" className="text-[8px] px-2 py-2">
              Звонок
            </ActionButton>
          </CallRequestDialog>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
