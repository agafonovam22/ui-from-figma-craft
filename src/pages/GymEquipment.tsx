
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

const GymEquipment: React.FC = () => {
  const equipmentCategories = [
    {
      id: 1,
      image: '/lovable-uploads/8359c4fb-ab19-4e0f-904f-17c62a9694cc.png',
      category: 'treadmill'
    },
    {
      id: 2,
      image: '/lovable-uploads/17488a84-d62c-4ec5-83c9-21552aebadc8.png',
      category: 'bike'
    },
    {
      id: 3,
      image: '/lovable-uploads/03483cd7-94a8-4050-b663-8e2a5d663e53.png',
      category: 'rowing'
    },
    {
      id: 4,
      image: '/lovable-uploads/11f76f2c-1e15-40b4-bac6-6fb49f30b1a1.png',
      category: 'elliptical'
    },
    {
      id: 5,
      image: '/lovable-uploads/13df76f8-a392-4e5d-b2e0-340738c67fcf.png',
      category: 'multistation'
    },
    {
      id: 6,
      image: '/lovable-uploads/a6128dc6-0488-4742-8921-e4eb380e0e9d.png',
      category: 'bench'
    },
    {
      id: 7,
      image: '/lovable-uploads/860d6abe-7f36-40a8-b2d7-bd9d1c212692.png',
      category: 'game-tables'
    },
    {
      id: 8,
      image: '/lovable-uploads/dd7d88b7-d0e8-43c0-b81c-99bafa89bafc.png',
      category: 'free-weights'
    },
    {
      id: 9,
      image: '/lovable-uploads/b2857e06-f776-42f3-ae7f-5f9b648d5573.png',
      category: 'home-accessories'
    },
    {
      id: 10,
      image: '/lovable-uploads/bb62bd6c-3aa5-407c-a8cc-f646a749c002.png',
      category: 'massage'
    },
    {
      id: 11,
      image: '/lovable-uploads/3c82fff2-c170-4587-bf6e-a78575d01863.png',
      category: 'trampoline'
    },
    {
      id: 12,
      image: '/lovable-uploads/d7fc81b8-4878-417a-93f6-ba955910acad.png',
      category: 'outdoor'
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
              <BreadcrumbPage>Тренажеры для фитнес-клуба</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#262631]">
            Тренажеры для фитнес-клуба
          </h1>
          <Link 
            to="/home-fitness-equipment" 
            className="text-[#F53B49] hover:underline flex items-center gap-1"
          >
            Тренажеры для дома →
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
        
        {/* Equipment Grid - Last 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {equipmentCategories.slice(6, 12).map((product) => (
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

export default GymEquipment;
