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
  const [selectedSize, setSelectedSize] = useState<string>('');
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
              badges={[
                ...(product.badge ? [{ text: product.badge, variant: 'destructive' as const }] : []),
                ...(product.characteristics?.['Акция'] ? [{ text: 'АКЦИЯ', variant: 'destructive' as const }] : []),
                ...(product.is_hit ? [{ text: 'ХИТ ПРОДАЖ', variant: 'secondary' as const }] : [])
              ]}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header with actions */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-3">{product.name}</h1>
                {product.rating && product.reviews_count && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex text-orange-400">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-orange-400 font-medium">
                      {product.rating}/5
                    </span>
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  В избранное
                </Button>
                <Button variant="outline" size="sm">
                  В сравнение
                </Button>
              </div>
            </div>

            {/* Product characteristics list */}
            <div className="space-y-3">
              {product.characteristics && (
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип продукции:</span>
                    <span className="font-medium">Беговые дорожки для дома</span>
                  </div>
                  {product.characteristics['Бренд (id)'] && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Бренд:</span>
                      <span className="font-medium">{product.characteristics['Бренд (id)']}</span>
                    </div>
                  )}
                  <div className="flex justify-balance">
                    <span className="text-muted-foreground">Назначение:</span>
                    <span className="font-medium">Домашние</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип двигателя:</span>
                    <span className="font-medium">Постоянного тока DC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Мощность двигателя, л.с.:</span>
                    <span className="font-medium">1.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Тип беговой дорожки:</span>
                    <span className="font-medium">Электрические</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Минимальная скорость, км/ч:</span>
                    <span className="font-medium">0.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Максимальная скорость, км/ч:</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Угол наклона:</span>
                    <span className="font-medium">Механический</span>
                  </div>
                </div>
              )}
              <Button variant="link" className="p-0 h-auto text-red-500 text-sm">
                Все характеристики →
              </Button>
            </div>

            {/* Color and Size Selection */}
            <div className="space-y-4">
              {/* Color Selection */}
              <div>
                <h4 className="font-medium mb-2">Цвет</h4>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-300 focus:border-blue-500 relative">
                    <span className="sr-only">Красный/синий</span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-green-600 border-2 border-gray-300 focus:border-green-500">
                    <span className="sr-only">Зеленый/желтый</span>
                  </button>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="font-medium mb-2">Диаметр, ft</h4>
                <div className="flex flex-wrap gap-2">
                  {['6 (-15 000₽)', '10 (-10 000₽)', '12 (-5 000₽)', '14', '16 (+10 000₽)'].map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-2 text-sm border rounded ${
                        size === '14' 
                          ? 'bg-gray-900 text-white border-gray-900' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              {product.price ? (
                <div className="flex items-baseline space-x-3">
                  {product.discount_percentage && (
                    <Badge variant="destructive" className="text-sm">
                      -{product.discount_percentage}%
                    </Badge>
                  )}
                  {product.original_price && (
                    <span className="text-lg text-muted-foreground line-through">
                      {typeof product.original_price === 'number' ? `${product.original_price.toLocaleString()} ₽` : product.original_price}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-foreground">
                    {typeof product.price === 'number' ? `${product.price.toLocaleString()} ₽` : product.price}
                  </span>
                </div>
              ) : (
                <span className="text-2xl text-muted-foreground">Цена по запросу</span>
              )}
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decrementQuantity}
                    className="h-10 px-3"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={incrementQuantity}
                    className="h-10 px-3"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {product.is_available ? (
                  <Button 
                    size="lg" 
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white h-12"
                    onClick={handleBuyClick}
                  >
                    Добавить в корзину
                  </Button>
                ) : (
                  <Button size="lg" variant="outline" className="flex-1 h-12">
                    Запросить цену
                  </Button>
                )}
              </div>

              {/* Delivery and Services Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded"></div>
                  </div>
                  <span>Доставка</span>
                  <span className="ml-auto font-medium text-foreground">300 руб. (в пределах МКАД/КАД)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded"></div>
                  </div>
                  <span>Сборка</span>
                  <span className="ml-auto">Рассчитывается индивидуально</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>Оплата для физ.лиц</span>
                      <span>Наличными, картой, безналичная, онлайн, в рассрочку</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded"></div>
                  </div>
                  <span>Оплата для юр.лиц</span>
                  <span className="ml-auto">Безналичная оплата, оплата онлайн</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Информация о товаре</h2>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Скачать инструкцию
            </Button>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specifications">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы (10)</TabsTrigger>
              <TabsTrigger value="delivery">Доставка и оплата</TabsTrigger>
              <TabsTrigger value="installment">Рассрочка</TabsTrigger>
              <TabsTrigger value="services">Услуги</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description || 'Здесь будет подробное описание товара с техническими характеристиками, особенностями использования и преимуществами.'}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Дополнительная информация о товаре, его применении и специфических особенностях.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-6">Характеристики</h3>
                
                {product.characteristics ? (
                  <div className="space-y-8">
                    {/* Основные характеристики */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Основные характеристики</h4>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                        {Object.entries(product.characteristics).map(([key, value]) => {
                          // Фильтруем служебные поля и скрытые характеристики
                          if (key.includes('скрытая характеристика') || 
                              key.includes('Картинки галереи') ||
                              key.includes('Реквизиты') ||
                              key.includes('Базовая единица') ||
                              key.includes('Ставки налогов') ||
                              key.includes('Исключить из публикации') ||
                              key.includes('Использование') ||
                              key.includes('Количество мест')) {
                            return null;
                          }
                          
                          // Переводим названия полей на понятный язык
                          const fieldNames: { [key: string]: string } = {
                            'Артикул': 'Артикул',
                            'Бренд (id)': 'Бренд',
                            'Наименование товара на сайте': 'Наименование',
                            'Тип оборудования': 'Тип оборудования',
                            'Тип назначения': 'Назначение',
                            'Страна бренда': 'Страна бренда',
                            'Страна изготовления': 'Страна производства',
                            'Вес Брутто, кг': 'Вес, кг',
                            'Гарантия на домашнее использование': 'Гарантия',
                            'Акция': 'Акция'
                          };
                          
                          const displayName = fieldNames[key] || key;
                          
                          return (
                            <div key={key} className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">{displayName}:</span>
                              <span className="text-foreground text-right">{String(value)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Габариты в рабочем состоянии */}
                    {(product.characteristics['Габариты упаковки Длина, см'] || 
                      product.characteristics['Габариты упаковки Ширина, см'] || 
                      product.characteristics['Габариты упаковки Высота, см']) && (
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Габариты в рабочем состоянии</h4>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                          {product.characteristics['Габариты упаковки Длина, см'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Размер в рабочем состоянии Длина, см:</span>
                              <span className="text-foreground">{product.characteristics['Габариты упаковки Длина, см']}</span>
                            </div>
                          )}
                          {product.characteristics['Габариты упаковки Ширина, см'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Размер в рабочем состоянии Ширина, см:</span>
                              <span className="text-foreground">{product.characteristics['Габариты упаковки Ширина, см']}</span>
                            </div>
                          )}
                          {product.characteristics['Габариты упаковки Высота, см'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Размер в рабочем состоянии Высота, см:</span>
                              <span className="text-foreground">{product.characteristics['Габариты упаковки Высота, см']}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Вес */}
                    {product.characteristics['Вес Брутто, кг'] && (
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Вес</h4>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                          <div className="flex justify-between py-2 border-b border-border">
                            <span className="font-medium text-muted-foreground">Вес Брутто, кг:</span>
                            <span className="text-foreground">{product.characteristics['Вес Брутто, кг']}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Гарантия и Сертификация */}
                    {(product.characteristics['Гарантия на домашнее использование'] || 
                      product.characteristics['Страна бренда'] || 
                      product.characteristics['Страна изготовления']) && (
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Гарантия и Сертификация</h4>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                          {product.characteristics['Гарантия на домашнее использование'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Гарантия на домашнее использование:</span>
                              <span className="text-foreground">{product.characteristics['Гарантия на домашнее использование']}</span>
                            </div>
                          )}
                          {product.characteristics['Страна бренда'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Страна бренда:</span>
                              <span className="text-foreground">{product.characteristics['Страна бренда']}</span>
                            </div>
                          )}
                          {product.characteristics['Страна изготовления'] && (
                            <div className="flex justify-between py-2 border-b border-border">
                              <span className="font-medium text-muted-foreground">Страна изготовления:</span>
                              <span className="text-foreground">{product.characteristics['Страна изготовления']}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Характеристики товара не найдены</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Отзывы покупателей</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="font-medium">Иван П.</span>
                      <span className="text-sm text-muted-foreground">15.01.2024</span>
                    </div>
                    <p className="text-muted-foreground">Отличный товар, полностью соответствует описанию. Рекомендую!</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">★★★★☆</div>
                      <span className="font-medium">Мария С.</span>
                      <span className="text-sm text-muted-foreground">12.01.2024</span>
                    </div>
                    <p className="text-muted-foreground">Хорошее качество, быстрая доставка. Есть небольшие замечания по упаковке.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="delivery" className="mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Доставка и оплата</h3>
                <div className="grid md:grid-cols-2 gap-6">
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
            </TabsContent>

            <TabsContent value="installment" className="mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Рассрочка и кредит</h3>
                <div className="space-y-4">
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
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Кредит от банков-партнеров</h4>
                    <p className="text-muted-foreground">
                      Получите кредит на выгодных условиях от наших банков-партнеров.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Дополнительные услуги</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
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
                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Техническая поддержка</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Круглосуточная техническая поддержка и консультации по использованию.
                      </p>
                      <span className="text-primary font-semibold">Бесплатно</span>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Обучение персонала</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Обучение ваших сотрудников работе с оборудованием.
                      </p>
                      <span className="text-primary font-semibold">от 5 000 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;