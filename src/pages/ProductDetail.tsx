import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingCart, Download, Minus, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useCart } from '@/contexts/CartContext';
import ProductGallery from '@/components/ProductGallery';
import { useToast } from '@/hooks/use-toast';
import ReviewDialog from '@/components/ReviewDialog';
import { useQuery } from '@tanstack/react-query';
import { optimizeImageUrl, preloadImage } from '@/utils/imageOptimization';  
import LoadingSpinner from '@/components/LoadingSpinner';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('core');
  const [activeTab, setActiveTab] = useState<string>('description');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedInstallmentPlan, setSelectedInstallmentPlan] = useState<number | null>(null);
  const { addItem } = useCart();
  const { toast } = useToast();

  // Используем React Query для кэширования данных товаров
  const { data: allProductsData, isLoading, error } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      console.log('🔄 Загружаем товары для страницы товара...');
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 30 * 60 * 1000, // 30 минут
  });

  // Находим товар в кэшированных данных
  const product = allProductsData?.products?.find((p: any) => p.id.toString() === id);

  // Предзагружаем изображения товара
  useEffect(() => {
    if (product?.gallery_images?.length > 0) {
      const mainImage = product.gallery_images[0];
      preloadImage(optimizeImageUrl(mainImage, 700, 700)).catch(console.warn);
    }
  }, [product]);

  const handleBuyClick = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: (product.gallery_images && product.gallery_images.length > 0) ? 
          optimizeImageUrl(product.gallery_images[0], 200, 200) : '/placeholder.svg',
        is_available: product.is_available
      });
      
      toast({
        title: "Товар добавлен в корзину",
        description: `${product.name} (${quantity} шт.)`,
      });
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Описание</h3>
            <div className="font-manrope text-muted-foreground leading-relaxed space-y-4">
              <p>
                {product.description || `${product.name} - это высококачественный фитнес-набор от бренда CENTR, специально разработанный для домашних тренировок и функционального тренинга.`}
              </p>
              {product.characteristics && (
                <div>
                  <p>
                    Основные преимущества:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Профессиональное оборудование для функционального тренинга</li>
                    <li>Подходит для домашнего использования</li>
                    <li>Компактный и эргономичный дизайн</li>
                    <li>Высокое качество материалов и сборки</li>
                    {product.characteristics['Гарантия на домашнее использование'] && (
                      <li>Гарантия: {product.characteristics['Гарантия на домашнее использование']}</li>
                    )}
                  </ul>
                </div>
              )}
              <p>
                Данный фитнес-набор идеально подходит для создания домашнего спортзала и проведения эффективных тренировок. 
                Благодаря продуманной конструкции и качественным материалам, он обеспечивает безопасность и комфорт во время занятий.
              </p>
            </div>
          </div>
        );
      case 'specifications':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6 font-manrope">Характеристики</h3>
            <div className="font-manrope space-y-8">
              {product.characteristics ? (
                <>
                  {/* Основные характеристики */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Основные характеристики</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'Тип оборудования', label: 'Тип продукции' },
                        { key: 'Бренд (id)', label: 'Бренд' },
                        { key: 'Артикул', label: 'Артикул' },
                        { key: 'Тип назначения', label: 'Тип назначения' },
                        { key: 'Наименование товара на сайте', label: 'Наименование товара на сайте' },
                        { key: 'Базовая единица', label: 'Единица измерения' },
                        { key: 'Акция', label: 'Акция' }
                      ].map(({ key, label }) => {
                        const value = product.characteristics[key];
                        if (!value) return null;
                        return (
                          <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                            <span className="text-gray-600 text-sm">{label}</span>
                            <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Габариты в рабочем состоянии */}
                  {(product.characteristics['Размер в рабочем состоянии Длина, см'] || 
                    product.characteristics['Размер в рабочем состоянии Ширина, см'] || 
                    product.characteristics['Размер в рабочем состоянии Высота, см'] ||
                    product.characteristics['Длина, см'] ||
                    product.characteristics['Размер, см']) && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Габариты в рабочем состоянии</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'Размер в рабочем состоянии Длина, см', label: 'Размер в рабочем состоянии Длина, см' },
                          { key: 'Размер в рабочем состоянии Ширина, см', label: 'Размер в рабочем состоянии Ширина, см' },
                          { key: 'Размер в рабочем состоянии Высота, см', label: 'Размер в рабочем состоянии Высота, см' },
                          { key: 'Длина, см', label: 'Длина, см' },
                          { key: 'Размер, см', label: 'Размер, см' }
                        ].map(({ key, label }) => {
                          const value = product.characteristics[key];
                          if (!value) return null;
                          return (
                            <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                              <span className="text-gray-600 text-sm">{label}</span>
                              <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Дополнительные характеристики */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Дополнительные характеристики</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'Страна бренда', label: 'Страна бренда' },
                        { key: 'Страна изготовления', label: 'Страна изготовления' },
                        { key: 'Торговое предложение', label: 'Серия' }
                      ].map(({ key, label }) => {
                        const value = product.characteristics[key];
                        if (!value) return null;
                        return (
                          <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                            <span className="text-gray-600 text-sm">{label}</span>
                            <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Упаковка */}
                  {(product.characteristics['Габариты упаковки Длина, см'] || 
                    product.characteristics['Габариты упаковки Ширина, см'] || 
                    product.characteristics['Габариты упаковки Высота, см']) && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Упаковка</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'Габариты упаковки Длина, см', label: 'Габариты упаковки Длина, см' },
                          { key: 'Габариты упаковки Ширина, см', label: 'Габариты упаковки Ширина, см' },
                          { key: 'Габариты упаковки Высота, см', label: 'Габариты упаковки Высота, см' }
                        ].map(({ key, label }) => {
                          const value = product.characteristics[key];
                          if (!value) return null;
                          return (
                            <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                              <span className="text-gray-600 text-sm">{label}</span>
                              <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Вес */}
                  {(product.characteristics['Вес Брутто, кг'] || product.characteristics['Вес, кг']) && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Вес</h4>
                      <div className="space-y-3">
                        {[
                          { key: 'Вес Брутто, кг', label: 'Вес Брутто, кг' },
                          { key: 'Вес, кг', label: 'Вес Нетто, кг' }
                        ].map(({ key, label }) => {
                          const value = product.characteristics[key];
                          if (!value) return null;
                          return (
                            <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                              <span className="text-gray-600 text-sm">{label}</span>
                              <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Гарантия и Сертификация */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Гарантия и Сертификация</h4>
                    <div className="space-y-3">
                      {[
                        { key: 'Гарантия на домашнее использование', label: 'Гарантия на домашнее использование' },
                        { key: 'Артикул', label: 'Артикул' }
                      ].map(({ key, label }) => {
                        const value = product.characteristics[key];
                        if (!value || key === 'Артикул') return null; // Артикул уже показан выше
                        return (
                          <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-200">
                            <span className="text-gray-600 text-sm">{label}</span>
                            <span className="text-foreground text-sm font-medium text-right">{String(value)}</span>
                          </div>
                        );
                      })}
                      {/* Показываем артикул в конце */}
                      {product.characteristics['Артикул'] && (
                        <div className="grid grid-cols-2 py-2 border-b border-gray-200">
                          <span className="text-gray-600 text-sm">Артикул</span>
                          <span className="text-foreground text-sm font-medium text-right">{String(product.characteristics['Артикул'])}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground">Характеристики товара не найдены</p>
              )}
            </div>
          </div>
        );
      case 'reviews':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6 font-manrope">Отзывы (10)</h3>
            <div className="font-manrope grid lg:grid-cols-3 gap-8">
              {/* Список отзывов */}
              <div className="lg:col-span-2 space-y-6">
                {/* Отзыв 1 */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">Имя Фамилия</span>
                        <div className="flex text-yellow-400">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Вчера, 22:01</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                  
                  {/* Изображения в отзыве */}
                  <div className="flex space-x-3 ml-15">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/f35fe135-ca23-48f8-8490-aa26a337a8f5.png" 
                        alt="Отзыв фото 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/f9620881-afa2-4fc3-81cb-d1956b8a6691.png" 
                        alt="Отзыв фото 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Отзыв 2 */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">Имя Фамилия</span>
                        <div className="flex text-yellow-400">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">Вчера, 22:01</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блок рейтинга и критериев */}
              <div className="space-y-4">
                {/* Критерии оценки - первый контейнер */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="space-y-3">
                    {[
                      { name: 'Качество', rating: 6 },
                      { name: 'Цена', rating: 10 },
                      { name: 'Функциональность', rating: 4 },
                      { name: 'Скорость', rating: 8 },
                      { name: 'Легкость в сборке', rating: 8 }
                    ].map((criterion) => (
                      <div key={criterion.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-benzin">{criterion.name}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: 10 }).map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-3 ${
                                index < criterion.rating ? 'bg-red-500' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Общий рейтинг - серый контейнер */}
                <div className="bg-gray-100 rounded-lg p-4 font-benzin">
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Общий рейтинг</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="text-5xl font-bold text-gray-800">4.5</div>
                    <div className="flex text-yellow-400 text-2xl">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">10 оценок</p>
                </div>

                {/* Кнопка написать отзыв */}
                <button 
                  onClick={() => setShowReviewModal(true)}
                  className="w-full py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Написать отзыв
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Сбрасываем состояния при смене товара
  useEffect(() => {
    setQuantity(1);
    setSelectedColor('');
    setSelectedSize('core');
    setActiveTab('description');
    setSelectedInstallmentPlan(null);
  }, [id]);

  // Логируем информацию о товаре
  useEffect(() => {
    if (product) {
      console.log('🔍 Найден товар из кэша:', {
        id: product.id,
        name: product.name,
        image_url: product.image_url,
        gallery_images: product.gallery_images,
        fullProduct: product
      });
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <LoadingSpinner size="lg" />
            <h1 className="text-2xl font-bold mb-2 mt-4">Загружаем товар...</h1>
            <p className="text-muted-foreground">ID товара: {id}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
            <p>Ищем товар с ID: {id}</p>
            <p className="text-muted-foreground mb-6">
              {error?.message || 'Товар не найден в базе данных'}
            </p>
            <Link to="/catalog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 lg:px-12 xl:px-16 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery
              mainImage={(product.gallery_images && product.gallery_images.length > 0) ? 
                optimizeImageUrl(product.gallery_images[0], 700, 700) : '/placeholder.svg'}
              galleryImages={product.gallery_images?.map((img: string) => 
                optimizeImageUrl(img, 700, 700)) || []}
              productName={product.name}
              badges={[
                ...(product.badge ? [{ text: product.badge, variant: 'destructive' as const }] : []),
                ...(product.characteristics?.['Акция'] ? [{ text: 'АКЦИЯ', variant: 'destructive' as const }] : []),
                ...(product.is_hit ? [{ text: 'ХИТ ПРОДАЖ', variant: 'secondary' as const }] : [])
              ]}
            />
          </div>

          {/* Product Info with Gray Background - ends after payment options */}
          <div className="bg-gray-50 -my-8 -mr-6 lg:-mr-12 xl:-mr-16 pr-6 lg:pr-12 xl:pr-16 py-8">
            <div className="p-4 space-y-4">
              {/* Header with badges */}
              <div className="flex justify-end mb-4">
                <div className="flex space-x-2">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    В наличии
                  </div>
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Есть в шоуруме
                  </div>
                </div>
              </div>

              {/* Product Title and Rating */}
              <div className="space-y-3">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                    style={{ fontFamily: 'Benzin-Bold' }}>
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">(8 отзывов)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer" />
                    <Share2 className="w-5 h-5 text-muted-foreground hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-foreground">{product.price} ₽</span>
                  {product.old_price && (
                    <span className="text-lg text-muted-foreground line-through">{product.old_price} ₽</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Товар есть в наличии</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={decrementQuantity}
                    className="h-10 w-10 rounded-full p-0 border-2"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={incrementQuantity}
                    className="h-10 w-10 rounded-full p-0 border-2"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
                
                {/* Add to Cart Button */}
                <div className="flex-1">
                  {product.is_available ? (
                    <Button 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-sm font-medium rounded-lg"
                      onClick={handleBuyClick}
                    >
                      Добавить в корзину
                    </Button>
                  ) : (
                    <Button size="lg" variant="outline" className="w-full h-12">
                      Запросить цену
                    </Button>
                  )}
                </div>
              </div>

              {/* Delivery and Services Info */}
              <div className="space-y-2 text-xs text-muted-foreground font-manrope">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/f35fe135-ca23-48f8-8490-aa26a337a8f5.png" 
                      alt="Доставка" 
                      className="w-4 h-4 object-contain"
                    />
                    <span>Доставка</span>
                  </div>
                  <span className="font-medium text-foreground">300 руб. (в пределах МКАД/КАД)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/a6b610bf-00ff-40b0-a771-be9d69ec0a79.png" 
                      alt="Сборка" 
                      className="w-4 h-4 object-contain"
                    />
                    <span>Сборка</span>
                  </div>
                  <span>Рассчитывается индивидуально</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/f9620881-afa2-4fc3-81cb-d1956b8a6691.png" 
                      alt="Оплата для физ.лиц" 
                      className="w-4 h-4 object-contain"
                    />
                    <span>Оплата для физ.лиц</span>
                  </div>
                  <span>Наличными, картой, безналичная, онлайн, в рассрочку</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/lovable-uploads/9cf11e84-5092-4583-9ee9-6f319e803b5a.png" 
                      alt="Оплата для юр.лиц" 
                      className="w-4 h-4 object-contain"
                    />
                    <span>Оплата для юр.лиц</span>
                  </div>
                  <span>Безналичная оплата, оплата онлайн</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs - outside gray container */}
        <div className="mt-12">
          {/* Tabs Header with Download Button */}
          <div className="flex justify-between items-center border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'description' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Описание
              </button>
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'specifications' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Характеристики
              </button>
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'reviews' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Отзывы (10)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {renderTabContent()}
          </div>
        </div>
      </main>

      <Footer />
      <EmailSubscription />

      {/* Review Dialog */}
      <ReviewDialog 
        open={showReviewModal} 
        onOpenChange={setShowReviewModal} 
      />
    </div>
  );
};

export default ProductDetail;
