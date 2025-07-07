
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Switch } from '@/components/ui/switch';
import { MapPin, Phone, Clock, Map as MapIcon } from 'lucide-react';

const WhereToBuy: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [activeTab, setActiveTab] = useState('stores');
  const [sortBy, setSortBy] = useState('list');
  const [showMap, setShowMap] = useState(false);

  const partnerStores = [
    {
      name: 'Спорт Дома',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, G6 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      coordinates: [37.4188, 55.8297] as [number, number]
    },
    {
      name: 'Тренмаркет.ру',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, G6 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      coordinates: [37.5983, 55.7558] as [number, number]
    },
    {
      name: 'Goldgym',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, G6 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      coordinates: [37.6800, 55.7030] as [number, number]
    },
    {
      name: 'Sportpremier',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, G6 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      coordinates: [37.5200, 55.8000] as [number, number]
    },
    {
      name: 'Wellgallery',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, G6 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      coordinates: [37.7500, 55.6800] as [number, number]
    }
  ];

  const onlineStores = Array(16).fill('zonasporta.com');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-700">
                Главная
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 font-medium">
                Где купить
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="font-heading text-[48px] text-layout-dark-grey mb-10 leading-none">
          Где купить
        </h1>

        {/* City Selector and Tabs */}
        <div className="flex flex-wrap items-center gap-4 h-[52px] mb-10">
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 h-12 border border-[#CECFD7] rounded-md bg-white text-[12px] text-gray-700"
          >
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Екатеринбург">Екатеринбург</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('stores')}
              className={`px-6 h-12 rounded-md text-[12px] font-medium transition-colors ${
                activeTab === 'stores'
                  ? 'bg-[#F53B49] text-white'
                  : 'bg-white text-gray-700 border border-[#CECFD7] hover:bg-gray-50'
              }`}
            >
              Все магазины
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 h-12 rounded-md text-[12px] font-medium transition-colors ${
                activeTab === 'partners'
                  ? 'bg-[#F53B49] text-white'
                  : 'bg-white text-gray-700 border border-[#CECFD7] hover:bg-gray-50'
              }`}
            >
              Магазины партнеров
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-6 h-12 rounded-md text-[12px] font-medium transition-colors ${
                activeTab === 'online'
                  ? 'bg-[#F53B49] text-white'
                  : 'bg-white text-gray-700 border border-[#CECFD7] hover:bg-gray-50'
              }`}
            >
              Интернет-магазины
            </button>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-gray-600 text-[12px]">Сортировать:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 h-12 border border-[#CECFD7] rounded-md bg-white text-[12px] text-gray-700"
            >
              <option value="list">Список</option>
              <option value="map">Карта</option>
            </select>
          </div>
        </div>

        {/* Show on Map Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <MapIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Показать на карте</span>
            <Switch
              checked={showMap}
              onCheckedChange={setShowMap}
              className="data-[state=checked]:bg-[#F53B49]"
            />
          </div>
        </div>

        {/* Company Store Section or Map */}
        <div className="mb-12">
          {showMap || sortBy === 'map' ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Магазины на карте</h2>
              <Map stores={partnerStores} />
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between h-[328px]">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Фирменный магазин<br />Well Fitness
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-sm">
                        Москва, ТРК VEGAS Крокус Сити,<br />
                        м.Мякинино, ул. Международная 12,<br />
                        G6 км МКАД
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-sm">+7 (499) 677-56-32</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-sm">10:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 ml-8">
                <img 
                  src="/lovable-uploads/63223971-7b48-4bd9-824c-f4c52e54d9fb.png"
                  alt="Фирменный магазин Well Fitness"
                  className="w-[400px] h-[240px] object-cover rounded-lg"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'partners' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Магазины партнеров</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerStores.map((store, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
                  
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Адрес</p>
                        <p className="text-sm">{store.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Телефон</p>
                        <p className="text-sm">{store.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Режим работы</p>
                        <p className="text-sm">{store.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'online' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Интернет-магазины</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {onlineStores.map((store, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <a href="#" className="text-gray-700 hover:text-[#F53B49] transition-colors">
                    {store}
                  </a>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="border border-[#F53B49] rounded-lg p-6 bg-red-50">
              <h3 className="font-bold text-gray-900 mb-4">
                WellFitness <span className="text-[#F53B49]">не сотрудничает</span> с магазинами
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Array(16).fill('zonasporta.com').map((store, index) => (
                  <div key={index} className="text-gray-600 text-sm">
                    {store}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'stores' && (
          <>
            {/* Partner Stores Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Магазины партнеров</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partnerStores.map((store, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
                    
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Адрес</p>
                          <p className="text-sm">{store.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Телефон</p>
                          <p className="text-sm">{store.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Режим работы</p>
                          <p className="text-sm">{store.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Online Stores Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Интернет-магазины</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {onlineStores.map((store, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <a href="#" className="text-gray-700 hover:text-[#F53B49] transition-colors">
                      {store}
                    </a>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="border border-[#F53B49] rounded-lg p-6 bg-red-50">
                <h3 className="font-bold text-gray-900 mb-4">
                  WellFitness <span className="text-[#F53B49]">не сотрудничает</span> с магазинами
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {Array(16).fill('zonasporta.com').map((store, index) => (
                    <div key={index} className="text-gray-600 text-sm">
                      {store}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WhereToBuy;
