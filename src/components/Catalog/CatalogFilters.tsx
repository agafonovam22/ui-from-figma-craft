import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

const CatalogFilters: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    brand: true,
    type: true,
    power: true,
    trainer: true
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <div className="w-64 flex-shrink-0">
      <h1 className="text-[48px] font-semibold text-[#262631] mb-6" style={{fontFamily: 'Benzin-Semibold'}}>Каталог</h1>
      
      {/* Filters Container */}
      <div className="bg-[#F8F8FD] rounded-lg p-6 mb-6">
        <h2 className="text-[20px] font-semibold text-[#262631] mb-6" style={{fontFamily: 'Benzin-Semibold'}}>Фильтр</h2>
        
        {/* Price Filter */}
        <div className="mb-6">
          <h3 
            className="text-[14px] text-[#262631] mb-3 flex items-center justify-between cursor-pointer" 
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
                  onValueChange={setPriceRange}
                  max={150000}
                  min={0}
                  step={1000}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  до 500 ₽
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  до 20 000 ₽
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  до 50 000 ₽
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  до 100 000 ₽
                </label>
                <button className="text-[#F53B49] text-[12px] mt-2 text-center w-full" style={{fontFamily: 'Benzin-Regular'}}>Показать все</button>
              </div>
            </>
          )}
        </div>

        <Separator className="my-6" />

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 
            className="text-[14px] text-[#262631] mb-3 flex items-center justify-between cursor-pointer" 
            style={{fontFamily: 'Benzin-Regular'}}
            onClick={() => toggleFilter('brand')}
          >
            Бренд
            {expandedFilters.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </h3>
          {expandedFilters.brand && (
            <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                True
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                CardioPower
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Spirit
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                DKN
              </label>
              <button className="text-[#F53B49] text-[12px] mt-2 text-center w-full" style={{fontFamily: 'Benzin-Regular'}}>Показать все</button>
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Type Filter */}
        <div className="mb-6">
          <h3 
            className="text-[14px] text-[#262631] mb-3 flex items-center justify-between cursor-pointer" 
            style={{fontFamily: 'Benzin-Regular'}}
            onClick={() => toggleFilter('type')}
          >
            Тип назначения
            {expandedFilters.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </h3>
          {expandedFilters.type && (
            <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Домашние
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Полупрофессиональные
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Профессиональные
              </label>
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Power Filter */}
        <div className="mb-6">
          <h3 
            className="text-[14px] text-[#262631] mb-3 flex items-center justify-between cursor-pointer" 
            style={{fontFamily: 'Benzin-Regular'}}
            onClick={() => toggleFilter('power')}
          >
            Мощность двигателя
            {expandedFilters.power ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </h3>
          {expandedFilters.power && (
            <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
              <div className="flex items-center justify-between">
                <span>1,25CHP</span>
                <span>2x 5600 л.с</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[14px]">до 3 л.с</span>
                <div className="flex-1 h-1 bg-gray-200 rounded">
                  <div className="w-1/3 h-full bg-[#F53B49] rounded"></div>
                </div>
                <span className="text-[14px]">3-6 л.с</span>
              </div>
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Trainer Type Filter */}
        <div className="mb-6">
          <h3 
            className="text-[14px] text-[#262631] mb-3 flex items-center justify-between cursor-pointer" 
            style={{fontFamily: 'Benzin-Regular'}}
            onClick={() => toggleFilter('trainer')}
          >
            Тип тренажера
            {expandedFilters.trainer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </h3>
          {expandedFilters.trainer && (
            <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
              <label className="flex items-center">
                <input type="radio" name="trainer-type" className="mr-2" />
                Магнитный
              </label>
              <label className="flex items-center">
                <input type="radio" name="trainer-type" className="mr-2" />
                Полупрофессиональный
              </label>
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Apply Filters Button */}
        <Button size="sm" className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-3">
          Применить
        </Button>
        
        <Button size="sm" variant="outline" className="w-full">
          Сбросить
        </Button>
      </div>

      {/* Ad Banner */}
      <div className="bg-gray-800 text-white p-6 rounded-lg">
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