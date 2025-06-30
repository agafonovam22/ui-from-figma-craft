import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ReviewDialog from "@/components/ReviewDialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ProductCard = () => {
  const [selectedInstallment, setSelectedInstallment] = useState<string>("");
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);

  const installmentOptions = [
    {
      id: "0-0-12",
      bank: "Тинькофф",
      monthlyPayment: "5 000 ₽",
      overpayment: "нет",
      period: "0 - 6",
      rate: "Ставка от 21,5%",
      firstPayment: "Первый взнос 0%",
      duration: "Срок 12 месяцев"
    },
    {
      id: "0-0-6",
      bank: "Тинькофф",
      monthlyPayment: "5 000 ₽",
      overpayment: "нет",
      period: "0 - 6",
      rate: "Ставка от 21,5%",
      firstPayment: "Первый взнос 0%",
      duration: "Срок 12 месяцев"
    },
    {
      id: "0-0-6-sber1",
      bank: "Сбербанк",
      monthlyPayment: "5 000 ₽",
      overpayment: "нет",
      period: "0 - 6",
      rate: "Ставка от 21,5%",
      firstPayment: "Первый взнос 0%",
      duration: "Срок 12 месяцев"
    },
    {
      id: "0-0-6-sber2",
      bank: "Сбербанк",
      monthlyPayment: "5 000 ₽",
      overpayment: "нет",
      period: "0 - 6",
      rate: "Ставка от 21,5%",
      firstPayment: "Первый взнос 0%",
      duration: "Срок 12 месяцев"
    }
  ];

  const mockProduct = {
    id: 1,
    name: "Example Product",
    description: "This is a mock product description.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/400x300",
    rating: 4.5,
    numReviews: 25,
    availability: true,
  };

  const relatedProducts = [
    { id: 2, name: "Related Product 1", price: 59.99, imageUrl: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Related Product 2", price: 79.99, imageUrl: "https://via.placeholder.com/200x150" },
  ];

  const handleAddToCart = () => {
    alert("Product added to cart!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Product Details</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky top-4">
            <img src={mockProduct.imageUrl} alt={mockProduct.name} className="w-full rounded-lg shadow-md" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">{mockProduct.name}</h2>
            <p className="text-xl text-gray-700">${mockProduct.price}</p>
            
            <div className="flex items-center">
              <div className="text-yellow-500">
                {/* Implement star rating icons here */}
                {Array.from({ length: Math.floor(mockProduct.rating) }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-gray-600 ml-2">({mockProduct.numReviews} reviews)</span>
            </div>
            
            <Badge variant="secondary">{mockProduct.availability ? "In Stock" : "Out of Stock"}</Badge>
            
            <div className="flex space-x-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Add to Cart</Button>
              <Button variant="outline">Add to Wishlist</Button>
            </div>
            
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="installment">Рассрочка</TabsTrigger>
                <TabsTrigger value="delivery">Доставка и оплата</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4">
                <h3 className="text-lg font-semibold">Product Description</h3>
                <p className="text-gray-600">{mockProduct.description}</p>
              </TabsContent>
              
              <TabsContent value="installment" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Доставка по России</h3>
                  <p className="text-gray-600 mb-4">
                    Оформить кредит на сайте — быстро и легко. При оформлении заказа в корзине укажите способ оплаты «Кредит». 
                    Вы будете перенаправлены на сайт банка для заполнения анкеты. После заполнения анкеты с вами свяжется представитель банка. Вашу заявку рассмотрят в течение 20—30 минут.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Также вы можете оформить рассрочку в любом магазине, сделав заказ на самовывоз.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Пожалуйста, будьте готовы предоставить паспарт при получении кредита. Также банки вправе потребовать иные дополнительные документы и подтверждение доходов заемщика.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-medium">Рассрочка</th>
                        <th className="text-left py-3 font-medium">Ежемесячный платеж</th>
                        <th className="text-left py-3 font-medium">Переплата</th>
                        <th className="text-left py-3 font-medium">Срок</th>
                        <th className="text-left py-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <RadioGroup value={selectedInstallment} onValueChange={setSelectedInstallment}>
                        {installmentOptions.map((option) => (
                          <tr key={option.id} className="border-b">
                            <td className="py-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value={option.id} id={option.id} />
                                <Label htmlFor={option.id} className="cursor-pointer">
                                  <div>
                                    <div className="font-medium">{option.id}</div>
                                    <div className="text-sm text-gray-500">{option.bank}</div>
                                  </div>
                                </Label>
                              </div>
                            </td>
                            <td className="py-4 text-gray-700">{option.monthlyPayment}</td>
                            <td className="py-4 text-gray-700">{option.overpayment}</td>
                            <td className="py-4 text-gray-700">{option.period}</td>
                            <td className="py-4">
                              <div className="flex flex-wrap gap-1">
                                <Badge variant="outline" className="text-xs">{option.rate}</Badge>
                                <Badge variant="outline" className="text-xs">{option.firstPayment}</Badge>
                                <Badge variant="outline" className="text-xs">{option.duration}</Badge>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </RadioGroup>
                    </tbody>
                  </table>
                </div>

                <div className="pt-4">
                  <Button 
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-2"
                    disabled={!selectedInstallment}
                  >
                    Оставить заявку
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="delivery" className="space-y-4">
                <h3 className="text-lg font-semibold">Delivery and Payment</h3>
                <p className="text-gray-600">Details about delivery and payment options.</p>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-4">
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <Button onClick={() => setReviewDialogOpen(true)}>
                  Написать отзыв
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <img src={product.imageUrl} alt={product.name} className="w-full rounded-md mb-2" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700">${product.price}</p>
                  <Button className="w-full mt-2">View Product</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ReviewDialog 
        open={reviewDialogOpen} 
        onOpenChange={setReviewDialogOpen} 
      />
    </div>
  );
};

export default ProductCard;
