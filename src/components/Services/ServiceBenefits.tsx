import React from 'react';

interface Benefit {
  id: number;
  title: string;
  image: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Что вы получите от <span className="text-brand-red">3D-проекта</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full object-cover transition-transform group-hover:scale-105"
                style={{ height: '216px' }}
              />
              {/* White container overlay at bottom with title */}
              <div className="absolute bottom-[5px] left-[5px] right-[5px] bg-white p-4 rounded text-center">
                <h3 className="text-gray-900" style={{ fontFamily: 'Benzin-Semibold', fontSize: '20px' }}>{benefit.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;