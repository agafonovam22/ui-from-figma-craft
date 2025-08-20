
import React, { useState } from 'react';

const Showrooms: React.FC = () => {
  const [activeShowroom, setActiveShowroom] = useState(0);

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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
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
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
        '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png'
      ]
    }
  ];

  const currentShowroom = showroomsData[activeShowroom];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-benzin-semibold">Шоурумы</h2>
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
                <p className="text-gray-300 text-sm mb-1 font-semibold">Адрес</p>
                <p className="text-white text-sm leading-relaxed">Москва, ТЦ Капитолий, Правобережная улица, 1Б</p>
              </div>

              <div>
                <p className="text-gray-300 text-sm mb-1 font-semibold">Телефон</p>
                <p className="text-white text-sm">+7 (499) 677-56-32 доб. 337</p>
              </div>

              <div>
                <p className="text-gray-300 text-sm mb-1 font-semibold">Режим работы</p>
                <p className="text-white text-sm">10:00 - 22:00</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="border border-white text-white px-6 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                Как проехать
              </button>
            </div>
          </div>

          {/* Right Part - Empty */}
          <div className="flex-1 bg-gray-100">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
