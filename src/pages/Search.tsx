import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsAndBlog from '../components/NewsAndBlog';
import EmailSubscription from '../components/EmailSubscription';
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState('товары');

  const tabs = [
    { id: 'товары', label: 'Товары', count: 10 },
    { id: 'новости', label: 'Новости', count: 10 },
    { id: 'статьи', label: 'Статьи', count: 10 },
    { id: 'блоги', label: 'Блоги', count: 10 },
    { id: 'идеи', label: 'Идеи и подборки', count: 10 }
  ];

  // Убираем хардкод товаров - показываем только реальные товары из API
  const products = [];

  // Ideas from IdeasSelections component
  const ideas = [
    {
      id: 1,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "Перейти",
      image: "/lovable-uploads/2be1b7b3-024f-49cd-a6ed-c3b6797c3118.png"
    },
    {
      id: 2,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/a9a3aea2-cbe4-49f2-81a9-cef25eaa7fb4.png"
    },
    {
      id: 3,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/b5c5bae5-0847-4917-87f3-3015c813643b.png"
    },
    {
      id: 4,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/e32f0db3-70c9-4381-bb50-39cb86857ad6.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-gray-700">Главная</a>
          <span>›</span>
          <span>Поиск</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Поиск</h1>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Товары</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {products.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt="Товар"
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
          
          <div className="flex justify-start">
            <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin">
              Показать все товары
            </button>
          </div>
        </div>

        {/* Ideas and Selections Section */}
        <div className="mb-12">
          {/* Header with navigation */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Идеи и подборки</h2>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="rounded-lg overflow-hidden h-[444px] hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img 
                  src={idea.image} 
                  alt={idea.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Show All Button */}
          <div className="flex justify-start">
            <Link 
              to="/ideas"
              className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors"
            >
              Показать все
            </Link>
          </div>
        </div>
      </div>

      {/* News and Blog Section */}
      <NewsAndBlog />
      
      {/* Email Subscription Banner */}
      <EmailSubscription />
      
      {/* Spacer */}
      <div className="h-[70px]"></div>

      <Footer />
    </div>
  );
};

export default Search;
