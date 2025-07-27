import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Truck, Wrench, CreditCard, Clock, Home, ChevronRight } from 'lucide-react';
import EmailSubscription from '@/components/EmailSubscription';
import PhotoSwiper from '@/components/PhotoSwiper';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

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

  // Form data for fitness clubs tab
  const [fitnessFormData, setFitnessFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    organization: ''
  });

  // Video instructions filter state
  const [selectedFilter, setSelectedFilter] = useState('Все');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFitnessInputChange = (field: string, value: string) => {
    setFitnessFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleFitnessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Fitness form submitted:', fitnessFormData);
  };

  const tabs = [
    { id: 'service-request', label: 'Заявка на сервис', active: true },
    { id: 'fitness-clubs', label: 'Обслуживание фитнес клубов', active: false },
    { id: 'services', label: 'Услуги', active: false },
    { id: 'instructions', label: 'Инструкции', active: false },
    { id: 'video-instructions', label: 'Видео-инструкции', active: false }
  ];

  const filterCategories = [
    'Все',
    'Беговые дорожки',
    'Эллиптические тренажеры',
    'Велотренажеры',
    'Гребные тренажеры',
    'Силовые тренажеры'
  ];

  const videoInstructions = [
    {
      id: 1,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 2,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 3,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 4,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 5,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 6,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 7,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 8,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    },
    {
      id: 9,
      title: 'Видео инструкция тренажеры Nautilus',
      thumbnail: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Доставка',
      description: 'У нас работают высококвалифицированные сотрудники со стажем более 5 лет. Мы оперативно доставляем заказы наших клиентов в любую точку г. Москвы и Санкт-Петербурга, а также других регионов России.',
      backgroundImage: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
      buttonText: 'Перейти'
    },
    {
      id: 2,
      title: 'Сборка',
      description: 'Наша компания оказывает полный спектр услуг по подъему и сборке оборудования. Сотрудники оснащены всем необходимым инструментом и имеют огромный опыт.',
      backgroundImage: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      buttonText: 'Перейти'
    },
    {
      id: 3,
      title: 'Различные способы оплаты',
      description: 'У всех экипажей нашей компании присутствуют терминалы для безналичной оплаты, вы можете оплатить свою покупку различными способами: наличными, банковской картой, через QR код или оплатить товар по счету.',
      backgroundImage: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      buttonText: 'Перейти'
    },
    {
      id: 4,
      title: 'Рассрочка',
      description: 'Вы можете оформить рассрочку сроком до 12 месяцев, без переплат, без первоначального взноса, оставьте заявку и менеджеры банков-партнеров свяжутся с вами.',
      backgroundImage: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
      buttonText: 'Перейти'
    },
    {
      id: 5,
      title: 'Демонтаж и переезд',
      description: 'Также вы можете заказать услуги по перевозке спортивного оборудования с полным демонтажом и сборкой на новом месте. Хотите перевезти свой тренажер в новую квартиру или загородный дом - это к нам!',
      backgroundImage: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
      buttonText: 'Перейти'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Сервис</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {activeTab === 'fitness-clubs' ? 'Обслуживание фитнес клубов' : 
             activeTab === 'video-instructions' ? 'Видео-инструкции' :
             activeTab === 'services' ? 'Услуги' :
             'Оставить заявку на сервис'}
          </h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 h-[52px] rounded-lg font-medium transition-colors border ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white border-[#F53B49]'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Request Tab Content - keep existing code */}
          {activeTab === 'service-request' && (
            <div className="flex gap-12 items-stretch">
              <div className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 font-manrope">
                  Для быстрого решения вашего вопроса просим внимательно заполнить все поля формы.
                </p>
                <p className="text-gray-600 mb-6 font-manrope">
                  Особенно важно указать серийный номер оборудования: это поможет нам оперативно обработать вашу заявку. Если номер найти не удалось, просто оставьте соответствующее поле пустым — мы обязательно вам поможем!
                </p>
                
                <div className="mt-[145px]">
                  <img 
                    src="/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png"
                    alt="Женщина тренируется в спортзале"
                    className="w-full max-w-[400px] h-auto object-cover rounded-lg"
                  />
                  
                  {/* Progress indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="h-1 w-8 bg-[#F53B49] rounded-full"></div>
                    <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
                    <div className="h-1 w-8 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex-[0_0_70%]">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Personal Data */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#5C6476'}}>Личные данные</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#5C6476'}}>Адрес</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold mb-3" style={{color: '#5C6476'}}>Подробности</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                      <Input
                        placeholder="Бренд"
                        value={formData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                      />
                      <Input
                        placeholder="Модель"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                      />
                      <Input
                        placeholder="Дата покупки"
                        type={formData.purchaseDate ? "date" : "text"}
                        value={formData.purchaseDate}
                        onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                        onFocus={(e) => {
                          e.target.type = "date";
                          e.target.showPicker();
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.type = "text";
                          }
                        }}
                      />
                    </div>
                    <div className="space-y-3">
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
                      rows={3}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="bg-transparent border border-[#F53B49] text-[#F53B49] px-6 py-2 rounded-lg hover:bg-[#F53B49] hover:text-white transition-colors"
                    >
                      Загрузить файл, не больше 10 МБ
                    </button>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start">
                    <Button 
                      type="submit"
                      className="bg-[#F53B49] hover:bg-[#e63946] text-white py-3 text-lg font-semibold"
                    >
                      Отправить заявку
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Fitness Clubs Tab Content - keep existing code */}
          {activeTab === 'fitness-clubs' && (
            <div className="space-y-12">
              {/* First section with image and text */}
              <div className="flex gap-8 items-center">
                <div className="flex-1">
                  <img 
                    src="/lovable-uploads/fcb1f59e-5de5-4faa-b202-809020318b96.png"
                    alt="Техник обслуживает тренажер"
                    className="w-full h-[290px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    <span style={{color: '#778093'}}>Обслуживание</span> фитнес-клубов
                  </h2>
                  <div className="grid grid-cols-2 gap-6 text-gray-600 font-manrope">
                    <div>
                      <p className="mb-4">
                        Для владельцев фитнес-клубов профессиональное обслуживание оборудования – это не просто формальность, а разумная инвестиция в долгосрочную экономию. В отличие от начинающих предпринимателей, крупные сети и опытные клубы хорошо знают: регулярный сервис сокращает затраты на дорогостоящий ремонт и продлевает срок службы тренажеров.
                      </p>
                    </div>
                     <div>
                       <p className="mb-4">
                         Как и в автомобильной индустрии, гарантийные обязательства в фитнес-сфере строго соблюдаются ведущими производителями. Однако ответственность за правильную эксплуатацию и своевременное техническое обслуживание лежит на владельце оборудования.
                       </p>
                     </div>
                   </div>
                </div>
              </div>

              {/* Second section with text and images */}
              <div className="flex gap-8 items-center">
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 font-manrope">
                    Закажите расчёт стоимости обслуживания и получите индивидуальное предложение с оптимальным балансом цены и качества. Наш подход не только сэкономит ваш бюджет на ремонтах, но и поможет сохранить оборудование в идеальном состоянии годами. Например, при правильном уходе беговые дорожки могут отработать весь срок без замены полотна!
                  </p>
                  <p className="text-gray-600 mb-4 font-manrope">
                    Доверьте технику профессионалам — и сосредоточьтесь на развитии бизнеса!
                  </p>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-4">
                    <img 
                      src="/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png"
                      alt="Спортивное оборудование"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img 
                      src="/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png"
                      alt="Спортивное оборудование"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img 
                      src="/lovable-uploads/949b1384-82af-4a1c-bbc2-e4f225491933.png"
                      alt="Спортивное оборудование"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Photo Swiper Gallery */}
              <div className="mb-12">
                <PhotoSwiper 
                  images={[
                    '/lovable-uploads/6bdcf469-03ab-4f7b-83a0-9cb9dcd6a4c2.png',
                    '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png',
                    '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png',
                    '/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png'
                  ]}
                  autoplay={true}
                  autoplayInterval={5000}
                />
              </div>

              {/* Contact form section */}
              <div className="flex gap-8 items-center bg-gray-50 rounded-lg p-8 h-[300px]">
                <div className="flex-1 flex items-center">
                  <div className="bg-white rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      <span style={{color: '#778093'}}>Оставьте</span> заявку!
                    </h2>
                    <form onSubmit={handleFitnessSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="ФИО"
                          value={fitnessFormData.fullName}
                          onChange={(e) => handleFitnessInputChange('fullName', e.target.value)}
                        />
                        <Input
                          placeholder="Телефон"
                          value={fitnessFormData.phone}
                          onChange={(e) => handleFitnessInputChange('phone', e.target.value)}
                        />
                        <Input
                          placeholder="E-mail"
                          type="email"
                          value={fitnessFormData.email}
                          onChange={(e) => handleFitnessInputChange('email', e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Город"
                          value={fitnessFormData.city}
                          onChange={(e) => handleFitnessInputChange('city', e.target.value)}
                        />
                        <Input
                          placeholder="Организация"
                          value={fitnessFormData.organization}
                          onChange={(e) => handleFitnessInputChange('organization', e.target.value)}
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 font-semibold rounded-lg"
                      >
                        Заказать звонок
                      </Button>
                    </form>
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          )}

          {/* Instructions Tab Content Placeholder */}
          {activeTab === 'instructions' && (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Инструкции</h2>
              <p className="text-gray-600">Содержание этого раздела будет добавлено позже.</p>
            </div>
          )}

          {/* Services Tab Content */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div 
                    key={service.id} 
                    className="relative rounded-lg overflow-hidden h-64 group cursor-pointer"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                    <div className="relative h-full p-6 flex flex-col text-white">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                      </p>
                      <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors self-start">
                        {service.buttonText} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Instructions Tab Content */}
          {activeTab === 'video-instructions' && (
            <div className="flex gap-8">
              {/* Filter Sidebar */}
              <div className="w-64 flex-shrink-0">
                {/* Filter Categories and Buttons in Gray Container */}
                <div className="bg-gray-100 p-4 rounded space-y-4">
                  {/* Filter Categories */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">Фильтр</h3>
                    <div className="space-y-1">
                      {filterCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedFilter(category)}
                          className={`w-full text-left px-3 py-1.5 rounded transition-colors text-xs ${
                            selectedFilter === category
                              ? 'bg-gray-800 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white text-sm py-2">
                      Применить
                    </Button>
                    <Button variant="outline" className="w-full text-sm py-2">
                      Сбросить
                    </Button>
                  </div>
                </div>

                {/* Advertisement Block - Outside the gray container */}
                <div className="bg-gray-800 text-white p-6 rounded" style={{ marginTop: '20px' }}>
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'Benzin-Semibold',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      color: '#FFF'
                    }}
                  >
                    Место для рекламы
                  </h3>
                  <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white flex items-center gap-2">
                    Перейти <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Video Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-[10px]">
                  {videoInstructions.map((video) => (
                    <div key={video.id} className="relative group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full object-cover transition-transform group-hover:scale-105" style={{ height: '216px' }}
                        />
                        {/* White container overlay at bottom with title and play button */}
                        <div className="absolute bottom-[5px] left-[5px] right-[5px] bg-white p-4 flex items-center justify-between rounded">
                          <h4 className="font-medium text-gray-900 flex-1">{video.title}</h4>
                          <div className="rounded-full p-4 ml-4" style={{backgroundColor: 'rgba(245, 59, 73, 0.3)'}}>
                            <Play className="w-4 h-4 text-[#F53B49] fill-current" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Services;
