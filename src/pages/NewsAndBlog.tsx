import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Search } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [selectedFilter, setSelectedFilter] = useState('Новости');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('популярности');

  const filters = ['Новости', 'Блог'];

  const newsItems = [
    {
      id: 1,
      type: 'Новости',
      date: '30 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'large',
      slug: 'wellfitness-pro-skolkovo-2023'
    },
    {
      id: 2,
      type: 'Новости',
      date: '12 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium',
      slug: 'wellfitness-pro-skolkovo-2023-2'
    },
    {
      id: 3,
      type: 'Блог',
      date: '10 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small',
      slug: 'wellfitness-pro-skolkovo-2023-3'
    },
    {
      id: 4,
      type: 'Новости',
      date: '8 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium',
      slug: 'wellfitness-pro-skolkovo-2023-4'
    },
    {
      id: 5,
      type: 'Блог',
      date: '5 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small',
      slug: 'wellfitness-pro-skolkovo-2023-5'
    },
    {
      id: 6,
      type: 'Новости',
      date: '3 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'large',
      slug: 'wellfitness-pro-skolkovo-2023-6'
    },
    {
      id: 7,
      type: 'Блог',
      date: '1 Декабря 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'medium',
      slug: 'wellfitness-pro-skolkovo-2023-7'
    },
    {
      id: 8,
      type: 'Новости',
      date: '28 Ноября 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие фитнес-России: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      size: 'small',
      slug: 'wellfitness-pro-skolkovo-2023-8'
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

        <h1 className="text-[48px] font-bold text-gray-900 mb-8">Новости и блог</h1>
        
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
                {selectedFilter === filter && (
                  <button 
                    className="ml-2 text-white hover:text-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFilter('Новости');
                    }}
                  >
                    ×
                  </button>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 whitespace-nowrap">Сортировать:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="популярности">По популярности</SelectItem>
                  <SelectItem value="дате">По дате</SelectItem>
                  <SelectItem value="названию">По названию</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max mb-12">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${getCardClasses(item.size)}`}
            >
              <div className={`relative overflow-hidden ${getImageHeight(item.size)}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
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
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mb-8">
          <button className="border border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать еще
          </button>
        </div>

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
