
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
import { Globe, Clock, Map as MapIcon } from 'lucide-react';

const WhereToBuy: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [activeTab, setActiveTab] = useState('stores');
  const [sortBy, setSortBy] = useState('list');
  const [showMap, setShowMap] = useState(false);

  const partnerStores = [
    {
      name: 'Выставочный зал Юг - МТЦ «АрмадаХоум»',
      address: 'г. Москва, Кировоградская ул., 11, к. 1, МТЦ «АрмадаХоум», 1 этаж, секция №5',
      phone: '8 (495) 150-95-00, 8 (800) 500-94-27',
      hours: 'fitnesslook.ru',
      coordinates: [37.5983, 55.6558] as [number, number]
    },
    {
      name: 'Выставочный зал Север - МЦ «Империя»',
      address: 'г. Москва, Дмитровское шоссе 161Б, МЦ Империя, 5 этаж, секция 5А',
      phone: '8 (495) 150-95-00, 8 (800) 500-94-27',
      hours: 'fitnesslook.ru',
      coordinates: [37.5200, 55.8500] as [number, number]
    },
    {
      name: 'WellGallery',
      address: 'Москва, Калужское шоссе, 1 км от МКАД, ТЦ "Славянский Град", 1 этаж',
      phone: '+7 (800) 555-70-38',
      hours: 'wellgallery.ru',
      coordinates: [37.5400, 55.6200] as [number, number]
    },
    {
      name: 'Sportpremier',
      address: 'Москва, м. Румянцево, БП "Румянцево", блок Д',
      phone: '+7 (495) 150-84-44',
      hours: 'sportpremier.ru',
      coordinates: [37.4400, 55.6300] as [number, number]
    },
    {
      name: 'wellmir.ru',
      address: 'Москва, Новорижское шоссе, 5км от МКАД, ТК "Юнимолл", -1 этаж',
      phone: '+7 (495) 989 80 70',
      hours: 'well-mir.ru',
      coordinates: [37.3500, 55.7800] as [number, number]
    },
    {
      name: 'Элептика',
      address: 'Москва, Ленинский пр-т, д. 54, ТЦ "Москва", 3 этаж',
      phone: '8 (495) 545-41-22',
      hours: 'eleptika.ru',
      coordinates: [37.5800, 55.7200] as [number, number]
    },
    {
      name: 'Тренмаркет.ру',
      address: 'Москва, Ленинский пр-т, д. 99',
      phone: '+7 (495) 123-88-23',
      hours: 'trenmarket.ru',
      coordinates: [37.5600, 55.7000] as [number, number]
    },
    {
      name: 'Спорт Дома',
      address: 'Москва, м. Алексеевская, ул. Маломосковская, д. 22, стр.1',
      phone: '+7 (495) 241-95-49',
      hours: 'sportdoma.ru',
      coordinates: [37.6400, 55.8100] as [number, number]
    },
    {
      name: 'Desire-Fitness.Store',
      address: 'Москва, Рублевское шоссе, д. 52А, ТЦ "Западный", 2 этаж, павильон 206',
      phone: '+7 (495) 292-52-73',
      hours: 'desire-fitness.store',
      coordinates: [37.3800, 55.7400] as [number, number]
    }
  ];

  // Функция для форматирования адреса с правильными переносами
  const formatAddress = (address: string) => {
    // Паттерны для разбора адреса
    const cityMatch = address.match(/^(г\.\s*)?([^,]+)/);
    const city = cityMatch ? cityMatch[0].trim() : '';
    
    let remainingAddress = address.replace(city, '').replace(/^,\s*/, '');
    
    // Ищем торговый центр/комплекс
    const tcMatch = remainingAddress.match(/(МТЦ|МЦ|ТЦ|ТК|БП)\s*[^,]+/);
    let tc = '';
    if (tcMatch) {
      tc = tcMatch[0].trim();
      remainingAddress = remainingAddress.replace(tcMatch[0], '').replace(/^,\s*/, '');
    }
    
    // Ищем этаж и секцию
    const floorSectionMatch = remainingAddress.match(/(-?\d+\s*этаж[^,]*(?:,\s*(?:секция|павильон)\s*[^,]*)?)/);
    let floorSection = '';
    if (floorSectionMatch) {
      floorSection = floorSectionMatch[0].trim().replace(/^-/, ''); // убираем тире в начале
      remainingAddress = remainingAddress.replace(floorSectionMatch[0], '').replace(/^,\s*/, '').replace(/,\s*$/, '');
    }
    
    // Оставшаяся часть адреса (улица, дом) - объединяем с км от МКАД
    let street = remainingAddress.trim().replace(/,$/, '');
    
    const parts = [];
    if (city) parts.push(city);
    if (street) parts.push(street);
    if (tc && floorSection) {
      parts.push(`${tc}, ${floorSection}`);
    } else {
      if (tc) parts.push(tc);
      if (floorSection) parts.push(floorSection);
    }
    
    return parts;
  };

  const onlineStores = [
    'buyfit.ru',
    'aquarius-sport.ru',
    'dynamic-sport.ru',
    'forsport.pro',
    'wildsportprof.ru',
    'velocube.ru',
    'csport.ru',
    'sportsgoods.ru',
    'sportprofi.ru',
    '2train.by',
    'sport-center.by',
    'sport-land.by',
    'open-fit.ru',
    'qwerty96.ru',
    'ekaterinburgsport.ru',
    'rfsport16.ru',
    'le-store.pro',
    'bodyactiv.ru',
    'kupisilu.ru',
    'sportaim-shop.ru',
    'sportimperial.ru',
    'luckygym.ru',
    'mehran.ru',
    'pitersport24.ru',
    'powertomsk.ru',
    'sportprivate.ru',
    'zm33.ru',
    'trenazher35.ru',
    'sportosnova.ru',
    'goldgym.ru',
    'ksg.ru',
    'petrasport.ru',
    'sportvagon.ru',
    'wellgallery.ru'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
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
        <div className="flex flex-wrap items-center justify-between gap-4 h-[52px] mb-10">
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

          <div className="flex items-center gap-2">
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

        {/* Intro Text */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed text-left w-full mb-2">
            Наши бренды представлены у партнеров и в интернет-магазинах, а также в нашем шоу-руме.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-left w-full">
            Приходите, тестируйте и убедитесь: только оригиналы, высочайшее качество!
          </p>
        </div>

        {/* Show on Map Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <MapIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium text-[14px]">Показать на карте</span>
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
            <div className="bg-gray-50 rounded-lg flex h-[328px] overflow-hidden">
              <div className="flex-1 w-1/3 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Шоу-рум WellFitness
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-2">
                    <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-sm">
                        Москва, ТЦ Капитолий, Правобережная улица, 1Б
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-sm">+7 (499) 677-56-32 доб. 337</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <img src="/lovable-uploads/5303d3e6-d397-4aa6-af39-40d3dbe6d3c4.png" alt="Режим работы" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-sm">10:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-2/3 h-full">
                <img 
                  src="/lovable-uploads/e0b32acd-ffda-47fd-8521-94ebe288876d.png"
                  alt="Фирменный магазин Well Fitness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'partners' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><span style={{ color: '#778093' }}>Магазины</span> партнеров</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerStores.map((store, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
                  
                     <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-2">
                        <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-4 h-4 mt-1 flex-shrink-0" />
                       <div>
                         <p className="font-medium text-sm">Адрес</p>
                         <div className="text-sm">
                           {formatAddress(store.address).map((line, idx) => (
                             <div key={idx}>{line}</div>
                           ))}
                         </div>
                       </div>
                     </div>
                    
                     <div className="flex items-center gap-2">
                       <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-4 h-4 flex-shrink-0" />
                       <div>
                         <p className="font-medium text-sm">Телефон</p>
                         <div className="text-sm">
                           {store.phone.includes(',') ? (
                             store.phone.split(',').map((phone, idx) => (
                               <div key={idx}>{phone.trim()}</div>
                             ))
                           ) : (
                             <div>{store.phone}</div>
                           )}
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Сайт</p>
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
                    <a 
                      href={`https://${store}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#F53B49] transition-colors font-heading text-[16px]"
                    >
                      {store}
                    </a>
                  </div>
              ))}
            </div>

          </section>
        )}

        {activeTab === 'stores' && (
          <>
            {/* Partner Stores Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6"><span style={{ color: '#778093' }}>Магазины</span> партнеров</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerStores.map((store, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
                    
                     <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-2">
                          <img src="/lovable-uploads/f0b02b09-ceb0-462c-a71b-75c67b2c6288.png" alt="Адрес" className="w-4 h-4 mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-medium text-sm">Адрес</p>
                           <div className="text-sm">
                             {formatAddress(store.address).map((line, idx) => (
                               <div key={idx}>{line}</div>
                             ))}
                           </div>
                         </div>
                       </div>
                      
                       <div className="flex items-center gap-2">
                         <img src="/lovable-uploads/de289cce-f010-4b2d-b0a3-3ffc885c1664.png" alt="Телефон" className="w-4 h-4 flex-shrink-0" />
                         <div>
                           <p className="font-medium text-sm">Телефон</p>
                           <div className="text-sm">
                             {store.phone.includes(',') ? (
                               store.phone.split(',').map((phone, idx) => (
                                 <div key={idx}>{phone.trim()}</div>
                               ))
                             ) : (
                               <div>{store.phone}</div>
                             )}
                           </div>
                         </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Сайт</p>
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
                      <a 
                        href={`https://${store}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#F53B49] transition-colors font-heading text-[16px]"
                      >
                        {store}
                      </a>
                    </div>
                ))}
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
