import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SupportCitySelectorProps {
  selectedCity: string;
  onCitySelect: (city: string) => void;
}

const SupportCitySelector: React.FC<SupportCitySelectorProps> = ({ selectedCity, onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Красноярск',
    'Нижний Новгород',
    'Челябинск',
    'Уфа',
    'Краснодар'
  ];

  const allCities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Красноярск',
    'Нижний Новгород',
    'Челябинск',
    'Уфа',
    'Краснодар',
    'Самара',
    'Ростов-на-Дону',
    'Омск',
    'Воронеж',
    'Пермь',
    'Волгоград',
    'Саратов',
    'Тюмень',
    'Тольятти',
    'Махачкала',
    'Барнаул',
    'Ижевск',
    'Хабаровск',
    'Ульяновск',
    'Иркутск',
    'Владивосток',
    'Ярославль',
    'Ставрополь',
    'Севастополь',
    'Набережные Челны',
    'Томск',
    'Балашиха',
    'Кемерово',
    'Рязань',
    'Чебоксары',
    'Калининград',
    'Пенза',
    'Липецк',
    'Киров',
    'Сочи'
  ];

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

  const leftColumnCities = filteredCities.filter((_, index) => index % 2 === 0);
  const rightColumnCities = filteredCities.filter((_, index) => index % 2 === 1);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          aria-label={`Выбрать город: ${selectedCity}`}
        >
          <span className="text-[#F53B49] text-[20px]" style={{fontFamily: 'Benzin, sans-serif', fontWeight: '500', lineHeight: '1.2'}}>
            {selectedCity}
          </span>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.5L8.39711 0.5H0.602886L4.5 6.5Z" fill="#F53B49" />
          </svg>
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent className="max-w-4xl w-full p-0 bg-white">
          <div className="flex h-[280px]">
            {/* Left side - Popular cities */}
            <div className="w-1/3 p-6 border-r border-gray-200">
              <h2 className="text-xl font-bold text-black mb-5">Популярные</h2>
              <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2">
                {popularCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`block text-left text-base hover:text-[#F53B49] transition-colors w-full px-2 py-1 rounded ${
                      selectedCity === city ? 'bg-[#F8F8FD] text-black' : 'text-gray-700'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Search */}
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
                <div className="max-h-44 overflow-y-auto">
                  {filteredCities.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4">
                      {/* Left column */}
                      <div className="space-y-1">
                        {leftColumnCities.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleCitySelect(city)}
                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 hover:text-[#F53B49] transition-colors rounded ${
                              selectedCity === city ? 'bg-[#F8F8FD] text-black font-medium' : 'text-gray-700'
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
                              selectedCity === city ? 'bg-[#F8F8FD] text-black font-medium' : 'text-gray-700'
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

export default SupportCitySelector;