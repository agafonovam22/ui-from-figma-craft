
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

const HomeFitnessEquipment: React.FC = () => {
  const homeProducts = [
    {
      id: 1,
      image: '/lovable-uploads/e7893606-f51a-4e53-9c80-ab83d081c16c.png',
      category: 'treadmill',
      price: 'от 33 900 ₽'
    },
    {
      id: 2,
      image: '/lovable-uploads/41b47400-6434-4309-9474-38fd8527c0f9.png',
      category: 'bike',
      price: 'от 35 900 ₽'
    },
    {
      id: 3,
      image: '/lovable-uploads/7eb18ab6-a47c-4127-a2e4-520345b3a636.png',
      category: 'rowing',
      price: 'от 49 900 ₽'
    },
    {
      id: 4,
      image: '/lovable-uploads/9deaa8d7-89aa-4671-b709-82d6af4d5f19.png',
      category: 'strength',
      price: 'от 9 900 ₽'
    },
    {
      id: 5,
      image: '/lovable-uploads/dcac2877-3c35-4f7d-8abf-95aacc72562e.png',
      category: 'inversion',
      price: 'от 12 900 ₽'
    },
    {
      id: 6,
      image: '/lovable-uploads/34f32079-9172-481c-a342-ebee3d47cd47.png',
      category: 'accessories',
      price: '220 ₽'
    },
    {
      id: 7,
      image: '/lovable-uploads/c05b2484-8dc7-4ac6-bd32-3876e288da9a.png',
      category: 'street',
      price: 'от 800 ₽'
    },
    {
      id: 8,
      image: '/lovable-uploads/0c78e89b-223e-41c0-a7c1-3e594b9c0a92.png',
      category: 'elliptical',
      price: 'от 45 900 ₽'
    },
    {
      id: 9,
      image: '/lovable-uploads/bc820bdc-17a0-4d70-a621-8d5a0ebf37ad.png',
      category: 'tennis',
      price: 'от 24 900 ₽'
    },
    {
      id: 10,
      image: '/lovable-uploads/7919df46-5d23-4cdc-8384-edd08bf27547.png',
      category: 'accessories',
      price: 'от 700 ₽'
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

        {/* Equipment Grid - First 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-6">
          {homeProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo="/product-card" />
          ))}
        </div>
        
        {/* Equipment Grid - Next 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-12">
          {homeProducts.slice(5, 10).map((product) => (
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
