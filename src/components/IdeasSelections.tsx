
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IdeasSelections: React.FC = () => {
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
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Лучшие предложения</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Ideas Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 mb-8 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="flex-shrink-0 w-80 rounded-lg overflow-hidden h-[444px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={idea.image} 
                alt={idea.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeasSelections;
