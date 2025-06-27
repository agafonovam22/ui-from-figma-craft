
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки email
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-16">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <div className="flex items-center justify-between">
          {/* Left side - Text and Form */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Подписывайтесь
              <br />
              на наши новости
              <br />
              и события
            </h2>
            
            <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
              <Input
                type="email"
                placeholder="Введите Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white border-0 text-gray-900 placeholder:text-gray-500"
                required
              />
              <Button 
                type="submit"
                className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 h-12 font-medium"
              >
                Подписаться
              </Button>
            </form>
            
            <p className="text-gray-300 text-sm">
              Подписываясь на рассылку, Вы соглашаетесь с условиями{' '}
              <a href="#" className="underline hover:no-underline">
                политики конфиденциальности
              </a>
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="hidden lg:block flex-1 ml-12">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gray-500 overflow-hidden">
                <img 
                  src="/lovable-uploads/32484ced-ddd4-4761-9855-fa657187f020.png"
                  alt="Мужчина тренируется на велотренажере"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
