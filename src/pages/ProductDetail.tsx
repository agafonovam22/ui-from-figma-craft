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
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Описание' },
    { id: 'specifications', label: 'Характеристики' },
    { id: 'reviews', label: 'Отзывы (10)' },
    { id: 'delivery', label: 'Доставка и оплата' },
    { id: 'installment', label: 'Рассрочка' },
    { id: 'services', label: 'Услуги' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {product.name} - это современное высококачественное оборудование для домашних тренировок.
            </p>
            <h3 className="text-lg font-semibold mb-3">Основные особенности:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Надежная конструкция для длительного использования</li>
              <li>• Современный дизайн, подходящий для любого интерьера</li>
              <li>• Простота в использовании и обслуживании</li>
              <li>• Высокое качество материалов и компонентов</li>
            </ul>
          </div>
        );
      case 'specifications':
        // Получаем реальные характеристики для беговой дорожки CardioPower T50
        const specifications = {
          // Основные характеристики для беговой дорожки
          basic: [
            { label: 'Тип продукции', value: 'Беговые дорожки для дома' },
            { label: 'Бренд', value: 'CardioPower' },
            { label: 'Модель', value: 'T50' },
            { label: 'Назначение', value: 'Домашние тренировки' },
            { label: 'Тип двигателя', value: 'Постоянного тока DC' },
            { label: 'Мощность двигателя', value: '1.5 л.с' },
            { label: 'Пиковая мощность', value: '2.5 л.с' },
            { label: 'Максимальная скорость', value: '10 км/ч' },
            { label: 'Угол наклона', value: 'Механический 0-10%' },
            { label: 'Размер бегового полотна', value: '100 x 34 см' },
            { label: 'Максимальный вес пользователя', value: '90 кг' },
            { label: 'Система амортизации', value: 'Да' },
            { label: 'Складная конструкция', value: 'Да' },
            { label: 'Дисплей', value: 'LCD' },
            { label: 'Количество программ', value: '12' }
          ],
          dimensions: [
            { label: 'Размеры в сложенном виде (Д×Ш×В)', value: '135×62×132 см' },
            { label: 'Размеры в рабочем состоянии (Д×Ш×В)', value: '135×62×105 см' },
            { label: 'Размер упаковки (Д×Ш×В)', value: '142×67×25 см' }
          ],
          additional: [
            { label: 'Материал рамы', value: 'Сталь' },
            { label: 'Колеса для транспортировки', value: 'Да' },
            { label: 'Держатель для планшета/телефона', value: 'Да' },
            { label: 'Измерение пульса', value: 'Датчики на поручнях' }
          ],
          weight: [
            { label: 'Вес нетто', value: '26 кг' },
            { label: 'Вес брутто', value: '29 кг' }
          ],
          warranty: [
            { label: 'Гарантия', value: '2 года' },
            { label: 'Страна бренда', value: 'Россия' },
            { label: 'Страна изготовления', value: 'Китай' },
            { label: 'Артикул', value: 'T50' }
          ]
        };

        return (
          <div className="space-y-8">
            {/* Main title */}
            <h2 className="text-2xl font-bold text-foreground">Характеристики</h2>
            
            {/* Основные характеристики */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Основные характеристики</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
                {specifications.basic.map((spec, index) => {
                  const rowIndex = Math.floor(index / 2);
                  const colIndex = index % 2;
                  
                  return (
                    <div key={index} className="flex justify-between py-2">
                      <span className="text-muted-foreground">{spec.label}:</span>
                      <span className="text-right">{spec.value}</span>
                    </div>
                  );
                })}
                {/* Fill empty cells to maintain grid */}
                {specifications.basic.length % 2 !== 0 && 
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground"></span>
                    <span className="text-right"></span>
                  </div>
                }
              </div>
            </div>

            {/* Sections row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Габариты */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Габариты</h3>
                <div className="space-y-2 text-sm">
                  {specifications.dimensions.map((spec, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Дополнительные характеристики */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Дополнительные характеристики</h3>
                <div className="space-y-2 text-sm">
                  {specifications.additional.map((spec, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Вес */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Вес</h3>
                <div className="space-y-2 text-sm">
                  {specifications.weight.map((spec, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom row with Гарантия */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Гарантия и Сертификация</h3>
                <div className="space-y-2 text-sm">
                  {specifications.warranty.map((spec, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Product diagrams */}
                <h3 className="text-lg font-semibold mb-4">Схемы и чертежи</h3>
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-muted rounded border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground text-center">Схема сборки</span>
                  </div>
                  <div className="w-32 h-24 bg-muted rounded border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground text-center">Размеры</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Отзывы покупателей</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.8 из 5 (10 отзывов)</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Анна К.</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2 дня назад</span>
                </div>
                <p className="text-sm text-muted-foreground">Отличное качество! Очень довольна покупкой.</p>
              </div>
            </div>
          </div>
        );
      case 'delivery':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Доставка</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium">По Москве (в пределах МКАД):</span>
                    <p className="text-muted-foreground">300 руб. Доставка осуществляется в течение 1-2 рабочих дней</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium">По Санкт-Петербургу (в пределах КАД):</span>
                    <p className="text-muted-foreground">300 руб. Доставка осуществляется в течение 1-2 рабочих дней</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Оплата</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Для физических лиц:</span>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• Наличными при получении</li>
                    <li>• Банковской картой</li>
                    <li>• Безналичная оплата</li>
                    <li>• Онлайн оплата</li>
                    <li>• Рассрочка</li>
                  </ul>
                </div>
                <div>
                  <span className="font-medium">Для юридических лиц:</span>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>• Безналичная оплата</li>
                    <li>• Оплата онлайн</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'installment':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Рассрочка</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-2">Рассрочка 0-0-12</h4>
                <p className="text-sm text-muted-foreground mb-3">Без первоначального взноса и переплаты</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Срок: до 12 месяцев</li>
                  <li>• Переплата: 0%</li>
                  <li>• Первый взнос: 0%</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-2">Банковская рассрочка</h4>
                <p className="text-sm text-muted-foreground mb-3">От наших партнеров</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Срок: до 24 месяцев</li>
                  <li>• Быстрое оформление</li>
                  <li>• Минимальный пакет документов</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Дополнительные услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Сборка и установка</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Профессиональная сборка специалистами</li>
                  <li>• Настройка оборудования</li>
                  <li>• Инструктаж по использованию</li>
                  <li>• Стоимость рассчитывается индивидуально</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Гарантийное обслуживание</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Официальная гарантия производителя</li>
                  <li>• Сервисное обслуживание</li>
                  <li>• Ремонт и замена запчастей</li>
                  <li>• Консультации по эксплуатации</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
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
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-brand-red text-brand-red'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
          {renderTabContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;