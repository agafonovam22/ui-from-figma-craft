import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProductCard: React.FC = () => {
  const productId = '123'; // Заглушка для ID продукта

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
              <BreadcrumbLink asChild>
                <Link to="/catalog">Каталог</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Беговая дорожка Nautilus T628</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png" 
                alt="Беговая дорожка Nautilus T628"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                  <img 
                    src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png" 
                    alt={`Изображение ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">Артикул: T628</span>
                <span className="text-sm text-green-600">✓ В наличии</span>
              </div>
              <h1 className="text-3xl font-bold text-[#262631] mb-4 font-benzin-semibold">
                Беговая дорожка Nautilus T628
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-500 ml-2">(24 отзыва)</span>
                </div>
                <button className="text-[#F53B49] text-sm hover:underline">
                  Написать отзыв
                </button>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-3xl font-bold text-[#262631]">189 990 ₽</div>
                <div className="text-sm text-gray-500 line-through">219 990 ₽</div>
                <div className="text-sm text-green-600">Экономия: 30 000 ₽</div>
              </div>

              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-[#F53B49] text-white py-3 px-6 rounded hover:bg-red-600 transition-colors font-benzin">
                  Купить в 1 клик
                </button>
                <button className="flex-1 border-2 border-[#F53B49] text-[#F53B49] py-3 px-6 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin">
                  В корзину
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">🚚 Доставка:</span>
                  <span className="text-sm">Бесплатно по Москве</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">📦 Самовывоз:</span>
                  <span className="text-sm">Доступен из 12 точек</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">🔧 Установка:</span>
                  <span className="text-sm">Профессиональная установка</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description" className="font-benzin">Описание</TabsTrigger>
            <TabsTrigger value="specifications" className="font-benzin">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews" className="font-benzin">Отзывы (24)</TabsTrigger>
            <TabsTrigger value="delivery" className="font-benzin">Доставка</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Беговая дорожка Nautilus T628 - это профессиональный тренажер для домашнего использования. 
                Оснащена мощным двигателем, большой беговой поверхностью и современной консолью управления.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3 font-benzin-semibold">Основные преимущества:</h3>
              <ul className="space-y-2">
                <li>• Мощный двигатель 3.0 л.с.</li>
                <li>• Беговая поверхность 55 x 152 см</li>
                <li>• Максимальная скорость 20 км/ч</li>
                <li>• Углы наклона до 15%</li>
                <li>• Встроенные программы тренировок</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 font-benzin-semibold">Технические характеристики</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Мощность двигателя:</span>
                    <span>3.0 л.с.</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Беговая поверхность:</span>
                    <span>55 x 152 см</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Максимальная скорость:</span>
                    <span>20 км/ч</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Углы наклона:</span>
                    <span>0-15%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 font-benzin-semibold">Габариты и вес</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Размеры:</span>
                    <span>195 x 86 x 155 см</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Вес:</span>
                    <span>95 кг</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Максимальный вес пользователя:</span>
                    <span>150 кг</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold font-benzin-semibold">Отзывы покупателей</h3>
                <button className="bg-[#F53B49] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors font-benzin">
                  Написать отзыв
                </button>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Александр</span>
                        <span className="text-yellow-400">★★★★★</span>
                      </div>
                      <span className="text-sm text-gray-500">15.12.2023</span>
                    </div>
                    <p className="text-gray-700">
                      Отличная беговая дорожка! Очень довольны покупкой. Тихая, надежная, много программ тренировок.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold font-benzin-semibold">Доставка и установка</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 font-benzin-semibold">Доставка</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Бесплатная доставка по Москве</li>
                    <li>• Доставка в регионы от 2000 ₽</li>
                    <li>• Срок доставки 1-3 дня</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 font-benzin-semibold">Установка</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Профессиональная установка</li>
                    <li>• Стоимость от 3000 ₽</li>
                    <li>• Гарантия на установку</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* You Viewed Section - заменяем на NewProducts */}
      <NewProducts title="Вы смотрели" />

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default ProductCard;
