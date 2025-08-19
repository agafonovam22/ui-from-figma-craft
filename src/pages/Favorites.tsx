
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const Favorites: React.FC = () => {
  // Убираем хардкод товаров - показываем только реальные товары из API
  const favoriteProducts = [];

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
              <BreadcrumbPage>Избранное</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Избранное</h1>
        
        {/* Product Grid - 5 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="relative group">
              <Link 
                to={`/product/${product.id}`}
                className="block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt="Товар"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Action buttons - always visible */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="p-1 bg-white rounded shadow hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </button>
                    <button 
                      className="p-1 bg-white rounded shadow hover:bg-gray-50"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to comparison logic here
                        console.log('Added to comparison:', product.id);
                      }}
                    >
                      <BarChart3 className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="flex justify-start mb-12">
          <Button 
            variant="outline"
            className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin"
          >
            Показать все товары
          </Button>
        </div>
      </div>

      {/* You Viewed Section */}
      <div className="py-16 bg-gray-50">
        <NewProducts title="Вы смотрели" />
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

export default Favorites;
