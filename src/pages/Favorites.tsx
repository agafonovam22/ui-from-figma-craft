
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BarChart3 } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
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
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemoveFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromFavorites(id);
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
              <BreadcrumbPage>Избранное</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Избранное</h1>
        
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">В избранном пока нет товаров</p>
            <Link to="/catalog">
              <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Product Grid - 5 columns, dynamic rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              {favorites.map((product) => (
                <div key={product.id} className="relative group">
                  <Link 
                    to={`/product/${product.id}`}
                    className="block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      
                      {/* Action buttons - always visible */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2">
                        <button 
                          className="p-1 bg-white rounded shadow hover:bg-gray-50"
                          onClick={(e) => handleRemoveFavorite(e, product.id)}
                        >
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
                    
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
                        {product.name}
                      </h3>
                      <div className="text-lg font-bold text-gray-900">
                        {product.price.toLocaleString()} ₽
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
          </>
        )}
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
