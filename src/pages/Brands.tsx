
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { X } from 'lucide-react';
import { initTabletLayoutFix } from '@/utils/tabletLayout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const Brands: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Беговые дорожки']);

  // Инициализируем фикс планшетной раскладки
  useEffect(() => {
    const cleanup = initTabletLayoutFix();
    return cleanup;
  }, []);

  const filters = [
    'Беговые дорожки',
    'Велотренажеры',
    'Эллиптические',
    'Горнолыжные',
    'Гребные'
  ];

  const brands = [
    { name: "SMITH", logo: "/lovable-uploads/ad6d9901-9551-4a7f-81bd-7a48c3afdb83.png", slug: "smith" },
    { name: "TRUE", logo: "/lovable-uploads/2193c3ab-84ea-41d9-8e51-be8bfbc7904a.png", slug: "true" },
    { name: "Bowflex", logo: "/lovable-uploads/d7460e6e-3133-4958-a3a2-6c933938c62c.png", slug: "bowflex" },
    { name: "Schwinn", logo: "/lovable-uploads/ad78a6d2-d93d-45b2-a7f5-b5b3ebeb339a.png", slug: "schwinn" },
    { name: "Peach Builder", logo: "/lovable-uploads/6b768359-79b4-4e0e-918d-b7483e377f0e.png", slug: "peach-builder" },
    { name: "Sole", logo: "/lovable-uploads/26387732-07b6-4dba-863a-351d34e19d1f.png", slug: "sole" },
    { name: "Variosling", logo: "/lovable-uploads/c0279280-6434-4917-a15a-a329b4f77188.png", slug: "variosling" },
    { name: "CardioPower", logo: "/lovable-uploads/b32017a9-0774-4a12-9fcd-39bd50910a86.png", slug: "cardiopower" },
    { name: "Slide&Fit", logo: "/lovable-uploads/266afacd-f80f-49ba-a31c-e3e823a82ddd.png", slug: "slide-fit" },
    { name: "cardiopower-pro", logo: "/lovable-uploads/ff4161ee-bd1f-408a-b9f6-0d294b8e2e2b.png", slug: "cardiopower-pro" },
    { name: "SCHOLLE", logo: "/lovable-uploads/644a6485-04f6-4064-9ee8-cacae87e8c09.png", slug: "scholle" },
    { name: "INSPIRE", logo: "/lovable-uploads/a7480f3e-94f4-444c-a451-eed7d6b77478.png", slug: "inspire" },
    { name: "hyfit", logo: "/lovable-uploads/c424095c-c9e2-40e2-a8c2-63f27746a2ba.png", slug: "hyfit" },
    { name: "maxgym", logo: "/lovable-uploads/cc6e7099-bbfb-406f-ab1d-201cf565962a.png", slug: "maxgym" },
    { name: "MAXFIT", logo: "/lovable-uploads/53426d0c-4430-4856-b59b-4260613dc186.png", slug: "maxfit" },
    { name: "proski", logo: "/lovable-uploads/803751de-6e11-42bb-b2a7-ed88abd5f406.png", slug: "proski" },
    { name: "Meridien", logo: "/lovable-uploads/aca1d655-a295-4b83-9777-d6a59a6d6c88.png", slug: "meridien" },
    { name: "kernel", logo: "/lovable-uploads/780287df-78a1-4886-ae82-8fad0567d9ca.png", slug: "kernel" },
    { name: "CENTR", logo: "/lovable-uploads/6317917f-5d52-453f-b576-b18e47712812.png", slug: "centr" },
    { name: "Sintesi", logo: "/lovable-uploads/ade27090-5541-4f24-9826-cf4f3d27467d.png", slug: "sintesi" },
    { name: "VISBODY", logo: "/lovable-uploads/576ba5fd-4977-4c78-a2ec-2c7fc4935c41.png", slug: "visbody" }
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <main className="min-h-screen bg-white page-container">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Бренды</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Бренды</h1>
        
        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 mb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilters.includes(filter)
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Selected Filters */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <div
                  key={filter}
                  className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-full text-sm"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-white/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {brands.map((brand, index) => {
            // Определяем индивидуальные размеры для каждого бренда
            const getBrandImageClass = (brandName: string) => {
              switch(brandName) {
                case 'TRUE':
                  return 'max-h-24 max-w-full';
                case 'SMITH':
                  return 'max-h-20 max-w-full';
                case 'Bowflex':
                  return 'max-h-18 max-w-full';
                case 'Schwinn':
                  return 'max-h-20 max-w-full';
                case 'Sole':
                  return 'max-h-16 max-w-full';
                case 'CardioPower':
                case 'cardiopower-pro':
                  return 'max-h-20 max-w-full';
                case 'CENTR':
                case 'kernel':
                  return 'max-h-24 max-w-full';
                case 'Variosling':
                  return 'max-h-20 max-w-full';
                case 'hyfit':
                  return 'max-h-16 max-w-full';
                case 'Meridien':
                  return 'max-h-full max-w-full';
                case 'SCHOLLE':
                  return 'max-h-14 max-w-full';
                case 'Slide&Fit':
                  return 'max-h-16 max-w-full';
                case 'Peach Builder':
                  return 'max-h-22 max-w-full';
                case 'INSPIRE':
                  return 'max-h-18 max-w-full';
                case 'maxgym':
                  return 'max-h-24 max-w-full';
                case 'MAXFIT':
                  return 'max-h-16 max-w-full';
                case 'proski':
                  return 'max-h-18 max-w-full';
                default:
                  return 'max-h-18 max-w-full';
              }
            };

            return (
              <Link
                key={index}
                to={`/brands/${brand.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center h-32 hover:shadow-md transition-shadow cursor-pointer"
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={`w-auto object-contain ${getBrandImageClass(brand.name)}`}
                  />
                ) : (
                  <span className="text-gray-400 text-lg font-medium text-center">{brand.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Brands;
