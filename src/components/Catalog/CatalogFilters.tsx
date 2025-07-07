import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CatalogFilters: React.FC = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <h1 className="text-2xl font-bold text-[#262631] mb-8">Каталог</h1>
      
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
          Цена
          <ChevronDown className="w-4 h-4" />
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
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
          <button className="text-[#F53B49] text-sm mt-2">Показать все</button>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
          Бренд
          <ChevronDown className="w-4 h-4" />
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
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
          <button className="text-[#F53B49] text-sm mt-2">Показать все</button>
        </div>
      </div>

      {/* Type Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
          Тип назначения
          <ChevronDown className="w-4 h-4" />
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
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
      </div>

      {/* Power Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
          Мощность двигателя
          <ChevronDown className="w-4 h-4" />
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span>1,25CHP</span>
            <span>2x 5600 л.с</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs">до 3 л.с</span>
            <div className="flex-1 h-1 bg-gray-200 rounded">
              <div className="w-1/3 h-full bg-[#F53B49] rounded"></div>
            </div>
            <span className="text-xs">3-6 л.с</span>
          </div>
        </div>
      </div>

      {/* Trainer Type Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
          Тип тренажера
          <ChevronDown className="w-4 h-4" />
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center">
            <input type="radio" name="trainer-type" className="mr-2" />
            Магнитный
          </label>
          <label className="flex items-center">
            <input type="radio" name="trainer-type" className="mr-2" />
            Полупрофессиональный
          </label>
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-4">
        Применить
      </Button>
      
      <Button variant="outline" className="w-full">
        Сбросить
      </Button>

      {/* Ad Banner */}
      <div className="mt-8 bg-gray-800 text-white p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Место для рекламы</h3>
        <p className="text-sm text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
          Перейти →
        </Button>
      </div>
    </div>
  );
};

export default CatalogFilters;