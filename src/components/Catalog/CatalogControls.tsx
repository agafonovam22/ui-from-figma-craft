
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface CatalogControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const CatalogControls: React.FC<CatalogControlsProps> = ({ 
  sortBy, 
  setSortBy, 
  onSearch, 
  searchQuery 
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(localSearchQuery);
    }
  };

  return (
    <>
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2.5 gap-4">
        <form onSubmit={handleSearch} className="relative flex-1 md:flex-initial">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Поиск по товарам"
            value={localSearchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-[350px] text-sm"
          />
        </form>
        
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
      <div className="bg-[#F8F8FD] rounded-lg p-3 md:p-4 mb-2.5">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {/* Show search query if active */}
          {searchQuery && (
            <div className="flex items-center bg-[#F53B49] text-white px-3 md:px-4 py-2 rounded-full font-benzin text-xs">
              Поиск: "{searchQuery}"
              <button 
                className="ml-2 text-white hover:text-gray-300"
                onClick={() => onSearch('')}
              >
                ×
              </button>
            </div>
          )}
          
          {/* Removable filter */}
          <div className="flex items-center bg-[#262631] text-white px-3 md:px-4 py-2 rounded-full font-benzin text-xs">
            В наличии
            <button className="ml-2 text-white hover:text-gray-300">
              ×
            </button>
          </div>
          
          {/* Status filters */}
          <button className="bg-white text-[#F53B49] border border-[#F53B49] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#F53B49] hover:text-white transition-colors text-xs">
            Акция
          </button>
          
          <button className="bg-white text-[#31BF00] border border-[#31BF00] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#31BF00] hover:text-white transition-colors text-xs">
            Новинка
          </button>
          
          <button className="bg-white text-[#4B7EE8] border border-[#4B7EE8] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#4B7EE8] hover:text-white transition-colors text-xs">
            Хит продаж
          </button>
          
          {/* Dropdown filters - hidden on small screens */}
          <div className="hidden md:flex md:flex-wrap md:gap-2 lg:gap-3">
            <button className="bg-white text-[#778093] border border-[#778093] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors text-xs">
              Максимальный вес
            </button>
            
            <button className="bg-white text-[#778093] border border-[#778093] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors text-xs">
              Длина полотна, см
            </button>
            
            <button className="bg-white text-[#778093] border border-[#778093] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors text-xs">
              Ширина полотна, см
            </button>
            
            <button className="bg-white text-[#778093] border border-[#778093] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors text-xs">
              Скорость полотна, км/ч
            </button>
            
            <button className="bg-white text-[#778093] border border-[#778093] px-3 md:px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors text-xs">
              Производитель
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogControls;
