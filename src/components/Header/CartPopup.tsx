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
      <SheetContent side="right" className="w-full sm:w-[600px] p-0">
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
                <div key={item.id} className="relative group rounded-lg overflow-hidden mb-4 flex" style={{ backgroundColor: '#F8F8FD', minHeight: '120px' }}>
                  {/* Левая часть - изображение */}
                  <div className="relative w-32 h-full flex items-center justify-center p-3" style={{ backgroundColor: '#F8F8FD' }}>
                    {/* Новинка бейдж */}
                    <div className="absolute top-2 left-2 z-10">
                       <span className="text-white text-xs px-2 py-1 rounded-full font-benzin-semibold" style={{ backgroundColor: '#31BF00' }}>
                         Новинка
                       </span>
                    </div>

                    {/* Декоративный элемент */}
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

                  {/* Вертикальная разделительная полоса */}
                  <div className="w-px bg-gray-200 my-3"></div>

                  {/* Правая часть - информация */}
                  <div className="flex-1 p-3 pr-4 relative">
                    {/* Кнопка удаления */}
                    <div className="absolute top-2 right-2 z-10">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-12 h-12 p-0 hover:bg-red-100"
                        onClick={() => removeItem(item.id)}
                      >
                        <img src="/lovable-uploads/3098d1b2-6b04-44ea-9155-47960291a0f7.png" alt="delete" className="w-8 h-8" />
                      </Button>
                    </div>

                    {/* Статус наличия */}
                    <div className="flex items-center justify-start gap-1 mb-2">
                      <span className="text-xs text-green-600 font-benzin-semibold">В наличии</span>
                      <div className="flex gap-0.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 border border-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Название товара */}
                    <h3 className="text-gray-900 text-sm mb-2 line-clamp-2 leading-relaxed font-benzin pr-6">
                      {item.name}
                    </h3>

                    {/* Цена за единицу */}
                    <div className="mb-3">
                       <span className="text-sm font-benzin-semibold text-gray-900">
                         {item.price.toLocaleString()} ₽ <span className="text-xs text-gray-500 font-benzin">за шт.</span>
                       </span>
                    </div>

                    {/* Нижняя часть - количество и общая стоимость */}
                    <div className="flex items-center justify-between">
                      {/* Количество */}
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-7 h-7 p-0 text-xs rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="text-sm font-benzin-semibold min-w-[20px] text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-7 h-7 p-0 text-xs rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>

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
               <span className="text-lg font-benzin-semibold">Итого:</span>
               <span className="text-xl font-benzin-semibold">{totalPrice.toLocaleString()} ₽</span>
            </div>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-[#F53B49] hover:bg-[#e63946] font-benzin">
                Оформить заказ
              </Button>
              <Link to="/cart" className="flex-1">
                <Button variant="outline" className="w-full border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white font-benzin">
                  Перейти в корзину
                </Button>
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartPopup;