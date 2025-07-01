
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Heart, BarChart3, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const ProductCard = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: productId,
    name: "Беговая дорожка BRONZE GYM T1000 PRO",
    price: 89990,
    oldPrice: 99990,
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    images: [
      "/lovable-uploads/f60c9b28-0384-4770-97ba-40b6bdcd451e.png",
      "/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png",
      "/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png",
    ],
    characteristics: [
      { name: "Максимальная скорость", value: "20 км/ч" },
      { name: "Мощность двигателя", value: "3.5 л.с." },
      { name: "Максимальный вес пользователя", value: "150 кг" },
      { name: "Размер бегового полотна", value: "140 x 51 см" },
      { name: "Угол наклона", value: "0-15%" },
    ],
    description: "Профессиональная беговая дорожка с мощным двигателем и большим беговым полотном. Идеально подходит для интенсивных тренировок дома.",
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewsCount} отзывов)
                  </span>
                </div>
                
                {product.inStock && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    В наличии
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  {product.price.toLocaleString()} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.oldPrice.toLocaleString()} ₽
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Количество:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1">
                  <ShoppingCart size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg">
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="lg">
                  <BarChart3 size={20} />
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Основные характеристики</h3>
                <div className="space-y-3">
                  {product.characteristics.slice(0, 3).map((char, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{char.name}</span>
                      <span className="font-medium">{char.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="characteristics" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {product.characteristics.map((char, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">{char.name}</span>
                        <span className="font-medium">{char.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">Отзывы пользователей будут добавлены позже.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delivery" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Способы доставки</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Курьерская доставка по Москве - 500 ₽</li>
                        <li>• Доставка по России - от 1000 ₽</li>
                        <li>• Самовывоз из магазина - бесплатно</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Сроки доставки</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• По Москве - 1-2 дня</li>
                        <li>• По России - 3-7 дней</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Banner />
      <Footer />
    </div>
  );
};

export default ProductCard;
