
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard.legacy';
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
  const homeProducts = [
    {
      id: 1,
      image: '/lovable-uploads/0072d70d-6cbf-4217-a272-a481d5686b22.png',
      category: 'treadmill',
      price: 'от 33 900 ₽'
    },
    {
      id: 2,
      image: '/lovable-uploads/9c92be7e-2838-4535-843d-4548fe4ab6f1.png',
      category: 'bike',
      price: 'от 35 900 ₽'
    },
    {
      id: 3,
      image: '/lovable-uploads/63592369-954a-4ca3-a294-692bd11c9e8e.png',
      category: 'rowing',
      price: 'от 49 900 ₽'
    },
    {
      id: 4,
      image: '/lovable-uploads/710c9c14-29dc-4f40-bc16-cf91d627d41a.png',
      category: 'elliptical',
      price: 'от 45 900 ₽'
    },
    {
      id: 5,
      image: '/lovable-uploads/96cf0ecb-f9d3-4eed-8e33-7e4a3f0a4ca6.png',
      category: 'tennis',
      price: 'от 24 900 ₽'
    },
    {
      id: 6,
      image: '/lovable-uploads/85fad5e3-5564-4ec5-97b4-103c8ebf8193.png',
      category: 'accessories',
      price: 'от 700 ₽'
    },
    {
      id: 7,
      image: '/lovable-uploads/0e63d50f-4bb3-4ec1-81e3-3e5bdd720c43.png',
      category: 'strength',
      price: 'от 9 900 ₽'
    },
    {
      id: 8,
      image: '/lovable-uploads/7bec0127-1015-4379-9b43-fbed5bfb8544.png',
      category: 'inversion',
      price: 'от 12 900 ₽'
    },
    {
      id: 9,
      image: '/lovable-uploads/f42d0a8e-c1b3-4aeb-b4b9-2e502db62acc.png',
      category: 'ski',
      price: 'от 9 900 ₽'
    },
    {
      id: 10,
      image: '/lovable-uploads/de5cfc45-c192-4221-a8b8-7b3a5bc64e03.png',
      category: 'street',
      price: 'от 800 ₽'
    },
    {
      id: 11,
      image: '/lovable-uploads/f3fa6cdb-01b8-4747-a864-52d123b7fe16.png',
      category: 'trampoline',
      price: 'от 14 900 ₽'
    },
    {
      id: 12,
      image: '/lovable-uploads/450ed01b-97fa-4980-98c1-383cf57c8483.png',
      category: 'massage',
      price: 'от 3 900 ₽'
    },
    {
      id: 13,
      image: '/lovable-uploads/ba78addd-dea0-4e0d-abdb-2822664de431.png',
      category: 'accessories',
      price: 'от 220 ₽'
    },
    {
      id: 14,
      image: '/lovable-uploads/6b75aeda-b3c7-475a-936c-b3c96cb8dc10.png',
      category: 'weights',
      price: 'от 550 ₽'
    },
    {
      id: 15,
      image: '/lovable-uploads/bb958841-4873-45d1-9cdb-02bd83e51eae.png',
      category: 'tennis',
      price: 'от 5 400 ₽'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-[30px] md:px-[20px] lg:px-[60px] py-6">
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

        {/* Equipment Grid - First 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-[10px] [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
          {homeProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo="/product-card" />
          ))}
        </div>
        
        {/* Equipment Grid - Next 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-[10px] [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
          {homeProducts.slice(5, 10).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo="/product-card" />
          ))}
        </div>

        {/* Equipment Grid - Third row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-12 [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
          {homeProducts.slice(10, 15).map((product) => (
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

export default HomeFitnessEquipment;
