
import React from 'react';

const Showrooms: React.FC = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Шоурумы</h2>
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
