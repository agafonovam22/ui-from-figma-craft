
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, CreditCard, Calculator, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const ProductCard = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedInstallment, setSelectedInstallment] = useState('');

  const product = {
    id: 1,
    name: 'Гребной тренажер CardioPower PRO CR300',
    price: 4610,
    originalPrice: 5200,
    discount: '-12%',
    rating: 4.8,
    reviews: 24,
    inStock: true,
    images: [
      '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png'
    ],
    characteristics: [
      { name: 'Вес маховика', value: '6 кг' },
      { name: 'Максимальный вес пользователя', value: '120 кг' },
      { name: 'Размеры', value: '195x51x86 см' },
      { name: 'Вес тренажера', value: '28 кг' },
      { name: 'Гарантия', value: '2 года' }
    ],
    description: 'Профессиональный гребной тренажер с магнитной системой нагружения. Идеально подходит для домашних тренировок и развития всех групп мышц.',
    features: [
      'Магнитная система нагружения',
      'LCD дисплей с основными показателями',
      '8 уровней нагрузки',
      'Складная конструкция',
      'Эргономичное сиденье'
    ]
  };

  const installmentOptions = [
    {
      id: 'o-o-12',
      bank: 'Тинькофф',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      badges: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'o-o-6',
      bank: 'Тинькофф',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      badges: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'o-o-6-sber',
      bank: 'Сбербанк',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      badges: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    },
    {
      id: 'o-o-6-sber2',
      bank: 'Сбербанк',
      monthlyPayment: '5 000 ₽',
      overpayment: 'нет',
      term: '0 - 6',
      badges: ['Ставка от 21,5%', 'Первый взнос 0%', 'Срок 12 месяцев']
    }
  ];

  const viewedProducts = [
    {
      id: 1,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: 4610,
      originalPrice: null,
      discount: null,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      rating: 4.8,
      reviews: 24,
      inStock: true,
      badge: 'АКЦИЯ',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: 4610,
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      rating: 4.6,
      reviews: 18,
      inStock: true,
      badge: 'АКЦИЯ',
      badgeColor: 'bg-red-500'
    },
    {
      id: 3,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: 4610,
      image: '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png',
      rating: 4.7,
      reviews: 31,
      inStock: false,
      badge: 'ТОВАРНЫЙ ПОДАРОК',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: 4610,
      image: '/lovable-uploads/a9104ea4-4534-43dd-8095-40911e19bd24.png',
      rating: 4.9,
      reviews: 42,
      inStock: true,
      badge: 'НОВИНКА',
      badgeColor: 'bg-green-500'
    },
    {
      id: 5,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: 4610,
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png',
      rating: 4.5,
      reviews: 15,
      inStock: true,
      badge: 'НОВИНКА',
      badgeColor: 'bg-green-500'
    }
  ];

  const images = [
    '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
    '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
    '/lovable-uploads/9e5a06ee-c6bb-4fd5-83b8-c40921ef0a2f.png'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">{product.price.toLocaleString()} ₽</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} ₽
                  </span>
                  <Badge variant="destructive">{product.discount}</Badge>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ В наличии' : '✗ Нет в наличии'}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full" size="lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Купить
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <Heart className="w-5 h-5 mr-2" />
              В избранное
            </Button>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Доставка по Москве от 500 ₽</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Оплата картой или наличными</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
          <TabsTrigger value="delivery">Доставка</TabsTrigger>
          <TabsTrigger value="payment">Оплата</TabsTrigger>
          <TabsTrigger value="installment">Рассрочка</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">О товаре</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Особенности</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="characteristics" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Технические характеристики</h3>
              <div className="space-y-3">
                {product.characteristics.map((char, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">{char.name}</span>
                    <span className="font-medium">{char.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Доставка по Москве</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium">Курьерская доставка</div>
                        <div className="text-sm text-gray-600">в пределах МКАД</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">500 ₽</div>
                        <div className="text-sm text-gray-600">1-2 дня</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium">Самовывоз</div>
                        <div className="text-sm text-gray-600">из магазина</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">Бесплатно</div>
                        <div className="text-sm text-gray-600">сегодня</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Доставка по России</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">Транспортная компания</div>
                        <div className="text-sm text-gray-600">до терминала в вашем городе</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">от 1000 ₽</div>
                        <div className="text-sm text-gray-600">3-7 дней</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Способы оплаты</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-5 h-5 mr-2 text-blue-500" />
                        <span className="font-medium">Банковской картой</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Visa, MasterCard, МИР
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calculator className="w-5 h-5 mr-2 text-green-500" />
                        <span className="font-medium">Наличными</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        При получении товара
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Безопасность платежей</h3>
                  <p className="text-gray-700">
                    Все платежи проходят через защищенное соединение. 
                    Мы не храним данные ваших банковских карт.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installment" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Доставка по России</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>Оформить кредит на сайте — быстро и легко! При оформлении заказа в корзине укажите способ оплаты «Кредит».</p>
                    <p>Вы будете перенаправлены на сайт банка для заполнения заявки. После заполнения заявки — представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.</p>
                    <p>Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз.</p>
                    <p>Пожалуйста, будьте готовы предоставить паспорт для получения кредита. Также банки вправе потребовать иные дополнительные документы и подтверждение доходов заемщика.</p>
                  </div>
                </div>

                <div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Рассрочка</TableHead>
                        <TableHead>Ежемесячный платеж</TableHead>
                        <TableHead>Переплата</TableHead>
                        <TableHead>Срок</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <RadioGroup value={selectedInstallment} onValueChange={setSelectedInstallment}>
                        {installmentOptions.map((option) => (
                          <TableRow key={option.id} className={selectedInstallment === option.id ? 'bg-blue-50' : ''}>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value={option.id} id={option.id} />
                                <Label htmlFor={option.id} className="font-medium">
                                  {option.id}<br />
                                  <span className="text-sm text-gray-600">{option.bank}</span>
                                </Label>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{option.monthlyPayment}</TableCell>
                            <TableCell>{option.overpayment}</TableCell>
                            <TableCell>{option.term}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {option.badges.map((badge, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {badge}
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

                <div>
                  <Button 
                    className="bg-red-500 hover:bg-red-600 text-white"
                    disabled={!selectedInstallment}
                  >
                    Оставить заявку
                  </Button>
                </div>

                {/* Вы смотрели section */}
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Вы смотрели</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {viewedProducts.map((product) => (
                      <Card key={product.id} className="relative overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative">
                          {product.badge && (
                            <Badge className={`absolute top-2 left-2 z-10 ${product.badgeColor} text-white text-xs`}>
                              {product.badge}
                            </Badge>
                          )}
                          <div className="aspect-square bg-gray-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <CardContent className="p-3">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              {product.rating} • {product.reviews}
                            </span>
                          </div>
                          
                          <h3 className="text-sm font-medium mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">{product.price.toLocaleString()} ₽</span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {product.originalPrice.toLocaleString()} ₽
                                </span>
                              )}
                            </div>
                            
                            {product.inStock ? (
                              <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm">
                                Купить
                              </Button>
                            ) : (
                              <Button variant="outline" className="w-full text-sm">
                                Запросить цену
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductCard;
