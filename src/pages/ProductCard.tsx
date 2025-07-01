
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
      
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors p-1 ${
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
          <div className="space-y-8 pl-4">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
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
                  <Badge variant="outline" className="text-green-600 border-green-600 px-3 py-1">
                    В наличии
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-blue-600">
                  {product.price.toLocaleString()} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.oldPrice.toLocaleString()} ₽
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="text-base font-medium text-gray-700">Количество:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 font-medium text-lg">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 py-4 px-6 text-base">
                  <ShoppingCart size={20} className="mr-3" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg" className="p-4">
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="lg" className="p-4">
                  <BarChart3 size={20} />
                </Button>
              </div>
            </div>

            <Card className="mt-8">
              <CardContent className="p-8">
                <h3 className="font-semibold text-xl mb-6">Основные характеристики</h3>
                <div className="space-y-4">
                  {product.characteristics.slice(0, 3).map((char, index) => (
                    <div key={index} className="flex justify-between py-2">
                      <span className="text-gray-600 text-base">{char.name}</span>
                      <span className="font-medium text-base">{char.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16 px-2">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="description" className="py-3 px-6">Описание</TabsTrigger>
              <TabsTrigger value="characteristics" className="py-3 px-6">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews" className="py-3 px-6">Отзывы</TabsTrigger>
              <TabsTrigger value="delivery" className="py-3 px-6">Доставка</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description">
              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="characteristics">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {product.characteristics.map((char, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-100 pb-4">
                        <span className="text-gray-600 text-base">{char.name}</span>
                        <span className="font-medium text-base">{char.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-600 text-base">Отзывы пользователей будут добавлены позже.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delivery">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Способы доставки</h4>
                      <ul className="space-y-3 text-gray-600 text-base">
                        <li>• Курьерская доставка по Москве - 500 ₽</li>
                        <li>• Доставка по России - от 1000 ₽</li>
                        <li>• Самовывоз из магазина - бесплатно</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Сроки доставки</h4>
                      <ul className="space-y-3 text-gray-600 text-base">
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
