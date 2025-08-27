import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { FilterState } from '@/types/filters';

interface CatalogGridFilterProps {
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

const CatalogGridFilter: React.FC<CatalogGridFilterProps> = ({
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
    brand: false,
    type: false,
    power: false,
    trainer: false
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
    <div className="bg-[#F8F8FD] rounded-lg p-4 h-fit sticky top-4">
      <h2 className="text-[16px] font-semibold text-[#262631] mb-4" style={{fontFamily: 'Benzin-Semibold'}}>Фильтр</h2>
      
      {/* Price Filter */}
      <div className="mb-4">
        <h3 
          className="text-[12px] text-[#262631] mb-2 flex items-center justify-between cursor-pointer" 
          style={{fontFamily: 'Benzin-Regular'}}
          onClick={() => toggleFilter('price')}
        >
          Цена
          {expandedFilters.price ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </h3>
        
        {expandedFilters.price && (
          <>
            {/* Price Range Slider */}
            <div className="mb-3">
              <div className="flex justify-between text-[10px] text-gray-600 mb-1" style={{fontFamily: 'Manrope'}}>
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
            
            <div className="space-y-1 text-[10px] text-gray-600" style={{fontFamily: 'Manrope'}}>
              {['до 500', 'до 20000', 'до 50000', 'до 100000'].map(range => (
                <label key={range} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]"
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

      <Separator className="my-3" />

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 
          className="text-[12px] text-[#262631] mb-2 flex items-center justify-between cursor-pointer" 
          style={{fontFamily: 'Benzin-Regular'}}
          onClick={() => toggleFilter('brand')}
        >
          Бренд
          {expandedFilters.brand ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </h3>
        {expandedFilters.brand && (
          <div className="space-y-1 text-[10px] text-gray-600" style={{fontFamily: 'Manrope'}}>
            {(showAllBrands ? filterOptions.brands : filterOptions.brands.slice(0, 4)).map(brand => (
              <label key={brand} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => handleBrandChange(brand, e.target.checked)}
                />
                {brand}
              </label>
            ))}
            {filterOptions.brands.length > 4 && !showAllBrands && (
              <button 
                className="text-[#F53B49] text-[9px] mt-2 text-center w-full" 
                style={{fontFamily: 'Benzin-Regular'}}
                onClick={() => setShowAllBrands(true)}
              >
                Показать все ({filterOptions.brands.length})
              </button>
            )}
            {showAllBrands && (
              <button 
                className="text-[#F53B49] text-[9px] mt-2 text-center w-full" 
                style={{fontFamily: 'Benzin-Regular'}}
                onClick={() => setShowAllBrands(false)}
              >
                Скрыть
              </button>
            )}
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Purpose Type Filter */}
      <div className="mb-4">
        <h3 
          className="text-[12px] text-[#262631] mb-2 flex items-center justify-between cursor-pointer" 
          style={{fontFamily: 'Benzin-Regular'}}
          onClick={() => toggleFilter('type')}
        >
          Тип назначения
          {expandedFilters.type ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </h3>
        {expandedFilters.type && (
          <div className="space-y-1 text-[10px] text-gray-600" style={{fontFamily: 'Manrope'}}>
            {['Домашние', 'Профессиональные', 'Полупрофессиональные', 'Реабилитация'].map(type => (
              <label key={type} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]"
                  checked={filters.purposeTypes.includes(type)}
                  onChange={(e) => handlePurposeTypeChange(type, e.target.checked)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Power Filter */}
      <div className="mb-4">
        <h3 
          className="text-[12px] text-[#262631] mb-2 flex items-center justify-between cursor-pointer" 
          style={{fontFamily: 'Benzin-Regular'}}
          onClick={() => toggleFilter('power')}
        >
          Мощность
          {expandedFilters.power ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </h3>
        {expandedFilters.power && (
          <div className="space-y-1 text-[10px] text-gray-600" style={{fontFamily: 'Manrope'}}>
            <div className="flex items-center space-x-1 mb-2">
              <input 
                type="text" 
                placeholder="от 1.25"
                value={powerMin}
                onChange={(e) => setPowerMin(e.target.value)}
                onBlur={handlePowerRangeInput}
                className="w-full px-2 py-1 border border-gray-300 rounded text-gray-600 text-[10px]"
                style={{fontFamily: 'Manrope'}}
              />
              <input 
                type="text" 
                placeholder="до 24.56"
                value={powerMax}
                onChange={(e) => setPowerMax(e.target.value)}
                onBlur={handlePowerRangeInput}
                className="w-full px-2 py-1 border border-gray-300 rounded text-gray-600 text-[10px]"
                style={{fontFamily: 'Manrope'}}
              />
            </div>
            
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]" 
              />
              до 3 л.с.
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]" 
              />
              3-4 л.с.
            </label>
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Equipment Type Filter */}
      <div className="mb-4">
        <h3 
          className="text-[12px] text-[#262631] mb-2 flex items-center justify-between cursor-pointer" 
          style={{fontFamily: 'Benzin-Regular'}}
          onClick={() => toggleFilter('trainer')}
        >
          Тип тренажера
          {expandedFilters.trainer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </h3>
        {expandedFilters.trainer && (
          <div className="space-y-1 text-[10px] text-gray-600" style={{fontFamily: 'Manrope'}}>
            {filterOptions.equipmentTypes.slice(0, 5).map(type => (
              <label key={type} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-1 w-3 h-3 appearance-none border border-gray-300 rounded checked:border-black checked:bg-black checked:shadow-[inset_0_0_0_1px_white,inset_0_0_0_2px_black]"
                  checked={filters.equipmentTypes.includes(type)}
                  onChange={(e) => handleEquipmentTypeChange(type, e.target.checked)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Apply Filters Button */}
      <Button 
        onClick={onApplyFilters}
        className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-2 h-9 rounded-lg text-[10px]" 
        style={{fontFamily: 'Benzin-Regular'}}
      >
        Применить
      </Button>
      
      <Button 
        onClick={onResetFilters}
        variant="outline" 
        className="w-full border-[#262631] text-[#262631] hover:bg-gray-50 h-9 rounded-lg text-[10px]" 
        style={{fontFamily: 'Benzin-Regular'}}
      >
        Сбросить
      </Button>
    </div>
  );
};

export default CatalogGridFilter;