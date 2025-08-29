
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
      <SheetContent side="right" className="w-[600px] max-w-[90vw] p-0 flex flex-col h-full">
        <SheetHeader className="p-6 pb-3 flex-shrink-0">
          <SheetTitle className="flex items-center justify-between">
            Избранное ({favorites.length})
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-6 h-0">
          <div className="space-y-4 pb-6">
            {favorites.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">В избранном пока нет товаров</p>
              </div>
            ) : (
              favorites.map((item) => (
                <div key={item.id} className="relative group rounded-lg overflow-hidden mb-4 flex" style={{ backgroundColor: '#F8F8FD', minHeight: '120px' }}>
                  {/* ... keep existing code */}
                  <div className="relative w-32 h-full flex items-center justify-center p-3" style={{ backgroundColor: '#F8F8FD' }}>
                    <div className="absolute top-2 left-2 z-10">
                       <span className="text-white text-xs px-2 py-1 rounded-full font-benzin-semibold" style={{ backgroundColor: '#31BF00' }}>
                         Новинка
                       </span>
                    </div>
                    <div className="absolute top-0 -right-4 w-20 h-20 z-0">
                      <img 
                        src="/lovable-uploads/5e75cf63-44ac-40f1-932d-ab5786810641.png" 
                        alt="" 
                        className="w-full h-full object-contain opacity-30"
                      />
                    </div>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-contain z-10 relative"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="w-px bg-gray-200 my-3"></div>
                   <div className="flex-1 p-3 pr-4 relative overflow-hidden">
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-40 pointer-events-none"></div>
                     <div className="absolute top-2 right-2 z-10">
                       <Button 
                         size="sm" 
                         variant="ghost"
                         className="w-12 h-12 p-0 hover:bg-red-100"
                         onClick={() => handleRemoveFavorite(item.id)}
                       >
                         <img src="/lovable-uploads/3098d1b2-6b04-44ea-9155-47960291a0f7.png" alt="delete" className="w-8 h-8" />
                       </Button>
                     </div>
                     <div className="flex items-center justify-start gap-1 mb-2">
                       <span className="text-xs text-green-600 font-benzin-semibold">В наличии</span>
                       <div className="flex gap-0.5">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                         <div className="w-1.5 h-1.5 border border-green-500 rounded-full"></div>
                       </div>
                     </div>
                     <div className="mb-2 pr-6">
                       {(() => {
                         const parts = item.name.split(/\s+(?=[A-Z][a-z]*\s*[A-Z0-9])|(?<=\w)\s+(?=[A-Z][a-z]*\s+Kit|(?:[A-Z]+\d*)+)/);
                         if (parts.length > 1) {
                           return (
                             <>
                               <h3 className="text-gray-900 text-sm leading-relaxed font-benzin">
                                 {parts[0]}
                               </h3>
                               <p className="text-gray-900 text-sm font-benzin-semibold">
                                 {parts.slice(1).join(' ')}
                               </p>
                             </>
                           );
                         } else {
                           return (
                             <h3 className="text-gray-900 text-sm line-clamp-2 leading-relaxed font-benzin">
                               {item.name}
                             </h3>
                           );
                         }
                       })()}
                     </div>
                     <div className="mb-3">
                        <span className="text-sm font-benzin-semibold text-gray-900">
                          {item.price.toLocaleString()} ₽
                        </span>
                     </div>
                   </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        {favorites.length > 0 && (
          <div className="p-6 border-t flex-shrink-0">
            <Link to="/favorites" onClick={() => onOpenChange(false)}>
              <Button variant="outline" className="w-full border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white font-benzin">
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
