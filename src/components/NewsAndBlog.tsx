
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const newsItems = [
    {
      id: 1,
      type: 'Блог',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/4de8ac86-4117-4c20-8d99-e0583f469b1e.png',
      isActive: true
    },
    {
      id: 2,
      type: 'Новости',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/43a8ceb6-b7c1-4678-9a74-6ecb281cd53c.png',
      isActive: false
    },
    {
      id: 3,
      type: 'Блог',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/ef69eacd-d803-450f-abea-e857771f2e59.png',
      isActive: false
    },
    {
      id: 4,
      type: 'Новости',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/4de8ac86-4117-4c20-8d99-e0583f469b1e.png',
      isActive: false
    }
  ];

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
            <div 
              key={item.id} 
              className="flex-shrink-0 w-80 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-full h-[300px]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
