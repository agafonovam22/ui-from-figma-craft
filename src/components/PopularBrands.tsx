import React from 'react';

const PopularBrands: React.FC = () => {
  const brands = [
    { id: 1, name: "BowFlex", logo: "/lovable-uploads/a80bf39b-ac41-4faf-992e-dcd6a6de297b.png" },
    { id: 2, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 3, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 4, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 5, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 6, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 7, name: "BowFlex", logo: "/lovable-uploads/a80bf39b-ac41-4faf-992e-dcd6a6de297b.png" },
    { id: 8, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 9, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 10, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 11, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" },
    { id: 12, name: "kernel", logo: "/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png" }
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Популярные бренды</h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer min-h-[100px]"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
