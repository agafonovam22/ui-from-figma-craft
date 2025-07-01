
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import IdeasSelections from '@/components/IdeasSelections';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const HomeFitnessEquipment: React.FC = () => {
  const equipmentCategories = [
    {
      id: 1,
      image: '/lovable-uploads/f9b72daf-4aef-4d8d-b310-9c89ab9d2935.png',
      category: 'treadmill'
    },
    {
      id: 2,
      image: '/lovable-uploads/69fdc332-0059-4da9-bb96-e2a33ad78690.png',
      category: 'bike'
    },
    {
      id: 3,
      image: '/lovable-uploads/b434aaab-a2a1-477c-b1b7-dc8498469b1d.png',
      category: 'rowing'
    },
    {
      id: 4,
      image: '/lovable-uploads/51a61095-ad58-47e3-8e00-c553a9375652.png',
      category: 'elliptical'
    },
    {
      id: 5,
      image: '/lovable-uploads/8017e182-f4c2-4df6-9cf5-4576a253034c.png',
      category: 'table-tennis'
    },
    {
      id: 6,
      image: '/lovable-uploads/46f01d9e-1277-4b59-ad56-ed1b519c6e6d.png',
      category: 'accessories'
    },
    {
      id: 7,
      image: '/lovable-uploads/d2eb71f9-548b-4767-959b-ccd95c181201.png',
      category: 'strength'
    },
    {
      id: 8,
      image: '/lovable-uploads/c4fbfa9e-af20-4a86-87a4-93a9d834a095.png',
      category: 'inversion'
    },
    {
      id: 9,
      image: '/lovable-uploads/273e9dfe-c852-4292-9c95-8d70317bc41c.png',
      category: 'horizontal'
    },
    {
      id: 10,
      image: '/lovable-uploads/26b0854f-4f46-4c7c-a27a-1af9ad7b0c62.png',
      category: 'outdoor'
    },
    {
      id: 11,
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'trampoline'
    },
    {
      id: 12,
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      category: 'massage'
    },
    {
      id: 13,
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      category: 'home-accessories'
    },
    {
      id: 14,
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'free-weights'
    },
    {
      id: 15,
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      category: 'game-tables'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
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
              <BreadcrumbPage>Тренажеры для дома</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#262631]">
            Тренажеры для дома
          </h1>
          <Link 
            to="/gym-equipment" 
            className="text-[#F53B49] hover:underline flex items-center gap-1"
          >
            Тренажеры для фитнес-клуба →
          </Link>
        </div>

        {/* Equipment Grid - First 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {equipmentCategories.slice(0, 6).map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
        
        {/* Equipment Grid - Next 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
          {equipmentCategories.slice(6, 11).map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>

        {/* Equipment Grid - Last 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {equipmentCategories.slice(11, 15).map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Категория товаров"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Ideas and Selections */}
      <IdeasSelections />

      {/* New Products */}
      <NewProducts />
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default HomeFitnessEquipment;
