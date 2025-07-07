import React from 'react';
import { Search } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface CatalogControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const CatalogControls: React.FC<CatalogControlsProps> = ({ sortBy, setSortBy }) => {
  return (
    <>
      {/* Search and Filters Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Поиск"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-[470px] text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-600">Сортировать:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-xs"
          >
            <option value="popular">По популярности</option>
            <option value="price-low">По цене (по возрастанию)</option>
            <option value="price-high">По цене (по убыванию)</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>
      </div>

      {/* Horizontal Filter Tags */}
      <div className="bg-[#F8F8FD] rounded-lg p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* Removable filter */}
          <div className="flex items-center bg-[#262631] text-white px-3 py-1 rounded text-xs">
            В наличии
            <button className="ml-2 text-white hover:text-gray-300">
              ×
            </button>
          </div>
          
          {/* Status filters */}
          <button className="bg-[#F53B49] text-white px-3 py-1 rounded text-xs hover:bg-[#e63946]">
            Акция
          </button>
          
          <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600">
            Новинка
          </button>
          
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            Хит продаж
          </button>
          
          {/* Dropdown filters */}
          <select className="border border-gray-300 rounded px-3 py-1 text-xs bg-white">
            <option>Максимальный вес ↓</option>
          </select>
          
          <select className="border border-gray-300 rounded px-3 py-1 text-xs bg-white">
            <option>Длина полотна, см ↓</option>
          </select>
          
          <select className="border border-gray-300 rounded px-3 py-1 text-xs bg-white">
            <option>Ширина полотна, см ↓</option>
          </select>
          
          <select className="border border-gray-300 rounded px-3 py-1 text-xs bg-white">
            <option>Скорость полотна, км/ч ↓</option>
          </select>
          
          <select className="border border-gray-300 rounded px-3 py-1 text-xs bg-white">
            <option>Производитель ↓</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CatalogControls;