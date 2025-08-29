import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from '@/contexts/CartContext';

interface CartPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ children, isOpen, onOpenChange }) => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0">
        <SheetHeader className="p-6 pb-3">
          <SheetTitle className="flex items-center justify-between">
            Корзина ({totalItems})
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-4 pb-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Корзина пуста</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="relative group rounded-lg overflow-hidden mb-4" style={{ backgroundColor: '#F8F8FD' }}>
                  {/* Новинка бейдж */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-white text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#31BF00' }}>
                      НОВИНКА
                    </span>
                  </div>

                  {/* Кнопка удаления */}
                  <div className="absolute top-3 right-3 z-10">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-red-100"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>

                  {/* Изображение товара */}
                  <div className="h-40 flex items-center justify-center p-4" style={{ backgroundColor: '#F8F8FD' }}>
                    {/* Декоративный элемент в правом верхнем углу */}
                    <div className="absolute top-0 -right-8 w-40 h-40 z-0">
                      <img 
                        src="/lovable-uploads/5e75cf63-44ac-40f1-932d-ab5786810641.png" 
                        alt="" 
                        className="w-full h-full object-contain opacity-50"
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

                  {/* Серая разделительная полоса */}
                  <div className="mx-4 h-px bg-gray-200"></div>

                  {/* Информация о товаре */}
                  <div className="p-4">
                    {/* Статус наличия */}
                    <div className="flex items-center justify-start gap-1 mb-2">
                      <span className="text-xs text-green-600 font-medium">В наличии</span>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 border border-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Название товара */}
                    <h3 className="text-gray-900 text-sm mb-3 line-clamp-2 leading-relaxed font-benzin">
                      {item.name}
                    </h3>

                    {/* Цена и количество */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-gray-900">
                        {item.price.toLocaleString()} ₽
                      </span>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Общая стоимость */}
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-xs text-gray-600">Общая стоимость:</span>
                      <span className="text-sm font-bold text-[#F53B49]">
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        {items.length > 0 && (
          <div className="p-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Итого:</span>
              <span className="text-xl font-bold">{totalPrice.toLocaleString()} ₽</span>
            </div>
            <Link to="/cart">
              <Button className="w-full bg-[#F53B49] hover:bg-[#e63946]">
                Перейти в корзину
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartPopup;