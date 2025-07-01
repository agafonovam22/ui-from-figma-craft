
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

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  quantity: number;
}

interface CartPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ children, isOpen, onOpenChange }) => {
  // Mock data for cart items
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      discount: 15,
      quantity: 1
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      discount: 15,
      quantity: 2
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      discount: 15,
      quantity: 1
    },
    {
      id: 4,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      discount: 15,
      quantity: 3
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetPortal>
        <SheetPrimitive.Content
          className="fixed z-50 gap-4 bg-white p-0 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-[50vh] w-[595.26px] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right top-[120px] translate-y-0"
          style={{ position: 'fixed', right: '60px', height: '50vh', top: '120px', width: '595.26px' }}
        >
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="text-2xl font-bold text-gray-900">
              Корзина ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            {/* Cart Items with ScrollArea */}
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {item.discount && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{item.discount}%
                          </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">
                          {item.price.toLocaleString()} ₽
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Количество: {item.quantity}
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
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Итого:</span>
                <span>{total.toLocaleString()} ₽</span>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white py-3 text-base font-medium"
                  onClick={() => onOpenChange(false)}
                >
                  Оформить заказ
                </Button>
                
                <Link to="/cart" onClick={() => onOpenChange(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white py-3 text-base font-medium"
                  >
                    Перейти в корзину
                  </Button>
                </Link>
              </div>
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

export default CartPopup;
