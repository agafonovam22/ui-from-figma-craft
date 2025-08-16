
import React from 'react';

const Showrooms: React.FC = () => {
  const cities = [
    'Москва',
    'Санкт-Петербург', 
    'Саратов',
    'Сочи',
    'Новосибирск',
    'Екатеринбург'
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-benzin-semibold">Шоурумы</h2>
        </div>

        {/* Cities List */}
        <div className="flex flex-wrap gap-6 mb-8">
          {cities.map((city, index) => (
            <button
              key={city}
              className={`text-lg font-medium transition-colors hover:text-[#F53B49] font-benzin ${
                index === 0 ? 'text-[#F53B49]' : 'text-gray-600'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Single Photo */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png" 
            alt="Шоурум интерьер"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
