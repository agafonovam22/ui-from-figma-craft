import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Share2, Star, Minus, Plus, ShoppingCart, Truck, Wrench, CreditCard, Clock, Home } from 'lucide-react';

const ProductCard: React.FC = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');

  const productImages = [
    '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
    '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
    '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
  ];

  const services = [
    {
      id: 1,
      title: 'Доставка',
      description: 'У нас работают высококвалифицированные сотрудники со стажем более 5 лет. Мы оперативно доставляем заказы наших клиентов в любую точку г. Москвы и Санкт-Петербурга, а также других регионов России.',
      backgroundImage: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
      buttonText: 'Перейти'
    },
    {
      id: 2,
      title: 'Сборка',
      description: 'Наша компания оказывает полный спектр услуг по подъему и сборке оборудования. Сотрудники оснащены всем необходимым инструментом и имеют огромный опыт.',
      backgroundImage: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      buttonText: 'Перейти'
    },
    {
      id: 3,
      title: 'Различные способы оплаты',
      description: 'У всех экипажей нашей компании присутствуют терминалы для безналичной оплаты, вы можете оплатить свою покупку различными способами: наличными, банковской картой, через QR код или оплатить товар по счету.',
      backgroundImage: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      buttonText: 'Перейти'
    },
    {
      id: 4,
      title: 'Рассрочка',
      description: 'Вы можете оформить рассрочку сроком до 12 месяцев, без переплат, без первоначального взноса, оставьте заявку и менеджеры банков-партнеров свяжутся с вами.',
      backgroundImage: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
      buttonText: 'Перейти'
    },
    {
      id: 5,
      title: 'Демонтаж и переезд',
      description: 'Также вы можете заказать услуги по перевозке спортивного оборудования с полным демонтажом и сборкой на новом месте. Хотите перевезти свой тренажер в новую квартиру или загородный дом - это к нам!',
      backgroundImage: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      buttonText: 'Перейти'
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'Гребной тренажер CardioРowe PRO CR300',
      price: '4 610 ₽',
      originalPrice: '5 200 ₽',
      discount: '-15%',
      rating: 4.5,
      reviews: 23,
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      badge: 'АКЦИЯ',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Беговая дорожка CardioPower T25',
      price: '22 900 ₽',
      originalPrice: '25 900 ₽',
      discount: '-12%',
      rating: 4.8,
      reviews: 45,
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      badge: 'ХИТ',
      badgeColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Эллиптический тренажер CardioPower E300',
      price: '18 500 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.2,
      reviews: 18,
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
      badge: null,
      badgeColor: null
    },
    {
      id: 4,
      name: 'Велотренажер CardioPower X15',
      price: '12 300 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 62,
      image: '/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png',
      badge: null,
      badgeColor: null
    },
    {
      id: 5,
      name: 'Силовой комплекс BodySolid G5KR',
      price: '75 800 ₽',
      originalPrice: '82 000 ₽',
      discount: '-7%',
      rating: 4.7,
      reviews: 31,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'АКЦИЯ',
      badgeColor: 'bg-red-500'
    }
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <span>Главная</span>
            <span className="mx-2">{'>'}</span>
            <span>Каталог</span>
            <span className="mx-2">{'>'}</span>
            <span>Гребной тренажер CardioРowe PRO CR300</span>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={productImages[activeImageIndex]}
                  alt="Гребной тренажер CardioРowe PRO CR300"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                    АКЦИЯ
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      activeImageIndex === index ? 'border-red-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Гребной тренажер CardioРowe PRO CR300
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(23 отзыва)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">4 610 ₽</span>
                  <span className="text-xl text-gray-500 line-through">5 200 ₽</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    -15%
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>В наличии</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Количество:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Купить
                  </Button>
                  <Button variant="outline" size="icon" className="p-3">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="p-3">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 pt-4 border-t">
                <Button variant="outline" className="w-full justify-start">
                  Запросить цену
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-12">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="installment">Рассрочка</TabsTrigger>
                <TabsTrigger value="services">Услуги</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Описание товара</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Гребной тренажер CardioРowe PRO CR300 - это профессиональное спортивное оборудование, 
                    предназначенное для эффективных кардиотренировок в домашних условиях и фитнес-клубах.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Тренажер обеспечивает полноценную тренировку всех групп мышц, имитируя греблю на воде. 
                    Система сопротивления основана на воздушном принципе, что обеспечивает плавность 
                    и естественность движений.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Максимальный вес пользователя: 150 кг</li>
                    <li>Размеры в собранном виде: 220 x 55 x 90 см</li>
                    <li>Вес тренажера: 45 кг</li>
                    <li>Система сопротивления: воздушная</li>
                    <li>Встроенный компьютер с LCD дисплеем</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Бренд</span>
                        <span>CardioРowe</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Модель</span>
                        <span>PRO CR300</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Тип</span>
                        <span>Гребной тренажер</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Максимальный вес пользователя</span>
                        <span>150 кг</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Размеры (Д×Ш×В)</span>
                        <span>220×55×90 см</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Вес тренажера</span>
                        <span>45 кг</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Система сопротивления</span>
                        <span>Воздушная</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Гарантия</span>
                        <span>2 года</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Отзывы покупателей</h3>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="font-medium">Алексей М.</span>
                        <span className="text-gray-500 text-sm">15 января 2024</span>
                      </div>
                      <p className="text-gray-700">
                        Отличный тренажер! Качественная сборка, удобное управление. 
                        Занимаюсь уже 3 месяца - результат заметен. Рекомендую!
                      </p>
                    </div>
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="font-medium">Мария С.</span>
                        <span className="text-gray-500 text-sm">8 января 2024</span>
                      </div>
                      <p className="text-gray-700">
                        Хороший тренажер за свои деньги. Единственный минус - немного шумноват, 
                        но в целом довольна покупкой.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="installment" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Рассрочка</h3>
                  <p className="text-gray-600 mb-6">
                    Содержание раздела "Рассрочка" будет добавлено позже.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Услуги</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <div 
                        key={service.id} 
                        className="relative rounded-lg overflow-hidden h-64 group cursor-pointer"
                      >
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${service.backgroundImage})` }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>
                        <div className="relative h-full p-6 flex flex-col text-white">
                          <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                          <p className="text-sm leading-relaxed mb-4 flex-grow">
                            {service.description}
                          </p>
                          <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors self-start">
                            {service.buttonText} →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Вы смотрели</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <span>←</span>
                </Button>
                <Button variant="outline" size="icon">
                  <span>→</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`${product.badgeColor} text-white px-2 py-1 rounded text-xs font-medium`}>
                          {product.badge}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {product.discount && (
                        <div className="absolute bottom-2 right-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                            {product.discount}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
                      
                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCard;
