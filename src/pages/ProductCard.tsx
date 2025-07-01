import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewProducts from '../components/NewProducts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Share2, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  numReviews: number;
  availability: boolean;
}

const ProductCard: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  // Mock product data
  useState(() => {
    // Simulate fetching product data
    setTimeout(() => {
      setProduct({
        id: parseInt(productId || '1', 10),
        name: 'Беговая дорожка FitRun 7000',
        description: 'Профессиональная беговая дорожка для фитнес-клубов. Мощный двигатель, большой выбор программ, надежная конструкция.',
        price: 120000,
        images: [
          '/lovable-uploads/begovaya-dorozhka-fitrun-7000.png',
          '/lovable-uploads/begovaya-dorozhka-fitrun-7000-2.png',
          '/lovable-uploads/begovaya-dorozhka-fitrun-7000-3.png'
        ],
        rating: 4.5,
        numReviews: 50,
        availability: true,
      });
    }, 500);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <Header />

      <section className="py-12">
        <div className="container max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <img src={product.images[0]} alt={product.name} className="w-full rounded-lg" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <img key={index} src={image} alt={`${product.name} - ${index + 2}`} className="w-full rounded-lg cursor-pointer hover:opacity-75 transition-opacity" />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({product.numReviews} отзывов)</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Артикул:</span>
                  <span className="text-gray-700">FR7000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Производитель:</span>
                  <span className="text-gray-700">FitRun</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Наличие:</span>
                  {product.availability ? (
                    <Badge variant="outline">В наличии</Badge>
                  ) : (
                    <Badge variant="destructive">Нет в наличии</Badge>
                  )}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">{product.price} ₽</span>
                <div className="space-x-2">
                  <Button><Heart className="mr-2 h-4 w-4" />В избранное</Button>
                  <Button variant="secondary"><Share2 className="mr-2 h-4 w-4" />Поделиться</Button>
                </div>
              </div>

              <Button className="w-full mb-4" size="lg"><ShoppingCart className="mr-2 h-5 w-5" />Купить</Button>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 gap-4 text-sm">
                <Card>
                  <CardContent className="flex items-center space-x-4">
                    <Truck className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">Быстрая доставка</p>
                      <p className="text-gray-500">по Москве и области</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4">
                    <Shield className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">Гарантия качества</p>
                      <p className="text-gray-500">от производителя</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4">
                    <RotateCcw className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">Легкий возврат</p>
                      <p className="text-gray-500">в течение 14 дней</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4">
                    <Star className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">Высокий рейтинг</p>
                      <p className="text-gray-500">на основе отзывов</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                  <p>{product.description}</p>
                </div>
              </TabsContent>
              <TabsContent value="characteristics">
                <ul className="list-disc pl-5">
                  <li>Мощность двигателя: 3.0 л.с.</li>
                  <li>Максимальная скорость: 20 км/ч</li>
                  <li>Угол наклона: до 15%</li>
                  <li>Размеры бегового полотна: 55 x 150 см</li>
                  <li>Максимальный вес пользователя: 180 кг</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews">
                <div>
                  <p>Отзывов пока нет.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Replace the "Вы смотрели" section with NewProducts component */}
      <NewProducts title="Вы смотрели" />

      <Footer />
    </div>
  );
};

export default ProductCard;
