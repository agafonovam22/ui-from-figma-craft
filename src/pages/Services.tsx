
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши сервисы</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы предоставляем полный спектр услуг для обслуживания и поддержки вашего спортивного оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Техническое обслуживание</h3>
              <p className="text-gray-600 mb-4">
                Профессиональное обслуживание всех видов тренажеров и спортивного оборудования
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Плановое техобслуживание</li>
                <li>• Диагностика неисправностей</li>
                <li>• Замена расходных материалов</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ремонт оборудования</h3>
              <p className="text-gray-600 mb-4">
                Быстрый и качественный ремонт любой сложности с использованием оригинальных запчастей
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Экстренный ремонт</li>
                <li>• Восстановление электроники</li>
                <li>• Замена деталей</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Доставка и установка</h3>
              <p className="text-gray-600 mb-4">
                Профессиональная доставка, сборка и установка тренажеров в любой точке города
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Бесплатная доставка</li>
                <li>• Сборка и настройка</li>
                <li>• Обучение пользованию</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Консультации</h3>
              <p className="text-gray-600 mb-4">
                Экспертные консультации по выбору оборудования и организации тренировочного процесса
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Подбор оборудования</li>
                <li>• Планировка зала</li>
                <li>• Техническая поддержка</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Обучение и тренинги</h3>
              <p className="text-gray-600 mb-4">
                Обучение персонала работе с оборудованием и организации безопасных тренировок
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Обучение персонала</li>
                <li>• Инструктаж по безопасности</li>
                <li>• Методические материалы</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#F53B49] text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Гарантийное обслуживание</h3>
              <p className="text-gray-600 mb-4">
                Полное гарантийное обслуживание всего приобретенного у нас оборудования
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Гарантия до 3 лет</li>
                <li>• Бесплатные профилактики</li>
                <li>• Приоритетное обслуживание</li>
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Нужна помощь?</h2>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для получения подробной консультации по любому из наших сервисов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#F53B49] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e63946] transition-colors">
                Заказать звонок
              </button>
              <a href="tel:+78007751217" className="border border-[#F53B49] text-[#F53B49] px-6 py-3 rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors">
                +7 (800) 775-12-17
              </a>
            </div>
          </div>
        </div>
      </main>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Services;
