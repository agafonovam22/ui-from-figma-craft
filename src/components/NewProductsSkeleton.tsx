import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewProductsSkeleton: React.FC<{ title?: string }> = ({ title = "Новинки" }) => {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#262631] font-benzin-semibold">{title}</h2>
          
          <div className="flex items-center gap-2">
            <button
              disabled
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center opacity-50"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              disabled
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center opacity-50"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-[10px] mb-6 overflow-x-auto scrollbar-hide pb-2">
          {[...Array(5)].map((_, index) => (
            <div 
              key={index}
              className="relative flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden border animate-pulse"
            >
              {/* Skeleton бейджи */}
              <div className="absolute top-3 left-3 z-10">
                <div className="bg-gray-300 rounded h-6 w-16"></div>
              </div>

              {/* Skeleton кнопки */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>

              {/* Skeleton изображение */}
              <div className="h-48 bg-gray-300"></div>

              {/* Skeleton информация */}
              <div className="p-4">
                {/* Skeleton статус */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded h-4 w-16"></div>
                </div>

                {/* Skeleton название */}
                <div className="bg-gray-300 rounded h-4 w-full mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-3/4 mb-2"></div>

                {/* Skeleton рейтинг */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-gray-300 rounded"></div>
                    ))}
                  </div>
                  <div className="bg-gray-300 rounded h-3 w-8"></div>
                </div>

                {/* Skeleton цена и кнопка */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-300 rounded h-4 w-20"></div>
                  </div>
                  <div className="bg-gray-300 rounded h-8 w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-start">
          <div className="bg-gray-300 rounded h-12 w-48 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default NewProductsSkeleton;