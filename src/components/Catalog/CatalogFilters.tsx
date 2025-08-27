import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { FilterState } from '@/types/filters';

interface CatalogFiltersProps {
  filters: FilterState;
  filterOptions: {
    brands: string[];
    equipmentTypes: string[];
  };
  onPriceChange: (priceFilter: FilterState['price']) => void;
  onBrandsChange: (brands: string[]) => void;
  onPurposeTypesChange: (types: string[]) => void;
  onPowerRangeChange: (range: FilterState['powerRange']) => void;
  onEquipmentTypesChange: (types: string[]) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  filters,
  filterOptions,
  onPriceChange,
  onBrandsChange,
  onPurposeTypesChange,
  onPowerRangeChange,
  onEquipmentTypesChange,
  onApplyFilters,
  onResetFilters
}) => {
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    brand: true,
    type: true,
    power: true,
    trainer: true
  });

  const [showAllBrands, setShowAllBrands] = useState(false);

  const [priceRange, setPriceRange] = useState([filters.price.min, filters.price.max]);
  const [powerMin, setPowerMin] = useState('');
  const [powerMax, setPowerMax] = useState('');

  useEffect(() => {
    setPriceRange([filters.price.min, filters.price.max]);
  }, [filters.price.min, filters.price.max]);

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
    onPriceChange({
      min: value[0],
      max: value[1],
      ranges: []
    });
  };

  const handlePriceRangeSelect = (range: string) => {
    const isSelected = filters.price.ranges.includes(range);
    const newRanges = isSelected 
      ? filters.price.ranges.filter(r => r !== range)
      : [...filters.price.ranges, range];
    
    onPriceChange({
      ...filters.price,
      ranges: newRanges
    });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    onBrandsChange(newBrands);
  };

  const handlePurposeTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.purposeTypes, type]
      : filters.purposeTypes.filter(t => t !== type);
    onPurposeTypesChange(newTypes);
  };

  const handleEquipmentTypeChange = (type: string, selected: boolean) => {
    const newTypes = selected 
      ? [...filters.equipmentTypes, type]
      : filters.equipmentTypes.filter(t => t !== type);
    onEquipmentTypesChange(newTypes);
  };

  const handlePowerRangeInput = () => {
    const min = powerMin ? parseFloat(powerMin) : undefined;
    const max = powerMax ? parseFloat(powerMax) : undefined;
    onPowerRangeChange({ min, max });
  };

  return (
    <>
      {/* Desktop Filters Layout */}
      <div className="w-64 flex-shrink-0 lg:block hidden">
        <h1 className="text-[48px] font-semibold text-[#262631] mb-6" style={{fontFamily: 'Benzin-Semibold'}}>Каталог</h1>
        
        {/* Filters Container */}
        <div className="bg-[#F8F8FD] rounded-lg p-6 mb-2.5">
          <h2 className="text-[20px] font-semibold text-[#262631] mb-6" style={{fontFamily: 'Benzin-Semibold'}}>Фильтр</h2>
          
          {/* Price Filter */}
          <div className="mb-6">
            <h3 
              className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
              style={{fontFamily: 'Benzin-Regular'}}
              onClick={() => toggleFilter('price')}
            >
              Цена
              {expandedFilters.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </h3>
            
            {expandedFilters.price && (
              <>
                {/* Price Range Slider */}
                <div className="mb-4">
                  <div className="flex justify-between text-[14px] text-gray-600 mb-2" style={{fontFamily: 'Manrope'}}>
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={handlePriceRangeChange}
                    max={1500000}
                    min={0}
                    step={1000}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                  {['до 500', 'до 20000', 'до 50000', 'до 100000'].map(range => (
                    <label key={range} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                        checked={filters.price.ranges.includes(range)}
                        onChange={(e) => handlePriceRangeSelect(range)}
                      />
                      {range}₽
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          <Separator className="mt-5 mb-5" />

          {/* Brand Filter */}
          <div className="mb-6">
            <h3 
              className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
              style={{fontFamily: 'Benzin-Regular'}}
              onClick={() => toggleFilter('brand')}
            >
              Бренд
              {expandedFilters.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </h3>
            {expandedFilters.brand && (
              <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {(showAllBrands ? filterOptions.brands : filterOptions.brands.slice(0, 6)).map(brand => (
                  <label key={brand} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.brands.includes(brand)}
                      onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    />
                    {brand}
                  </label>
                ))}
                {filterOptions.brands.length > 6 && !showAllBrands && (
                  <button 
                    className="text-[#F53B49] text-[12px] mt-5 text-center w-full" 
                    style={{fontFamily: 'Benzin-Regular'}}
                    onClick={() => setShowAllBrands(true)}
                  >
                    Показать все ({filterOptions.brands.length})
                  </button>
                )}
                {showAllBrands && (
                  <button 
                    className="text-[#F53B49] text-[12px] mt-5 text-center w-full" 
                    style={{fontFamily: 'Benzin-Regular'}}
                    onClick={() => setShowAllBrands(false)}
                  >
                    Скрыть
                  </button>
                )}
              </div>
            )}
          </div>

          <Separator className="mt-5 mb-5" />

          {/* Purpose Type Filter */}
          <div className="mb-6">
            <h3 
              className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
              style={{fontFamily: 'Benzin-Regular'}}
              onClick={() => toggleFilter('type')}
            >
              Тип назначения
              {expandedFilters.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </h3>
            {expandedFilters.type && (
              <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {['Домашние', 'Профессиональные', 'Полупрофессиональные', 'Реабилитация'].map(type => (
                  <label key={type} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.purposeTypes.includes(type)}
                      onChange={(e) => handlePurposeTypeChange(type, e.target.checked)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          <Separator className="mt-5 mb-5" />

          {/* Power Filter */}
          <div className="mb-6">
            <h3 
              className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
              style={{fontFamily: 'Benzin-Regular'}}
              onClick={() => toggleFilter('power')}
            >
              Мощность двигателя
              {expandedFilters.power ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </h3>
            {expandedFilters.power && (
              <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {/* Input fields for power range */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="от 1.25"
                      value={powerMin}
                      onChange={(e) => setPowerMin(e.target.value)}
                      onBlur={handlePowerRangeInput}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                      style={{fontFamily: 'Manrope'}}
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="до 24.56"
                      value={powerMax}
                      onChange={(e) => setPowerMax(e.target.value)}
                      onBlur={handlePowerRangeInput}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                      style={{fontFamily: 'Manrope'}}
                    />
                  </div>
                </div>
                
                {/* Checkbox options */}
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]" 
                  />
                  до 3 л.с.
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]" 
                  />
                  3-4 л.с.
                </label>
              </div>
            )}
          </div>

          <Separator className="mt-5 mb-5" />

          {/* Equipment Type Filter */}
          <div className="mb-6">
            <h3 
              className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
              style={{fontFamily: 'Benzin-Regular'}}
              onClick={() => toggleFilter('trainer')}
            >
              Тип тренажера
              {expandedFilters.trainer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </h3>
            {expandedFilters.trainer && (
              <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {filterOptions.equipmentTypes.slice(0, 8).map(type => (
                  <label key={type} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-4 h-4 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.equipmentTypes.includes(type)}
                      onChange={(e) => handleEquipmentTypeChange(type, e.target.checked)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          <Separator className="mt-5 mb-5" />

          {/* Apply Filters Button */}
          <Button 
            onClick={onApplyFilters}
            className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-3 h-12 rounded-lg text-[12px]" 
            style={{fontFamily: 'Benzin-Regular'}}
          >
            Применить
          </Button>
          
          <Button 
            onClick={onResetFilters}
            variant="outline" 
            className="w-full border-[#262631] text-[#262631] hover:bg-gray-50 h-12 rounded-lg text-[12px]" 
            style={{fontFamily: 'Benzin-Regular'}}
          >
            Сбросить
          </Button>
        </div>

        {/* Ad Banner */}
        <div 
          className="text-white p-6 rounded-lg"
          style={{ background: 'linear-gradient(97deg, #262631 1.32%, #6F6F90 108.06%)' }}
        >
          <h3 className="text-sm font-bold mb-2">Место для рекламы</h3>
          <p className="text-xs text-gray-300 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button size="sm" className="bg-[#F53B49] hover:bg-[#e63946] text-white">
            Перейти →
          </Button>
        </div>
      </div>

      {/* Tablet Filters Layout */}
      <div className="lg:hidden block">
        <div className="bg-[#F8F8FD] rounded-lg p-4 mb-4">
          <h2 className="text-[18px] font-semibold text-[#262631] mb-4" style={{fontFamily: 'Benzin-Semibold'}}>Фильтр</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Price Filter */}
            <div>
              <h3 className="text-[14px] text-[#262631] mb-2" style={{fontFamily: 'Benzin-Regular'}}>Цена</h3>
              <div className="mb-3">
                <div className="flex justify-between text-[11px] text-gray-600 mb-1" style={{fontFamily: 'Manrope'}}>
                  <span>{priceRange[0].toLocaleString()} ₽</span>
                  <span>{priceRange[1].toLocaleString()} ₽</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  max={1500000}
                  min={0}
                  step={1000}
                  className="w-full"
                />
              </div>
              <div className="space-y-2 text-[11px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {['до 500', 'до 20000', 'до 50000', 'до 100000'].map(range => (
                  <label key={range} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.price.ranges.includes(range)}
                      onChange={(e) => handlePriceRangeSelect(range)}
                    />
                    {range}₽
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-[14px] text-[#262631] mb-2" style={{fontFamily: 'Benzin-Regular'}}>Бренд</h3>
              <div className="space-y-2 text-[11px] text-gray-600 max-h-32 overflow-y-auto" style={{fontFamily: 'Manrope'}}>
                {filterOptions.brands.slice(0, 6).map(brand => (
                  <label key={brand} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.brands.includes(brand)}
                      onChange={(e) => handleBrandChange(brand, e.target.checked)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Purpose Type Filter */}
            <div>
              <h3 className="text-[14px] text-[#262631] mb-2" style={{fontFamily: 'Benzin-Regular'}}>Тип назначения</h3>
              <div className="space-y-2 text-[11px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {['Домашние', 'Профессиональные', 'Полупрофессиональные', 'Реабилитация'].map(type => (
                  <label key={type} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.purposeTypes.includes(type)}
                      onChange={(e) => handlePurposeTypeChange(type, e.target.checked)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Power Filter */}
            <div>
              <h3 className="text-[14px] text-[#262631] mb-2" style={{fontFamily: 'Benzin-Regular'}}>Мощность двигателя</h3>
              <div className="space-y-2 text-[11px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                {/* Input fields for power range */}
                <div className="flex flex-col space-y-1 mb-2">
                  <input 
                    type="text" 
                    placeholder="от 1.25"
                    value={powerMin}
                    onChange={(e) => setPowerMin(e.target.value)}
                    onBlur={handlePowerRangeInput}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-gray-600 text-[11px]"
                    style={{fontFamily: 'Manrope'}}
                  />
                  <input 
                    type="text" 
                    placeholder="до 24.56"
                    value={powerMax}
                    onChange={(e) => setPowerMax(e.target.value)}
                    onBlur={handlePowerRangeInput}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-gray-600 text-[11px]"
                    style={{fontFamily: 'Manrope'}}
                  />
                </div>
                
                {/* Checkbox options */}
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]" 
                  />
                  до 3 л.с.
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]" 
                  />
                  3-4 л.с.
                </label>
              </div>
            </div>

            {/* Equipment Type Filter */}
            <div>
              <h3 className="text-[14px] text-[#262631] mb-2" style={{fontFamily: 'Benzin-Regular'}}>Тип тренажера</h3>
              <div className="space-y-2 text-[11px] text-gray-600 max-h-32 overflow-y-auto" style={{fontFamily: 'Manrope'}}>
                {filterOptions.equipmentTypes.slice(0, 6).map(type => (
                  <label key={type} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_2px_white,inset_0_0_0_3px_black]"
                      checked={filters.equipmentTypes.includes(type)}
                      onChange={(e) => handleEquipmentTypeChange(type, e.target.checked)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4 gap-2">
            <Button 
              onClick={onApplyFilters}
              className="bg-[#F53B49] hover:bg-[#e63946] text-white h-10 rounded-lg text-[12px] flex-1" 
              style={{fontFamily: 'Benzin-Regular'}}
            >
              Применить
            </Button>
            
            <Button 
              onClick={onResetFilters}
              variant="outline" 
              className="border-[#262631] text-[#262631] hover:bg-gray-50 h-10 rounded-lg text-[12px] flex-1" 
              style={{fontFamily: 'Benzin-Regular'}}
            >
              Сбросить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogFilters;