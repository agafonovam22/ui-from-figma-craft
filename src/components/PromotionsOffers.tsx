
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromotionsOffers: React.FC = () => {
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
  const promotions = [
    {
      id: 1,
      image: "/lovable-uploads/0fa77e6e-38e3-40e8-8419-cfbfb9662733.png"
    },
    {
      id: 2,
      image: "/lovable-uploads/fee90540-5461-4d18-8804-d09cb68ba59a.png"
    },
    {
      id: 3,
      image: "/lovable-uploads/79b93541-735c-45a5-af13-255eb3573065.png"
    },
    {
      id: 4,
      image: "/lovable-uploads/f1790ac0-4f8f-4057-bc29-10ae0bdca1a1.png"
    }
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl 2xl:text-2xl 4xl:text-2xl font-bold text-gray-900 font-benzin-semibold">Акции и спецпредложения</h2>
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

        {/* Promotions Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-[10px] mb-8 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promotions.map((promo) => (
            <Link
              key={promo.id}
              to="/promotions"
              className="group relative flex-shrink-0 w-64 2xl:w-72 4xl:w-80 rounded-lg overflow-hidden h-80 2xl:h-96 4xl:h-[444px] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img 
                src={promo.image} 
                alt="Акция"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <button className="absolute bottom-4 left-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-all duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                Перейти <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-benzin text-base 2xl:text-sm 4xl:text-sm">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsOffers;
