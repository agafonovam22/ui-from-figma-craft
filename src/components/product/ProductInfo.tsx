import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import ProductCharacteristicsList from './ProductCharacteristicsList';

interface ProductInfoProps {
  product: any;
  quantity: number;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
  onBuyClick: () => void;
  onShowAllCharacteristics?: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  onBuyClick,
  onShowAllCharacteristics
}) => {
  return (
    <div className="bg-gray-50 -my-8 -mr-6 lg:-mr-12 xl:-mr-16 pr-6 lg:pr-12 xl:pr-16 py-8">
      <div className="p-4 space-y-4">
        {/* Header with badges */}
        <div className="flex justify-start mb-4">
          <div className="flex space-x-2">
            <Badge variant="outline" className="text-xs font-medium border-green-500 text-green-600 bg-transparent flex items-center hover:bg-transparent py-2.5">
              В наличии
              <div className="flex items-center ml-2 gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 border border-green-500 rounded-full"></div>
              </div>
            </Badge>
            <Badge variant="secondary" className="text-xs font-medium bg-blue-500 text-white hover:bg-blue-500 py-2.5">
              Есть в шоуруме
            </Badge>
          </div>
        </div>

        {/* Product Title */}
        <div className="mb-4">
          <h1 className="text-2xl mb-2 font-bold">
            <span style={{ fontFamily: 'Benzin-Regular' }}>
              {product.name.split(' ').slice(0, 2).join(' ')}
            </span>{' '}
            <span style={{ fontFamily: 'Benzin-Semibold' }}>
              {product.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          {/* Separator after title */}
          <div className="h-px bg-gray-300 mb-4"></div>
        </div>

        {/* Action buttons and rating */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-300">
          <div className="flex space-x-3">
            <Button key="compare-btn" variant="outline" size="sm" className="text-gray-600 text-xs px-3 py-1 flex items-center rounded-full">
              <img 
                src="/lovable-uploads/65f07052-2894-46c4-bba1-dd6a77258cbe.png" 
                alt="В сравнение" 
                className="w-3 h-3 mr-1"
              />
              В сравнение
            </Button>
            <Button key="favorite-btn" variant="outline" size="sm" className="text-gray-600 text-xs px-3 py-1 flex items-center rounded-full">
              <img 
                src="/lovable-uploads/60d3aa34-0091-405e-b944-d45c2bee0a8f.png" 
                alt="В избранное" 
                className="w-3 h-3 mr-1"
              />
              В избранное
            </Button>
          </div>
          {product.rating && (
            <div className="flex items-center space-x-2">
              <div className="border border-[#F99808] rounded-full px-3 py-1 flex items-center space-x-1">
                <div className="flex text-[#F99808]">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-[#F99808] font-medium text-xs">
                  {product.rating}/5
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Product characteristics list */}
        <ProductCharacteristicsList 
          characteristics={product.characteristics}
          productName={product.name}
          onShowAllClick={onShowAllCharacteristics}
        />

        {/* Product Options */}
        <div className="space-y-3 py-4 border-b border-gray-300">
          {/* Kit Variation */}
          <div>
            <h4 className="font-medium mb-2 text-sm">Комплектация</h4>
            <div className="flex flex-wrap gap-2">
              <button
                className="px-3 py-1 text-xs rounded-full border-2 bg-gray-800 text-white border-gray-800"
              >
                {product.characteristics?.['Артикул'] || product.name}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {product.description || product.characteristics?.['Наименование товара на сайте'] || 'Базовая комплектация для тренинга'}
            </p>
          </div>
        </div>

        {/* Price and Add to Cart Section */}
        <div className="py-4 border-b border-gray-300">
          {/* Price, Quantity and Add to Cart in one row */}
          <div className="flex items-center space-x-4">
            {/* Price Section */}
            <div className="flex-1">
              {product.price ? (
                <div>
                  <div className="text-xl font-bold text-foreground">
                    {typeof product.price === 'number' ? `${product.price.toLocaleString()} ₽` : product.price}
                  </div>
                </div>
              ) : (
                <span className="text-2xl text-muted-foreground">Цена по запросу</span>
              )}
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={onDecrementQuantity}
                className="h-10 w-10 rounded-full p-0 border-2 bg-transparent"
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-12 text-center text-lg font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={onIncrementQuantity}
                className="h-10 w-10 rounded-full p-0 border-2 bg-transparent"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex-1">
              {product.is_available ? (
                <Button 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-sm font-medium rounded-lg"
                  onClick={onBuyClick}
                >
                  Добавить в корзину
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="w-full h-12">
                  Запросить цену
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Delivery and Services Info */}
        <div className="space-y-2 text-xs text-muted-foreground font-manrope">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/f35fe135-ca23-48f8-8490-aa26a337a8f5.png" 
                alt="Доставка" 
                className="w-4 h-4 object-contain"
              />
              <span>Доставка</span>
            </div>
            <span className="font-medium text-foreground">300 руб. (в пределах МКАД/КАД)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a6b610bf-00ff-40b0-a771-be9d69ec0a79.png" 
                alt="Сборка" 
                className="w-4 h-4 object-contain"
              />
              <span>Сборка</span>
            </div>
            <span>Рассчитывается индивидуально</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/f9620881-afa2-4fc3-81cb-d1956b8a6691.png" 
                alt="Оплата для физ.лиц" 
                className="w-4 h-4 object-contain"
              />
              <span>Оплата для физ.лиц</span>
            </div>
            <span>Наличными, картой, безналичная, онлайн, в рассрочку</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9cf11e84-5092-4583-9ee9-6f319e803b5a.png" 
                alt="Оплата для юр.лиц" 
                className="w-4 h-4 object-contain"
              />
              <span>Оплата для юр.лиц</span>
            </div>
            <span>Безналичная оплата, оплата онлайн</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;