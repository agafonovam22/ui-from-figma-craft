
import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Showrooms: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [selectedShowroom, setSelectedShowroom] = useState('showroom1');
  const [currentSlide, setCurrentSlide] = useState(0);

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
      showroom1: {
        name: 'Шоурум 1',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '36 м²',
        equipment: '17 тренажеров',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png',
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png',
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      },
      showroom2: {
        name: 'Шоурум 2',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '42 м²',
        equipment: '20 тренажеров',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png',
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      },
      showroom3: {
        name: 'Шоурум 3',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '38 м²',
        equipment: '15 тренажеров',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      },
      showroom4: {
        name: 'Шоурум 4',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '45 м²',
        equipment: '22 тренажера',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      },
      showroom5: {
        name: 'Шоурум 5',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '40 м²',
        equipment: '18 тренажеров',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      },
      showroom6: {
        name: 'Шоурум 6',
        address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
        phone: '+7 (499) 677-56-32',
        hours: '10:00 - 22:00',
        area: '35 м²',
        equipment: '16 тренажеров',
        images: [
          '/lovable-uploads/d1fb22fa-e0b2-4a8c-81fb-2a93c5679e10.png'
        ]
      }
    }
  };

  const currentShowroom = showroomData[selectedCity as keyof typeof showroomData]?.[selectedShowroom as keyof typeof showroomData['Москва']] || showroomData['Москва']['showroom1'];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentShowroom.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentShowroom.images.length) % currentShowroom.images.length);
  };

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Шоурумы</h2>
        </div>

        {/* Cities Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
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

        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Vertical Showroom Tabs */}
          <div className="lg:col-span-2">
            <Tabs value={selectedShowroom} onValueChange={setSelectedShowroom} orientation="vertical" className="w-full">
              <TabsList className="flex flex-col h-auto w-full bg-gray-100 p-1">
                <TabsTrigger 
                  value="showroom1" 
                  className="w-full bg-[#F53B49] text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3 mb-1"
                >
                  Шоурум 1
                </TabsTrigger>
                <TabsTrigger 
                  value="showroom2" 
                  className="w-full bg-gray-600 text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3 mb-1"
                >
                  Шоурум 2
                </TabsTrigger>
                <TabsTrigger 
                  value="showroom3" 
                  className="w-full bg-gray-600 text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3 mb-1"
                >
                  Шоурум 3
                </TabsTrigger>
                <TabsTrigger 
                  value="showroom4" 
                  className="w-full bg-gray-600 text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3 mb-1"
                >
                  Шоурум 4
                </TabsTrigger>
                <TabsTrigger 
                  value="showroom5" 
                  className="w-full bg-gray-600 text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3 mb-1"
                >
                  Шоурум 5
                </TabsTrigger>
                <TabsTrigger 
                  value="showroom6" 
                  className="w-full bg-gray-600 text-white data-[state=active]:bg-[#F53B49] data-[state=active]:text-white justify-start px-4 py-3"
                >
                  Шоурум 6
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Middle Column - Showroom Info Card */}
          <div className="lg:col-span-5">
            <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
              {/* Address */}
              <div className="mb-4">
                <div className="flex items-start gap-2 text-gray-300 mb-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-sm">Адрес</span>
                </div>
                <p className="text-white font-medium ml-7">{currentShowroom.address}</p>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-300 mb-1">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Телефон</span>
                </div>
                <p className="text-white font-medium ml-7">{currentShowroom.phone}</p>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-300 mb-1">
                  <Clock className="w-5 h-5 text-blue-400" />
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
          </div>

          {/* Right Column - Image Slider */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden h-full min-h-[400px]">
              <img 
                src={currentShowroom.images[currentSlide]} 
                alt={`${currentShowroom.name} интерьер`}
                className="w-full h-full object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute top-6 right-6 text-white text-right">
                <div className="text-2xl font-bold mb-1">{currentShowroom.area}</div>
                <div className="text-xl font-semibold">{currentShowroom.equipment}</div>
              </div>

              {/* Navigation Arrows */}
              {currentShowroom.images.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {currentShowroom.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {currentShowroom.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-[#F53B49]' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
