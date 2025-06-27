
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      {/* Main content section with #262631 background */}
      <div className="bg-[#262631] py-2">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
            {/* Каталог */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">Каталог</h3>
              <ul className="space-y-1 text-gray-300 text-[9px]">
                <li><a href="#" className="hover:text-white transition-colors">Для дома</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для фитнес-клуба</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наши бренды</a></li>
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">Поддержка</h3>
              <ul className="space-y-1 text-gray-300 text-[9px]">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия возврата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">О компании</h3>
              <ul className="space-y-1 text-gray-300 text-[9px]">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Миссия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">Услуги</h3>
              <ul className="space-y-1 text-gray-300 text-[9px]">
                <li><a href="#" className="hover:text-white transition-colors">3D проект</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес-конфигурирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Готовые решения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение персонала</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лизинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-in</a></li>
                <li><a href="#" className="hover:text-white transition-colors">В рассрочку</a></li>
              </ul>
            </div>

            {/* Контакты Москва */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">Для Москвы</h3>
              <div className="text-gray-300 space-y-1">
                <p className="text-[11px] font-semibold text-white">+7 (499) 677-56-32</p>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">VK</span>
                  </div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">TG</span>
                  </div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">YT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Контакты Россия */}
            <div>
              <h3 className="text-[10px] font-semibold mb-1">Для дома</h3>
              <div className="text-gray-300 space-y-1">
                <p className="text-[9px]">Для России</p>
                <p className="text-[11px] font-semibold text-white">+7 (800) 775-12-17</p>
                <p className="text-[9px]">Для дома</p>
                <p className="text-[9px]">E-mail</p>
                <p className="text-white text-[9px]">info@wellfitness.ru</p>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">VK</span>
                  </div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">TG</span>
                  </div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-[7px]">YT</span>
                  </div>
                </div>
                <div className="mt-1">
                  <button className="bg-[#F53B49] text-white px-2 py-1 rounded hover:bg-[#e63946] transition-colors text-[9px]">
                    Заказать звонок
                  </button>
                </div>
                <div className="mt-1">
                  <p className="text-[9px] mb-1">Принимаем к оплате</p>
                  <div className="flex gap-0.5">
                    <div className="w-5 h-2.5 bg-white rounded text-[7px] flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-5 h-2.5 bg-white rounded text-[7px] flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-5 h-2.5 bg-white rounded text-[7px] flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-5 h-2.5 bg-white rounded text-[7px] flex items-center justify-center text-black font-bold">VISA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with #17171E background */}
      <div className="bg-[#17171E] py-2">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2">
            {/* Logo and copyright - left aligned */}
            <div className="flex flex-col items-start gap-1">
              <img 
                src="/lovable-uploads/d50cad00-318e-48ea-96f2-b94cab77942b.png" 
                alt="WELL.FITNESS"
                className="h-[26px] w-auto"
              />
              <span className="text-gray-300 text-[10px]">© WellFitness, 2005-2024 Все права защищены</span>
            </div>
            
            {/* Links - right aligned */}
            <div className="flex flex-col gap-1 text-[10px] text-gray-300 items-end">
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Для дилеров</a>
                <a href="#" className="hover:text-white transition-colors">For suppliers</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
