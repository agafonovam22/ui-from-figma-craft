
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getHomePageNews } from '@/data/newsData';

const NewsAndBlog: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const newsItems = getHomePageNews();

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 font-benzin-semibold">Новости и блог</h2>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* News Cards Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-[10px] mb-8 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Image - 3/4 of the card */}
              <div className="w-full h-[240px]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content - 1/4 of the card */}
              <div className="p-4 h-[80px] relative">
                {/* News badge and date */}
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-benzin">
                    Новости
                  </span>
                  <span className="text-gray-500 text-xs font-benzin">
                    {item.date}
                  </span>
                </div>
                
                {/* Title and description */}
                <h3 className="text-sm font-benzin-semibold text-gray-900 mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 font-benzin line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Button - Left aligned */}
        <div className="text-left">
          <Link
            to="/news"
            className="border border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors inline-block font-benzin"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlog;
