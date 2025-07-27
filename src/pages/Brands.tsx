
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { X } from 'lucide-react';
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

  const filters = [
    'Беговые дорожки',
    'Велотренажеры',
    'Эллиптические',
    'Горнолыжные',
    'Гребные'
  ];

  const brands = [
    { name: "SMITH", logo: "/lovable-uploads/3ab5325a-f04b-445c-a4f4-6f117e9107fd.png", slug: "smith" },
    { name: "TRUE", logo: "/lovable-uploads/771481a7-be16-4a51-999e-fce89022b698.png", slug: "true" },
    { name: "Bowflex", logo: "/lovable-uploads/d7460e6e-3133-4958-a3a2-6c933938c62c.png", slug: "bowflex" },
    { name: "Schwinn", logo: "/lovable-uploads/452985b7-2b68-4c62-b51e-e43fff73784d.png", slug: "schwinn" },
    { name: "Peach Builder", logo: "/lovable-uploads/f60c9b28-0384-4770-97ba-40b6bdcd451e.png", slug: "peach-builder" },
    { name: "Sole", logo: "/lovable-uploads/1b02aa63-1000-4235-928d-c0a3dda8b467.png", slug: "sole" },
    { name: "Variosling", logo: "", slug: "variosling" },
    { name: "CardioPower", logo: "/lovable-uploads/b32017a9-0774-4a12-9fcd-39bd50910a86.png", slug: "cardiopower" },
    { name: "Slide&Fit", logo: "/lovable-uploads/266afacd-f80f-49ba-a31c-e3e823a82ddd.png", slug: "slide-fit" },
    { name: "cardiopower-pro", logo: "", slug: "cardiopower-pro" },
    { name: "SCHOLLE", logo: "/lovable-uploads/644a6485-04f6-4064-9ee8-cacae87e8c09.png", slug: "scholle" },
    { name: "INSPIRE", logo: "", slug: "inspire" },
    { name: "hyfit", logo: "", slug: "hyfit" },
    { name: "maxgym", logo: "", slug: "maxgym" },
    { name: "MAXFIT", logo: "", slug: "maxfit" },
    { name: "proski", logo: "", slug: "proski" },
    { name: "Meridien", logo: "", slug: "meridien" },
    { name: "kernel", logo: "", slug: "kernel" },
    { name: "CENTR", logo: "/lovable-uploads/6317917f-5d52-453f-b576-b18e47712812.png", slug: "centr" }
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
    <main className="min-h-screen bg-white">
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
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/brands/${brand.slug}`}
              className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow cursor-pointer"
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className={`w-auto object-contain ${brand.name === 'TRUE' ? 'max-h-20' : 'max-h-16'}`}
                />
              ) : (
                <span className="text-gray-400 text-lg font-medium">{brand.name}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Brands;
