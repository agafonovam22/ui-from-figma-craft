import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import SupportCitySelector from '@/components/SupportCitySelector';
import { Separator } from '@/components/ui/separator';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [selectedCity, setSelectedCity] = useState('Москва');

  const tabs = [
    { id: 'delivery', label: 'Доставка и оплата' },
    { id: 'return', label: 'Возврат и обмен' },
    { id: 'warranty', label: 'Гарантия' },
    { id: 'installation', label: 'Установка и сборка' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Поддержка клиентов
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Мы готовы помочь вам с любыми вопросами о наших продуктах и услугах
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#F53B49] text-white px-6 py-3 rounded-lg hover:bg-[#e63946] transition-colors">
                  Связаться с нами
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  FAQ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'delivery' && (
            <div className="space-y-8">
              {/* Город доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <h3 className="text-[20px] leading-[140%]" style={{
                      color: 'var(--Dark-Grey, #262631)',
                      fontFamily: 'Benzin-Medium, sans-serif',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '140%'
                    }}>
                      Город доставки
                    </h3>
                    <SupportCitySelector 
                      selectedCity={selectedCity} 
                      onCitySelect={setSelectedCity}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#262631] text-[16px]" style={{fontFamily: 'Manrope, sans-serif'}}>
                    Доставка по {selectedCity} осуществляется в течение 1-2 дней с момента заказа.<br />
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>
              
              <Separator className="my-6 bg-gray-200" />

              {/* Стоимость доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Стоимость доставки</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="rounded-lg p-6 bg-gray-50">
                      <h4 className="text-lg font-medium mb-4">Заказ от 30 001 ₽</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b">
                          <span className="text-gray-700">Автомобильная доставка по г. Москве в пределах МКАД</span>
                          <span className="text-[#F53B49] font-semibold">Бесплатно</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b">
                          <span className="text-gray-700">Автомобильная доставка по Московской Области</span>
                          <span className="text-[#F53B49] font-semibold">30₽/км</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-700">Курьерская доставка (вес до 3 кг)</span>
                          <span className="text-[#F53B49] font-semibold">500₽</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="rounded-lg p-6 bg-gray-50">
                      <h4 className="text-lg font-medium mb-4">Заказ до 30 000 ₽</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b">
                          <span className="text-gray-700">Автомобильная доставка по г. Москве в пределах МКАД</span>
                          <span className="text-[#F53B49] font-semibold">1000 ₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Самовывоз со склада */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Самовывоз со склада</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Main Warehouse */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Склад</h4>
                      <p className="text-gray-700 mb-4">
                        Московская область, Красногорский р-н, д. Гольево, улица Центральная ул., с44,
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-medium">В наличии</span>
                        <span className="text-sm text-gray-600">пн - пт с 09:30-18:00</span>
                      </div>
                    </div>

                    {/* Additional Warehouse */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Дополнительные склад</h4>
                      <p className="text-gray-700 mb-4">
                        Красногвардейский пер 23 лит Е, территория завода "Ильич", заезд с Вязского переулка.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-medium">В наличии</span>
                        <span className="text-sm text-gray-600">пн - пт с 10:00-18:00</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Выдача осуществляется оформленных заказов, при согласовании даты и времени приезда
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Доставка по России */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Доставка по России</h3>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Определяется сроками доставки транспортной компании. Доставка товара на склад транспортной компании осуществляется в течение 1-2 дней с момента заказа, в режиме работы: Понедельник - Пятница
                  </p>
                  <p className="text-gray-700 mb-6">
                    Стоимость доставки определяется тарифами транспортных компаний, оплата за доставку осуществляется при получении товара
                  </p>

                  {/* Transport Companies */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">DPD</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">DPD</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">СДЭК</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">СДЭК</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">Байкал сервис</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <span className="font-medium">Байкал сервис</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Калькулятор доставки */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Калькулятор доставки</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Пункт отправления"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Пункт назначения"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Габариты груза, м"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Вес груза, кг"
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49]"
                        />
                        <input
                          type="text"
                          placeholder="Объем груза, м³"
                          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49]"
                        />
                      </div>
                      <button className="w-full bg-[#F53B49] text-white py-3 rounded-md hover:bg-[#e63946] transition-colors font-medium">
                        Рассчитать
                      </button>
                    </div>

                    {/* Delivery Options */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">СДЭК</span>
                          <span className="text-[#F53B49] font-semibold">2 000 ₽</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">До 2 дней</div>
                        <div className="text-sm text-gray-600">До пункта выдачи</div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">СДЭК</span>
                          <span className="text-[#F53B49] font-semibold">2 000 ₽</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">До 2 дней</div>
                        <div className="text-sm text-gray-600">До двери</div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Деловые линии</span>
                          <span className="text-[#F53B49] font-semibold">2 000 ₽</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">До 2 дней</div>
                        <div className="text-sm text-gray-600">До пункта выдачи</div>
                      </div>

                      <div className="bg-[#F53B49] p-4 rounded-lg text-white">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Деловые линии</span>
                          <span className="font-semibold">2 000 ₽</span>
                        </div>
                        <div className="text-sm opacity-90 mb-1">До 2 дней</div>
                        <div className="text-sm opacity-90">До пункта выдачи</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Оплата для физ. лиц */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Оплата для физ. лиц</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Оплата наличными */}
                    <div className="bg-gray-800 text-white p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Оплата наличными</h5>
                      <p className="text-sm mb-4">
                        Возможна при оформлении всех способов доставки со всех субъектах РФ, где есть наши филиалы и терминалы наших партнеров, предоставляющих курьерские услуги.
                      </p>
                    </div>

                    {/* Оплата картой */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Оплата картой</h5>
                      <p className="text-sm mb-4">
                        Возможна при оформлении всех способов доставки, во время самовывоза, а также курьеру при получении.
                      </p>
                    </div>

                    {/* Оплата онлайн */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Оплата онлайн</h5>
                      <p className="text-sm mb-4">
                        Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Наложенный платеж */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Наложенный платеж</h5>
                      <p className="text-sm">
                        При отправке в регионы. Рассчитывается по тарифам транспортных компаний и осуществляется с помощью партнеров перевозчиков «ПЭК» и «Деловые линии»
                      </p>
                    </div>

                    {/* В рассрочку */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">В рассрочку</h5>
                      <p className="text-sm">
                        от банков партнеров ОТП, Халва, Тинькофф, Сбербанк
                      </p>
                    </div>

                    {/* Безналичная оплата */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Безналичная оплата</h5>
                      <p className="text-sm">
                        Выставление счета
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Оплата для юр. лиц */}
              <div className="flex gap-8">
                <div className="w-80 flex-shrink-0">
                  <h3 className="text-2xl font-semibold text-gray-900">Оплата для юр. лиц</h3>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Оплата онлайн */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Оплата онлайн</h5>
                      <p className="text-sm">
                        Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                      </p>
                    </div>

                    {/* Безналичная оплата */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-medium mb-3">Безналичная оплата</h5>
                      <p className="text-sm">
                        Выставление счета
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'return' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">
                Возврат и обмен товаров
              </h3>
              <p className="text-gray-700">
                Информация о возврате и обмене товаров...
              </p>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">
                Гарантийные обязательства
              </h3>
              <p className="text-gray-700">
                Информация о гарантии...
              </p>
            </div>
          )}

          {activeTab === 'installation' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-4">
                Установка и сборка
              </h3>
              <p className="text-gray-700">
                Информация об установке и сборке...
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;