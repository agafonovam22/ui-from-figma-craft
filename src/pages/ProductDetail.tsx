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
      case 'delivery':
        return (
          <div className="space-y-12">
            {/* Стоимость доставки */}
            <div className="flex gap-8">
              <div className="w-80 flex-shrink-0">
                <h3 style={{
                  fontFamily: 'Benzin-Medium',
                  fontSize: '20px'
                }}>Стоимость доставки</h3>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="mb-4 pb-3 border-b" style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>Заказ от 30 001₽</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span style={{
                          color: 'var(--Dark-Grey, #262631)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '120%',
                          letterSpacing: '0.32px'
                        }}>Автомобильная доставка по г. Москве в пределах МКАД</span>
                        <span className="text-[#F53B49] font-semibold" style={{
                          fontFamily: 'Manrope',
                          fontSize: '16px'
                        }}>Бесплатно</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span style={{
                          color: 'var(--Dark-Grey, #262631)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '120%',
                          letterSpacing: '0.32px'
                        }}>Автомобильная доставка по Московской Области</span>
                        <span className="text-[#F53B49] font-semibold whitespace-nowrap" style={{
                          fontFamily: 'Manrope',
                          fontSize: '16px'
                        }}>30₽/км</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span style={{
                          color: 'var(--Dark-Grey, #262631)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '120%',
                          letterSpacing: '0.32px'
                        }}>Курьерская доставка (вес до 3 кг)</span>
                        <span className="text-[#F53B49] font-semibold" style={{
                          fontFamily: 'Manrope',
                          fontSize: '16px'
                        }}>500₽</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="bg-gray-50 p-6 rounded-lg h-fit">
                    <h4 className="mb-4 pb-3 border-b" style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>Заказ до 30 000₽</h4>
                    <div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <span style={{
                          color: 'var(--Dark-Grey, #262631)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '120%',
                          letterSpacing: '0.32px'
                        }}>Автомобильная доставка по г. Москве в пределах МКАД</span>
                        <span className="text-[#F53B49] font-semibold" style={{
                          fontFamily: 'Manrope',
                          fontSize: '16px'
                        }}>1000₽</span>
                      </div>
                      <div className="h-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Разделительная линия */}
            <div className="h-px bg-gray-300"></div>

            {/* Самовывоз со склада */}
            <div className="flex gap-8">
              <div className="w-80 flex-shrink-0">
                <h3 className="mb-6" style={{
                  fontFamily: 'Benzin-Medium',
                  fontSize: '20px'
                }}>Самовывоз со склада</h3>
              </div>
              <div className="flex-1">
                <div className="space-y-4">
                  {/* Main Warehouse */}
                  <div>
                    <h4 className="mb-2" style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '16px'
                    }}>Склад</h4>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                      <div className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        <div>Московская область, Красногорский р-н, д.</div>
                        <div>Гольево, улица Центральная ул., с44,</div>
                      </div>
                      <div className="flex items-center gap-2 ml-8">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="text-sm text-green-600 font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>В наличии</div>
                          <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>пн - пт с 09:30-18:00</div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  
                  {/* Separator */}
                  <div className="h-px bg-gray-300"></div>
                  
                  {/* Additional Warehouse */}
                  <div>
                    <h4 className="mb-2" style={{
                      fontFamily: 'Benzin-Medium',
                      fontSize: '16px'
                    }}>Дополнительный склад</h4>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                      <div className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        <div>Красногвардейский пер 23 лит Е, территория</div>
                        <div>завода "Ильич", заезд с Вязского переулка.</div>
                      </div>
                      <div className="flex items-center gap-2 ml-8">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="text-sm text-green-600 font-medium" style={{fontFamily: 'Manrope', fontSize: '16px'}}>В наличии</div>
                          <div className="text-sm text-gray-600" style={{fontFamily: 'Manrope', fontSize: '16px'}}>пн - пт с 10:00-18:00</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 ml-[60px]" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                        <div>Выдача оформленных заказов осуществляется при согласовании даты</div>
                        <div>и времени приезда</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Разделительная линия */}
            <div className="h-px bg-gray-300"></div>

            {/* Доставка по России */}
            <div className="flex gap-8 mb-8">
              <div className="w-80 flex-shrink-0">
                <h4 className="mb-4" style={{
                  fontFamily: 'Benzin-Medium',
                  fontSize: '20px'
                }}>Доставка по России</h4>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-[10px]">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Определяется сроками доставки транспортной компании. Доставка товара на склад транспортной компании осуществляется в течение 1-2 дней с момента заказа, в режиме работы: Понедельник - Пятница
                    </p>
                    <p className="text-gray-700" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Стоимость доставки определяется тарифами транспортных компаний, оплата за доставку осуществляется при получении товара
                    </p>
                  </div>

                  {/* Transport Companies */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">СДЭК</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">DPD</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">Байкал Сервис</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">ПЭК</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">Транс</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">MagicTrans</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">KIT</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">Деловые Линии</span>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                        <div className="flex items-center justify-center py-2 h-12">
                          <span className="text-sm font-medium">Энергия</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Разделительная линия */}
            <div className="h-px bg-gray-300"></div>

            {/* Оплата для физ. лиц */}
            <div className="flex gap-8">
              <div className="w-80 flex-shrink-0">
                <h4 className="mb-6" style={{
                  fontFamily: 'Benzin-Medium',
                  fontSize: '20px'
                }}>Оплата для физ. лиц</h4>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] mb-[10px]">
                  {/* Оплата наличными */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата наличными</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Возможна при оформлении всех способов доставки со всех субъектах РФ, где есть наши филиалы и терминалы наших партнеров, предоставляющих курьерские услуги.
                    </p>
                  </div>

                  {/* Оплата картой */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата картой</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Возможна при оформлении всех способов доставки, во время самовывоза, а также курьеру при получении.
                    </p>
                  </div>

                  {/* Оплата онлайн */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата онлайн</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
                  {/* Наложенный платеж */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Наложенный платеж</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      При отправке в регионы. Рассчитывается по тарифам транспортных компаний и осуществляется с помощью партнеров перевозчиков «ПЭК» и «Деловые линии»
                    </p>
                  </div>

                  {/* В рассрочку */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>В рассрочку</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      от банков партнеров ОТП, Халва, Тинькофф, Сбербанк
                    </p>
                  </div>

                  {/* Безналичная оплата */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer h-[210px] flex flex-col">
                    <h5 className="text-lg font-medium mb-3 flex-shrink-0" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Безналичная оплата</h5>
                    <p className="text-sm flex-1 overflow-hidden" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Выставление счета
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Разделительная линия */}
            <div className="h-px bg-gray-300"></div>

            {/* Оплата для юр. лиц */}
            <div className="flex gap-8">
              <div className="w-80 flex-shrink-0">
                <h4 className="mb-6" style={{
                  fontFamily: 'Benzin-Medium',
                  fontSize: '20px'
                }}>Оплата для юр. лиц</h4>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  {/* Оплата онлайн */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                    <h5 className="text-lg font-medium mb-3" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Оплата онлайн</h5>
                    <p className="text-sm" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Покупателю направляется защищенная ссылка для перехода в платежную систему. Производить оплату можно всеми видами карт, электронными деньгами, а также через терминалы без комиссии.
                    </p>
                  </div>

                  {/* Безналичная оплата */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-600 hover:text-white transition-all duration-300 cursor-pointer">
                    <h5 className="text-lg font-medium mb-3" style={{fontFamily: 'Benzin-Medium', fontSize: '16px'}}>Безналичная оплата</h5>
                    <p className="text-sm" style={{fontFamily: 'Manrope', fontSize: '16px'}}>
                      Выставление счета
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'installment':
        return (
          <div className="space-y-8">
            {/* Text content */}
            <div>
              <h3 className="text-xl font-semibold mb-6 font-manrope">В рассрочку</h3>
              
              <div className="space-y-4 mb-8 font-manrope text-muted-foreground">
                <p>
                  Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ 
                  оплаты «Кредит».
                </p>
                <p>
                  Вы будете перенаправлены на сайт банка для заполнения анкеты. После заполнения анкеты с вами 
                  свяжется представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.
                </p>
                <p>
                  Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз. 
                  Пожалуйста, будьте готовы предоставить паспорт при получении кредита. Также банки вправе 
                  потребовать иные дополнительные документы и подтверждение доходов заемщика.
                </p>
              </div>
            </div>

            {/* Installment Table */}
            <div className="overflow-hidden mb-8">
              <div className="w-full">
                <div className="border-b">
                  <div className="grid grid-cols-5 gap-4 py-4">
                    <div className="font-semibold text-foreground font-manrope">Рассрочка</div>
                    <div className="text-center font-semibold text-foreground font-manrope">Ежемесячный платеж</div>
                    <div className="text-center font-semibold text-foreground font-manrope">Переплата</div>
                    <div className="text-center font-semibold text-foreground font-manrope">Срок</div>
                    <div></div>
                  </div>
                </div>
                
                <div className="space-y-0">
                  {[
                    {
                      id: 1,
                      plan: '0-0-12',
                      bank: 'Тинькофф',
                      monthlyPayment: '5 000₽',
                      overpayment: 'нет',
                      term: '0 - 6',
                      rate: 'Ставка от 21,5%',
                      firstPayment: 'Первый взнос 0%',
                      duration: 'Срок 12 месяцев'
                    },
                    {
                      id: 2,
                      plan: '0-0-6',
                      bank: 'Тинькофф',
                      monthlyPayment: '5 000₽',
                      overpayment: 'нет',
                      term: '0 - 6',
                      rate: 'Ставка от 21,5%',
                      firstPayment: 'Первый взнос 0%',
                      duration: 'Срок 12 месяцев'
                    },
                    {
                      id: 3,
                      plan: '0-0-6',
                      bank: 'Сбербанк',
                      monthlyPayment: '5 000₽',
                      overpayment: 'нет',
                      term: '0 - 6',
                      rate: 'Ставка от 21,5%',
                      firstPayment: 'Первый взнос 0%',
                      duration: 'Срок 12 месяцев'
                    },
                    {
                      id: 4,
                      plan: '0-0-6',
                      bank: 'Сбербанк',
                      monthlyPayment: '5 000₽',
                      overpayment: 'нет',
                      term: '0 - 6',
                      rate: 'Ставка от 21,5%',
                      firstPayment: 'Первый взнос 0%',
                      duration: 'Срок 12 месяцев'
                    }
                  ].map((plan) => (
                    <div 
                      key={plan.id} 
                      className="grid grid-cols-5 gap-4 py-6 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedInstallmentPlan(plan.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 border-2 bg-white rounded-sm flex items-center justify-center"
                          style={{ borderColor: selectedInstallmentPlan === plan.id ? '#F53B49' : '#D1D5DB' }}
                        >
                          {selectedInstallmentPlan === plan.id && (
                            <div className="w-2 h-2 bg-[#F53B49]"></div>
                          )}
                        </div>
                        <div>
                          <div className="mb-1 font-medium text-foreground font-benzin">{plan.plan}</div>
                          <div className="text-muted-foreground font-manrope">{plan.bank}</div>
                        </div>
                      </div>
                      <div className="text-center font-semibold text-foreground font-manrope">{plan.monthlyPayment}</div>
                      <div className="text-center text-foreground font-manrope">{plan.overpayment}</div>
                      <div className="text-center text-foreground font-manrope">{plan.term}</div>
                      <div className="text-right">
                        <div className="flex flex-wrap gap-2 justify-end">
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-manrope">
                            {plan.rate}
                          </span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-manrope">
                            {plan.firstPayment}
                          </span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-manrope">
                            {plan.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 rounded font-benzin">
                Оставить заявку
              </button>
            </div>
          </div>
        );
      case 'services':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Дополнительные услуги</h3>
            <div className="font-manrope grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Установка и настройка</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Профессиональная установка и настройка оборудования нашими специалистами.
                </p>
                <span className="text-primary font-semibold">от 2 000 ₽</span>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Расширенная гарантия</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Увеличьте срок гарантии до 3 лет с полным сервисным обслуживанием.
                </p>
                <span className="text-primary font-semibold">от 1 500 ₽</span>
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
      
      <div className="flex">
        {/* Left side - Product Gallery */}
        <div className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Главная</Link>
              <span>/</span>
              <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>

            {/* Back button */}
            <Link to="/catalog" className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в каталог
            </Link>

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
        </div>

        {/* Right side - Product Info */}
        <div className="bg-gray-50 min-h-screen">
          <div className="pl-8 pr-8 pt-8 space-y-4">
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

            {/* Product Title */}
            <div className="mb-4">
              <h1 className="text-3xl mb-2 font-bold">
                {product.name}
              </h1>
            </div>

            {/* Action buttons and rating */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-300">
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="text-gray-600 text-xs px-3 py-1">
                  <div className="w-3 h-3 mr-1 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="2" y="4" width="2" height="8"/>
                      <rect x="6" y="2" width="2" height="10"/>
                      <rect x="10" y="6" width="2" height="6"/>
                    </svg>
                  </div>
                  В сравнение
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600 text-xs px-3 py-1">
                  <Heart className="w-3 h-3 mr-1" />
                  В избранное
                </Button>
              </div>
              {product.rating && (
                <div className="flex items-center space-x-2">
                  <div className="flex text-orange-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-orange-400 font-medium border border-orange-400 rounded-full px-2 py-1 text-xs">
                    {product.rating}/5
                  </span>
                </div>
              )}
            </div>

            {/* Product characteristics list */}
            <div className="space-y-2 pb-4 border-b border-gray-300 font-manrope">
              {product.characteristics && (
                <div className="grid gap-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип продукции:</span>
                    <span className="font-medium">
                      {product.characteristics['Наименование товара на сайте'] ? 
                        product.characteristics['Наименование товара на сайте'].includes('набор') ? 'Фитнес наборы' : 
                        product.characteristics['Наименование товара на сайте'].includes('мат') ? 'Коврики и маты' :
                        product.characteristics['Наименование товара на сайте'].includes('Коврик') ? 'Коврики и маты' :
                        product.characteristics['Наименование товара на сайте'].includes('Рукоятка') ? 'Аксессуары' :
                        product.characteristics['Наименование товара на сайте'].includes('платформа') ? 'Платформы' :
                        product.characteristics['Наименование товара на сайте'].includes('Утяжелители') ? 'Утяжелители' :
                        'Фитнес оборудование'
                        : 'Фитнес оборудование'}
                    </span>
                  </div>
                  {product.characteristics['Бренд (id)'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Бренд:</span>
                      <span className="font-medium">
                        {product.characteristics['Бренд (id)'] === '49278' ? 'CENTR' : 
                         product.characteristics['Бренд (id)'] === '38764' ? 'KERNEL' : 'CENTR'}
                      </span>
                    </div>
                  )}
                  {product.characteristics['Артикул'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Артикул:</span>
                      <span className="font-medium">{product.characteristics['Артикул']}</span>
                    </div>
                  )}
                  {product.characteristics['Тип назначения'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Назначение:</span>
                      <span className="font-medium">{product.characteristics['Тип назначения']}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип оборудования:</span>
                    <span className="font-medium">
                      {product.characteristics['Тип оборудования'] === '857' ? 'Функциональный тренинг' :
                       product.characteristics['Тип оборудования'] === '852' ? 'Коврики и маты' :
                       product.characteristics['Тип оборудования'] === '865' ? 'Аксессуары' :
                       product.characteristics['Тип оборудования'] === '862' ? 'Платформы' :
                       product.characteristics['Тип оборудования'] === '870' ? 'Утяжелители' :
                       'Функциональный тренинг'}
                    </span>
                  </div>
                  {product.characteristics['Базовая единица'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Единица измерения:</span>
                      <span className="font-medium">{product.characteristics['Базовая единица']}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Комплектация:</span>
                    <span className="font-medium">
                      {product.characteristics['Наименование товара на сайте'] || product.name}
                    </span>
                  </div>
                </div>
              )}
              <Button variant="link" className="p-0 h-auto text-red-500 text-xs font-manrope mt-2">
                Все характеристики →
              </Button>
            </div>

            {/* Product Options */}
            <div className="space-y-3 py-4 border-b border-gray-300">
              {/* Kit Variation */}
              <div>
                <h4 className="font-medium mb-2 text-sm">Комплектация</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="px-3 py-1 text-xs rounded-full border-2 bg-gray-800 text-white border-gray-800"
                  >
                    {product.characteristics?.['Артикул'] || product.name}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {product.description || product.characteristics?.['Наименование товара на сайте'] || 'Базовая комплектация для тренинга'}
                </p>
              </div>
            </div>

            {/* Price and Add to Cart Section */}
            <div className="py-4 border-b border-gray-300">
              {/* Price, Quantity and Add to Cart in one row */}
              <div className="flex items-center space-x-4">
                {/* Price Section */}
                <div className="flex-1">
                  {product.price ? (
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {typeof product.price === 'number' ? `${product.price.toLocaleString()} ₽` : product.price}
                      </div>
                    </div>
                  ) : (
                    <span className="text-2xl text-muted-foreground">Цена по запросу</span>
                  )}
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center">
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
      
      <main className="container mx-auto px-4">
        {/* Product Tabs */}
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
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'delivery' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('delivery')}
              >
                Доставка и оплата
              </button>
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'installment' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('installment')}
              >
                Рассрочка
              </button>
              <button 
                className={`pb-2 font-medium transition-colors ${
                  activeTab === 'services' 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('services')}
              >
                Услуги
              </button>
            </div>
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
              Скачать инструкцию
            </Button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>
      </main>
      <Footer />

      {/* Review Dialog */}
      <ReviewDialog 
        open={showReviewModal} 
        onOpenChange={setShowReviewModal} 
      />
    </div>
  );
};

export default ProductDetail;