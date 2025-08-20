import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingCart, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.image_url || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              {product.badge && (
                <Badge className={`absolute top-4 left-4 ${product.badge_color || 'bg-primary'} text-white`}>
                  {product.badge}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              {product.rating && product.reviews_count && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews_count} отзывов)
                  </span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="space-y-2">
              {product.price ? (
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-foreground">
                    {typeof product.price === 'number' ? `${product.price.toLocaleString()} ₽` : product.price}
                  </span>
                  {product.original_price && (
                    <span className="text-lg text-muted-foreground line-through">
                      {typeof product.original_price === 'number' ? `${product.original_price.toLocaleString()} ₽` : product.original_price}
                    </span>
                  )}
                  {product.discount_percentage && (
                    <Badge variant="destructive">
                      -{product.discount_percentage}%
                    </Badge>
                  )}
                </div>
              ) : (
                <span className="text-2xl text-muted-foreground">Цена по запросу</span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${product.in_stock ? 'text-green-600' : 'text-red-600'}`}>
                <div className={`w-3 h-3 rounded-full ${product.in_stock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="font-medium">
                  {product.in_stock ? 'В наличии' : 'Нет в наличии'}
                </span>
              </div>
              {product.is_available && (
                <span className="text-sm text-blue-600">Есть в интернете</span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Описание</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                {product.is_available ? (
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Купить
                  </Button>
                ) : (
                  <Button size="lg" variant="outline" className="flex-1">
                    Запросить цену
                  </Button>
                )}
                <Button size="lg" variant="outline">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            {product.has_comparison && (
              <div className="p-4 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Этот товар можно добавить к сравнению с другими товарами
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Выбрать для сравнения
                </Button>
              </div>
            )}
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
                <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Производитель:</span>
                      <span className="text-muted-foreground">Уточняется</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Модель:</span>
                      <span className="text-muted-foreground">{product.name}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Гарантия:</span>
                      <span className="text-muted-foreground">12 месяцев</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Страна производства:</span>
                      <span className="text-muted-foreground">Уточняется</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Вес:</span>
                      <span className="text-muted-foreground">Уточняется</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Размеры:</span>
                      <span className="text-muted-foreground">Уточняется</span>
                    </div>
                  </div>
                </div>
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