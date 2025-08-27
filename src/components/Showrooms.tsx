
import React, { useState } from 'react';
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Showrooms: React.FC = () => {
  const [activeShowroom, setActiveShowroom] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const showroomsData = [
    {
      id: 1,
      city: 'Москва',
      address: 'Москва, ТРК VEGAS Крокус Сити, м. Мякинино, ул. Международная 12, 66 км МКАД',
      phone: '+7 (499) 677-66-32',
      hours: '10:00 - 22:00',
      area: '36 м²',
      equipment: '17 тренажеров',
      images: [
        '/lovable-uploads/16b42289-8cf0-4324-ac80-162c3805b6d8.png',
        '/lovable-uploads/8442c89a-5e3f-49f5-bab2-5e083560f081.png',
        '/lovable-uploads/8937f242-190b-4058-a436-da2d8f7c5989.png',
        '/lovable-uploads/96b6ebb0-4c27-4da6-a453-c62c59cd8948.png'
      ]
    },
    {
      id: 2,
      city: 'Санкт-Петербург',
      address: 'Санкт-Петербург, ТРК Галерея, м. Лиговский проспект, ул. Лиговский проспект 30А',
      phone: '+7 (812) 555-66-77',
      hours: '10:00 - 22:00',
      area: '42 м²',
      equipment: '19 тренажеров',
      images: [
        '/lovable-uploads/16b42289-8cf0-4324-ac80-162c3805b6d8.png',
        '/lovable-uploads/8442c89a-5e3f-49f5-bab2-5e083560f081.png',
        '/lovable-uploads/8937f242-190b-4058-a436-da2d8f7c5989.png'
      ]
    },
    {
      id: 3,
      city: 'Саратов',
      address: 'Саратов, ТЦ Триумф Молл, ул. Чернышевского 88',
      phone: '+7 (8452) 55-44-33',
      hours: '10:00 - 21:00',
      area: '28 м²',
      equipment: '12 тренажеров',
      images: [
        '/lovable-uploads/96b6ebb0-4c27-4da6-a453-c62c59cd8948.png',
        '/lovable-uploads/8937f242-190b-4058-a436-da2d8f7c5989.png'
      ]
    },
    {
      id: 4,
      city: 'Сочи',
      address: 'Сочи, ТРК Моремолл, Курортный проспект 50А',
      phone: '+7 (862) 444-55-66',
      hours: '10:00 - 22:00',
      area: '35 м²',
      equipment: '15 тренажеров',
      images: [
        '/lovable-uploads/8442c89a-5e3f-49f5-bab2-5e083560f081.png',
        '/lovable-uploads/16b42289-8cf0-4324-ac80-162c3805b6d8.png'
      ]
    },
    {
      id: 5,
      city: 'Новосибирск',
      address: 'Новосибирск, ТРЦ Аура, ул. Широкая 1А',
      phone: '+7 (383) 333-22-11',
      hours: '10:00 - 22:00',
      area: '40 м²',
      equipment: '18 тренажеров',
      images: [
        '/lovable-uploads/8937f242-190b-4058-a436-da2d8f7c5989.png',
        '/lovable-uploads/96b6ebb0-4c27-4da6-a453-c62c59cd8948.png'
      ]
    },
    {
      id: 6,
      city: 'Екатеринбург',
      address: 'Екатеринбург, ТРЦ Гринвич, ул. 8 Марта 46',
      phone: '+7 (343) 222-11-00',
      hours: '10:00 - 22:00',
      area: '38 м²',
      equipment: '16 тренажеров',
      images: [
        '/lovable-uploads/16b42289-8cf0-4324-ac80-162c3805b6d8.png',
        '/lovable-uploads/8442c89a-5e3f-49f5-bab2-5e083560f081.png',
        '/lovable-uploads/96b6ebb0-4c27-4da6-a453-c62c59cd8948.png'
      ]
    }
  ];

  const currentShowroom = showroomsData[activeShowroom];

  // Get unique cities for the filter
  const cities = ['Москва', 'Санкт-Петербург', 'Ярославль', 'Новосибирск', 'Смоленск', 'Красноярск', 'Волжск', 'Пермь', 'Ростов', 'Волгоград'];

  // Filter showrooms based on selected city
  const filteredShowrooms = selectedCity 
    ? showroomsData.filter(showroom => showroom.city === selectedCity)
    : showroomsData;

  // Navigation functions for image slider
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev >= currentShowroom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev <= 0 ? currentShowroom.images.length - 1 : prev - 1
    );
  };

  // Reset image index when showroom changes
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [activeShowroom]);

  // Handle city selection
  const handleCityClick = (city: string) => {
    if (selectedCity === city) {
      setSelectedCity(null); // Deselect if already selected
    } else {
      setSelectedCity(city);
      // Find first showroom in selected city
      const firstShowroomIndex = showroomsData.findIndex(showroom => showroom.city === city);
      if (firstShowroomIndex !== -1) {
        setActiveShowroom(firstShowroomIndex);
      }
    }
  };

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-benzin-semibold">Шоурумы</h2>
        </div>

        {/* Cities Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-6 pb-4">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityClick(city)}
                className={`text-sm transition-colors hover:text-[#F53B49] ${
                  selectedCity === city 
                    ? 'text-[#F53B49] font-medium' 
                    : 'text-gray-600'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Showroom Banner - Three Parts */}
        <div className="w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex">
          
          {/* Left Part - Showrooms List */}
          <div className="w-[260px] bg-gray-800 flex flex-col">
            {showroomsData.map((showroom, index) => (
              <button
                key={showroom.id}
                onClick={() => setActiveShowroom(index)}
                className={`flex-1 px-6 py-4 text-left transition-colors border-b border-gray-700 last:border-b-0 ${
                  activeShowroom === index 
                    ? 'bg-[#F53B49] text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="font-benzin text-lg">Шоурум {showroom.id}</span>
              </button>
            ))}
          </div>

          {/* Middle Part - Showroom Info */}
          <div 
            className="w-[400px] text-white p-8 flex flex-col justify-center relative"
            style={{
              backgroundImage: `url('/lovable-uploads/e05a6eb9-c52e-47db-8538-c7a03271bb36.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-benzin-semibold">Шоу-рум WellFitness</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={16} style={{ color: '#5C6476' }} />
                  <p className="text-sm font-semibold" style={{ color: '#5C6476' }}>Адрес</p>
                </div>
                <p className="text-white text-sm leading-relaxed">Москва, ТЦ Капитолий, Правобережная улица, 1Б</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={16} style={{ color: '#5C6476' }} />
                  <p className="text-sm font-semibold" style={{ color: '#5C6476' }}>Телефон</p>
                </div>
                <p className="text-white text-sm">+7 (499) 677-56-32 доб. 337</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} style={{ color: '#5C6476' }} />
                  <p className="text-sm font-semibold" style={{ color: '#5C6476' }}>Режим работы</p>
                </div>
                <p className="text-white text-sm">10:00 - 22:00</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="border border-white text-white px-6 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                Как проехать
              </button>
            </div>
          </div>

          {/* Right Part - Photo Slider */}
          <div className="flex-1 bg-gray-100 relative overflow-hidden">
            {/* Current Image */}
            <img 
              src={currentShowroom.images[activeImageIndex]} 
              alt={`Шоурум ${currentShowroom.id} - фото ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            {currentShowroom.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            
            {/* Image Indicators */}
            {currentShowroom.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {currentShowroom.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
