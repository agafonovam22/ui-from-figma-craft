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
              <button className="text-red-600 border-b-2 border-red-600 pb-2 font-medium">
                Описание
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Характеристики
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Отзывы (10)
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Доставка и оплата
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Рассрочка
              </button>
              <button className="text-gray-500 hover:text-gray-700 pb-2">
                Услуги
              </button>
            </div>
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50">
              Скачать инструкцию
            </Button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description || 'Здесь будет подробное описание товара с техническими характеристиками, особенностями использования и преимуществами.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Дополнительная информация о товаре, его применении и специфических особенностях.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;