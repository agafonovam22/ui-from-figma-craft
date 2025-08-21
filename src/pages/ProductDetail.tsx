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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('core');
  const [activeTab, setActiveTab] = useState<string>('description');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleBuyClick = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
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
                        <span className="text-sm text-gray-600">{criterion.name}</span>
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
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-right mb-2">
                      <span className="text-sm text-gray-500">Общий рейтинг</span>
                    </div>
                    <div className="text-5xl font-bold mb-2">4.5</div>
                    <div className="flex justify-center text-yellow-400 text-xl mb-2">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    </div>
                    <p className="text-gray-500 text-sm">10 оценок</p>
                  </div>
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
          <div>
            <h3 className="text-xl font-semibold mb-4">Доставка и оплата</h3>
            <div className="font-manrope grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Способы доставки:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Курьерская доставка по Москве - 500 ₽</li>
                  <li>• Доставка по России (СДЭК) - от 300 ₽</li>
                  <li>• Самовывоз из магазина - бесплатно</li>
                  <li>• Почта России - от 200 ₽</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Способы оплаты:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Банковской картой онлайн</li>
                  <li>• Наличными при получении</li>
                  <li>• Банковский перевод</li>
                  <li>• Электронные кошельки</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'installment':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Рассрочка и кредит</h3>
            <div className="font-manrope space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Рассрочка 0% до 12 месяцев</h4>
                <p className="text-muted-foreground mb-3">
                  Оформите покупку в рассрочку без переплат и процентов на срок до 12 месяцев.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Без первоначального взноса</li>
                  <li>• Одобрение за 5 минут</li>
                  <li>• Минимум документов</li>
                </ul>
              </div>
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

  // Логируем сразу при рендере
  console.log('ProductDetail рендерится');
  console.log('useParams результат:', useParams());
  console.log('ID из useParams:', id);
  console.log('window.location.pathname:', window.location.pathname);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log('Загружаем товар с ID:', id);
        
        const response = await fetch('https://cp44652.tw1.ru/catalog.php');
        console.log('Ответ сервера:', response.status);
        
        const data = await response.json();
        console.log('Получены данные:', data);
        
        if (data.status === 'ok' && data.products) {
          console.log('Ищем товар с ID:', id, 'в массиве из', data.products.length, 'товаров');
          const foundProduct = data.products.find((p: any) => p.id.toString() === id);
          console.log('Найден товар:', foundProduct);
          setProduct(foundProduct);
          
          if (!foundProduct) {
            setError(`Товар с ID ${id} не найден среди ${data.products.length} товаров`);
          }
        } else {
          setError('Неверный формат ответа от сервера');
        }
      } catch (err) {
        console.error('Ошибка загрузки товара:', err);
        setError(`Ошибка загрузки: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    console.log('useEffect сработал, ID:', id);
    if (id) {
      fetchProduct();
    } else {
      setError('ID товара не указан');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Загружаем товар...</h1>
            <p>ID товара: {id}</p>
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
            <p>Ошибка: {error || 'Товар не найден в базе данных'}</p>
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
      <main className="container mx-auto px-4 py-8">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery
              mainImage={product.image_url || '/placeholder.svg'}
              images={product.gallery_images || []}
              productName={product.name}
              characteristics={product.characteristics}
              badges={[
                ...(product.badge ? [{ text: product.badge, variant: 'destructive' as const }] : []),
                ...(product.characteristics?.['Акция'] ? [{ text: 'АКЦИЯ', variant: 'destructive' as const }] : []),
                ...(product.is_hit ? [{ text: 'ХИТ ПРОДАЖ', variant: 'secondary' as const }] : [])
              ]}
            />
          </div>

          {/* Product Info */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
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
              <h1 className="text-3xl mb-2">
                <span className="font-normal">Фитнес набор </span>
                <span className="font-bold">Centr Core Kit (CAK1)</span>
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
                    <span className="font-medium">Фитнес наборы</span>
                  </div>
                  {product.characteristics['Бренд (id)'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Бренд:</span>
                      <span className="font-medium">CENTR</span>
                    </div>
                  )}
                  {product.characteristics['Артикул'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Артикул:</span>
                      <span className="font-medium">{product.characteristics['Артикул']}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Назначение:</span>
                    <span className="font-medium">Домашние тренировки</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип оборудования:</span>
                    <span className="font-medium">Функциональный тренинг</span>
                  </div>
                  {product.characteristics['Базовая единица'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Единица измерения:</span>
                      <span className="font-medium">{product.characteristics['Базовая единица']}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Комплектация:</span>
                    <span className="font-medium">Полный набор для тренировок</span>
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
                    className={`px-3 py-1 text-xs rounded-full border-2 transition-all ${
                      selectedSize === 'core' 
                        ? 'bg-gray-800 text-white border-gray-800' 
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize('core')}
                  >
                    Core Kit
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Базовая комплектация для функционального тренинга
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

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Написать отзыв</h3>
              <button 
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Общая оценка *</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-yellow-400"
                    >
                      ☆
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Критерии оценки</label>
                <div className="space-y-2">
                  {['Качество', 'Цена', 'Функциональность', 'Скорость', 'Легкость в сборке'].map((criterion) => (
                    <div key={criterion} className="flex items-center justify-between">
                      <span className="text-sm">{criterion}</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="text-lg text-gray-300 hover:text-yellow-400"
                          >
                            ☆
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Отзыв *</label>
                <textarea 
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="Поделитесь своими впечатлениями о товаре..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Фото (необязательно)</label>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                >
                  Отправить отзыв
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;