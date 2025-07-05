
import React from 'react';
import CallRequestDialog from './Header/CallRequestDialog';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      {/* Main content section with #262631 background */}
      <div className="bg-[#262631] py-8">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Каталог */}
            <div>
              <h3 className="text-white text-base font-benzin-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-[#778093] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Для дома</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для фитнес-клуба</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наши бренды</a></li>
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-white text-base font-benzin-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-[#778093] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия возврата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-white text-base font-benzin-semibold mb-4">О компании</h3>
              <ul className="space-y-2 text-[#778093] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Миссия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>

            {/* Для Бизнеса */}
            <div>
              <h3 className="text-white text-base font-benzin-semibold mb-4">Для Бизнеса</h3>
              <ul className="space-y-2 text-[#778093] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">3D проект</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес планирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Готовые решения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение персонала</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лизинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">В рассрочку</a></li>
              </ul>
            </div>

            {/* Контакты */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Левая часть - контакты */}
                <div className="text-[#778093] space-y-4">
                  <div>
                    <p className="text-sm mb-1">Для Москвы</p>
                    <a href="tel:+74996775632" className="text-base font-benzin-semibold text-white hover:text-gray-300 transition-colors">
                      +7 (499) 677-56-32
                    </a>
                  </div>
                  <div>
                    <p className="text-sm mb-1">Для России</p>
                    <a href="tel:+78007751217" className="text-base font-benzin-semibold text-white hover:text-gray-300 transition-colors">
                      +7 (800) 775-12-17
                    </a>
                  </div>
                  <div>
                    <p className="text-sm mb-1">E-mail</p>
                    <p className="text-white text-sm">info@wellfitness.ru</p>
                  </div>
                  <div className="mt-6">
                    <CallRequestDialog>
                      <button className="bg-[#F53B49] text-white px-6 py-2.5 rounded-[5px] hover:bg-[#e63946] transition-colors text-sm font-benzin">
                        Заказать звонок
                      </button>
                    </CallRequestDialog>
                  </div>
                </div>
                
                {/* Правая часть */}
                <div className="text-[#778093] space-y-6">
                  <div>
                    <p className="text-base font-benzin-semibold text-white mb-3">Для дома</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">VK</span>
                      </div>
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">TG</span>
                      </div>
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">YT</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-base font-benzin-semibold text-white mb-3">Для дома</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">VK</span>
                      </div>
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">TG</span>
                      </div>
                      <div className="w-8 h-8 bg-[#5C6476] rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">YT</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-3 text-[#778093]">Принимаем к оплате</p>
                    <div className="flex gap-1">
                      <div className="bg-white rounded px-2 py-1 text-xs text-black font-bold">VISA</div>
                      <div className="bg-white rounded px-2 py-1 text-xs text-black font-bold">VISA</div>
                      <div className="bg-white rounded px-2 py-1 text-xs text-black font-bold">VISA</div>
                      <div className="bg-white rounded px-2 py-1 text-xs text-black font-bold">VISA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with #17171E background */}
      <div className="bg-[#17171E] py-6">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Logo and copyright - left aligned */}
            <div className="flex flex-col items-start gap-3">
              <img 
                src="/lovable-uploads/d50cad00-318e-48ea-96f2-b94cab77942b.png" 
                alt="WELL.FITNESS"
                className="h-[48px] w-auto"
              />
              <span className="text-[#778093] text-sm">© WellFitness, 2005-2024 Все права защищены</span>
            </div>
            
            {/* Links - right aligned */}
            <div className="flex flex-col gap-3 items-end">
              <div className="flex gap-6 items-center">
                <a href="#" className="text-white text-[10px] hover:opacity-80 transition-opacity font-benzin">Для дилеров</a>
                <button className="bg-white text-[#262631] px-3 py-2 rounded-[5px] text-[10px] hover:bg-gray-100 transition-colors font-benzin">
                  For suppliers
                </button>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-[#778093] text-sm hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-[#778093] text-sm hover:text-white transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
