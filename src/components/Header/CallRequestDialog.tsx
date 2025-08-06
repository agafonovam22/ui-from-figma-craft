
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay, DialogPortal, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface CallRequestDialogProps {
  children: React.ReactNode;
}

const CallRequestDialog: React.FC<CallRequestDialogProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+7 ',
    email: ''
  });

  const formatPhoneNumber = (value: string) => {
    // Убираем все символы кроме цифр
    const phoneNumber = value.replace(/\D/g, '');
    
    // Если нет цифр, возвращаем базовую маску
    if (phoneNumber.length === 0) return '+7 ';
    
    // Если начинается с 8, заменяем на 7
    let normalizedNumber = phoneNumber;
    if (phoneNumber.startsWith('8') && phoneNumber.length > 1) {
      normalizedNumber = '7' + phoneNumber.slice(1);
    }
    
    // Если не начинается с 7, добавляем 7
    if (!normalizedNumber.startsWith('7')) {
      normalizedNumber = '7' + normalizedNumber;
    }
    
    // Применяем маску +7 (XXX) XXX-XX-XX
    const number = normalizedNumber.slice(1); // убираем первую 7
    
    if (number.length === 0) return '+7 ';
    if (number.length <= 3) return `+7 (${number}`;
    if (number.length <= 6) return `+7 (${number.slice(0, 3)}) ${number.slice(3)}`;
    if (number.length <= 8) return `+7 (${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
    return `+7 (${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 8)}-${number.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cursorPosition = e.target.selectionStart;
    const value = e.target.value;
    
    // Предотвращаем удаление префикса +7
    if (value.length < 3) {
      setFormData(prev => ({ ...prev, phone: '+7 ' }));
      return;
    }
    
    const formatted = formatPhoneNumber(value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    
    // Восстанавливаем позицию курсора
    setTimeout(() => {
      if (e.target.setSelectionRange && cursorPosition) {
        const newPosition = Math.min(cursorPosition, formatted.length);
        e.target.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Call request submitted:', formData);
    // Здесь будет логика отправки формы
    setIsOpen(false);
    setFormData({ fullName: '', phone: '+7 ', email: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="max-w-[900px] w-full p-0 bg-white rounded-lg">
          <VisuallyHidden>
            <DialogTitle>Заказать звонок</DialogTitle>
            <DialogDescription>Форма для заказа обратного звонка</DialogDescription>
          </VisuallyHidden>
          <div className="flex h-[280px]">
            {/* Left side - Form */}
            <div className="w-1/2 p-6">
              <h2 className="text-xl font-bold text-black mb-4">Заказать звонок</h2>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Input
                    type="text"
                    placeholder="ФИО"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full h-10 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="tel"
                    placeholder="+7 (999) 999-99-99"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="h-10 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-10 px-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-fit bg-[#F53B49] hover:bg-[#e63946] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors mt-4"
                >
                  Заказать звонок
                </Button>
              </form>
            </div>

            {/* Right side - Advertisement space */}
            <div className="w-1/2 bg-[#4A4A58] rounded-r-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Место для рекламы</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
              
              <Button
                className="w-fit bg-[#F53B49] hover:bg-[#e63946] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                onClick={() => console.log('Advertisement clicked')}
              >
                Перейти
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CallRequestDialog;
