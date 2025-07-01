
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Comparison: React.FC = () => {
  // Mock data for comparison items
  const comparisonItems = [
    {
      id: 1,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15
    }
  ];

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
              <BreadcrumbPage>Сравнение</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Сравнение</h1>

        {/* Comparison Items */}
        <div className="space-y-4 mb-8">
          {comparisonItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  {item.discount && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                      -{item.discount}%
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    {item.price.toLocaleString()} ₽
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">
                      {item.originalPrice.toLocaleString()} ₽
                    </span>
                  )}
                </div>
              </div>
              <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Continue Shopping Button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 text-lg font-medium"
          >
            <Link to="/catalog">Продолжить покупки</Link>
          </Button>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Comparison;
