import React from 'react';
import { Button } from "@/components/ui/button";

const CatalogBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-white to-red-100 rounded-lg p-8 mb-8 relative overflow-hidden h-[319px] flex items-center">
      <div className="flex items-center justify-between">
        <div className="max-w-md">
          <div className="text-xs text-[#F53B49] font-medium mb-2">ZERO RUNNER</div>
          <h2 className="text-xl font-bold text-[#262631] mb-4">
            Бег с нулевой ударной нагрузкой на суставы
          </h2>
          <Button size="sm" className="bg-[#F53B49] hover:bg-[#e63946] text-white">
            Узнать больше
          </Button>
        </div>
        <div className="absolute right-0 top-0 w-96 h-full">
          <img 
            src="/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png" 
            alt="Treadmill" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        <div className="w-2 h-2 bg-[#F53B49] rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CatalogBanner;