
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-white">
      {/* Main content section with #262631 background */}
      <div className="bg-[#262631] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Каталог */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Для дома</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для фитнес-клуба</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наши бренды</a></li>
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия возврата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-lg font-semibold mb-4">О компании</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="text-lg font-semibold mb-4">Для Москвы</h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-xl font-semibold text-white">+7 (499) 677-56-32</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">VK</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">TG</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">YT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Контакты Россия */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Для дома</h3>
              <div className="text-gray-300 space-y-3">
                <p>Для России</p>
                <p className="text-xl font-semibold text-white">+7 (800) 775-12-17</p>
                <p>Для дома</p>
                <p className="text-sm">E-mail</p>
                <p className="text-white">info@wellfitness.ru</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">VK</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">TG</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">YT</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-[#F53B49] text-white px-6 py-2 rounded hover:bg-[#e63946] transition-colors">
                    Заказать звонок
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm mb-2">Принимаем к оплате</p>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-white rounded text-xs flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-8 h-5 bg-white rounded text-xs flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-8 h-5 bg-white rounded text-xs flex items-center justify-center text-black font-bold">VISA</div>
                    <div className="w-8 h-5 bg-white rounded text-xs flex items-center justify-center text-black font-bold">VISA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with #17171E background */}
      <div className="bg-[#17171E] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Logo and copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#F53B49] flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-bold">WELL FITNESS</span>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <span>© WellFitness, 2008-2024 Все права защищены</span>
              <a href="#" className="hover:text-white transition-colors">Для дилеров</a>
              <a href="#" className="hover:text-white transition-colors">For suppliers</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
