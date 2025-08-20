
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard';
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
      image: '/lovable-uploads/19eb92b1-7d7f-4643-8133-70aba6f3263f.png',
      category: 'treadmill',
      price: 'от 120 000 ₽'
    },
    {
      id: 2,
      image: '/lovable-uploads/ff65a1d9-4adf-482a-b72b-3105f385bbb5.png',
      category: 'bike',
      price: 'от 80 000 ₽'
    },
    {
      id: 3,
      image: '/lovable-uploads/0ca74f6f-87b4-4684-a5ad-19cce0b365ca.png',
      category: 'rowing',
      price: 'от 95 000 ₽'
    },
    {
      id: 4,
      image: '/lovable-uploads/c5f6c013-e1e9-46e9-af28-302ee3f72d72.png',
      category: 'elliptical',
      price: 'от 150 000 ₽'
    },
    {
      id: 5,
      image: '/lovable-uploads/b6b88863-eede-4be6-94dd-0c2869115e0e.png',
      category: 'multistation',
      price: 'от 300 000 ₽'
    },
    {
      id: 6,
      image: '/lovable-uploads/549503f6-76ac-4d2f-b234-2961706a3440.png',
      category: 'bench',
      price: 'от 25 000 ₽'
    },
    {
      id: 7,
      image: '/lovable-uploads/42507f89-58d4-4a00-a3d3-41f1d568578c.png',
      category: 'game-tables',
      price: 'от 40 000 ₽'
    },
    {
      id: 8,
      image: '/lovable-uploads/23a9f372-8f8e-481f-bbca-9caa7c6f9b10.png',
      category: 'free-weights',
      price: 'от 15 000 ₽'
    },
    {
      id: 9,
      image: '/lovable-uploads/ee0f0de7-1fe5-4d1d-9d52-8b8ea6033fae.png',
      category: 'home-accessories',
      price: 'от 5 000 ₽'
    },
    {
      id: 10,
      image: '/lovable-uploads/b59a1f22-25f9-4876-931d-a5e619108941.png',
      category: 'massage',
      price: 'от 60 000 ₽'
    },
    {
      id: 11,
      image: '/lovable-uploads/a4162ee7-d859-48e4-8ab3-82de39d39615.png',
      category: 'weights-plates',
      price: 'от 8 000 ₽'
    },
    {
      id: 12,
      image: '/lovable-uploads/378ebaa3-274c-4687-85ca-aa90c0dc3143.png',
      category: 'group-programs',
      price: 'от 30 000 ₽'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-[10px] [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
          {equipmentCategories.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo="/product-card" />
          ))}
        </div>
        
        {/* Equipment Grid - Last 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-12 [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
          {equipmentCategories.slice(6, 12).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo="/product-card" />
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
