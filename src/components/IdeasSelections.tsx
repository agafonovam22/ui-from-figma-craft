import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const IdeasSelections: React.FC = () => {
  const ideas = [
    {
      id: 1,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "Перейти",
      image: "/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png"
    },
    {
      id: 2,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png"
    },
    {
      id: 3,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/f99f3115-1f00-49f0-af93-08b6318f8cf4.png"
    },
    {
      id: 4,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png"
    }
  ];

  return (
    <section className="w-full bg-white py-12">
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
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={idea.image} 
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{idea.title}</h3>
                  <p className="text-white/90 text-sm mb-3">{idea.subtitle}</p>
                  
                  {idea.id === 1 ? (
                    <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit">
                      {idea.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="bg-[#F53B49] text-white px-4 py-2 rounded font-semibold hover:bg-[#e63946] transition-colors w-fit">
                      {idea.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeasSelections;
