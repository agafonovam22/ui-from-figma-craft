
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import NewProducts from '@/components/NewProducts';
import { Product, useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import { useComparison } from '@/contexts/ComparisonContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from '@/components/shared/ProductCard';

const Comparison: React.FC = () => {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);
  const { comparison, removeFromComparison } = useComparison();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();

  const handleBuyClick = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url,
      is_available: true
    });
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromComparison(itemId);
  };

  const handleToggleFavorite = (item: any) => {
    toggleFavorite({
      id: item.id,
      name: item.name,
      price: item.price,
      image_url: item.image_url
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"}>
        ★
      </span>
    ));
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
              <BreadcrumbPage>Сравнение</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Сравнение</h1>

        {/* Filter Option */}
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="show-differences" 
              checked={showOnlyDifferences}
              onCheckedChange={(checked) => setShowOnlyDifferences(checked === true)}
            />
            <label 
              htmlFor="show-differences" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Показывать только различия
            </label>
          </div>
        </div>

        {/* Products Row */}
        {comparison.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl text-gray-500 mb-4">В сравнении пока нет товаров</h2>
            <Link to="/catalog">
              <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="relative mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 md:gap-4 lg:gap-2.5">
                {comparison.map((item, index) => (
                  <div key={item.id} className="relative">
                    {/* Кнопка удаления из сравнения */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute top-2 right-2 z-20 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                    
                    <ProductCard
                      product={{
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        gallery_images: [item.image_url],
                        badge: "Новинка",
                        badge_color: "green",
                        original_price: item.originalPrice,
                        discount_percentage: item.discount,
                        rating: 4.5,
                        reviews_count: 4,
                        in_stock: true,
                        quantity: 5
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Comparison Tables */}
        {comparison.length > 0 && (
          <div className="space-y-8">
            {/* Оценка и способ получения */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Оценка и способ получения</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]"></TableHead>
                    {comparison.map((item) => (
                      <TableHead key={item.id} className="text-center">
                        <div className="text-blue-600 text-sm">4/5</div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Оценка покупателей</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center">
                        <div className="text-blue-600 text-sm">4/5</div>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Способ получения</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        Доставка, самовывоз
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Оплата</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        Онлайн, рассрочка, карта
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Основные характеристики */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Основные характеристики</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-[200px]">Рама</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        оцинкованная сталь
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Лестница</TableCell>
                    {comparison.map((item, index) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        {index === 2 ? "-" : "есть"}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Серия</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        Space
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Цвет</TableCell>
                    {comparison.map((item, index) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        {index === 3 ? "-" : "красный/синий"}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ширина защитного мата, см</TableCell>
                    {comparison.map((item, index) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        {index === 2 ? "-" : "25"}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Материал защитного мата</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        вспененный РР
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Диаметр батута, ft</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        8
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Диаметр батута, см</TableCell>
                    {comparison.map((item, index) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        {index === 3 ? "-" : "244"}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Доп. характеристики */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Доп. характеристики</h2>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium w-[200px]">Рама</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        оцинкованная сталь
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Лестница</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        есть
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Серия</TableCell>
                    {comparison.map((item) => (
                      <TableCell key={item.id} className="text-center text-sm">
                        Space
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        )}
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
