import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Star, Minus, Plus, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ReviewDialog from '@/components/ReviewDialog';

const ProductCard = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedInstallment, setSelectedInstallment] = useState('');
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const product = {
    id: 1,
    name: 'Беговая дорожка OXYGEN FITNESS NEW CLASSIC AURUM LCD',
    price: 179900,
    oldPrice: 199900,
    images: [
      '/lovable-uploads/32484ced-ddd4-4761-9855-fa657187f020.png',
      '/lovable-uploads/52b103e9-b2f9-4abd-a5ac-6f7932a30414.png',
      '/lovable-uploads/63223971-7b48-4bd9-824c-f4c52e54d9fb.png'
    ],
    rating: 4.5,
    reviews: 24,
    availability: 'В наличии',
    brand: 'OXYGEN FITNESS',
    model: 'NEW CLASSIC AURUM LCD',
    warranty: '2 года',
    delivery: 'Бесплатная доставка по Москве'
  };

  const installmentOptions = [
    {
      id: 'tinkoff-0-0-12',
      bank: 'О-О-12\nТинькофф',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      tags: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'tinkoff-0-0-6',
      bank: 'О-О-6\nТинькофф',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      tags: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'sberbank-0-0-6',
      bank: 'О-О-6\nСбербанк',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      tags: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'sberbank-0-0-6-alt',
      bank: 'О-О-6\nСбербанк',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      tags: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Беговая дорожка OXYGEN FITNESS WIDER T25',
      price: 89900,
      oldPrice: 99900,
      image: '/lovable-uploads/52b103e9-b2f9-4abd-a5ac-6f7932a30414.png',
      rating: 4.3,
      reviews: 18
    },
    {
      id: 3,
      name: 'Беговая дорожка OXYGEN FITNESS CARDIO CONCEPT III',
      price: 129900,
      oldPrice: 149900,
      image: '/lovable-uploads/63223971-7b48-4bd9-824c-f4c52e54d9fb.png',
      rating: 4.7,
      reviews: 31
    },
    {
      id: 4,
      name: 'Беговая дорожка OXYGEN FITNESS PLASMA III LCD',
      price: 159900,
      image: '/lovable-uploads/32484ced-ddd4-4761-9855-fa657187f020.png',
      rating: 4.6,
      reviews: 22
    }
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Главная</span>
            <span>/</span>
            <span>Каталог</span>
            <span>/</span>
            <span>Беговые дорожки</span>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews} отзывов)</span>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600"
                  onClick={() => setIsReviewDialogOpen(true)}
                >
                  Оставить отзыв
                </Button>
              </div>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
                {product.availability}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-600">{product.price.toLocaleString()} ₽</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.oldPrice.toLocaleString()} ₽</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Бренд:</span>
                <span className="ml-2 font-medium">{product.brand}</span>
              </div>
              <div>
                <span className="text-gray-600">Модель:</span>
                <span className="ml-2 font-medium">{product.model}</span>
              </div>
              <div>
                <span className="text-gray-600">Гарантия:</span>
                <span className="ml-2 font-medium">{product.warranty}</span>
              </div>
              <div>
                <span className="text-gray-600">Доставка:</span>
                <span className="ml-2 font-medium text-green-600">{product.delivery}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="sm" onClick={decrementQuantity}>
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={incrementQuantity}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button className="flex-1 bg-red-600 hover:bg-red-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                В корзину
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="delivery">Доставка и оплата</TabsTrigger>
            <TabsTrigger value="installment">Рассрочка</TabsTrigger>
            <TabsTrigger value="warranty">Гарантия</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Описание товара</h3>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Беговая дорожка OXYGEN FITNESS NEW CLASSIC AURUM LCD представляет собой профессиональное оборудование 
                  для домашнего использования. Модель отличается надежностью, функциональностью и современным дизайном.
                </p>
                <p className="mb-4">
                  Особенности модели:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Мощный двигатель постоянного тока</li>
                  <li>Широкое беговое полотно для комфортных тренировок</li>
                  <li>Система амортизации для защиты суставов</li>
                  <li>LCD-дисплей с отображением всех параметров тренировки</li>
                  <li>Множество программ тренировок</li>
                  <li>Возможность складывания для экономии места</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="characteristics" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Максимальная скорость</span>
                    <span className="font-medium">16 км/ч</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Максимальный вес пользователя</span>
                    <span className="font-medium">130 кг</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Размер бегового полотна</span>
                    <span className="font-medium">125 x 42 см</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Мощность двигателя</span>
                    <span className="font-medium">2.0 л.с.</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Угол наклона</span>
                    <span className="font-medium">0-15%</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Программы тренировок</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Размеры (Д×Ш×В)</span>
                    <span className="font-medium">160×70×130 см</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Вес</span>
                    <span className="font-medium">65 кг</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Отзывы покупателей</h3>
                <Button
                  onClick={() => setIsReviewDialogOpen(true)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Оставить отзыв
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">Александр П.</span>
                    <span className="text-gray-500 text-sm">15 марта 2024</span>
                  </div>
                  <p className="text-gray-700">
                    Отличная беговая дорожка! Использую уже полгода, очень доволен качеством и функциональностью. 
                    Тихая работа, удобное управление.
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="font-medium">Мария К.</span>
                    <span className="text-gray-500 text-sm">8 марта 2024</span>
                  </div>
                  <p className="text-gray-700">
                    Хорошая дорожка за свои деньги. Единственный минус - занимает много места, 
                    но это проблема всех беговых дорожек.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Доставка и оплата</h3>
              
              <div className="space-y-8">
                {/* Delivery Section */}
                <div>
                  <h4 className="text-lg font-medium mb-4">Доставка</h4>
                  
                  <div className="space-y-6">
                    {/* City/Russia Delivery */}
                    <div>
                      <h5 className="font-medium mb-3">Доставка по городу/России</h5>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Вид доставки</TableHead>
                            <TableHead>Стоимость</TableHead>
                            <TableHead>Срок доставки</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Курьерская доставка по Москве</TableCell>
                            <TableCell>Бесплатно</TableCell>
                            <TableCell>1-2 дня</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Доставка по России</TableCell>
                            <TableCell>Рассчитывается индивидуально</TableCell>
                            <TableCell>3-7 дней</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {/* Pickup Tables */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Moscow Pickup */}
                      <div>
                        <h5 className="font-medium mb-3">Самовывоз в Москве</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Адрес</TableHead>
                              <TableHead>Время работы</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>ул. Примерная, 123</TableCell>
                              <TableCell>Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-18:00</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>ул. Образцовая, 456</TableCell>
                              <TableCell>Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-18:00</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      {/* St. Petersburg Pickup */}
                      <div>
                        <h5 className="font-medium mb-3">Самовывоз в СПб</h5>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Адрес</TableHead>
                              <TableHead>Время работы</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>пр. Невский, 789</TableCell>
                              <TableCell>Пн-Пт: 9:00-19:00<br />Сб-Вс: 10:00-18:00</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    {/* Assembly */}
                    <div>
                      <h5 className="font-medium mb-3">Сборка</h5>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Услуга</TableHead>
                            <TableHead>Стоимость</TableHead>
                            <TableHead>Описание</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Сборка тренажера</TableCell>
                            <TableCell>2 500 ₽</TableCell>
                            <TableCell>Профессиональная сборка на дому</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div>
                  <h4 className="text-lg font-medium mb-4">Способы оплаты</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* For Individuals */}
                    <div>
                      <h5 className="font-medium mb-3">Для физических лиц</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Наличными курьеру</li>
                        <li>• Банковской картой курьеру</li>
                        <li>• Онлайн на сайте</li>
                        <li>• Банковский перевод</li>
                        <li>• Рассрочка 0%</li>
                      </ul>
                    </div>

                    {/* For Legal Entities */}
                    <div>
                      <h5 className="font-medium mb-3">Для юридических лиц</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Безналичный расчет</li>
                        <li>• По счету с НДС</li>
                        <li>• Банковский перевод</li>
                        <li>• Корпоративные карты</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="installment" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Рассрочка</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-4">Доставка по России</h4>
                  <p className="text-gray-600 mb-6">
                    Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ оплаты «Кредит». 
                    Вы будете перенаправлены на сайт банка для заполнения анкеты. После заполнения анкеты банк-представитель банка. Ваша заявка рассмотрят в течение 20—30 минут. 
                    Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Пожалуйста, будьте готовы предоставить паспорт при получении кредита. Также банки вправе потребовать иные дополнительные документы и подтверждение доходов заемщика.
                  </p>
                </div>

                <div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/12"></TableHead>
                        <TableHead className="w-2/12">Рассрочка</TableHead>
                        <TableHead className="w-2/12">Ежемесячный платеж</TableHead>
                        <TableHead className="w-2/12">Переплата</TableHead>
                        <TableHead className="w-2/12">Срок</TableHead>
                        <TableHead className="w-3/12">Условия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <RadioGroup value={selectedInstallment} onValueChange={setSelectedInstallment}>
                        {installmentOptions.map((option) => (
                          <TableRow key={option.id}>
                            <TableCell>
                              <RadioGroupItem value={option.id} id={option.id} />
                            </TableCell>
                            <TableCell>
                              <Label htmlFor={option.id} className="cursor-pointer whitespace-pre-line">
                                {option.bank}
                              </Label>
                            </TableCell>
                            <TableCell>
                              <Label htmlFor={option.id} className="cursor-pointer">
                                {option.monthlyPayment}
                              </Label>
                            </TableCell>
                            <TableCell>
                              <Label htmlFor={option.id} className="cursor-pointer">
                                {option.overpayment}
                              </Label>
                            </TableCell>
                            <TableCell>
                              <Label htmlFor={option.id} className="cursor-pointer">
                                {option.term}
                              </Label>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {option.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </RadioGroup>
                    </TableBody>
                  </Table>
                </div>

                <div className="flex justify-start">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 px-8 py-3"
                    disabled={!selectedInstallment}
                  >
                    Оставить заявку
                  </Button>
                </div>
              </div>

              {/* You Viewed Section */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold">Вы смотрели</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square bg-gray-50 p-4">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-medium text-sm mb-2 line-clamp-2">{relatedProduct.name}</h5>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(relatedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({relatedProduct.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-red-600">{relatedProduct.price.toLocaleString()} ₽</span>
                          {relatedProduct.oldPrice && (
                            <span className="text-sm text-gray-500 line-through">{relatedProduct.oldPrice.toLocaleString()} ₽</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="warranty" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Гарантийные условия</h3>
              <div className="prose max-w-none">
                <p className="mb-4">
                  На данный товар предоставляется официальная гарантия производителя сроком 2 года.
                </p>
                <h4 className="text-lg font-medium mb-3">Гарантия включает:</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>Бесплатный ремонт или замену неисправных деталей</li>
                  <li>Техническую поддержку и консультации</li>
                  <li>Выезд специалиста на дом при необходимости</li>
                </ul>
                <h4 className="text-lg font-medium mb-3">Условия гарантии:</h4>
                <ul className="list-disc pl-6">
                  <li>Соблюдение правил эксплуатации</li>
                  <li>Отсутствие механических повреждений</li>
                  <li>Наличие гарантийного талона и чека</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <ReviewDialog
        isOpen={isReviewDialogOpen}
        onClose={() => setIsReviewDialogOpen(false)}
        productName={product.name}
      />
    </div>
  );
};

export default ProductCard;
