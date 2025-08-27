import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingCart, Download, Minus, Plus, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import ViewedProducts from '@/components/ViewedProducts';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useCart } from '@/contexts/CartContext';
import ProductHeader from '@/components/product/ProductHeader';
import { useToast } from '@/hooks/use-toast';
import ReviewDialog from '@/components/ReviewDialog';
import { useQuery } from '@tanstack/react-query';
import { optimizeImageUrl, preloadImage } from '@/utils/imageOptimization';  
import LoadingSpinner from '@/components/LoadingSpinner';
import { extractBrandFromProductName } from '@/utils/extractBrand';
import ProductCharacteristicsTable from '@/components/product/ProductCharacteristicsTable';
import SupportCitySelector from '@/components/SupportCitySelector';
import { useViewedProducts } from '@/hooks/useViewedProducts';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('core');
  const [activeTab, setActiveTab] = useState<string>('description');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedInstallmentPlan, setSelectedInstallmentPlan] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState('Москва');
  const { addItem } = useCart();
  const { toast } = useToast();
  const { addViewedProduct } = useViewedProducts();

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

  // Добавляем товар в просмотренные при загрузке
  useEffect(() => {
    if (product?.id && id) {
      console.log('🔍 Пытаемся добавить товар в просмотренные:', {
        productId: product.id,
        productName: product.name,
        categoryId: product.category_id,
        typeEquipment: product.characteristics?.["Тип оборудования"],
        allCharacteristics: product.characteristics
      });
      addViewedProduct(id);
    }
  }, [product?.id, id, addViewedProduct]);

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

  // Функция для извлечения ссылки на PDF инструкцию из характеристик
  const getInstructionPdfUrl = () => {
    if (!product?.characteristics) return null;
    
    // Ищем характеристику, содержащую PDF инструкцию
    for (const [key, value] of Object.entries(product.characteristics)) {
      if (typeof value === 'string' && value.includes('.pdf') && value.includes('Instruktsii')) {
        return value;
      }
    }
    return null;
  };

  const handleDownloadInstruction = () => {
    const pdfUrl = getInstructionPdfUrl();
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "Инструкция недоступна",
        description: "Инструкция для данного товара не найдена",
        variant: "destructive",
      });
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Описание</h3>
            <div className="font-manrope text-muted-foreground leading-relaxed">
              {product.description ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p>{product.description}</p>
                  </div>
                  <div className="space-y-4">
                    {product.characteristics && (
                      <div>
                        <p className="font-semibold text-foreground mb-2">
                          Основные преимущества:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          {product.characteristics['Тип назначения'] && (
                            <li>Тип назначения: {product.characteristics['Тип назначения']}</li>
                          )}
                          {product.characteristics['Вес пользователя, кг'] && (
                            <li>Максимальный вес пользователя: {product.characteristics['Вес пользователя, кг']} кг</li>
                          )}
                          {product.characteristics['Беговое полотно, см'] && (
                            <li>Размер бегового полотна: {product.characteristics['Беговое полотно, см']} см</li>
                          )}
                          {product.characteristics['Максимальная скорость, км/ч'] && (
                            <li>Максимальная скорость: {product.characteristics['Максимальная скорость, км/ч']} км/ч</li>
                          )}
                          {product.characteristics['Макс. угол наклона, %'] && (
                            <li>Максимальный угол наклона: {product.characteristics['Макс. угол наклона, %']}%</li>
                          )}
                          {product.characteristics['Гарантия на домашнее использование'] && (
                            <li>Гарантия: {product.characteristics['Гарантия на домашнее использование']}</li>
                          )}
                          {product.characteristics['Артикул'] && (
                            <li>Артикул: {product.characteristics['Артикул']}</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ color: '#262631', fontFamily: 'Manrope' }}>
                  <div className="space-y-4">
                    <p>
                      Беговая дорожка CardioPower TR150 разработана для тренировки пожилых людей и реабилитации пациентов с ограниченными возможностями. Модель имеет удлиненные двойные поручни с регулировкой по высоте и ширине и широкое беговое полотно 50 х 145 см. для обеспечения полной безопасности и комфорта тренировки.
                    </p>
                    <p>
                      Мотор переменного тока AC обеспечивает регулировку скорости в диапазоне от 0,2 км/ч до 14 км/ч с шагом изменения 0,1 км/ч. Информативный LED дисплей отображает все данные тренировки. Контроль пульса осуществляется с помощью контактных сенсоров и беспроводного считывания пульса с кардиопояса.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Минимальная высота 620 мм</li>
                      <li>Максимальная высота 920 мм</li>
                      <li>Длина шага 50 мм</li>
                      <li>Количество уровней 7 шт.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-[100px]">
              <ViewedProducts 
                currentProductId={id} 
                currentProductCategoryId={product?.characteristics?.["Тип оборудования"]} 
              />
            </div>
            <div className="mt-[100px]">
              <EmailSubscription />
            </div>
          </div>
        );
      case 'specifications':
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Характеристики</h3>
            <ProductCharacteristicsTable 
              characteristics={product.characteristics}
              productName={product.name}
              productId={id}
             />
             <ViewedProducts 
               currentProductId={id} 
               currentProductCategoryId={product?.characteristics?.["Тип оборудования"]} 
             />
             <EmailSubscription />
           </div>
        );
      case 'reviews':
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Отзывы</h3>
            <div className="font-manrope grid lg:grid-cols-3 gap-8">
              {/* Список отзывов */}
              <div className="lg:col-span-2 space-y-6">
                {/* Отзыв 1 */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground" style={{ fontFamily: 'Benzin-Regular' }}>Имя Фамилия</span>
                        <div className="flex text-yellow-400">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2 font-manrope">Вчера, 22:01</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
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
                        <span className="font-medium text-foreground" style={{ fontFamily: 'Benzin-Regular' }}>Имя Фамилия</span>
                        <div className="flex text-yellow-400">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2 font-manrope">Вчера, 22:01</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
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
          <ViewedProducts 
            currentProductId={id} 
            currentProductCategoryId={product?.characteristics?.["Тип оборудования"]} 
          />
            <EmailSubscription />
          </div>
        );
        return (
          <div className="space-y-12">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Доставка и оплата</h3>
            {/* Город доставки */}
            <div className="flex gap-8">
              <div className="w-80 flex-shrink-0">
                <div className="flex items-center gap-2 flex-nowrap">
                  <h3 style={{
                    fontFamily: 'Benzin-Medium',
                    fontSize: '20px',
                    whiteSpace: 'nowrap'
                  }}>Город доставки</h3>
                  <span className="text-red-500 font-medium">Москва</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg flex overflow-hidden">
                    <div className="flex-grow p-6" style={{ flexBasis: '66.67%' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-gray-900">Самовывоз</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Вы можете самостоятельно забрать заказ из нашего магазина
                      </p>
                    </div>
                    <div className="bg-gray-400 p-6 flex items-center justify-center" style={{ flexBasis: '33.33%' }}>
                      <div className="text-2xl font-bold text-white">0₽</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg flex overflow-hidden">
                    <div className="flex-grow p-6" style={{ flexBasis: '66.67%' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-gray-900">Курьерская Доставка</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Собственная служба Доставки
                      </p>
                    </div>
                    <div className="bg-gray-400 p-6 flex items-center justify-center" style={{ flexBasis: '33.33%' }}>
                      <div className="text-2xl font-bold text-white">0₽</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Разделительная линия */}
            <div className="h-px bg-gray-300"></div>
            
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
            <EmailSubscription />
          </div>
        );
        return (
          <div className="space-y-8">
            {/* Text content */}
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Рассрочка</h3>
              
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
            <EmailSubscription />
          </div>
        );
        return (
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>Услуги</h3>
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
            <EmailSubscription />
          </div>
        );
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
      {/* Gray background for right side extending from very top */}
      <div className="absolute top-0 bg-gray-50 z-0" style={{ 
        left: 'calc(50% + 25px)', 
        right: '0',
        height: 'calc(100vh + 335px)' 
      }}></div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 lg:px-12 xl:px-16 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 flex-wrap max-w-[calc(50%-25px)]">
            <Link to="/" className="hover:text-foreground">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>


        <ProductHeader
          product={product}
          quantity={quantity}
          onIncrementQuantity={incrementQuantity}
          onDecrementQuantity={decrementQuantity}
          onBuyClick={handleBuyClick}
          onShowAllCharacteristics={() => setActiveTab('specifications')}
        />

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
                Отзывы
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
            {getInstructionPdfUrl() && (
              <Button 
                variant="outline" 
                size="lg" 
                className="border-red-600 text-red-600 hover:bg-red-50"
                onClick={handleDownloadInstruction}
              >
                Скачать инструкцию
              </Button>
            )}
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
    </div>
  );
};

export default ProductDetail;