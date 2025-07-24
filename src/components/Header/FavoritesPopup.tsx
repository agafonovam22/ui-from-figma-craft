
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetPortal,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as SheetPrimitive from "@radix-ui/react-dialog";

interface FavoriteItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

interface FavoritesPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FavoritesPopup: React.FC<FavoritesPopupProps> = ({ children, isOpen, onOpenChange }) => {
  // Mock data for favorite items
  const favoriteItems: FavoriteItem[] = [
    {
      id: 1,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetPortal>
        <SheetPrimitive.Content
          className="fixed z-50 gap-4 bg-white p-0 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 w-[450px] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right top-[120px] translate-y-0"
          style={{ position: 'fixed', right: '60px', height: '595.26px', top: '120px', width: '450px' }}
        >
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="text-2xl font-bold text-gray-900">
              Избранное
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            {/* Favorite Items with ScrollArea */}
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-4 py-4">
                {favoriteItems.map((item) => (
                  <div key={item.id} className="relative flex items-center gap-4 p-4 bg-gray-50 rounded-lg overflow-hidden">
                    {/* Серая четвертинка круга в нижнем правом углу как фон */}
                    <div className="absolute bottom-0 right-0 w-30 h-30 bg-gray-200 rounded-tl-full -z-10"></div>
                    
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {item.discount && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{item.discount}%
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-bold text-gray-900">
                          {item.price.toLocaleString()} ₽
                        </span>
                        {item.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            {item.originalPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Trash2 className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t p-6">
              <Link to="/favorites" onClick={() => onOpenChange(false)}>
                <Button 
                  variant="outline"
                  className="w-full bg-white border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white py-3 text-base font-medium"
                >
                  Перейти в избранное
                </Button>
              </Link>
            </div>
          </div>
          
          <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPortal>
    </Sheet>
  );
};

export default FavoritesPopup;
