
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "react-router-dom";

interface SearchPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ children, isOpen, onOpenChange }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>();
  const { data: products = [], isLoading, error } = useProducts(selectedCategory);
  
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

  // Берем первые 9 товаров для отображения в попапе
  const displayProducts = products.slice(0, 9);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? undefined : category);
  };

  const resetCategory = () => {
    setSelectedCategory(undefined);
  };

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[750px] p-0 bg-white border border-gray-200 shadow-lg z-50"
        align="start"
        side="bottom"
        sideOffset={5}
      >
        <div className="flex">
          {/* Левая панель с категориями */}
          <div className="w-[300px] border-r border-gray-200 p-6">
            {/* Часто ищут секция */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#262631]">Часто ищут</h3>
                {selectedCategory && (
                  <button
                    onClick={resetCategory}
                    className="text-xs text-[#F53B49] hover:underline"
                  >
                    Сбросить
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(search)}
                    className={`block text-sm transition-colors text-left w-full ${
                      selectedCategory === search 
                        ? 'text-[#F53B49] font-semibold' 
                        : 'text-gray-600 hover:text-[#F53B49]'
                    }`}
                  >
                    {search}
                    {selectedCategory === search && (
                      <span className="ml-2 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Категории секция */}
            <div>
              <h3 className="text-xl font-bold text-[#262631] mb-4">Категории</h3>
              <div className="space-y-3">
                 {categories.map((category, index) => (
                   <button
                     key={index}
                     onClick={() => handleCategoryClick(category.name)}
                     className={`flex items-center justify-between w-full text-left text-sm transition-colors ${
                       selectedCategory === category.name 
                         ? 'text-[#F53B49] font-semibold' 
                         : 'text-gray-600 hover:text-[#F53B49]'
                     }`}
                   >
                     <span>{category.name}</span>
                     {selectedCategory === category.name ? (
                       <span className="text-xs">✓</span>
                     ) : category.hasArrow && (
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
            <ScrollArea className="h-[400px] w-full">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Загрузка товаров...</div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-red-500">Ошибка загрузки товаров</div>
                </div>
              ) : displayProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-gray-500 mb-2">
                    {selectedCategory ? `Товары категории "${selectedCategory}" не найдены` : 'Товары не найдены'}
                  </div>
                  {selectedCategory && (
                    <button
                      onClick={resetCategory}
                      className="text-sm text-[#F53B49] hover:underline"
                    >
                      Показать все товары
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 pr-4">
                  {displayProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      to={`/product/${product.id}`}
                      className="group cursor-pointer"
                      onClick={() => onOpenChange(false)}
                    >
                      <div className="relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <div className="relative mb-3">
                           <img 
                             src={(product.gallery_images && product.gallery_images.length > 0) ? product.gallery_images[0] : '/placeholder.svg'} 
                             alt={product.name}
                            className="w-full h-20 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = "/lovable-uploads/be85c55b-4881-41b1-beb7-89b0cea7d083.png";
                            }}
                          />
                          <Badge className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            НОВИНКА
                          </Badge>
                        </div>
                        <h4 className="text-xs font-medium text-[#262631] line-clamp-2 leading-tight">
                          {product.name}
                        </h4>
                        <div className="mt-2 text-xs font-semibold text-[#F53B49]">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchPopup;
