
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
    <section className="w-full bg-white py-12 md:py-6">
      <div className="max-w-[1800px] mx-auto px-[30px] md:px-4">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-12 md:mb-6">
          <h2 className="text-4xl md:text-2xl font-bold text-gray-900 font-benzin-semibold">Новости и блог</h2>
          
          <div className="flex items-center gap-4 md:gap-2">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 md:w-8 md:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-6 h-6 md:w-4 md:h-4" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 md:w-8 md:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-6 h-6 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        {/* News Cards Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-3 mb-12 md:mb-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className="flex-shrink-0 w-96 md:w-72 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Image - 2/4 of the card */}
              <div className="w-full h-48 md:h-36">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content - 2/4 of the card */}
              <div className="p-6 md:p-4 h-48 md:h-36 relative">
                {/* News badge and date */}
                <div className="flex justify-between items-start mb-4 md:mb-3">
                  <span className="bg-blue-600 text-white text-sm md:text-xs px-4 md:px-3 py-2 md:py-1 rounded-full font-benzin">
                    Новости
                  </span>
                  <span className="text-gray-500 text-sm md:text-xs font-benzin">
                    {item.date}
                  </span>
                </div>
                
                {/* Title and description */}
                <h3 className="text-lg md:text-sm font-benzin-semibold text-gray-900 mb-3 md:mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-xs text-gray-600 font-benzin line-clamp-4 md:line-clamp-3">
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
            className="border border-[#F53B49] text-[#F53B49] px-8 md:px-4 py-4 md:py-2 rounded hover:bg-[#F53B49] hover:text-white transition-colors inline-block font-benzin text-lg md:text-sm"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlog;
