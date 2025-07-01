
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Truck, CreditCard, User } from 'lucide-react';

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDelivery, setSelectedDelivery] = useState('pickup');
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('warehouse1');
  const [selectedPayment, setSelectedPayment] = useState('card-online');
  const [useBonuses, setUseBonuses] = useState(false);

  const total = 40610;
  const discount = 4610;
  const bonuses = 260;
  const delivery = 0;
  const assembly = 1000;
  const finalTotal = 42000;

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Оформление</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Оформление заказа</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Steps */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${currentStep === 1 ? 'bg-gray-900' : 'bg-red-500'} text-white rounded flex items-center justify-center text-sm font-medium`}>
                  1
                </div>
                <div className="flex items-center gap-2">
                  <Truck className={`w-5 h-5 ${currentStep === 1 ? 'text-gray-900' : 'text-red-500'}`} />
                  <span className={`font-medium ${currentStep === 1 ? 'text-gray-900' : 'text-red-500'}`}>Доставка</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${currentStep === 2 ? 'bg-gray-900' : 'bg-red-500'} text-white rounded flex items-center justify-center text-sm font-medium`}>
                  2
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className={`w-5 h-5 ${currentStep === 2 ? 'text-gray-900' : 'text-red-500'}`} />
                  <span className={`font-medium ${currentStep === 2 ? 'text-gray-900' : 'text-red-500'}`}>Способ оплаты</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${currentStep === 3 ? 'bg-gray-900' : 'bg-red-500'} text-white rounded flex items-center justify-center text-sm font-medium`}>
                  3
                </div>
                <div className="flex items-center gap-2">
                  <User className={`w-5 h-5 ${currentStep === 3 ? 'text-gray-900' : 'text-red-500'}`} />
                  <span className={`font-medium ${currentStep === 3 ? 'text-gray-900' : 'text-red-500'}`}>Ваши данные</span>
                </div>
              </div>
            </div>

            {/* Step 1: Delivery Method */}
            {currentStep === 1 && (
              <>
                <div className="bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Способ доставки</h2>
                  <div className="mb-4">
                    <span className="text-gray-600">Город доставки</span>
                    <span className="text-red-500 ml-2 font-medium">Москва</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Pickup from warehouse */}
                    <div 
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDelivery === 'pickup' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedDelivery('pickup')}
                    >
                      <h3 className="font-bold text-lg mb-2">Самовывоз со склада</h3>
                      <p className="text-sm mb-3">Забрать завтра 14 июля, после 19:00 или в течение 14 дней</p>
                      <div className={`text-2xl font-bold ${selectedDelivery === 'pickup' ? 'text-white' : 'text-gray-900'}`}>
                        Бесплатно
                      </div>
                    </div>

                    {/* Pickup from store */}
                    <div 
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDelivery === 'store' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedDelivery('store')}
                    >
                      <h3 className="font-bold text-lg mb-2">Самовывоз с магазина</h3>
                      <p className="text-sm mb-3">Забрать 20 июля</p>
                      <div className={`text-2xl font-bold ${selectedDelivery === 'store' ? 'text-white' : 'text-gray-900'}`}>
                        Бесплатно
                      </div>
                    </div>

                    {/* Courier delivery */}
                    <div 
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedDelivery === 'courier' ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedDelivery('courier')}
                    >
                      <h3 className="font-bold text-lg mb-2">Курьерская доставка</h3>
                      <p className="text-sm mb-3">Бесплатно от 30 001 ₽</p>
                      <div className={`text-2xl font-bold ${selectedDelivery === 'courier' ? 'text-white' : 'text-gray-900'}`}>
                        1000 ₽
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup Points */}
                <div className="bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Пункт выдачи</h2>
                  
                  <div className="space-y-4">
                    {/* Warehouse 1 */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <input 
                          type="radio" 
                          name="pickup" 
                          checked={selectedPickupPoint === 'warehouse1'}
                          onChange={() => setSelectedPickupPoint('warehouse1')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">Склад №1</span>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 text-sm font-medium">В наличии</span>
                              <div className="flex gap-1 ml-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            Московская область, Красногорский р-н, д. Гольево, улица Центральная ул., с44.
                          </p>
                          <p className="text-sm text-gray-600">пн – пт с 09:30-18:00</p>
                        </div>
                      </div>
                    </div>

                    {/* Warehouse 2 */}
                    <div className="border-2 border-red-500 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <input 
                          type="radio" 
                          name="pickup" 
                          checked={selectedPickupPoint === 'warehouse2'}
                          onChange={() => setSelectedPickupPoint('warehouse2')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="font-medium">Склад №2</span>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600 text-sm font-medium">В наличии</span>
                              <div className="flex gap-1 ml-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            Московская область, Химки, микрорайон Сходня, улица Некрасова д.2.
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">пн – пт с 09:30-18:00</p>
                            <p className="text-sm text-gray-600">
                              Выдача осуществляется оформленных заказов, при согласовании даты и времени приезда
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Способ оплаты</h2>
                <p className="text-gray-600 mb-6">
                  Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Card Online */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'card-online' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('card-online')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={selectedPayment === 'card-online'}
                        onChange={() => setSelectedPayment('card-online')}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">Оплата картой онлайн</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <img src="/lovable-uploads/mastercard-logo.png" alt="MasterCard" className="h-6" />
                      <img src="/lovable-uploads/visa-logo.png" alt="Visa" className="h-6" />
                      <img src="/lovable-uploads/mir-logo.png" alt="МИР" className="h-6" />
                      <img src="/lovable-uploads/halva-logo.png" alt="Халва" className="h-6" />
                    </div>
                  </div>

                  {/* Card on Delivery */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'card-delivery' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('card-delivery')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Картой при получении</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Предоплата не требуется.</p>
                    <div className="flex gap-2">
                      <img src="/lovable-uploads/mastercard-logo.png" alt="MasterCard" className="h-6" />
                      <img src="/lovable-uploads/visa-logo.png" alt="Visa" className="h-6" />
                      <img src="/lovable-uploads/mir-logo.png" alt="МИР" className="h-6" />
                      <img src="/lovable-uploads/halva-logo.png" alt="Халва" className="h-6" />
                    </div>
                  </div>

                  {/* Cash on Delivery */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'cash-delivery' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('cash-delivery')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Наличными при получении</span>
                    </div>
                    <p className="text-sm text-gray-600">Предоплата не требуется</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Invoice Payment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'invoice' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('invoice')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Счёт на оплату</span>
                    </div>
                    <p className="text-sm text-gray-600">Пришлём счёт вам на почту</p>
                  </div>

                  {/* Installment Payment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'installment' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('installment')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Наложенный платеж</span>
                    </div>
                    <p className="text-sm text-gray-600">Оплата при получении товара на почте</p>
                  </div>

                  {/* Installment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'credit' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('credit')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">В рассрочку</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Список <Link to="#" className="text-blue-600 underline">банков-партнеров</Link>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: User Data */}
            {currentStep === 3 && (
              <div className="bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ваши данные</h2>
                <p className="text-gray-600 mb-6">Заполните форму для оформления заказа</p>
                {/* Add form fields here */}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleNextStep}
                className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 text-lg font-medium"
                disabled={currentStep === 3}
              >
                {currentStep === 3 ? 'Оформить заказ' : 'Далее'}
              </Button>
              <Button 
                onClick={handlePrevStep}
                variant="outline" 
                className="border-gray-300 text-gray-700 px-8 py-3 text-lg font-medium"
                disabled={currentStep === 1}
              >
                Назад
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Итого</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Товары, 3 шт</span>
                  <span className="font-medium">{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Скидка</span>
                  <span className="text-red-500 font-medium">-{discount.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Бонусы</span>
                  <span className="text-green-600 font-medium">+{bonuses} Б</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium">Бесплатно</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Сборка</span>
                  <span className="font-medium">{assembly.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Оплата</span>
                  <span className="font-medium">Картой онлайн</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                  <span>Итого</span>
                  <span>{finalTotal.toLocaleString()} ₽</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="bonusCheckout" 
                    checked={useBonuses}
                    onChange={(e) => setUseBonuses(e.target.checked)}
                    className="mt-1 rounded" 
                  />
                  <label htmlFor="bonusCheckout" className="text-sm text-gray-700 leading-relaxed">
                    Использовать бонусные баллы. Требуется{' '}
                    <Link to="/account" className="text-blue-600 underline">
                      авторизация
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You Viewed Section */}
      <div className="py-16 bg-gray-50">
        <NewProducts title="Вы смотрели" />
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Checkout;
