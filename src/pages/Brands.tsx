
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
    { name: 'BowFlex', logo: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png', slug: 'bowflex' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'BowFlex', logo: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png', slug: 'bowflex' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'BowFlex', logo: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png', slug: 'bowflex' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' },
    { name: 'kernel', logo: null, slug: 'kernel' }
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
                  className="max-h-16 w-auto object-contain"
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
