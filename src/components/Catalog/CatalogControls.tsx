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
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Поиск"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 text-sm"
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
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="secondary" className="bg-gray-100 text-xs">Все категории</Badge>
        <Badge variant="secondary" className="bg-gray-100 text-xs">Акции</Badge>
        <Badge variant="secondary" className="bg-gray-100 text-xs">Новинки</Badge>
        <Badge variant="secondary" className="bg-gray-100 text-xs">Хит продаж</Badge>
        <select className="border border-gray-300 rounded px-3 py-1 text-xs">
          <option>Массопоказатель весе</option>
        </select>
        <select className="border border-gray-300 rounded px-3 py-1 text-xs">
          <option>Длина полотна, см</option>
        </select>
        <select className="border border-gray-300 rounded px-3 py-1 text-xs">
          <option>Ширина полотна, см</option>
        </select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-gray-600">
          Соответует 1246 товарам
        </div>
        <div className="text-xs text-gray-600">
          Производительность ▲
        </div>
      </div>
    </>
  );
};

export default CatalogControls;