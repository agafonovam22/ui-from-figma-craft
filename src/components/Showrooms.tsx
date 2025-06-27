
import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

const Showrooms: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');

  const cities = [
    'Москва',
    'Санкт-Петербург', 
    'Ярославль',
    'Новосибирск',
    'Смоленск',
    'Красноярск',
    'Волжск',
    'Пермь',
    'Ростов',
    'Волгоград'
  ];

  const showroomData = {
    'Москва': {
      name: 'Шоурум 1',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
      phone: '+7 (499) 677-56-32',
      hours: '10:00 - 22:00',
      area: '36 м²',
      equipment: '17 тренажеров',
      image: '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
    }
  };

  const currentShowroom = showroomData[selectedCity as keyof typeof showroomData] || showroomData['Москва'];

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Шоурумы</h2>
        </div>

        {/* Cities Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                selectedCity === city
                  ? 'text-[#F53B49] border-[#F53B49]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Showroom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Showroom Info */}
          <div className="bg-gray-800 text-white p-8 rounded-lg">
            {/* Showroom Tabs */}
            <div className="mb-6">
              <div className="bg-[#F53B49] text-white px-4 py-2 rounded-t-lg inline-block">
                {currentShowroom.name}
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                  Шоурум 2
                </div>
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                  Шоурум 3
                </div>
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                  Шоурум 4
                </div>
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                  Шоурум 5
                </div>
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                  Шоурум 6
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <div className="flex items-start gap-2 text-gray-300 mb-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Адрес</span>
              </div>
              <p className="text-white font-medium ml-7">{currentShowroom.address}</p>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Phone className="w-5 h-5" />
                <span className="text-sm">Телефон</span>
              </div>
              <p className="text-white font-medium ml-7">{currentShowroom.phone}</p>
            </div>

            {/* Hours */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Режим работы</span>
              </div>
              <p className="text-white font-medium ml-7">{currentShowroom.hours}</p>
            </div>

            {/* How to get there button */}
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors flex items-center gap-2">
              Как проехать
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="relative">
            <img 
              src={currentShowroom.image} 
              alt={`${currentShowroom.name} интерьер`}
              className="w-full h-full object-cover rounded-lg min-h-[400px]"
            />
            
            {/* Stats Overlay */}
            <div className="absolute top-6 right-6 text-white">
              <div className="text-right">
                <div className="text-2xl font-bold">{currentShowroom.area}</div>
                <div className="text-xl font-semibold">{currentShowroom.equipment}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-[#F53B49] rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
