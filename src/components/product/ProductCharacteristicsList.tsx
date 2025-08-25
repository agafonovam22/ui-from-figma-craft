import React from 'react';
import { Button } from '@/components/ui/button';
import { extractBrandFromProductName } from '@/utils/extractBrand';

interface ProductCharacteristicsListProps {
  characteristics: any;
  productName: string;
  onShowAllClick?: () => void;
}

const ProductCharacteristicsList: React.FC<ProductCharacteristicsListProps> = ({ 
  characteristics,
  productName,
  onShowAllClick 
}) => {
  // Извлекаем бренд из названия товара
  const brand = extractBrandFromProductName(productName);
  
  // Извлекаем тип продукции (первые два слова из названия)
  const productType = productName.split(' ').slice(0, 2).join(' ');

  return (
    <div className="space-y-2 pb-4 font-manrope">
      {characteristics ? (
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Тип продукции:</span>
              <span className="font-medium">{productType}</span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Назначение:</span>
              <span className="font-medium">
                {characteristics['Тип назначения'] || 'Домашние'}
              </span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Мощность двигателя, л.с.:</span>
              <span className="font-medium">1.5</span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Беговое полотно, см:</span>
              <span className="font-medium">
                {characteristics['Беговое полотно, см'] || 'Не указано'}
              </span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Угол наклона:</span>
              <span className="font-medium">
                {characteristics['Макс. угол наклона, %'] ? `${characteristics['Макс. угол наклона, %']}%` : '15%'}
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Бренд:</span>
              <span className="font-medium">{brand}</span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Тип двигателя:</span>
              <span className="font-medium">Постоянного тока DC</span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Вес пользователя, кг:</span>
              <span className="font-medium">
                {characteristics['Вес пользователя, кг'] || 'Не указан'}
              </span>
            </div>
            <div className="border-b border-border"></div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Максимальная скорость, км/ч:</span>
              <span className="font-medium">
                {characteristics['Максимальная скорость, км/ч'] || '19'}
              </span>
            </div>
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