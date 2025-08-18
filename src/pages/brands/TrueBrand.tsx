import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const TrueBrand: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    type: true,
    power: true,
    trainer: true
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };
  
  const products = [
    {
      id: 1,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 124,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Новинка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: null,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviews: 89,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Хит продаж',
      badgeColor: 'bg-orange-500',
      isAvailable: false,
      hasComparison: true,
      inStock: false
    },
    {
      id: 3,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviews: 67,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 156,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    }
  ];

  const allProducts = Array(8).fill(null).map((_, index) => ({
    ...products[index % 4],
    id: index + 1
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
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
                <BreadcrumbLink asChild>
                  <Link to="/brands">Бренды</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>TRUE</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <img 
              src="/lovable-uploads/35e36954-8eff-4c7e-b767-25d10bdc4d5f.png"
              alt="TRUE"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* First Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src="/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png"
                  alt="Спортивные тренировки"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Американская мечта в спортивном зале
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    TRUE – это история о том, как американские инженеры превратили тренировки в настоящее искусство. Каждый тренажер создается с мыслью о том, что спорт должен быть не только эффективным, но и комфортным. Биомеханические исследования, передовые материалы и годы тестирований – вот что делает каждый час тренировок максимально продуктивным.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Вдохновленные профессиональным спортом
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Когда профессиональные спортсмены выбирают оборудование, они знают: каждая деталь важна. TRUE создает тренажеры, используя опыт ведущих атлетов мира. Здесь нет компромиссов – только технологии, которые помогают достигать новых высот в спорте.
                  </p>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/a5db2b44-b24d-41b0-a34c-fa4327bfd59e.png"
                  alt="Профессиональный спорт"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Third Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src="/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png"
                  alt="Качественное оборудование"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Почему выбирают TRUE
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-benzin text-gray-900 mb-2">Лидер в индустрии</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      50+ лет на рынке, собственные инженерные разработки и строгий контроль производства
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-benzin text-gray-900 mb-2">Технологии и безопасность</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      передовые системы амортизации, износостойкие компоненты и интеллектуальное управление
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-benzin text-gray-900 mb-2">Экономия на обслуживании</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      минимальные затраты благодаря надежной конструкции и доступности запчастей
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Инвестиция в долгосрочный результат
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    TRUE – это не просто тренажеры, это инвестиция в долгосрочный результат.
                    Наше оборудование выбирают, потому что оно:
                    Работает безотказно – даже при интенсивной эксплуатации;
                    Сохраняет актуальность – регулярные апгрейды и совместимость с новыми технологиями;
                    Обеспечивает максимальный комфорт – продуманная эргономика снижает нагрузку на суставы.
                  </p>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/a5db2b44-b24d-41b0-a34c-fa4327bfd59e.png"
                  alt="Долгосрочная инвестиция"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fifth Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src="/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png"
                  alt="Передовые технологии"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Технологии будущего уже сегодня
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    В лабораториях TRUE рождаются решения, которые изменят представление о фитнесе. Интеллектуальные системы нагрузки, анализ биометрических данных в реальном времени, персонализированные программы тренировок – все это уже реальность для пользователей TRUE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sixth Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Доверие профессионалов по всему миру
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    От олимпийских центров подготовки до элитных фитнес-клубов – оборудование TRUE выбирают там, где результат не может быть случайностью. Более чем в 50 странах мира наши тренажеры помогают достигать спортивных целей миллионам людей каждый день.
                  </p>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/a5db2b44-b24d-41b0-a34c-fa4327bfd59e.png"
                  alt="Международное признание"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seventh Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src="/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png"
                  alt="Забота о клиентах"
                  className="w-full object-cover rounded-lg"
                  style={{ height: '300px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  Сервис как образ жизни
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Покупка тренажера TRUE – это начало долгосрочных отношений. Наша команда сервиса работает по принципу "клиент прежде всего". Быстрая диагностика, оригинальные запчасти, обучение персонала – мы делаем все, чтобы ваше оборудование работало безупречно годами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border p-6 space-y-6">
                <h3 className="text-lg font-benzin text-gray-900">Фильтры</h3>
                
                {/* Price Filter */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFilter('price')}
                  >
                    <h4 className="font-medium text-gray-900">Цена</h4>
                    {expandedFilters.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {expandedFilters.price && (
                    <div className="mt-4">
                      <div className="flex items-center gap-4 mb-4">
                        <input 
                          type="number" 
                          placeholder="От" 
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        />
                        <input 
                          type="number" 
                          placeholder="До" 
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        />
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100000}
                        step={1000}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>

                <Separator />

                {/* Type Filter */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFilter('type')}
                  >
                    <h4 className="font-medium text-gray-900">Тип оборудования</h4>
                    {expandedFilters.type ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {expandedFilters.type && (
                    <div className="mt-4 space-y-2">
                      {['Беговые дорожки', 'Велотренажеры', 'Гребные тренажеры', 'Эллиптические тренажеры', 'Силовые тренажеры'].map((type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <Separator />

                {/* Power Filter */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFilter('power')}
                  >
                    <h4 className="font-medium text-gray-900">Источник питания</h4>
                    {expandedFilters.power ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {expandedFilters.power && (
                    <div className="mt-4 space-y-2">
                      {['Электрический', 'Механический', 'Магнитный'].map((power) => (
                        <label key={power} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-600">{power}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <Separator />

                {/* Trainer Type Filter */}
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFilter('trainer')}
                  >
                    <h4 className="font-medium text-gray-900">Тип тренажера</h4>
                    {expandedFilters.trainer ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {expandedFilters.trainer && (
                    <div className="mt-4 space-y-2">
                      {['Кардио', 'Силовой', 'Функциональный'].map((trainer) => (
                        <label key={trainer} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-600">{trainer}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <Button className="w-full">Применить фильтры</Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Показано 1-8 из 24 товаров</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Сортировать:</span>
                  <select className="px-3 py-1 border rounded text-sm">
                    <option>По популярности</option>
                    <option>По цене (возрастание)</option>
                    <option>По цене (убывание)</option>
                    <option>По рейтингу</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Предыдущая
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Следующая
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <IdeasSelections />
      <EmailSubscription />
      <Footer />
    </div>
  );
};

export default TrueBrand;