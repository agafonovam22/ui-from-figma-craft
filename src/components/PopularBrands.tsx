
import React from 'react';
import { Link } from 'react-router-dom';

const PopularBrands: React.FC = () => {
  const brands = [
    { id: 1, name: "BowFlex", logo: "/lovable-uploads/d7460e6e-3133-4958-a3a2-6c933938c62c.png", slug: "bowflex" },
    { id: 2, name: "TRUE", logo: "/lovable-uploads/771481a7-be16-4a51-999e-fce89022b698.png", slug: "true" },
    { id: 3, name: "Schwinn", logo: "/lovable-uploads/452985b7-2b68-4c62-b51e-e43fff73784d.png", slug: "schwinn" },
    { id: 4, name: "Cardio Power", logo: "/lovable-uploads/b32017a9-0774-4a12-9fcd-39bd50910a86.png", slug: "cardio-power" },
    { id: 5, name: "Benmore", logo: "/lovable-uploads/82b98e94-1117-4bad-875a-d9313a38b737.png", slug: "benmore" },
    { id: 6, name: "Nautilus", logo: "/lovable-uploads/e6c7e1c5-85ea-40ca-9d67-c478fe5165d9.png", slug: "nautilus" },
    { id: 7, name: "Sole Fitness", logo: "/lovable-uploads/1b02aa63-1000-4235-928d-c0a3dda8b467.png", slug: "sole-fitness" },
    { id: 8, name: "PEACH BUILDER", logo: "/lovable-uploads/f60c9b28-0384-4770-97ba-40b6bdcd451e.png", slug: "peach-builder" },
    { id: 9, name: "октан", logo: "/lovable-uploads/a80bf39b-ac41-4faf-992e-dcd6a6de297b.png", slug: "oktan" },
    { id: 10, name: "Gym80", logo: "/lovable-uploads/c4fbfa9e-af20-4a86-87a4-93a9d834a095.png", slug: "gym80" },
    { id: 11, name: "Visbody", logo: "/lovable-uploads/870a2f31-d993-423c-a045-abaa75c5302f.png", slug: "visbody" }
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-benzin-semibold">Популярные бренды</h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer min-h-[100px]"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-12 object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg hover:bg-[#F53B49] hover:text-white transition-colors font-benzin">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
