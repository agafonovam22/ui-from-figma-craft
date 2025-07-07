import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import ProductCard from '@/components/ProductCard';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Catalog: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: '',
    brand: '',
    type: '',
    power: '',
    features: []
  });

  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

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

  const allProducts = Array(16).fill(null).map((_, index) => ({
    ...products[index % 4],
    id: index + 1
  }));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] pt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Каталог</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-64 flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#262631] mb-8">Каталог</h1>
              
              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
                  Цена
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2" />
                    до 500 ₽
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2" />
                    до 20 000 ₽
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2" />
                    до 50 000 ₽
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2" />
                    до 100 000 ₽
                  </label>
                  <button className="text-[#F53B49] text-sm mt-2">Показать все</button>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
                  Бренд
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    True
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    CardioPower
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Spirit
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    DKN
                  </label>
                  <button className="text-[#F53B49] text-sm mt-2">Показать все</button>
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
                  Тип назначения
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Домашние
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Полупрофессиональные
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Профессиональные
                  </label>
                </div>
              </div>

              {/* Power Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
                  Мощность двигателя
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>1,25CHP</span>
                    <span>2x 5600 л.с</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs">до 3 л.с</span>
                    <div className="flex-1 h-1 bg-gray-200 rounded">
                      <div className="w-1/3 h-full bg-[#F53B49] rounded"></div>
                    </div>
                    <span className="text-xs">3-6 л.с</span>
                  </div>
                </div>
              </div>

              {/* Trainer Type Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#262631] mb-4 flex items-center justify-between">
                  Тип тренажера
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="radio" name="trainer-type" className="mr-2" />
                    Магнитный
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="trainer-type" className="mr-2" />
                    Полупрофессиональный
                  </label>
                </div>
              </div>

              {/* Apply Filters Button */}
              <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-4">
                Применить
              </Button>
              
              <Button variant="outline" className="w-full">
                Сбросить
              </Button>

              {/* Ad Banner */}
              <div className="mt-8 bg-gray-800 text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Место для рекламы</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                  Перейти →
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Hero Banner */}
              <div className="bg-gradient-to-r from-white to-red-100 rounded-lg p-8 mb-8 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="max-w-md">
                    <div className="text-sm text-[#F53B49] font-medium mb-2">ZERO RUNNER</div>
                    <h2 className="text-3xl font-bold text-[#262631] mb-4">
                      Бег с нулевой ударной нагрузкой на суставы
                    </h2>
                    <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                      Узнать больше
                    </Button>
                  </div>
                  <div className="absolute right-0 top-0 w-96 h-full">
                    <img 
                      src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png" 
                      alt="Treadmill" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Dots indicator */}
                <div className="flex space-x-2 mt-4">
                  <div className="w-2 h-2 bg-[#F53B49] rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Search and Filters Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Поиск"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Сортировать:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 text-sm"
                    >
                      <option value="popular">По популярности</option>
                      <option value="price-low">По цене (по возрастанию)</option>
                      <option value="price-high">По цене (по убыванию)</option>
                      <option value="rating">По рейтингу</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100">Все категории</Badge>
                <Badge variant="secondary" className="bg-gray-100">Акции</Badge>
                <Badge variant="secondary" className="bg-gray-100">Новинки</Badge>
                <Badge variant="secondary" className="bg-gray-100">Хит продаж</Badge>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>Массопоказатель весе</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>Длина полотна, см</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>Ширина полотна, см</option>
                </select>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  Соответует 1246 товарам
                </div>
                <div className="text-sm text-gray-600">
                  Производительность ▲
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} product={product} variant="catalog" />
                ))}
              </div>

              {/* Ad Banner */}
              <div className="bg-gray-800 text-white p-8 rounded-lg mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Место для рекламы</h3>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                  <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                    Перейти →
                  </Button>
                </div>
              </div>

              {/* More Products */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {allProducts.slice(0, 8).map((product) => (
                  <ProductCard key={`second-${product.id}`} product={product} variant="catalog" />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mb-8">
                <Button variant="outline" className="px-8 py-3">
                  Показать еще
                </Button>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  ‹
                </button>
                <button className="px-4 py-2 bg-[#F53B49] text-white rounded">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">4</button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </>
  );
};

export default Catalog;
