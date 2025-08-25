import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductCharacteristicsListProps {
  characteristics: any;
  onShowAllClick?: () => void;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicsListProps> = ({ 
  characteristics, 
  onShowAllClick 
}) => {
  return (
    <div className="space-y-2 pb-4 border-b border-gray-300 font-manrope">
      {characteristics ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Тип продукции:</span>
            <span className="font-medium">Беговая дорожка</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Бренд:</span>
            <span className="font-medium">TRUE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Назначение:</span>
            <span className="font-medium">
              {characteristics['Тип назначения'] || 'Домашние'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Тип двигателя:</span>
            <span className="font-medium">Постоянного тока DC</span>
          </div>  
          <div className="flex justify-between">
            <span className="text-muted-foreground">Мощность двигателя, л.с.:</span>
            <span className="font-medium">1.5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Вес пользователя, кг:</span>
            <span className="font-medium">
              {characteristics['Вес пользователя, кг'] || 'Не указан'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Беговое полотно, см:</span>
            <span className="font-medium">
              {characteristics['Беговое полотно, см'] || 'Не указано'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Максимальная скорость, км/ч:</span>
            <span className="font-medium">
              {characteristics['Максимальная скорость, км/ч'] || '19'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Угол наклона:</span>
            <span className="font-medium">
              {characteristics['Макс. угол наклона, %'] ? `${characteristics['Макс. угол наклона, %']}%` : '15%'}
            </span>
          </div>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-sm py-4">
          Характеристики товара недоступны
        </div>
      )}
      <Button 
        variant="link" 
        className="p-0 h-auto text-red-500 text-xs font-benzin mt-2"
        onClick={onShowAllClick}
      >
        Все характеристики →
      </Button>
    </div>
  );
};

export default ProductCharacteristicsList;