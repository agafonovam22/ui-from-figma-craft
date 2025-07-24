import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from 'react-router-dom';
import { Truck, CreditCard, User } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDelivery, setSelectedDelivery] = useState('pickup');
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('warehouse1');
  const [selectedPayment, setSelectedPayment] = useState('card-online');
  const [useBonuses, setUseBonuses] = useState(false);
  const [customerType, setCustomerType] = useState('individual');
  const [hasAccount, setHasAccount] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    acceptPrivacy: false,
    subscribeNews: false
  });

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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOrderSubmit = () => {
    // Здесь можно добавить валидацию формы
    // Переход на страницу успеха
    navigate('/order-success');
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:pl-[60px] lg:pr-[60px] py-8">
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

        <h1 className="text-gray-900 mb-8" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Оформление заказа</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Steps */}
            <div className="flex items-center gap-4 mb-8">
              {/* Step 1 - Доставка */}
              <div className={`w-[225px] flex items-center gap-3 px-6 py-4 rounded-lg border-2 ${
                currentStep === 1 
                  ? 'bg-gray-900 border-gray-900' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`p-3 rounded-lg ${
                  currentStep === 1 
                    ? 'bg-gray-700' 
                    : 'bg-red-100'
                }`}>
                  <Truck className={`w-6 h-6 ${
                    currentStep === 1 
                      ? 'text-white' 
                      : 'text-red-500'
                  }`} />
                </div>
                <div>
                  <div className={`text-[12px] font-medium ${
                    currentStep === 1 
                      ? 'text-white' 
                      : 'text-red-500'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    ШАГ 1
                  </div>
                  <div className={`text-[14px] font-semibold ${
                    currentStep === 1 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    Доставка
                  </div>
                </div>
              </div>
              
              {/* Step 2 - Способ оплаты */}
              <div className={`w-[225px] flex items-center gap-3 px-6 py-4 rounded-lg border-2 ${
                currentStep === 2 
                  ? 'bg-gray-900 border-gray-900' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`p-3 rounded-lg ${
                  currentStep === 2 
                    ? 'bg-gray-700' 
                    : 'bg-red-100'
                }`}>
                  <img 
                    src="/lovable-uploads/16b4c71b-d829-4e52-a253-9ad7cb0e1010.png" 
                    alt="Payment" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className={`text-[12px] font-medium ${
                    currentStep === 2 
                      ? 'text-white' 
                      : 'text-red-500'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    ШАГ 2
                  </div>
                  <div className={`text-[14px] font-semibold ${
                    currentStep === 2 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    Способ оплаты
                  </div>
                </div>
              </div>
              
              {/* Step 3 - Ваши данные */}
              <div className={`w-[225px] flex items-center gap-3 px-6 py-4 rounded-lg border-2 ${
                currentStep === 3 
                  ? 'bg-gray-900 border-gray-900' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`p-3 rounded-lg ${
                  currentStep === 3 
                    ? 'bg-gray-700' 
                    : 'bg-red-100'
                }`}>
                  <img 
                    src="/lovable-uploads/b319343d-94ea-4546-a929-34d9ba2ba5a6.png" 
                    alt="User Data" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className={`text-[12px] font-medium ${
                    currentStep === 3 
                      ? 'text-white' 
                      : 'text-red-500'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    ШАГ 3
                  </div>
                  <div className={`text-[14px] font-semibold ${
                    currentStep === 3 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`} style={{ fontFamily: 'Manrope' }}>
                    Ваши данные
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Delivery Method */}
            {currentStep === 1 && (
              <>
                <div className="bg-white">
                  <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Способ доставки</h2>
                  <div className="mb-4" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                    <span className="text-gray-600">Город доставки</span>
                    <button className="text-red-500 ml-2 font-medium hover:underline">
                      Москва
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* Pickup from warehouse */}
                    <div 
                      className={`border-2 rounded-lg cursor-pointer transition-colors bg-white flex flex-col h-[210px] ${
                        selectedDelivery === 'pickup' ? 'border-red-500' : 'border-gray-200 hover:border-red-500'
                      }`}
                      onClick={() => setSelectedDelivery('pickup')}
                    >
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="mb-2" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px', color: '#262631' }}>Самовывоз со склада</h3>
                          <p style={{ fontFamily: 'Manrope', fontSize: '14px', color: '#262631', lineHeight: '1.3' }}>Забрать завтра 14 июля, после 19:00<br/>или в течение 14 дней</p>
                        </div>
                      </div>
                      <div className={`px-4 py-3 text-center rounded-b-lg ${
                        selectedDelivery === 'pickup' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`} style={{ fontFamily: 'Benzin-Semibold', fontSize: '20px' }}>
                        Бесплатно
                      </div>
                    </div>

                    {/* Pickup from store */}
                    <div 
                      className={`border-2 rounded-lg cursor-pointer transition-colors bg-white flex flex-col h-[210px] ${
                        selectedDelivery === 'store' ? 'border-red-500' : 'border-gray-200 hover:border-red-500'
                      }`}
                      onClick={() => setSelectedDelivery('store')}
                    >
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="mb-2" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px', color: '#262631' }}>Самовывоз с магазина</h3>
                          <p style={{ fontFamily: 'Manrope', fontSize: '14px', color: '#262631', lineHeight: '1.3' }}>Забрать 20 июля</p>
                        </div>
                      </div>
                      <div className={`px-4 py-3 text-center rounded-b-lg ${
                        selectedDelivery === 'store' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`} style={{ fontFamily: 'Benzin-Semibold', fontSize: '20px' }}>
                        Бесплатно
                      </div>
                    </div>

                    {/* Courier delivery */}
                    <div 
                      className={`border-2 rounded-lg cursor-pointer transition-colors bg-white flex flex-col h-[210px] ${
                        selectedDelivery === 'courier' ? 'border-red-500' : 'border-gray-200 hover:border-red-500'
                      }`}
                      onClick={() => setSelectedDelivery('courier')}
                    >
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="mb-2" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px', color: '#262631' }}>Курьерская доставка</h3>
                          <p style={{ fontFamily: 'Manrope', fontSize: '14px', color: '#262631', lineHeight: '1.3' }}>Забрать 20 июля<br/><strong>Бесплатно от 30 001 ₽</strong></p>
                        </div>
                      </div>
                      <div className={`px-4 py-3 text-center rounded-b-lg ${
                        selectedDelivery === 'courier' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`} style={{ fontFamily: 'Benzin-Semibold', fontSize: '20px' }}>
                        1000 ₽
                      </div>
                    </div>

                    {/* Express delivery */}
                    <div 
                      className={`border-2 rounded-lg cursor-pointer transition-colors bg-white flex flex-col h-[210px] ${
                        selectedDelivery === 'express' ? 'border-red-500' : 'border-gray-200 hover:border-red-500'
                      }`}
                      onClick={() => setSelectedDelivery('express')}
                    >
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="mb-2" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px', color: '#262631' }}>Экспресс доставка</h3>
                          <p style={{ fontFamily: 'Manrope', fontSize: '14px', color: '#262631', lineHeight: '1.3' }}>Доставка в течение 2 часов<br/><strong>В пределах МКАД</strong></p>
                        </div>
                      </div>
                      <div className={`px-4 py-3 text-center rounded-b-lg ${
                        selectedDelivery === 'express' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`} style={{ fontFamily: 'Benzin-Semibold', fontSize: '20px' }}>
                        2500 ₽
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup Points */}
                <div className="bg-white">
                  <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Пункт выдачи</h2>
                  
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
                        <div className="flex-1 grid grid-cols-2 gap-4">
                          <div>
                            <h3 style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="font-medium mb-2">Склад №1</h3>
                            <p style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="text-gray-600">
                              Московская область, Красногорский р-н, д. Гольево, улица Центральная ул., с44.
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end gap-1 mb-2">
                              <span style={{ fontFamily: 'Benzin-Regular', fontSize: '14px' }} className="text-green-600 font-medium">В наличии</span>
                              <div className="flex gap-1 ml-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                            <p style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="text-gray-600">пн – пт с 09:30-18:00</p>
                          </div>
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
                        <div className="flex-1 grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="font-medium">Склад №2</span>
                            </div>
                            <p style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="text-gray-600">
                              Московская область, Химки, микрорайон Сходня, улица Некрасова д.2.
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end gap-1 mb-2">
                              <span style={{ fontFamily: 'Benzin-Regular', fontSize: '14px' }} className="text-green-600 font-medium">В наличии</span>
                              <div className="flex gap-1 ml-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                            <p style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="text-gray-600 mb-2">пн – пт с 09:30-18:00</p>
                            <p style={{ fontFamily: 'Manrope', fontSize: '16px' }} className="text-gray-600 text-sm">
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
                <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Способ оплаты</h2>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                  Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-6">
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
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>Оплата картой онлайн</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <img src="/lovable-uploads/64e04db0-d8de-4f05-aeb4-ba846428991a.png" alt="MasterCard" className="h-6" />
                      <img src="/lovable-uploads/d353ace6-d49a-497f-9d37-214687f3fad1.png" alt="Visa" className="h-6" />
                      <img src="/lovable-uploads/6980b75c-3745-4f41-a47d-dfcca8349bae.png" alt="МИР" className="h-6" />
                      <img src="/lovable-uploads/de7bb264-d943-4341-99bd-204c3ba894c8.png" alt="Халва" className="h-6" />
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
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>Картой при получении</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Предоплата не требуется.</p>
                    <div className="flex gap-2">
                      <img src="/lovable-uploads/64e04db0-d8de-4f05-aeb4-ba846428991a.png" alt="MasterCard" className="h-6" />
                      <img src="/lovable-uploads/d353ace6-d49a-497f-9d37-214687f3fad1.png" alt="Visa" className="h-6" />
                      <img src="/lovable-uploads/6980b75c-3745-4f41-a47d-dfcca8349bae.png" alt="МИР" className="h-6" />
                      <img src="/lovable-uploads/de7bb264-d943-4341-99bd-204c3ba894c8.png" alt="Халва" className="h-6" />
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
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>Наличными при получении</span>
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Предоплата не требуется</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                  {/* Invoice Payment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'invoice' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('invoice')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>Счёт на оплату</span>
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Пришлём счёт вам на почту</p>
                  </div>

                  {/* Installment Payment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'installment' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('installment')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>Наложенный платеж</span>
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>Оплата при получении товара на почте</p>
                  </div>

                  {/* Installment */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPayment === 'credit' ? 'border-red-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedPayment('credit')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>В рассрочку</span>
                    </div>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                      Список <Link to="#" className="text-blue-600 underline">банков-партнеров</Link>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: User Data */}
            {currentStep === 3 && (
              <div className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Form */}
                  <div>
                    <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Ваши данные</h2>
                    
                    {/* Customer Type Selection */}
                    <div className="mb-6">
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="customerType"
                            value="individual"
                            checked={customerType === 'individual'}
                            onChange={(e) => setCustomerType(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="text-gray-900">Физическое лицо</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="customerType"
                            value="legal"
                            checked={customerType === 'legal'}
                            onChange={(e) => setCustomerType(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="text-gray-900">Юридическое лицо</span>
                        </label>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName" className="text-gray-700 mb-2 block">ФИО</Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="w-full"
                          placeholder="Введите ваше ФИО"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2 block">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full"
                          placeholder="Введите номер телефона"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2 block">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full"
                          placeholder="Введите электронную почту"
                        />
                      </div>
                    </div>

                    {/* Privacy Policy */}
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={formData.acceptPrivacy}
                          onCheckedChange={(checked) => handleInputChange('acceptPrivacy', checked as boolean)}
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed">
                          Я принимаю условия{' '}
                          <Link to="/privacy-policy" className="text-blue-600 underline">
                            политики конфиденциальности
                          </Link>{' '}
                          и даю{' '}
                          <Link to="#" className="text-blue-600 underline">
                            согласие на обработку своих персональных данных
                          </Link>
                        </label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.subscribeNews}
                          onCheckedChange={(checked) => handleInputChange('subscribeNews', checked as boolean)}
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-700">
                          Хочу подписаться на рассылку новостей WellFitness.
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Account Info */}
                  <div>
                    <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Есть личный кабинет?</h2>
                    <p className="text-red-500 text-sm mb-4">Войдите для отслеживания статуса заказа</p>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Создание учётной записи поможет делать покупки быстрее и удобнее, 
                        не вносить одни и те же данные многократно (адрес доставки, имя, 
                        телефон и т.д.) Вы также, сможете отслеживать статус своего заказа, 
                        пользоваться Закладками, видеть свои предыдущие заказы, 
                        накапливать бонусные баллы (на них тоже можно покупать товары!) 
                        или получать скидку как постоянный покупатель.
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-red-500 text-red-500 hover:bg-red-50"
                      >
                        Войти в личный кабинет
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={currentStep === 3 ? handleOrderSubmit : handleNextStep}
                className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 text-lg font-medium rounded-lg"
              >
                {currentStep === 3 ? 'Оформить заказ' : 'Далее'}
              </Button>
              <Button 
                onClick={handlePrevStep}
                variant="outline" 
                className="!border-[#F53B49] !text-[#F53B49] hover:!bg-[#F53B49] hover:!text-white px-8 py-3 text-lg font-medium rounded-lg !bg-white"
                disabled={currentStep === 1}
              >
                Назад
              </Button>
            </div>
          </div>

          {/* Order Summary */}
           <div className="lg:col-span-1" style={{ width: '389px', marginLeft: 'auto' }}>
             <h2 className="text-gray-900 mb-6 mt-0" style={{ fontFamily: 'Benzin-Semibold', fontSize: '32px' }}>Итого</h2>
             
             <div className="bg-gray-100 rounded-t-lg p-6 mb-6 relative" style={{ 
               borderBottom: '2px dashed #ccc',
               borderBottomLeftRadius: '0',
               borderBottomRightRadius: '0'
             }}>
               {/* Углубления по бокам снизу */}
               <div className="absolute bottom-0 left-3 w-3 h-3 bg-white rounded-full transform translate-y-1/2"></div>
               <div className="absolute bottom-0 right-3 w-3 h-3 bg-white rounded-full transform translate-y-1/2"></div>
               
               <div className="space-y-4 mb-6">
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Товары, 3 шт</span>
                   <span className="font-medium">{total.toLocaleString()} ₽</span>
                 </div>
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Скидка</span>
                   <span className="text-red-500 font-medium">-{discount.toLocaleString()} ₽</span>
                 </div>
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Бонусы</span>
                   <span className="text-green-600 font-medium">+{bonuses} Б</span>
                 </div>
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Доставка</span>
                   <span className="font-medium">Бесплатно</span>
                 </div>
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Сборка</span>
                   <span className="font-medium">{assembly.toLocaleString()} ₽</span>
                 </div>
                 <div className="flex justify-between" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
                   <span className="text-gray-600">Оплата</span>
                   <span className="font-medium">Картой онлайн</span>
                 </div>
                 <div className="border-t border-dashed border-gray-400 pt-4 flex justify-between" style={{ fontFamily: 'Benzin-Semibold', fontSize: '16px' }}>
                   <span>Итого</span>
                   <span>{finalTotal.toLocaleString()} ₽</span>
                 </div>
               </div>
             </div>
             
             <div className="mb-6">
               <div className="flex items-start gap-3">
                 <Checkbox 
                   id="bonusCheckout" 
                   checked={useBonuses}
                   onCheckedChange={(checked) => setUseBonuses(checked as boolean)}
                 />
                 <label htmlFor="bonusCheckout" className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope', fontSize: '16px' }}>
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

      {/* You Viewed Section */}
      <div className="py-8">
        <NewProducts title="Вы смотрели" />
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      
      <Footer />
    </main>
  );
};

export default Checkout;
