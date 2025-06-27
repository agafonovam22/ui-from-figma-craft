
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsAndBlog: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      type: 'Новости',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      isActive: true
    },
    {
      id: 2,
      type: 'Блог',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      isActive: false
    },
    {
      id: 3,
      type: 'Новости',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      isActive: false
    },
    {
      id: 4,
      type: 'Блог',
      date: '12 Января 2024',
      title: 'Wellfitness PRO в Сколково 2023',
      description: 'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес-Россия: бизнес-форум, фитнес-конвенция, выставка.',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png',
      isActive: false
    }
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Новости и блог</h2>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    {item.isActive && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                    <span>{item.date}</span>
                  </div>
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

        {/* Show All Button */}
        <div className="text-center">
          <button className="border border-[#F53B49] text-[#F53B49] px-8 py-2 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlog;
