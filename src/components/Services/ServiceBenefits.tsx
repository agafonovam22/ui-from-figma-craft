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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;