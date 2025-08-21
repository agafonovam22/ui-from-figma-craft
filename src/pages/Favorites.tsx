
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import { useBitrixCatalog } from '@/hooks/useBitrixCatalog';
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
  // Используем реальные данные из Bitrix API
  const { products: bitrixProducts, loading, error } = useBitrixCatalog("https://cp44652.tw1.ru/catalog.php");
  
  // Берем первые 10 товаров из реального каталога
  const favoriteProducts = bitrixProducts.slice(0, 10).map(product => ({
    id: product.id,
    name: product.name,
    image: product.image_url,
    price: product.price
  }));

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
        
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F53B49] mx-auto mb-4"></div>
              <p className="text-gray-600">Загрузка товаров...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600 mb-2">Ошибка загрузки товаров</p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        ) : (
          <>
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
                        src={product.image || '/placeholder.svg'} 
                        alt={product.name || "Товар"}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
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
          </>
        )}
        
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
