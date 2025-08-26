
import React from 'react';
import { Link } from 'react-router-dom';
import CallRequestDialog from './Header/CallRequestDialog';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      {/* Main content section with #262631 background */}
        <div className="bg-[#262631] section-spacing">
          <div className="w-full max-w-[1200px] 2xl:max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1920px] mx-auto px-4 2xl:px-6 3xl:px-7 4xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8 responsive-table">
            {/* Каталог */}
            <div>
              <h3 className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold mb-2">Каталог</h3>
              <ul className="space-y-1 text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">
                <li><Link to="/home-fitness-equipment" className="hover:text-white transition-colors">Для дома</Link></li>
                <li><Link to="/gym-equipment" className="hover:text-white transition-colors">Для фитнес-клуба</Link></li>
                <li><Link to="/brands" className="hover:text-white transition-colors">Наши бренды</Link></li>
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold mb-2">Поддержка</h3>
              <ul className="space-y-1 text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">
                <li><Link to="/support#delivery" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
                <li><Link to="/support#returns" className="hover:text-white transition-colors">Условия возврата</Link></li>
                <li><Link to="/support#warranty" className="hover:text-white transition-colors">Гарантия</Link></li>
                <li><Link to="/support#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold mb-2">О компании</h3>
              <ul className="space-y-1 text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/about#mission" className="hover:text-white transition-colors">Миссия</Link></li>
                <li><Link to="/about#team" className="hover:text-white transition-colors">Команда</Link></li>
                <li><Link to="/about#projects" className="hover:text-white transition-colors">Проекты</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">Новости</Link></li>
                <li><Link to="/company-news" className="hover:text-white transition-colors">Блог</Link></li>
              </ul>
            </div>

            {/* Для Бизнеса */}
            <div>
              <h3 className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold mb-2">Для Бизнеса</h3>
              <ul className="space-y-1 text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">
                <li><Link to="/uslugi/business#3d-project" className="hover:text-white transition-colors">3D-проект</Link></li>
                <li><Link to="/uslugi/business#business-planning" className="hover:text-white transition-colors">Бизнес-планирование</Link></li>
                <li><Link to="/services#ready-solutions" className="hover:text-white transition-colors">Готовые решения</Link></li>
                <li><Link to="/services#training" className="hover:text-white transition-colors">Обучение персонала</Link></li>
                <li><Link to="/services#leasing" className="hover:text-white transition-colors">Лизинг</Link></li>
                <li><Link to="/services#trade-in" className="hover:text-white transition-colors">Trade-In</Link></li>
                <li><Link to="/services#installment" className="hover:text-white transition-colors">В рассрочку</Link></li>
              </ul>
            </div>

            {/* Контакты */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8">
                {/* Левая часть - контакты */}
                <div className="text-[#778093] space-y-3">
                  <div>
                    <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base mb-1">Для Москвы</p>
                    <a href="tel:+74996775632" className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold text-white hover:text-gray-300 transition-colors whitespace-nowrap">
                      +7 (499) 677-56-32
                    </a>
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base mb-1">Для России</p>
                    <a href="tel:+78007751217" className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold text-white hover:text-gray-300 transition-colors whitespace-nowrap">
                      +7 (800) 775-12-17
                    </a>
                  </div>
                  <div>
                    <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base mb-1">E-mail</p>
                    <p className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">info@wellfitness.ru</p>
                  </div>
                  <div className="mt-4">
                    <CallRequestDialog>
                      <button className="bg-[#F53B49] text-white px-4 py-2 rounded-[5px] hover:bg-[#e63946] transition-colors text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin">
                        Заказать звонок
                      </button>
                    </CallRequestDialog>
                  </div>
                </div>
                
                {/* Правая часть */}
                <div className="text-[#778093] space-y-4">
                  <div>
                    <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold text-white mb-2">Для HOME</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/f77a44b5-d6f1-40dd-a72b-634d60279421.png" 
                        alt="Социальные сети" 
                        className="h-6 2xl:h-7 3xl:h-8 4xl:h-10 w-auto"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-base font-benzin-semibold text-white mb-2">Для PRO</p>
                    <div className="flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/86517d29-fc19-48bf-9048-fe2be93d3477.png" 
                        alt="Социальные сети PRO" 
                        className="h-6 2xl:h-7 3xl:h-8 4xl:h-10 w-auto"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[10px] 2xl:text-xs 3xl:text-sm 4xl:text-base mb-2 text-[#778093]">Принимаем к оплате</p>
                    <div className="flex gap-2">
                      <img 
                        src="/lovable-uploads/ef0b4b90-8fc2-40fd-ac2f-5de0b0bbd330.png" 
                        alt="Visa" 
                        className="h-4 2xl:h-5 3xl:h-6 4xl:h-8 w-auto"
                      />
                      <img 
                        src="/lovable-uploads/24e0b3d5-be66-472f-8aad-258d2cb1596d.png" 
                        alt="MasterCard" 
                        className="h-4 2xl:h-5 3xl:h-6 4xl:h-8 w-auto"
                      />
                      <img 
                        src="/lovable-uploads/5723e7db-417e-49b5-aa92-d89d628bbfcf.png" 
                        alt="PayPal" 
                        className="h-4 2xl:h-5 3xl:h-6 4xl:h-8 w-auto"
                      />
                      <img 
                        src="/lovable-uploads/73d8ad89-17b1-4a62-b0ea-272f4db4e1fd.png" 
                        alt="Способ оплаты" 
                        className="h-4 2xl:h-5 3xl:h-6 4xl:h-8 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with #17171E background */}
        <div className="bg-[#17171E] section-spacing">
          <div className="w-full max-w-[1200px] 2xl:max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1920px] mx-auto px-4 2xl:px-6 3xl:px-7 4xl:px-8">
          <div className="flex flex-col gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-6">
            {/* Top row - Logo and buttons */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-6">
              <img 
                src="/lovable-uploads/989588d0-dab0-48b9-9268-db2cc02cf4da.png" 
                alt="WELL.FITNESS"
                className="h-6 2xl:h-7 3xl:h-8 4xl:h-10 w-auto"
              />
              
              <div className="flex gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-6 items-center">
                <Link to="/contacts" className="text-white text-xs 2xl:text-sm 3xl:text-base 4xl:text-base hover:opacity-80 transition-opacity font-benzin">Для дилеров</Link>
                <button className="bg-white text-[#262631] px-3 py-2 rounded-[5px] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base hover:bg-gray-100 transition-colors font-benzin">
                  For suppliers
                </button>
              </div>
            </div>
            
            {/* Bottom row - copyright and links aligned on same line */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
              <span className="text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base">© WellFitness, 2005-2024 Все права защищены</span>
              <div className="flex gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-6">
                <Link to="/privacy-policy" className="text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base hover:text-white transition-colors">Политика конфиденциальности</Link>
                <Link to="/public-offer" className="text-[#778093] text-xs 2xl:text-sm 3xl:text-base 4xl:text-base hover:text-white transition-colors">Публичная оферта</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
