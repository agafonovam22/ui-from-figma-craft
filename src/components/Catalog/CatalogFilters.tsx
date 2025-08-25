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
    <div className="w-64 flex-shrink-0">
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
                  max={200000}
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
                      className="mr-2"
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
                    className="mr-2"
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
                    className="mr-2"
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
                <input type="checkbox" className="mr-2" />
                до 3 л.с.
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
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
                    type="radio" 
                    name="equipment-type" 
                    className="mr-2"
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
  );
};

export default CatalogFilters;