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
    <section className="w-full">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 overflow-hidden relative rounded-lg" style={{ height: '300px' }}>
          <div className="py-12 relative h-full">
            <div className="flex items-center justify-between h-full">
              {/* Left side - Text and Form */}
              <div className="flex-1 max-w-2xl z-10" style={{ paddingTop: '20px', paddingLeft: '60px' }}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Benzin-Semibold' }}>
                  Подписывайтесь
                  <br />
                  на наши новости
                  <br />
                  и события
                </h2>
                
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="relative flex items-center" style={{ maxWidth: '500px' }}>
                    <Input
                      type="email"
                      placeholder="Введите Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 bg-white border-0 text-gray-900 placeholder:text-gray-500 pr-36"
                      required
                    />
                    <Button 
                      type="submit"
                      className="absolute right-1 bg-[#F53B49] hover:bg-[#e63946] text-white px-6 h-10 font-medium flex items-center gap-2"
                    >
                      Подписаться
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 3L13.5 8L8.5 13M13 8H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Button>
                  </div>
                </form>
                
                <p className="text-gray-300 text-xs whitespace-nowrap" style={{ fontFamily: 'Montserrat' }}>
                  Подписываясь на рассылку, Вы соглашаетесь с условиями{' '}
                  <a href="#" className="underline hover:no-underline">
                    политики конфиденциальности
                  </a>
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="absolute" style={{ right: '60px', top: '30px' }}>
                <div className="relative">
                  <div className="w-[600px] h-[600px] rounded-full bg-gray-500 overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png"
                      alt="Мужчина тренируется на велотренажере"
                      className="w-[450px] h-[450px] object-contain"
                      style={{ objectPosition: 'center right', transform: 'translateX(20px) translateY(-110px)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
