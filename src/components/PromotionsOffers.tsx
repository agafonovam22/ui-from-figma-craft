
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromotionsOffers: React.FC = () => {
  const promotions = [
    {
      id: 1,
      type: "Специальная цена",
      title: "Скидка на велотренажер CardioPower B35",
      discount: "-15%",
      originalPrice: "5 000₽",
      currentPrice: "от 29 990 ₽",
      bgColor: "bg-blue-500",
      image: "/lovable-uploads/d294b845-a5d4-43a0-be83-034677d44ada.png"
    },
    {
      id: 2,
      type: "Беспроцентная рассрочка",
      title: "На все беговые дорожки до конца марта",
      bgColor: "bg-gray-700",
      showPercent: true,
      image: "/lovable-uploads/374fac70-02ad-4d4b-ab99-8575d92cc3d0.png"
    },
    {
      id: 3,
      type: "Специальная цена",
      title: "Скидка на велотренажер CardioPower B35",
      discount: "-15%",
      originalPrice: "5 000₽",
      currentPrice: "от 29 990 ₽",
      bgColor: "bg-green-500",
      image: "/lovable-uploads/8110153d-5476-4d29-b92d-d576ab40dd7c.png"
    },
    {
      id: 4,
      type: "Специальная цена",
      title: "Скидка на велотренажер CardioPower B35",
      bgColor: "bg-red-500",
      showButton: true,
      image: "/lovable-uploads/3d02e2f8-84b4-4cd8-9734-a4087812b608.png"
    }
  ];

  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Акции и спецпредложения</h2>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`${promo.bgColor} rounded-lg p-6 text-white relative overflow-hidden h-[354px]`}
            >
              {/* Background Image */}
              {promo.image && (
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src={promo.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Special % symbol for рассрочка */}
              {promo.showPercent && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
                  <span className="text-8xl font-bold">%</span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{promo.type}</h3>
                  <p className="text-sm opacity-90">{promo.title}</p>
                </div>

                {/* Bottom content */}
                <div className="mt-auto">
                  {promo.discount && promo.currentPrice && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm font-semibold">
                          {promo.discount}
                        </span>
                        <span className="text-sm opacity-80 line-through">
                          {promo.originalPrice}
                        </span>
                      </div>
                      <div className="text-lg font-bold">{promo.currentPrice}</div>
                    </div>
                  )}

                  {promo.showButton && (
                    <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                      Перейти
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}

                  {!promo.showButton && !promo.currentPrice && (
                    <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                      Перейти
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-start">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
            Показать все
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsOffers;
