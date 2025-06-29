
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

interface SearchPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ children, isOpen, onOpenChange }) => {
  const popularSearches = [
    "Беговые дорожки",
    "Эллиптические тренажеры", 
    "Велотренажеры",
    "Гребные тренажеры",
    "Силовые тренажеры",
    "Инверсионные столы"
  ];

  const categories = [
    { name: "Для дома", hasArrow: true },
    { name: "Для фитнес-клуба", hasArrow: true }
  ];

  const products = Array(9).fill(null).map((_, index) => ({
    id: index + 1,
    name: "Гребной тренажер CardioPowe PRO CR300",
    image: "/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png",
    badge: "НОВИНКА"
  }));

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[900px] p-0 bg-white border border-gray-200 shadow-lg z-50"
        align="start"
        side="bottom"
        sideOffset={5}
      >
        <div className="flex">
          {/* Левая панель с поиском и категориями */}
          <div className="w-[300px] border-r border-gray-200 p-6">
            {/* Поисковое поле */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent"
              />
            </div>

            {/* Часто ищут секция */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#262631] mb-4">Часто ищут</h3>
              <div className="space-y-3">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="block text-sm text-gray-600 hover:text-[#F53B49] transition-colors text-left"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Категории секция */}
            <div>
              <h3 className="text-lg font-bold text-[#262631] mb-4">Категории</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-[#F53B49] transition-colors"
                  >
                    <span>{category.name}</span>
                    {category.hasArrow && (
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Правая панель с товарами */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="relative mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-20 object-contain"
                      />
                      <Badge className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        {product.badge}
                      </Badge>
                    </div>
                    <h4 className="text-xs font-medium text-[#262631] line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchPopup;
