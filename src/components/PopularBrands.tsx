
import React from 'react';
import { Link } from 'react-router-dom';

const PopularBrands: React.FC = () => {
  const brands = [
    { id: 1, name: "BowFlex", logo: "/lovable-uploads/d7460e6e-3133-4958-a3a2-6c933938c62c.png", slug: "bowflex" },
    { id: 2, name: "TRUE", logo: "/lovable-uploads/2193c3ab-84ea-41d9-8e51-be8bfbc7904a.png", slug: "true" },
    { id: 3, name: "Schwinn", logo: "/lovable-uploads/ad78a6d2-d93d-45b2-a7f5-b5b3ebeb339a.png", slug: "schwinn" },
    { id: 4, name: "Cardio Power", logo: "/lovable-uploads/b32017a9-0774-4a12-9fcd-39bd50910a86.png", slug: "cardiopower" },
    { id: 5, name: "MAXFIT", logo: "/lovable-uploads/53426d0c-4430-4856-b59b-4260613dc186.png", slug: "maxfit" },
    { id: 6, name: "Sole", logo: "/lovable-uploads/26387732-07b6-4dba-863a-351d34e19d1f.png", slug: "sole" },
    { id: 7, name: "PEACH BUILDER", logo: "/lovable-uploads/6b768359-79b4-4e0e-918d-b7483e377f0e.png", slug: "peach-builder" },
    { id: 8, name: "Variosling", logo: "/lovable-uploads/c0279280-6434-4917-a15a-a329b4f77188.png", slug: "variosling" },
    { id: 9, name: "proski", logo: "/lovable-uploads/803751de-6e11-42bb-b2a7-ed88abd5f406.png", slug: "proski" },
    { id: 10, name: "cardiopower-pro", logo: "/lovable-uploads/ff4161ee-bd1f-408a-b9f6-0d294b8e2e2b.png", slug: "cardiopower-pro" },
    { id: 11, name: "hyfit", logo: "/lovable-uploads/c424095c-c9e2-40e2-a8c2-63f27746a2ba.png", slug: "hyfit" },
    { id: 12, name: "SMITH", logo: "/lovable-uploads/ad6d9901-9551-4a7f-81bd-7a48c3afdb83.png", slug: "smith" }
  ];

  return (
    <section className="w-full bg-white py-6 md:py-4 lg:py-6">
      <div className="max-w-[1800px] mx-auto px-[30px] md:px-[20px] lg:px-[30px]">
        {/* Header */}
        <div className="mb-8 md:mb-6 lg:mb-8">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 font-benzin-semibold">Популярные бренды</h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[10px] md:gap-[8px] lg:gap-[10px] mb-8 md:mb-6 lg:mb-8">
          {brands.slice(0, 12).map((brand, index) => {
            // Для планшетов показываем только первые 8 брендов (2 ряда по 4)
            const isHiddenOnTablet = index >= 8;
            // Определяем индивидуальные размеры для каждого бренда как на странице /brands
            const getBrandImageClass = (brandName: string) => {
              switch(brandName) {
                case 'SMITH':
                  return 'max-h-20 max-w-full';
                default:
                  return 'max-w-full max-h-12';
              }
            };

            return (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className={`bg-white rounded-lg border border-gray-200 p-6 md:p-4 lg:p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer min-h-[120px] md:min-h-[100px] lg:min-h-[120px] ${
                  isHiddenOnTablet ? 'hidden md:hidden lg:block' : ''
                }`}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={`object-contain hover:opacity-90 transition-opacity ${getBrandImageClass(brand.name)}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <Link 
            to="/brands"
            className="px-6 md:px-4 lg:px-6 py-3 md:py-2 lg:py-3 border border-[#F53B49] text-[#F53B49] rounded-lg hover:bg-[#F53B49] hover:text-white transition-colors font-benzin text-base md:text-sm lg:text-base"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
