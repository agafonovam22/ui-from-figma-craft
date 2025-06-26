

import React from 'react';
import { CityButtonProps, NavigationItem, ButtonProps } from './types';

const CityButton: React.FC<CityButtonProps> = ({ city, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
    aria-label={`Выбрать город: ${city}`}
  >
    <span className="text-white text-sm font-normal leading-[14px]">
      {city}
    </span>
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 6.5L8.39711 0.5H0.602886L4.5 6.5Z" fill="white" />
    </svg>
  </button>
);

const ActionButton: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "text-xs font-normal leading-3 gap-2.5 px-3.5 py-3 rounded-[5px] transition-colors";
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
  const navigationItems: NavigationItem[] = [
    { label: 'О компании' },
    { label: 'Бренды' },
    { label: 'Сервис' },
    { label: 'Услуги' },
    { label: 'Поддержка' },
    { label: 'Где купить' },
    { label: 'Контакты' }
  ];

  return (
    <header className="flex w-full justify-center items-center bg-[#17171E] px-4 sm:px-8 lg:px-[130px] py-0 border-b border-solid border-[rgba(255,255,255,0.10)]">
      <div className="flex w-full max-w-[1660px] h-[53px] justify-between items-center gap-4 lg:gap-[60px]">
        <CityButton city="Москва" onClick={() => console.log('City selector clicked')} />
        
        <nav className="flex items-start gap-4 lg:gap-[30px] max-md:hidden" role="navigation" aria-label="Основная навигация">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="text-[#5C6476] text-xs font-normal leading-3 hover:text-white transition-colors whitespace-nowrap"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-end gap-2.5 max-sm:hidden">
          <ActionButton variant="primary" onClick={() => console.log('Dealers clicked')}>
            Для диллеров
          </ActionButton>
          <ActionButton variant="secondary" onClick={() => console.log('Suppliers clicked')}>
            For suppliers
          </ActionButton>
        </div>

        <div className="flex items-end gap-2.5 max-sm:hidden">
          <ActionButton variant="primary" onClick={() => console.log('Phone clicked')}>
            +7 (800) 775-12-17
          </ActionButton>
          <ActionButton variant="danger" onClick={() => console.log('Callback clicked')}>
            Заказать звонок
          </ActionButton>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;

