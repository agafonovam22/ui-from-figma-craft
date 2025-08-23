
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import { useComparison } from '@/contexts/ComparisonContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";


interface ComparisonPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComparisonPopup: React.FC<ComparisonPopupProps> = ({ children, isOpen, onOpenChange }) => {
  const { comparison, removeFromComparison } = useComparison();

  const handleRemoveComparison = (id: string) => {
    removeFromComparison(id);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0">
        <SheetHeader className="p-6 pb-3">
          <SheetTitle className="flex items-center justify-between">
            Сравнение ({comparison.length})
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 pb-6">
            {comparison.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">В сравнении пока нет товаров</p>
              </div>
            ) : (
              comparison.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      {item.discount && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -{item.discount}%
                        </span>
                      )}
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {item.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{item.price.toLocaleString()} ₽</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => handleRemoveComparison(item.id)}
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
        
        {comparison.length > 0 && (
          <div className="p-6 border-t">
            <Link to="/comparison" onClick={() => onOpenChange(false)}>
              <Button className="w-full bg-[#F53B49] hover:bg-[#e63946]">
                Перейти в сравнение
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ComparisonPopup;
