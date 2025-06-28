
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from 'react-router-dom';

const NewsAndBlogPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = ['Все', 'Новости', 'Блог'];

  const newsItems = [
    {
      id: 1,
      type: 'Новости',
      date: '30 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'large'
    },
    {
      id: 2,
      type: 'Новости',
      date: '12 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium'
    },
    {
      id: 3,
      type: 'Блог',
      date: '10 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small'
    },
    {
      id: 4,
      type: 'Новости',
      date: '8 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium'
    },
    {
      id: 5,
      type: 'Блог',
      date: '5 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small'
    },
    {
      id: 6,
      type: 'Новости',
      date: '3 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'large'
    },
    {
      id: 7,
      type: 'Блог',
      date: '1 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium'
    },
    {
      id: 8,
      type: 'Новости',
      date: '28 Ноября 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small'
    }
  ];

  const filteredItems = selectedFilter === 'Все' 
    ? newsItems 
    : newsItems.filter(item => item.type === selectedFilter);

  const getCardClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-64';
      case 'medium':
        return 'h-48';
      case 'small':
      default:
        return 'h-32';
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
              <BreadcrumbPage>Новости и блог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Новости и блог</h1>
        
        {/* Filters */}
        <div className="flex gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* News Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${getCardClasses(item.size)}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${getImageHeight(item.size)}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                {/* Category and Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'Новости' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mb-8">
          <button className="border border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать еще
          </button>
        </div>

        {/* Pagination */}
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#" 
                isActive={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#"
                isActive={currentPage === 2}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(2);
                }}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink 
                href="#"
                isActive={currentPage === 3}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(3);
                }}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < 10) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default NewsAndBlogPage;
