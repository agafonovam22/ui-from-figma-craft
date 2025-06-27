
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface CitySelectorProps {
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    'Москва',
    'Санкт-Петербург',
    'Саратов',
    'Сочи'
  ];

  const allCities = [
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
    'Владимир',
    'Махачкала',
    'Томск',
    'Оренбург',
    'Кемерово',
    'Сочи',
    'Малоярославец',
    'Мурманск',
    'Магнитогорск',
    'Майкоп',
    'Минеральные воды',
    'Мирный',
    'Мытищи'
  ];

  // Изменяем фильтрацию - теперь ищем города, которые НАЧИНАЮТСЯ с введенного текста
  const filteredCities = allCities.filter(city =>
    city.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleSearch = () => {
    if (filteredCities.length > 0) {
      handleCitySelect(filteredCities[0]);
    }
  };

  // Разделяем отфильтрованные города на две колонки
  const leftColumnCities = filteredCities.filter((_, index) => index % 2 === 0);
  const rightColumnCities = filteredCities.filter((_, index) => index % 2 === 1);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent className="max-w-4xl w-full p-0 bg-white">
          <div className="flex h-[350px]">
            {/* Left side - Popular cities (narrower) */}
            <div className="w-1/3 p-6 border-r border-gray-200">
              <h2 className="text-xl font-bold text-black mb-5">Популярные</h2>
              <div className="space-y-3">
                {popularCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`block text-left text-base hover:text-[#F53B49] transition-colors w-full px-2 py-1 rounded ${
                      selectedCity === city ? 'bg-[#F8F8FD] text-gray-700' : 'text-gray-700'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Search (wider) */}
            <div className="w-2/3 p-6">
              <h2 className="text-xl font-bold text-black mb-5">Выберите город</h2>
              
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Введите название города"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-28 px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F53B49] focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-24 h-8 bg-[#F8F8FD] hover:bg-[#e8e8f8] text-black rounded-none p-0 flex items-center justify-center gap-1"
                >
                  <Search size={16} />
                  Найти
                </Button>
              </div>

              {/* Show filtered cities in two columns when searching */}
              {searchQuery && (
                <div className="max-h-60 overflow-y-auto">
                  {filteredCities.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4">
                      {/* Left column */}
                      <div className="space-y-1">
                        {leftColumnCities.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleCitySelect(city)}
                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 hover:text-[#F53B49] transition-colors rounded ${
                              selectedCity === city ? 'text-[#F53B49] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                      {/* Right column */}
                      <div className="space-y-1">
                        {rightColumnCities.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleCitySelect(city)}
                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 hover:text-[#F53B49] transition-colors rounded ${
                              selectedCity === city ? 'text-[#F53B49] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4 text-sm">Города не найдены</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CitySelector;
