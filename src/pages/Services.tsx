import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('service-request');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    street: '',
    house: '',
    building: '',
    apartment: '',
    brand: '',
    model: '',
    purchaseDate: '',
    serialNumber: '',
    warrantyNumber: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const tabs = [
    { id: 'service-request', label: 'Заявка на сервис', active: true },
    { id: 'fitness-clubs', label: 'Обслуживание фитнес клубов', active: false },
    { id: 'instructions', label: 'Инструкции', active: false },
    { id: 'video-instructions', label: 'Видео-инструкции', active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            <span>Сервис</span>
            <span className="mx-2">{'>'}</span>
            <span>Оставить заявку на сервис</span>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Оставить заявку на сервис</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content based on active tab */}
          {activeTab === 'service-request' && (
            <div className="flex gap-12 items-stretch">
              {/* Left side - Text and Image */}
              <div className="flex-1 flex flex-col min-h-[800px]">
                <p className="text-gray-600 mb-6">
                  Заполните заявку на сервис онлайн, и мы подберем наиболее удобный для вас вариант обслуживания. 
                  Наши специалисты свяжутся с вами в кратчайшие сроки!
                </p>
                
                <div className="flex-grow"></div>
                
                <img 
                  src="/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png"
                  alt="Женщина тренируется в спортзале"
                  className="w-full max-w-[400px] h-auto object-cover rounded-lg self-end"
                />
              </div>

              {/* Right side - Form (takes about 70% width) */}
              <div className="flex-[0_0_70%]">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Data */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Личные данные</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="ФИО"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                        <Input
                          placeholder="Телефон"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                        <Input
                          placeholder="E-mail"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Адрес</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Input
                          placeholder="Город"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                        <Input
                          placeholder="Улица"
                          value={formData.street}
                          onChange={(e) => handleInputChange('street', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="Дом"
                          value={formData.house}
                          onChange={(e) => handleInputChange('house', e.target.value)}
                        />
                        <Input
                          placeholder="Корпус"
                          value={formData.building}
                          onChange={(e) => handleInputChange('building', e.target.value)}
                        />
                        <Input
                          placeholder="Квартира"
                          value={formData.apartment}
                          onChange={(e) => handleInputChange('apartment', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Details */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Подробности</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <select className="w-full p-3 border border-gray-300 rounded-lg">
                          <option value="">Бренд</option>
                          <option value="technogym">Technogym</option>
                          <option value="precor">Precor</option>
                          <option value="matrix">Matrix</option>
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded-lg">
                          <option value="">Модель</option>
                        </select>
                        <Input
                          placeholder="Дата покупки"
                          type="date"
                          value={formData.purchaseDate}
                          onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Input
                          placeholder="Серийный номер"
                          value={formData.serialNumber}
                          onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                        />
                        <Input
                          placeholder="Номер гарантийного талона"
                          value={formData.warrantyNumber}
                          onChange={(e) => handleInputChange('warrantyNumber', e.target.value)}
                        />
                      </div>
                      <Textarea
                        placeholder="Описание неисправности"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                      />
                    </CardContent>
                  </Card>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <button
                      type="button"
                      className="text-[#F53B49] border border-[#F53B49] px-6 py-3 rounded-lg hover:bg-[#F53B49] hover:text-white transition-colors"
                    >
                      Загрузить файл, не больше 10 МБ
                    </button>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white py-4 text-lg font-semibold"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* Other tab content placeholders */}
          {activeTab !== 'service-request' && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">Содержание этого раздела будет добавлено позже.</p>
            </div>
          )}
        </div>
      </main>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Services;
