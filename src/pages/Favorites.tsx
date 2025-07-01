
import React from 'react';
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
import { Trash2, Heart, BarChart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FavoriteItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  inStock: boolean;
  color?: string;
  diameter?: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

const Favorites: React.FC = () => {
  const favoriteItems: FavoriteItem[] = [
    {
      id: 1,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPowe PRO CR300",
      image: "/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png",
      price: 4610,
      originalPrice: 5420,
      discount: 15,
      inStock: true,
      color: "Зеленый",
      diameter: "ft. 14",
      rating: 4,
      reviews: 5,
      isNew: true
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.885L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" 
            fill={star <= rating ? "#FFA500" : "#E0E0E0"}
          />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}/5</span>
    </div>
  );

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
        
        <div className="space-y-6">
          {favoriteItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6 p-4 bg-white border rounded-lg h-[157px] relative">
              {/* Product Badge */}
              {item.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded uppercase font-medium z-10">
                  НОВИНКА
                </div>
              )}
              
              <div className="relative flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <StarRating rating={item.rating} />
                
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-2 line-clamp-2">
                  {item.name}
                </h3>
                
                <div className="text-sm text-gray-600 mb-2 space-y-1">
                  <div>Цвет: {item.color}</div>
                  <div>Диаметр: {item.diameter}</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">● В наличии</span>
                  <span className="text-green-600 text-sm">●●○</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                {/* Price */}
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    {item.discount && (
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                        -{item.discount}%
                      </span>
                    )}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {item.price.toLocaleString()} ₽
                  </div>
                  {item.originalPrice && (
                    <div className="text-gray-400 line-through text-sm">
                      {item.originalPrice.toLocaleString()} ₽
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white px-6 py-2 text-sm font-medium">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  В корзину
                </Button>
              </div>
              
              {/* Action Icons */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                  <BarChart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded text-red-500">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded text-gray-400">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
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
