
import React, { useState, memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Мемоизированный компонент для вкладки "Описание"
const DescriptionTab = memo(() => (
  <div className="prose max-w-none">
    <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
    <p className="mb-4">
      Профессиональная беговая дорожка ProRun X5 - это идеальное решение для тех, кто серьезно относится к своему здоровью и физической форме. Эта модель сочетает в себе надежность, функциональность и современный дизайн.
    </p>
    <p className="mb-4">
      Мощный двигатель 3.5 л.с. обеспечивает плавную и тихую работу даже при интенсивных тренировках. Беговое полотно размером 150x50 см предоставляет достаточно места для комфортного бега, а система амортизации защищает ваши суставы от ударных нагрузок.
    </p>
    <h4 className="text-lg font-semibold mb-2">Особенности:</h4>
    <ul className="list-disc pl-6 mb-4">
      <li>Интуитивно понятная панель управления с LCD-дисплеем</li>
      <li>12 предустановленных программ тренировок</li>
      <li>Пульсометр для контроля сердечного ритма</li>
      <li>Система безопасности с ключом экстренной остановки</li>
      <li>Складная конструкция для экономии места</li>
    </ul>
  </div>
));

// Мемоизированный компонент для вкладки "Характеристики"
const SpecificationsTab = memo(({ specifications }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
      <dl className="space-y-2">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
            <dt className="font-medium text-gray-600">{key}:</dt>
            <dd className="text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">Дополнительная информация</h3>
      <ul className="space-y-2 text-gray-600">
        <li>• Сертификат качества CE</li>
        <li>• Соответствие стандартам безопасности</li>
        <li>• Профессиональная сборка в сервисном центре</li>
        <li>• Техническая поддержка 24/7</li>
        <li>• Возможность расширенной гарантии</li>
      </ul>
    </div>
  </div>
));

// Мемоизированный компонент для вкладки "Отзывы"
const ReviewsTab = memo(({ product }) => {
  const reviews = useMemo(() => [
    {
      name: "Анна К.",
      rating: 5,
      date: "15 марта 2024",
      text: "Отличная беговая дорожка! Купила месяц назад и очень довольна. Работает тихо, много программ тренировок. Качество сборки на высоте."
    },
    {
      name: "Михаил П.",
      rating: 5,
      date: "8 марта 2024",
      text: "Пользуюсь уже полгода. Очень надежная и функциональная модель. Особенно нравится система амортизации - бегать комфортно даже длительное время."
    },
    {
      name: "Елена С.",
      rating: 4,
      date: "1 марта 2024",
      text: "Хорошая дорожка за свои деньги. Единственный минус - занимает много места, но это особенность всех беговых дорожек."
    }
  ], []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Отзывы покупателей</h3>
        <Button variant="outline">Написать отзыв</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{product.rating}</div>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-gray-600">{product.reviews} отзывов</div>
        </div>
        
        <div className="col-span-2 space-y-2">
          {[5,4,3,2,1].map(rating => (
            <div key={rating} className="flex items-center space-x-2">
              <span className="w-3">{rating}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%`}}
                />
              </div>
              <span className="text-sm text-gray-600 w-8">
                {rating === 5 ? 89 : rating === 4 ? 25 : rating === 3 ? 9 : rating === 2 ? 3 : 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{review.name}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

// Мемоизированный компонент для вкладки "Рассрочка"
const InstallmentTab = memo(() => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold">Рассрочка</h3>
    
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Доставка по России</h4>
      <div className="space-y-3 text-gray-700">
        <p>
          Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ оплаты «Кредит».
        </p>
        <p>
          Вы будете перенаправлены на сайт — банка для заполнения анкеты. После заполнения анкеты представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.
        </p>
        <p>
          Также вы можете оформить рассрочку или кредит в любом магазине, сделав заказ на самовывоз.
        </p>
        <p>
          Пожалуйста, будьте готовы предоставить паспорт при получении кредита. Также банки вправе потребовать иные дополнительные документы и подтверждение доходов заемщика.
        </p>
      </div>
    </div>
  </div>
));

const ProductCard = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = useMemo(() => ({
    id: 1,
    name: "Профессиональная беговая дорожка ProRun X5",
    price: 89900,
    originalPrice: 120000,
    discount: 25,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    images: [
      "/lovable-uploads/f4e554ea-7370-4b23-85ae-f3045c81543a.png",
      "/lovable-uploads/32484ced-ddd4-4761-9855-fa657187f020.png",
      "/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png"
    ],
    description: "Профессиональная беговая дорожка с мощным двигателем 3.5 л.с., максимальной скоростью до 20 км/ч и углом наклона до 15%. Идеально подходит для домашнего использования и профессиональных тренировок.",
    specifications: {
      "Мощность двигателя": "3.5 л.с.",
      "Максимальная скорость": "20 км/ч",
      "Размер бегового полотна": "150 x 50 см",
      "Максимальный вес пользователя": "150 кг",
      "Угол наклона": "0-15%",
      "Размеры": "200 x 90 x 140 см",
      "Вес": "85 кг",
      "Гарантия": "2 года"
    }
  }), []);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-orange-600">
                {product.price.toLocaleString()} ₽
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} ₽
                  </span>
                  <Badge variant="destructive">-{product.discount}%</Badge>
                </>
              )}
            </div>
            {product.inStock ? (
              <p className="text-green-600">✓ В наличии</p>
            ) : (
              <p className="text-red-600">Нет в наличии</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Количество:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={decreaseQuantity}
                  className="px-3"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={increaseQuantity}
                  className="px-3"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                <ShoppingCart className="w-5 h-5 mr-2" />
                В корзину
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Краткое описание:</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="specifications">Характеристики</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          <TabsTrigger value="installment">Рассрочка</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <DescriptionTab />
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <SpecificationsTab specifications={product.specifications} />
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <ReviewsTab product={product} />
        </TabsContent>

        <TabsContent value="installment" className="mt-6">
          <InstallmentTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductCard;
