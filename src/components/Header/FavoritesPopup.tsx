
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FavoritesPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FavoritesPopup: React.FC<FavoritesPopupProps> = ({ children, isOpen, onOpenChange }) => {
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemoveFavorite = (id: string) => {
    removeFromFavorites(id);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0">
        <SheetHeader className="p-6 pb-3">
          <SheetTitle className="flex items-center justify-between">
            Избранное ({favorites.length})
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 pb-6">
            {favorites.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">В избранном пока нет товаров</p>
              </div>
            ) : (
              favorites.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">{item.price.toLocaleString()} ₽</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleRemoveFavorite(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        {favorites.length > 0 && (
          <div className="p-6 border-t">
            <Link to="/favorites" onClick={() => onOpenChange(false)}>
              <Button className="w-full bg-[#F53B49] hover:bg-[#e63946]">
                Перейти в избранное
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesPopup;
