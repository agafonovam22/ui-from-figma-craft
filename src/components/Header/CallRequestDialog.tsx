
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CallRequestDialogProps {
  children: React.ReactNode;
}

const CallRequestDialog: React.FC<CallRequestDialogProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

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
    setFormData({ fullName: '', phone: '', email: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="max-w-[900px] w-full p-0 bg-white rounded-lg">
          <div className="flex h-[400px]">
            {/* Left side - Form */}
            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold text-black mb-8">Заказать звонок</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="ФИО"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full h-12 px-4 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12 px-4 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-12 px-4 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F53B49] focus:border-transparent placeholder:text-gray-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-fit bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 rounded-md text-base font-medium transition-colors"
                >
                  Заказать звонок
                </Button>
              </form>
            </div>

            {/* Right side - Advertisement space */}
            <div className="w-1/2 bg-[#4A4A58] rounded-r-lg p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Место для рекламы</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
              
              <Button
                className="w-fit bg-[#F53B49] hover:bg-[#e63946] text-white px-6 py-3 rounded-md text-base font-medium transition-colors flex items-center gap-2"
                onClick={() => console.log('Advertisement clicked')}
              >
                Перейти
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
