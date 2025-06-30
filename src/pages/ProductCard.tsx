
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Star, Users, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewDialog from '@/components/ReviewDialog';

const ProductCard = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const product = {
    id: 1,
    name: "Беговая дорожка BRONZE GYM T1000 PRO",
    price: 215000,
    oldPrice: 245000,
    discount: 12,
    rating: 4.5,
    reviewCount: 24,
    inStock: true,
    images: [
      "/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png",
      "/lovable-uploads/f4e554ea-7370-4b23-85ae-f3045c81543a.png",
      "/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png",
      "/lovable-uploads/80ae9fd1-6366-4282-90a5-44d024b6ccac.png"
    ],
    brand: "BRONZE GYM",
    model: "T1000 PRO",
    warranty: "2 года",
    delivery: "Бесплатная доставка",
    assembly: "Сборка включена",
    specifications: {
      "Максимальный вес пользователя": "160 кг",
      "Размеры (Д×Ш×В)": "195×87×147 см",
      "Беговое полотно": "145×51 см",
      "Мощность двигателя": "3.5 л.с.",
      "Максимальная скорость": "18 км/ч",
      "Угол наклона": "0-15%",
      "Программы тренировок": "15 программ",
      "Система амортизации": "Air Deck",
      "Дисплей": "LCD, 6.5 дюймов",
      "Кардиодатчики": "Есть",
      "Вес": "95 кг"
    }
  };

  const images = [
    "/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png",
    "/lovable-uploads/f4e554ea-7370-4b23-85ae-f3045c81543a.png",
    "/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png",
    "/lovable-uploads/80ae9fd1-6366-4282-90a5-44d024b6ccac.png"
  ];

  const reviews = [
    {
      id: 1,
      name: "Александр К.",
      date: "15 октября 2024",
      rating: 5,
      comment: "Отличная беговая дорожка! Очень довольен покупкой. Тихая, надежная, много программ тренировок.",
      ratings: {
        quality: 9,
        price: 8,
        functionality: 10,
        speed: 9,
        assembly: 8
      }
    },
    {
      id: 2,
      name: "Мария П.",
      date: "10 октября 2024",
      rating: 4,
      comment: "Хорошая дорожка, но доставка была с задержкой. В остальном все отлично, рекомендую!",
      ratings: {
        quality: 8,
        price: 7,
        functionality: 9,
        speed: 8,
        assembly: 9
      }
    },
    {
      id: 3,
      name: "Дмитрий С.",
      date: "5 октября 2024",
      rating: 5,
      comment: "Превосходное качество сборки. Использую каждый день, никаких нареканий нет.",
      ratings: {
        quality: 10,
        price: 8,
        functionality: 9,
        speed: 10,
        assembly: 9
      }
    }
  ];

  const handleAddToCart = () => {
    console.log('Adding to cart:', { productId: product.id, quantity });
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { productId: product.id, quantity });
  };

  const RatingBar = ({ rating, maxRating = 10 }: { rating: number; maxRating?: number }) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-2 ${
              i < rating ? 'bg-red-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span>Главная</span> / <span>Каталог</span> / <span>Беговые дорожки</span> / <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-red-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({product.reviewCount} отзывов)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-red-600">{product.price.toLocaleString()} ₽</span>
                {product.oldPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">{product.oldPrice.toLocaleString()} ₽</span>
                    <Badge variant="destructive" className="bg-red-100 text-red-600">-{product.discount}%</Badge>
                  </>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-green-600">{product.inStock ? 'В наличии' : 'Нет в наличии'}</span>
                </div>
                <div className="text-sm text-gray-600">{product.delivery}</div>
                <div className="text-sm text-gray-600">{product.assembly}</div>
                <div className="text-sm text-gray-600">Гарантия: {product.warranty}</div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Количество:</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3"
                >
                  Купить в 1 клик
                </Button>
                <Button 
                  onClick={handleAddToCart}
                  variant="outline" 
                  className="flex-1 py-3"
                >
                  В корзину
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  В избранное
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="delivery">Доставка и оплата</TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="description" className="space-y-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Описание товара</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Беговая дорожка BRONZE GYM T1000 PRO - это профессиональное кардиооборудование для домашнего использования. 
                  Оснащена мощным двигателем 3.5 л.с., который обеспечивает плавную и тихую работу даже при интенсивных тренировках.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Широкое беговое полотно 145×51 см и система амортизации Air Deck гарантируют комфорт и безопасность во время занятий. 
                  15 встроенных программ тренировок позволят разнообразить ваши занятия и достичь лучших результатов.
                </p>
                <h4 className="text-lg font-semibold mb-3">Основные преимущества:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Мощный двигатель 3.5 л.с. для плавной работы</li>
                  <li>Максимальная скорость до 18 км/ч</li>
                  <li>Система амортизации Air Deck снижает нагрузку на суставы</li>
                  <li>15 предустановленных программ тренировок</li>
                  <li>LCD дисплей 6.5 дюймов с четким отображением данных</li>
                  <li>Встроенные кардиодатчики для контроля пульса</li>
                  <li>Угол наклона до 15% для имитации бега в гору</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Отзывы ({reviews.length})</h3>
                <Button 
                  onClick={() => setIsReviewDialogOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Написать отзыв
                </Button>
              </div>

              {/* Overall Rating */}
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                    <div className="flex justify-center items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviewCount} отзывов</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Качество</span>
                      <RatingBar rating={9} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Цена</span>
                      <RatingBar rating={8} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Функциональность</span>
                      <RatingBar rating={9} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Скорость</span>
                      <RatingBar rating={9} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Легкость в сборке</span>
                      <RatingBar rating={8} />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Individual Reviews */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Качество</span>
                        <RatingBar rating={review.ratings.quality} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Цена</span>
                        <RatingBar rating={review.ratings.price} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Функциональность</span>
                        <RatingBar rating={review.ratings.functionality} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Скорость</span>
                        <RatingBar rating={review.ratings.speed} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Сборка</span>
                        <RatingBar rating={review.ratings.assembly} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="delivery" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Delivery Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Доставка</h3>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Доставка по городу</h4>
                        <p className="text-sm text-gray-600 mb-3">Стоимость доставки по Москве в пределах МКАД</p>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Вес товара</th>
                                <th className="text-left py-2">Стоимость</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">До 30 кг</td>
                                <td className="py-2 font-semibold">690 ₽</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">От 30 до 50 кг</td>
                                <td className="py-2 font-semibold">1 190 ₽</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">От 50 до 100 кг</td>
                                <td className="py-2 font-semibold">1 690 ₽</td>
                              </tr>
                              <tr>
                                <td className="py-2">Свыше 100 кг</td>
                                <td className="py-2 font-semibold">2 490 ₽</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Самовывоз</h4>
                        <p className="text-sm text-gray-600 mb-3">Заберите товар самостоятельно из наших пунктов выдачи</p>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Пункт выдачи</th>
                                <th className="text-left py-2">Стоимость</th>
                                <th className="text-left py-2">Срок</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">Склад на Каширском шоссе</td>
                                <td className="py-2 font-semibold text-green-600">Бесплатно</td>
                                <td className="py-2">В день заказа</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Магазин на Ленинском пр-те</td>
                                <td className="py-2 font-semibold text-green-600">Бесплатно</td>
                                <td className="py-2">1-2 дня</td>
                              </tr>
                              <tr>
                                <td className="py-2">Магазин на Варшавском ш.</td>
                                <td className="py-2 font-semibold text-green-600">Бесплатно</td>
                                <td className="py-2">1-2 дня</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Сборка</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Сборка тренажера</span>
                            <span className="font-semibold">2 990 ₽</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Подъем на этаж (от 2-го)</span>
                            <span className="font-semibold">500 ₽/этаж</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Сборка включает распаковку, сборку по инструкции, проверку работоспособности и вынос упаковки
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Оплата</h3>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Для физических лиц</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Наличными курьеру при получении</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Банковской картой курьеру</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Онлайн на сайте (Visa, MasterCard, МИР)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Банковский перевод</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>Рассрочка 0% (от 3 до 24 месяцев)</span>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Для юридических лиц</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Безналичный расчет по счету</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Банковский перевод</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Работа с НДС и без НДС</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>Отсрочка платежа до 30 дней</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-900 mb-2">Дополнительная информация</h5>
                        <div className="space-y-1 text-sm text-blue-800">
                          <p>• Предоплата не требуется</p>
                          <p>• Гарантия возврата денег в течение 14 дней</p>
                          <p>• Все товары сертифицированы</p>
                          <p>• Официальная гарантия производителя</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <ReviewDialog 
          open={isReviewDialogOpen} 
          onOpenChange={setIsReviewDialogOpen} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProductCard;
