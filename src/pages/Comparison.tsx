
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import NewProducts from '@/components/NewProducts';
import { Product, useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import { useComparison } from '@/contexts/ComparisonContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const Comparison: React.FC = () => {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);
  const { comparison, removeFromComparison } = useComparison();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();

  const handleBuyClick = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url,
      is_available: true
    });
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromComparison(itemId);
  };

  const handleToggleFavorite = (item: any) => {
    toggleFavorite({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Сравнение</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Сравнение</h1>

        {/* Filter Option */}
        <div className={`mb-8 p-4 rounded-lg transition-colors ${showOnlyDifferences ? 'bg-gray-100' : ''}`}>
          <label 
            className="flex items-center gap-3 text-gray-700 cursor-pointer"
            onClick={() => setShowOnlyDifferences(!showOnlyDifferences)}
          >
            <div className="relative w-4 h-4 border border-gray-300 rounded-[3px] bg-white flex items-center justify-center">
              {showOnlyDifferences && (
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-[2.06px]"></div>
              )}
            </div>
            Показывать только различия
          </label>
        </div>

        {/* Products Row with Vertical Dividers */}
        {comparison.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl text-gray-500 mb-4">В сравнении пока нет товаров</h2>
            <Link to="/catalog">
              <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="relative mb-8">
              <div className={`grid gap-6 ${comparison.length === 1 ? 'grid-cols-1' : comparison.length === 2 ? 'grid-cols-2' : comparison.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                {comparison.map((item, index) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 relative">
                    <div className="absolute top-2 left-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        НОВИНКА
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button 
                        onClick={() => handleToggleFavorite(item)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            isFavorite(item.id) 
                              ? 'text-red-500 fill-red-500' 
                              : 'text-gray-400'
                          }`} 
                        />
                      </button>
                    </div>
                    
                    <div className="mt-6 mb-4">
                      <img 
                        src={item.image_url} 
                        alt={item.name}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    
                    <div className="text-left mb-2">
                      <div className="text-green-500 text-xs mb-1">В наличии ●●○</div>
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-900 mb-2 text-left">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(4.5)}
                      <span className="text-orange-400 text-sm ml-1">4.5</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-left">
                        {item.discount && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                              -{item.discount}%
                            </span>
                            {item.originalPrice && (
                              <span className="text-gray-400 line-through text-sm">
                                {item.originalPrice.toLocaleString()} ₽
                              </span>
                            )}
                          </div>
                        )}
                        <div className="text-xl font-bold text-gray-900">
                          {item.price.toLocaleString()} ₽
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-[#F53B49] hover:bg-[#e63946] text-white px-6"
                        onClick={() => handleBuyClick(item)}
                      >
                        Купить
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Comparison Tables - Hide if no comparison data */}
        {comparison.length > 0 && (
          <div className="relative space-y-8">
            {/* Simple comparison info without detailed characteristics */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Информация о товарах</h2>
              <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
                Детальное сравнение характеристик будет доступно в ближайшее время
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Comparison;
