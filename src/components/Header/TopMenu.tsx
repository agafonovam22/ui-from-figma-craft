
import React, { useState } from 'react';
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
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'О компании', href: '/about' },
    { label: 'Бренды', href: '/brands' },
    { label: 'Сервис', href: '/services' },
    { label: 'Услуги', href: '/uslugi' },
    { label: 'Поддержка', href: '/support' },
    { label: 'Где купить', href: '/where-to-buy' },
    { label: 'Контакты', href: '/contacts' }
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    console.log('Selected city:', city);
  };

  return (
    <header className="flex w-full justify-center items-center bg-[#17171E] px-2 sm:px-4 lg:px-[60px] py-0 border-b border-solid border-[rgba(255,255,255,0.10)]">
      <div className="flex w-full max-w-[1800px] h-[53px] justify-between items-center gap-2 lg:gap-[50px] flex-shrink-0">
        <CitySelector selectedCity={selectedCity} onCitySelect={handleCitySelect} />
        
        <nav className="flex items-start gap-2 lg:gap-[25px] max-md:hidden" role="navigation" aria-label="Основная навигация">
          {navigationItems.map((item, index) => (
            item.label === 'О компании' ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to={item.href}
                  className="text-layout-grey-nav font-benzin text-[10px] font-normal leading-[10px] hover:text-white transition-colors whitespace-nowrap"
                  style={{ lineHeight: '100%' }}
                >
                  {item.label}
                </Link>
                
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#262631] rounded-md shadow-lg border border-[rgba(255,255,255,0.10)] z-50">
                    <div className="py-2">
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-[10px] text-layout-grey-nav hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        О компании
                      </Link>
                      <Link
                        to="/company-news"
                        className="block px-4 py-2 text-[10px] text-layout-grey-nav hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        Новости
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : item.href ? (
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

        <div className="flex items-end gap-2 max-sm:hidden">
          <ActionButton variant="primary" onClick={() => console.log('Dealers clicked')}>
            Для диллеров
          </ActionButton>
          <ActionButton variant="secondary" onClick={() => console.log('Suppliers clicked')}>
            For suppliers
          </ActionButton>
        </div>

        <div className="flex items-end gap-2 max-sm:hidden">
          <a href="tel:+78007751217" className="text-[10px] font-normal leading-[10px] gap-2 px-3 py-2.5 rounded-[5px] transition-colors text-white hover:bg-white/10 flex-shrink-0">
            +7 (800) 775-12-17
          </a>
          <CallRequestDialog>
            <ActionButton variant="danger">
              Заказать звонок
            </ActionButton>
          </CallRequestDialog>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
