import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  const tabs = [
    { id: 'delivery', label: 'Доставка и оплата' },
    { id: 'return', label: 'Условия возврата' },
    { id: 'warranty', label: 'Гарантия' },
    { id: 'faq', label: 'Вопросы и ответы' },
    { id: 'instructions', label: 'Инструкции' },
    { id: 'personal', label: 'Личный кабинет' },
    { id: 'b2b', label: 'B2B кабинет' }
  ];

  const getActiveTabLabel = () => {
    const activeTabObject = tabs.find(tab => tab.id === activeTab);
    return activeTabObject ? activeTabObject.label : 'Поддержка';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-6">
        {/* Breadcrumbs and Title */}
        <section className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Поддержка</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {getActiveTabLabel()}
          </h1>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {getActiveTabLabel()}
                </h1>
                <div className="lg:w-1/3">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    Рекламный баннер
                  </h2>
                  <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                    Оставить заявку
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/8fee6b4e-43a4-44f5-aa6b-31a85b990f11.png"
                  alt="3D визуализация фитнес зала"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
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

          {/* Tab Content */}
          {activeTab === 'delivery' && (
            <div className="space-y-8">
              {/* Delivery Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Город доставки <span className="text-[#F53B49]">Москва</span>
                </h3>
                <p className="text-gray-700">
                  Доставка по Москве осуществляется в течение 1-2 дней с момента заказа.<br />
                  Ежедневно с 9:00 до 21:00
                </p>
              </div>

              {/* Delivery Cost */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Стоимость доставки</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
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
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-gray-700">Курьерская доставка (вес до 3 кг)</span>
                        <span className="text-[#F53B49] font-semibold">500₽</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
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

              {/* Самовывоз со склада */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Самовывоз со склада</h3>
                
                {/* Warehouse Information */}
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

                {/* Доставка по России */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Доставка по России</h4>
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

                {/* Калькулятор доставки */}
                <div>
                  <h4 className="text-xl font-semibold mb-6">Калькулятор доставки</h4>
                  
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

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Деловые линии</span>
                          <span className="text-[#F53B49] font-semibold">2 000 ₽</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">До 2 дней</div>
                        <div className="text-sm text-gray-600">До пункта выдачи</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Оплата для физ. лиц */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-6">Оплата для физ. лиц</h4>
                  
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

                {/* Оплата для юр. лиц */}
                <div>
                  <h4 className="text-xl font-semibold mb-6">Оплата для юр. лиц</h4>
                  
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
              {/* Город доставки */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Город доставки <span className="text-[#F53B49]">Москва</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Согласно Закону о защите прав потребителей, при дистанционном способе покупки обмен товара происходит через оформление возврата.
                </p>
                <p className="text-gray-700">
                  Вы не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                </p>
              </div>

              {/* Возврат товара по качеству */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Возврат товара по качеству</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Возврат товара надлежащего качества */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Возврат товара надлежащего качества</h4>
                    <p className="text-gray-700 mb-4">
                      Возврат товара надлежащего качества, если он не подходит по размеру, цвету, фасону или любой другой причине, производится на основании заявления на возврат, которое необходимо подать в течение 14 дней с момента покупки товара, не считая дня покупки.
                    </p>
                    <p className="text-gray-700 mb-4">
                      При возврате товара надлежащего качества возвращается только стоимость товара. Стоимость доставки, а также стоимость обратной пересылки (если она производилась за Ваш счет) не компенсируются.
                    </p>
                    <p className="text-gray-700">
                      Вы не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                    </p>
                  </div>

                  {/* Возврат товара ненадлежащего качества */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Возврат товара ненадлежащего качества</h4>
                    <p className="text-gray-700 mb-4">
                      Возврат товара ненадлежащего качества, если он не подходит по размеру, цвету, фасону или любой другой причине, производится на основании заявления на возврат, которое необходимо подать в течение 14 дней с момента покупки товара, не считая дня покупки.
                    </p>
                    <p className="text-gray-700 mb-4">
                      При возврате товара ненадлежащего качества возвращается только стоимость товара. Стоимость доставки, а также стоимость обратной пересылки (если она производилась за Ваш счет) не компенсируются.
                    </p>
                    <p className="text-gray-700">
                      Вы не вправе отказаться от товара ненадлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.
                    </p>
                  </div>
                </div>
              </div>

              {/* Условия возврата товара */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Условия возврата товара</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">Возврат товара надлежащего качества возможен при условии:</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F53B49] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Сохранения его потребительских свойств и товарного вида (отсутствие следов эксплуатации и носки, наличие оригинальной и неповрежденной упаковки и ярлыков).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F53B49] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Наличия документа, подтверждающего факт и условия покупки товара (кассовый чек или товарный чек)*.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-4">Возврат товара не надлежащего качества возможен при условии:</h4>
                  <p className="text-gray-700">
                    Возврат товара ненадлежащего качества возможен при условии сохранения документа, подтверждающего факт и условия покупки указанного товара (кассовый чек или товарный чек)*.
                  </p>
                </div>
              </div>

              {/* Сроки возврата денежных средств */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Сроки возврата денежных средств</h3>
                <p className="text-gray-700">
                  Срок возврата денежных средств зависит от способа возврата товара и составляет не более 10 дней с даты поступления возвращенного товара в интернет-магазин вместе с заполненным заявлением на возврат. По итогам проведения экспертизы товара принимается решение о возврате или не возврате денежных средств.
                </p>
              </div>

              {/* Возврат денег при наличной форме оплаты заказа */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Возврат денег при наличной форме оплаты заказа осуществляется</h3>
                <p className="text-gray-700">
                  При возврате товара через розничный магазин - наличными в розничном магазине при возврате через партнерскую курьерскую компанию - только на лицевой счет клиента. Реквизиты Вашего банковского счета и банка необходимо указать в заявлении на возврат.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Гарантия</h3>
              <div className="prose max-w-none">
                <p>Здесь будет информация о гарантийных условиях.</p>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div className="mb-8">
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua? Ut enim
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum dolor sit amet
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum dolor sit amet
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidint ut labore et dolore magna aliqua?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0">
                    Lorem ipsum dolor sit amet, consectetur
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex gap-4 mt-8">
                <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors">
                  Сервис
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                  Помощь покупателю
                </button>
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Инструкции</h3>
              <div className="prose max-w-none">
                <p>Здесь будут инструкции по использованию.</p>
              </div>
            </div>
          )}

          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Личный кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о личном кабинете.</p>
              </div>
            </div>
          )}

          {activeTab === 'b2b' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">B2B кабинет</h3>
              <div className="prose max-w-none">
                <p>Информация о B2B кабинете для корпоративных клиентов.</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
