
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface CitySelectorProps {
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Нижний Новгород',
    'Челябинск',
    'Самара',
    'Омск',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Воронеж',
    'Пермь',
    'Волгоград',
    'Краснодар',
    'Саратов',
    'Тюмень',
    'Тольятти',
    'Ижевск',
    'Барнаул',
    'Ульяновск',
    'Иркутск',
    'Хабаровск',
    'Ярославль',
    'Владивосток',
    'Махачкала',
    'Томск',
    'Оренбург',
    'Кемерово'
  ];

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          aria-label={`Выбрать город: ${selectedCity}`}
        >
          <span className="text-white text-sm font-normal leading-[14px]">
            {selectedCity}
          </span>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5L8.39711 0.5H0.602886L4.5 6.5Z" fill="white" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-64 p-0 bg-white border border-gray-200 shadow-lg z-50" 
        align="start"
        sideOffset={5}
      >
        <div className="max-h-80 overflow-y-auto">
          <div className="p-3 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-900">Выберите город</h3>
          </div>
          <div className="py-1">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCitySelect(city)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  selectedCity === city 
                    ? 'bg-gray-100 text-[#F53B49] font-medium' 
                    : 'text-gray-700'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CitySelector;
