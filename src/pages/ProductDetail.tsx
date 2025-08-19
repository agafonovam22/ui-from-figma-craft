import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingCart, ChevronLeft, ChevronRight, Star, Minus, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Красный/синий');
  const [selectedSize, setSelectedSize] = useState('14');

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square">
              {product.image_url ? (
                <img 
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg bg-white"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
                  <span className="text-muted-foreground">Нет изображения</span>
                </div>
              )}
              
              {/* Navigation Arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className={`w-20 h-20 rounded-lg bg-muted ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                  {product.image_url ? (
                    <img 
                      src={product.image_url}
                      alt={`${product.name} ${index}`}
                      className="w-full h-full object-contain rounded-lg bg-white cursor-pointer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                      {index}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.badge && (
                <Badge className="bg-brand-red hover:bg-brand-red-hover text-white font-medium px-3 py-1">
                  {product.badge}
                </Badge>
              )}
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1">
                ХИТ ПРОДАЖ
              </Badge>
            </div>

            {/* Title and Rating */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-heading text-foreground mb-4">{product.name}</h1>
                
                {/* Status Buttons */}
                <div className="flex gap-3 mb-4">
                  {product.in_stock && (
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200"
                    >
                      В наличии ●●●
                    </Button>
                  )}
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200"
                  >
                    Есть в шоу-руме
                  </Button>
                </div>
              </div>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= product.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating}/5</span>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Тип продукции:</span>
                  <span>Беговые дорожки для дома</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Бренд:</span>
                  <span>CardioPower</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Назначение:</span>
                  <span>Домашние</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Тип двигателя:</span>
                  <span>Постоянного тока DC</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Мощность двигателя, л.с:</span>
                  <span>1.5</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Пиковая мощность, л.с:</span>
                  <span>2.5</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Тип беговой дорожки:</span>
                  <span>Электрические</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Минимальная скорость, км/ч:</span>
                  <span>0.8</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Максимальная скорость, км/ч:</span>
                  <span>10</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Угол наклона:</span>
                  <span>Механический</span>
                </div>
              </div>
            </div>

            {/* All Characteristics Link */}
            <div>
              <Button variant="link" className="p-0 text-brand-red hover:text-brand-red-hover">
                Все характеристики →
              </Button>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-medium">Цвет</h3>
              <div className="flex gap-2">
                <button 
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    selectedColor === 'Красный/синий' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-background border-border hover:border-primary'
                  }`}
                  onClick={() => setSelectedColor('Красный/синий')}
                >
                  🔴 Красный/синий
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    selectedColor === 'Зеленый/желтый' 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-background border-border hover:border-primary'
                  }`}
                  onClick={() => setSelectedColor('Зеленый/желтый')}
                >
                  🟢 Зеленый/желтый
                </button>
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-medium">Диаметр, ft</h3>
              <div className="flex gap-2 flex-wrap">
                {[
                  { size: '8', price: '(-15 000₽)' },
                  { size: '10', price: '(-10 000₽)' },
                  { size: '12', price: '(-5 000₽)' },
                  { size: '14', price: '' },
                  { size: '16', price: '(+10 000₽)' }
                ].map(({ size, price }) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border text-sm ${
                      selectedSize === size 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-background border-border hover:border-primary'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size} {price && <span className="text-xs text-muted-foreground">{price}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                {product.discount_percentage && (
                  <Badge className="bg-brand-red text-white font-bold">-{product.discount_percentage}%</Badge>
                )}
                {product.original_price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {typeof product.original_price === 'number' ? `${product.original_price.toLocaleString()}` : product.original_price} ₽
                  </span>
                )}
              </div>
              <div className="text-4xl font-bold text-foreground">
                {product.price ? (
                  <>
                    {typeof product.price === 'number' ? `${product.price.toLocaleString()}` : product.price} ₽
                  </>
                ) : (
                  'Цена по запросу'
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button 
                  className="p-2 hover:bg-muted"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  className="p-2 hover:bg-muted"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button size="lg" className="flex-1 bg-brand-red hover:bg-brand-red-hover text-white font-medium">
                Добавить в корзину
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Доставка</span>
                <span className="ml-auto">300 руб. (в пределах МКАД/КАД)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Сборка</span>
                <span className="ml-auto">Рассчитывается индивидуально</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Оплата для физ.лиц</span>
                <span className="ml-auto">Наличными, картой, безналичная, онлайн, в рассрочку</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Оплата для юр.лиц</span>
                <span className="ml-auto">Безналичная оплата, оплата онлайн</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs and Download Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex items-center justify-between mb-8">
            {/* Tabs */}
            <div className="flex gap-8 flex-wrap">
              <button className="pb-3 border-b-2 border-brand-red text-brand-red font-medium">
                Описание
              </button>
              <button className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                Характеристики
              </button>
              <button className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                Отзывы (10)
              </button>
              <button className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                Доставка и оплата
              </button>
              <button className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                Рассрочка
              </button>
              <button className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </button>
            </div>

            {/* Download Button */}
            <Button 
              variant="outline" 
              className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
            >
              Скачать инструкцию
            </Button>
          </div>

          {/* Tab Content */}
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Здесь будет содержимое выбранной вкладки. В данном случае - описание товара {product.name}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;