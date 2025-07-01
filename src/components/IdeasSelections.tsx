
import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IdeasSelections: React.FC = () => {
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
          <h2 className="text-2xl font-bold text-gray-900">Идеи и подборки</h2>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={idea.image} 
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <Link 
            to="/ideas"
            className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IdeasSelections;
