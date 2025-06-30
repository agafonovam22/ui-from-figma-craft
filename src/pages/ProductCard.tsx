import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Heart, Star, Play } from 'lucide-react';

const ProductCard: React.FC = () => {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('14');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data - в реальном приложении это будет загружаться по productId
  const product = {
    id: productId,
    title: 'Батут Scholle Space Twin Blue/Red 8FT (2.44м)',
    brand: 'CardioPower',
    rating: 4,
    maxRating: 5,
    originalPrice: '5 000₽',
    currentPrice: '4 610 ₽',
    discount: '-15%',
    images: [
      '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png'
    ],
    badges: ['АКЦИЯ', 'ХИТ ПРОДАЖ'],
    availability: 'В наличии',
    inStock: true,
    specifications: {
      type: 'Беговые дорожки для дома',
      brand: 'CardioPower',
      purpose: 'Домашние',
      motorType: 'Постоянного тока DC',
      motorPower: '1.5',
      peakPower: '2.5',
      beltType: 'Электрические',
      minSpeed: '0.8',
      maxSpeed: '10',
      incline: 'Механический'
    },
    colors: [
      { name: 'Красный/синий', value: 'blue' },
      { name: 'Зеленый/желтый', value: 'green' }
    ],
    sizes: [
      { size: '8', price: '(-15 000₽)' },
      { size: '10', price: '(-10 000₽)' },
      { size: '12', price: '(-5 000₽)' },
      { size: '14', price: '', selected: true },
      { size: '16', price: '(+10 000₽)' }
    ],
    delivery: {
      price: '300 руб.',
      note: '(в пределах МКАД/КАД)',
      description: 'Рассчитывается индивидуально'
    },
    assembly: 'Наличными, картой, безналичная, онлайн, в рассрочку',
    paymentOptions: 'Безналичная оплата, оплата онлайн'
  };

  // Similar products data
  const similarProducts = [
    {
      id: 1,
      title: 'Батут Berg Champion 380 см',
      price: '49 900 ₽',
      originalPrice: '55 000 ₽',
      discount: '-10%',
      image: '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      badge: 'ХИТ'
    },
    {
      id: 2,
      title: 'Батут Hasttings Classic 305 см',
      price: '24 900 ₽',
      originalPrice: '29 900 ₽',
      discount: '-17%',
      image: '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      badge: 'АКЦИЯ'
    },
    {
      id: 3,
      title: 'Батут Oxygen Fitness Standard 244 см',
      price: '15 900 ₽',
      originalPrice: '18 900 ₽',
      discount: '-16%',
      image: '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      badge: 'NEW'
    },
    {
      id: 4,
      title: 'Батут Diamond fitness Internal 183 см',
      price: '8 900 ₽',
      originalPrice: '12 900 ₽',
      discount: '-31%',
      image: '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      badge: 'СКИДКА'
    },
    {
      id: 5,
      title: 'Батут Oxygen Fitness Standard 366 см',
      price: '23 900 ₽',
      originalPrice: '26 900 ₽',
      discount: '-11%',
      image: '/lovable-uploads/2408b069-a750-4a3f-bbf7-f362671a36fd.png',
      badge: 'ТОП'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#F53B49]">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-[#F53B49]">Каталог</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая часть - Изображения */}
          <div className="space-y-4">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.badges.map((badge, index) => (
                <Badge 
                  key={index}
                  className={`${
                    badge === 'АКЦИЯ' 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } px-3 py-1 text-sm font-medium`}
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.title}
                className="w-full h-[400px] object-contain"
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-[#F53B49]' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Правая часть - Информация о товаре */}
          <div className="space-y-6">
            {/* Availability and Wishlist */}
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Badge className="bg-green-100 text-green-600 hover:bg-green-100">
                  ● В наличии
                </Badge>
                <Button variant="outline" size="sm" className="text-gray-500 border-gray-300">
                  В сравнение
                </Button>
                <Button variant="outline" size="sm" className="text-gray-500 border-gray-300">
                  <Heart className="w-4 h-4 mr-1" />
                  В избранное
                </Button>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-[#262631]">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating}/{product.maxRating}</span>
            </div>

            {/* Specifications Table */}
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-600">Тип продукции:</div>
              <div className="text-gray-900 font-medium">{product.specifications.type}</div>
              
              <div className="text-gray-600">Бренд:</div>
              <div className="text-gray-900 font-medium">{product.specifications.brand}</div>
              
              <div className="text-gray-600">Назначение:</div>
              <div className="text-gray-900 font-medium">{product.specifications.purpose}</div>
              
              <div className="text-gray-600">Тип двигателя:</div>
              <div className="text-gray-900 font-medium">{product.specifications.motorType}</div>
              
              <div className="text-gray-600">Мощность двигателя, л.с.:</div>
              <div className="text-gray-900 font-medium">{product.specifications.motorPower}</div>

              <div className="text-gray-600">Пиковая мощность, л.с.:</div>
              <div className="text-gray-900 font-medium">{product.specifications.peakPower}</div>

              <div className="text-gray-600">Тип беговой дорожки:</div>
              <div className="text-gray-900 font-medium">{product.specifications.beltType}</div>

              <div className="text-gray-600">Минимальная скорость, км/ч:</div>
              <div className="text-gray-900 font-medium">{product.specifications.minSpeed}</div>

              <div className="text-gray-600">Максимальная скорость, км/ч:</div>
              <div className="text-gray-900 font-medium">{product.specifications.maxSpeed}</div>

              <div className="text-gray-600">Угол наклона:</div>
              <div className="text-gray-900 font-medium">{product.specifications.incline}</div>
            </div>

            {/* Show all characteristics link */}
            <Link to="#" className="text-[#F53B49] text-sm font-medium hover:underline inline-flex items-center">
              Все характеристики →
            </Link>

            {/* Color Selection */}
            <div>
              <div className="text-sm font-medium text-gray-900 mb-2">Цвет</div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`px-4 py-2 rounded text-sm font-medium border ${
                      selectedColor === color.value
                        ? 'bg-[#262631] text-white border-[#262631]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="text-sm font-medium text-gray-900 mb-2">Диаметр, ft</div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`px-3 py-2 rounded text-sm font-medium border min-w-[60px] ${
                      selectedSize === size.size
                        ? 'bg-[#262631] text-white border-[#262631]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div>{size.size}</div>
                    {size.price && (
                      <div className="text-xs text-gray-500">{size.price}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-red-500 text-white">{product.discount}</Badge>
                <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
              </div>
              
              <div className="text-3xl font-bold text-[#262631] mb-4">{product.currentPrice}</div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <Button className="flex-1 bg-[#F53B49] hover:bg-red-600 text-white py-3">
                  Добавить в корзину
                </Button>
              </div>
            </div>

            {/* Delivery and Payment Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-600">Доставка</span>
                <span className="ml-auto text-gray-900 font-medium">
                  {product.delivery.price} {product.delivery.note}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-600">Сборка</span>
                <span className="ml-auto text-gray-900">{product.delivery.description}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-600">Оплата для физ лиц</span>
                <span className="ml-auto text-gray-900 text-right max-w-[200px]">{product.assembly}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-gray-600">Оплата для юр лиц</span>
                <span className="ml-auto text-gray-900 text-right max-w-[200px]">{product.paymentOptions}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 rounded-none h-auto p-0">
              <TabsTrigger 
                value="description" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Описание
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Характеристики
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Отзывы (10)
              </TabsTrigger>
              <TabsTrigger 
                value="delivery" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Доставка и оплата
              </TabsTrigger>
              <TabsTrigger 
                value="installment" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Рассрочка
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className="border-b-2 border-transparent data-[state=active]:border-[#F53B49] data-[state=active]:text-[#F53B49] bg-transparent rounded-none px-4 py-3"
              >
                Услуги
              </TabsTrigger>
              <div className="ml-auto">
                <Button variant="outline" className="text-[#F53B49] border-[#F53B49] hover:bg-[#F53B49] hover:text-white">
                  Скачать инструкцию
                </Button>
              </div>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              {/* Description Content */}
              <div className="space-y-12">
                {/* Description Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[#262631] mb-6">Описание</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="mt-8">
                    <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/f4e554ea-7370-4b23-85ae-f3045c81543a.png" 
                        alt="Product demonstration video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                          <Play className="w-8 h-8 text-gray-700 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[#262631] mb-8">Преимущества</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&h=500" 
                          alt="2 варианта цвета защитного мата"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                        <h3 className="font-medium text-center">
                          2 варианта цвета<br />защитного мата
                        </h3>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&h=500" 
                          alt="Совершенное качество прыжка"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                        <h3 className="font-medium text-center">
                          Совершенное качество<br />прыжка
                        </h3>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=500&h=500" 
                          alt="Безопасный защитный мат"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                        <h3 className="font-medium text-center">
                          Безопасный защитный<br />мат
                        </h3>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&h=500" 
                          alt="Качественная защитная сеть"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                        <h3 className="font-medium text-center">
                          Качественная защитная<br />сеть
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large Image with Water Section */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&h=600" 
                    alt="Батут у воды"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
                      <p className="text-lg max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Four Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&h=500" 
                        alt="Feature 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <h3 className="font-medium text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&h=500" 
                        alt="Feature 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <h3 className="font-medium text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=500&h=500" 
                        alt="Feature 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <h3 className="font-medium text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&h=500" 
                        alt="Feature 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <h3 className="font-medium text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Left Image Right Text Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&h=400" 
                      alt="Батут в саду"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#262631]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                      ea commodo consequat.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-[#262631] mb-2">
                          Безопасный и удобный вход внутрь
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Не нужно беспокоиться о закрытой молнии безопасность вашего 
                          ребенка всегда будет на высоте.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#262631] mb-2">
                          Лестница с антискользящими ступеньками
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Надежная фиксация и удобные нескользящие ступени лестницы 
                          созданы для максимального комфорта и безопасности.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#262631] mb-2">
                          Двойная конструкция ножек
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Устойчивость и защита от качания обеспечивается усиленная 
                          конструкция с двойными ножек. Это придают устойчивости при 
                          использовании батутов несколькими пользователями одновременно.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#262631] mb-2">
                          Нижняя Защитная сеть
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Нижняя защитная сеть входит в комплект ко всем моделям и 
                          размерам батутов Scholle. Она обезопасит от проникновения 
                          детей и домашних животных под батут во время использования.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large image with overlay text */}
                <div className="relative rounded-lg overflow-hidden mb-12">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&h=600" 
                    alt="Морская пристань"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-end pr-8">
                    <div className="bg-white/95 p-8 rounded-lg max-w-md">
                      <h2 className="text-2xl font-bold text-[#262631] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      </h2>
                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                        ea commodo consequat.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-3xl font-bold text-[#262631]">177</div>
                          <div className="text-gray-600 text-sm">Lorem ipsum dolor</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#262631]">20+</div>
                          <div className="text-gray-600 text-sm">Lorem ipsum dolor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Large Images Side by Side with Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&h=400" 
                      alt="Left image"
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <h3 className="text-xl font-bold text-[#262631]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400" 
                      alt="Right image"
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <h3 className="text-xl font-bold text-[#262631]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Large Blue Water/Port Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&h=500" 
                    alt="Port/Marina view"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Final Text Block */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#262631]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
                    <div className="space-y-4">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="text-gray-600">Характеристики будут добавлены позже</div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="text-gray-600">Отзывы будут добавлены позже</div>
            </TabsContent>

            <TabsContent value="delivery" className="mt-8">
              <div className="text-gray-600">Информация о доставке и оплате будет добавлена позже</div>
            </TabsContent>

            <TabsContent value="installment" className="mt-8">
              <div className="text-gray-600">Информация о рассрочке будет добавлена позже</div>
            </TabsContent>

            <TabsContent value="services" className="mt-8">
              <div className="text-gray-600">Информация об услугах будет добавлена позже</div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#262631] mb-8">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {similarProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                  <Badge 
                    className={`absolute top-2 left-2 ${
                      product.badge === 'АКЦИЯ' ? 'bg-red-500' :
                      product.badge === 'ХИТ' ? 'bg-blue-500' :
                      product.badge === 'NEW' ? 'bg-green-500' :
                      product.badge === 'СКИДКА' ? 'bg-orange-500' :
                      'bg-purple-500'
                    } text-white text-xs px-2 py-1`}
                  >
                    {product.badge}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-red-500 text-white text-xs">{product.discount}</Badge>
                    <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
                  </div>
                  
                  <div className="text-lg font-bold text-[#262631] mb-3">{product.price}</div>
                  
                  <Button className="w-full bg-[#F53B49] hover:bg-red-600 text-white text-sm py-2">
                    В корзину
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductCard;
