
import React from 'react';
import { Link } from 'react-router-dom';
import CallRequestDialog from './Header/CallRequestDialog';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      {/* Main content section with #262631 background */}
      <div className="bg-[#262631] py-8">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6 gap-8 md:gap-3">
            {/* Каталог */}
            <div>
              <h3 className="text-white text-xs md:text-[10px] lg:text-xs font-benzin-semibold mb-2 md:mb-1 lg:mb-2">Каталог</h3>
              <ul className="space-y-1 md:space-y-0.5 lg:space-y-1 text-[#778093] text-xs md:text-[9px] lg:text-xs">
                <li><Link to="/catalog?purpose=57" className="hover:text-white transition-colors">Для дома</Link></li>
                <li><Link to="/catalog?purpose=61,62" className="hover:text-white transition-colors">Для фитнес-клуба</Link></li>
                <li><Link to="/brands" className="hover:text-white transition-colors">Наши бренды</Link></li>
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-white text-xs md:text-[10px] lg:text-xs font-benzin-semibold mb-2 md:mb-1 lg:mb-2">Поддержка</h3>
              <ul className="space-y-1 md:space-y-0.5 lg:space-y-1 text-[#778093] text-xs md:text-[9px] lg:text-xs">
                <li><Link to="/support#delivery" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
                <li><Link to="/support#returns" className="hover:text-white transition-colors">Условия возврата</Link></li>
                <li><Link to="/support#warranty" className="hover:text-white transition-colors">Гарантия</Link></li>
                <li><Link to="/support#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-white text-xs md:text-[10px] lg:text-xs font-benzin-semibold mb-2 md:mb-1 lg:mb-2">О компании</h3>
              <ul className="space-y-1 md:space-y-0.5 lg:space-y-1 text-[#778093] text-xs md:text-[9px] lg:text-xs">
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
              <h3 className="text-white text-xs md:text-[10px] lg:text-xs font-benzin-semibold mb-2 md:mb-1 lg:mb-2">Для Бизнеса</h3>
              <ul className="space-y-1 md:space-y-0.5 lg:space-y-1 text-[#778093] text-xs md:text-[9px] lg:text-xs">
                <li><a href="#" className="hover:text-white transition-colors">3D-проект</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес-планирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Готовые решения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение персонала</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лизинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">В рассрочку</a></li>
              </ul>
            </div>

            {/* Контакты */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 md:gap-3 lg:gap-8">
                {/* Левая часть - контакты */}
                <div className="text-[#778093] space-y-3 md:space-y-1 lg:space-y-3">
                  <div>
                    <p className="text-xs md:text-[9px] lg:text-xs mb-1">Для Москвы</p>
                    <a href="tel:+74996775632" className="text-xs md:text-[9px] lg:text-xs font-benzin-semibold text-white hover:text-gray-300 transition-colors">
                      +7 (499) 677-56-32
                    </a>
                  </div>
                  <div>
                    <p className="text-xs md:text-[9px] lg:text-xs mb-1">Для России</p>
                    <a href="tel:+78007751217" className="text-xs md:text-[9px] lg:text-xs font-benzin-semibold text-white hover:text-gray-300 transition-colors">
                      +7 (800) 775-12-17
                    </a>
                  </div>
                  <div>
                    <p className="text-xs md:text-[9px] lg:text-xs mb-1">E-mail</p>
                    <p className="text-white text-xs md:text-[9px] lg:text-xs">info@wellfitness.ru</p>
                  </div>
                  <div className="mt-4 md:mt-2 lg:mt-4">
                    <CallRequestDialog>
                      <button className="bg-[#F53B49] text-white px-4 md:px-2 lg:px-4 py-2 md:py-1 lg:py-2 rounded-[5px] hover:bg-[#e63946] transition-colors text-xs md:text-[9px] lg:text-xs font-benzin">
                        Заказать звонок
                      </button>
                    </CallRequestDialog>
                  </div>
                </div>
                
                {/* Правая часть - объединенная для десктопа, разделенная для планшета */}
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-2 lg:gap-4">
                    {/* Социальные сети */}
                    <div className="text-[#778093] space-y-4 md:space-y-2 lg:space-y-4">
                      <div>
                        <p className="text-xs md:text-[10px] lg:text-xs font-benzin-semibold text-white mb-2 md:mb-1 lg:mb-2">Для HOME</p>
                        <div className="flex items-center gap-2">
                          <img 
                            src="/lovable-uploads/f77a44b5-d6f1-40dd-a72b-634d60279421.png" 
                            alt="Социальные сети" 
                            className="h-6 md:h-4 lg:h-6 w-auto"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs md:text-[10px] lg:text-xs font-benzin-semibold text-white mb-2 md:mb-1 lg:mb-2">Для PRO</p>
                        <div className="flex items-center gap-2">
                          <img 
                            src="/lovable-uploads/86517d29-fc19-48bf-9048-fe2be93d3477.png" 
                            alt="Социальные сети PRO" 
                            className="h-6 md:h-4 lg:h-6 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Способы оплаты */}
                    <div className="text-[#778093] space-y-4 md:space-y-2 lg:space-y-4">
                      <div>
                        <p className="text-[10px] md:text-[8px] lg:text-[10px] mb-2 md:mb-1 lg:mb-2 text-[#778093]">Принимаем к оплате</p>
                        <div className="flex gap-2 md:gap-1 lg:gap-2 flex-wrap">
                          <img 
                            src="/lovable-uploads/ef0b4b90-8fc2-40fd-ac2f-5de0b0bbd330.png" 
                            alt="Visa" 
                            className="h-4 md:h-3 lg:h-4 w-auto"
                          />
                          <img 
                            src="/lovable-uploads/24e0b3d5-be66-472f-8aad-258d2cb1596d.png" 
                            alt="MasterCard" 
                            className="h-4 md:h-3 lg:h-4 w-auto"
                          />
                          <img 
                            src="/lovable-uploads/5723e7db-417e-49b5-aa92-d89d628bbfcf.png" 
                            alt="PayPal" 
                            className="h-4 md:h-3 lg:h-4 w-auto"
                          />
                          <img 
                            src="/lovable-uploads/73d8ad89-17b1-4a62-b0ea-272f4db4e1fd.png" 
                            alt="Способ оплаты" 
                            className="h-4 md:h-3 lg:h-4 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with #17171E background */}
      <div className="bg-[#17171E] py-6 md:py-4 lg:py-6">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="flex flex-col gap-6 md:gap-4 lg:gap-6">
            {/* Mobile: Two separate rows, Tablet & Desktop: Single row with two columns */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center gap-6 md:gap-3 lg:gap-6">
              {/* Left column - Logo */}
              <img 
                src="/lovable-uploads/989588d0-dab0-48b9-9268-db2cc02cf4da.png" 
                alt="WELL.FITNESS"
                className="h-[32px] md:h-[24px] lg:h-[32px] w-auto"
              />
              
              {/* Right column - Buttons */}
              <div className="flex gap-6 md:gap-3 lg:gap-6 items-center">
                <a href="#" className="text-white text-[10px] md:text-[8px] lg:text-[10px] hover:opacity-80 transition-opacity font-benzin">Для дилеров</a>
                <button className="bg-white text-[#262631] px-3 md:px-2 lg:px-3 py-2 md:py-1 lg:py-2 rounded-[5px] text-[10px] md:text-[8px] lg:text-[10px] hover:bg-gray-100 transition-colors font-benzin">
                  For suppliers
                </button>
              </div>
            </div>
            
            {/* Copyright and links row - only visible on mobile */}
            <div className="flex flex-col md:hidden justify-between items-start gap-3">
              <span className="text-[#778093] text-[10px]">© WellFitness, 2005-2024 Все права защищены</span>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="text-[#778093] text-[10px] hover:text-white transition-colors">Политика конфиденциальности</Link>
                <Link to="/public-offer" className="text-[#778093] text-[10px] hover:text-white transition-colors">Публичная оферта</Link>
              </div>
            </div>
            
            {/* Copyright and links row - hidden on mobile, visible on tablet and desktop */}
            <div className="hidden md:flex lg:flex justify-between items-center gap-3 md:gap-2 lg:gap-3">
              <span className="text-[#778093] text-[10px] md:text-[8px] lg:text-[10px]">© WellFitness, 2005-2024 Все права защищены</span>
              <div className="flex gap-6 md:gap-3 lg:gap-6">
                <Link to="/privacy-policy" className="text-[#778093] text-[10px] md:text-[8px] lg:text-[10px] hover:text-white transition-colors">Политика конфиденциальности</Link>
                <Link to="/public-offer" className="text-[#778093] text-[10px] md:text-[8px] lg:text-[10px] hover:text-white transition-colors">Публичная оферта</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
