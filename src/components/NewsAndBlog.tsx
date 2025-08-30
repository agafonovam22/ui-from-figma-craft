
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
    <section className="w-full bg-white py-12 md:py-3 lg:py-6">
      <div className="max-w-[1800px] mx-auto px-4 md:px-[15px] lg:px-[30px]">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-6 md:mb-6 lg:mb-12">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900 font-benzin-semibold">Новости и блог</h2>
          
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

        {/* News Cards Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-3 lg:gap-6 mb-6 md:mb-6 lg:mb-12 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className="flex-shrink-0 w-72 md:w-72 lg:w-96 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Image - 2/4 of the card */}
              <div className="w-full h-36 md:h-32 lg:h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content - 2/4 of the card */}
              <div className="p-4 md:p-3 lg:p-6 h-36 md:h-32 lg:h-48 relative">
                {/* News badge and date */}
                <div className="flex justify-between items-start mb-3 md:mb-2 lg:mb-4">
                  <span className="bg-blue-600 text-white text-xs md:text-xs lg:text-sm px-3 md:px-2 lg:px-4 py-1 md:py-1 lg:py-2 rounded-full font-benzin">
                    Новости
                  </span>
                  <span className="text-gray-500 text-xs md:text-xs lg:text-sm font-benzin">
                    {item.date}
                  </span>
                </div>
                
                {/* Title and description */}
                <h3 className="text-sm md:text-sm lg:text-lg font-benzin-semibold text-gray-900 mb-2 md:mb-1 lg:mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-xs lg:text-sm text-gray-600 font-benzin line-clamp-3 md:line-clamp-2 lg:line-clamp-4">
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
            className="border border-[#F53B49] text-[#F53B49] px-4 md:px-4 lg:px-8 py-2 md:py-2 lg:py-4 rounded hover:bg-[#F53B49] hover:text-white transition-colors inline-block font-benzin text-sm md:text-sm lg:text-lg"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlog;
