import React from 'react';
import ProductGallery from '../ProductGallery';
import ProductInfo from './ProductInfo';
import { optimizeImageUrl } from '@/utils/imageOptimization';

interface ProductHeaderProps {
  product: any;
  quantity: number;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
  onBuyClick: () => void;
  onShowAllCharacteristics?: () => void;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  product,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  onBuyClick,
  onShowAllCharacteristics
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Product Gallery */}
      <div>
        <ProductGallery
          mainImage={(product.gallery_images && product.gallery_images.length > 0) ? 
            optimizeImageUrl(product.gallery_images[0], 700, 700) : '/placeholder.svg'}
          galleryImages={product.gallery_images?.map((img: string) => 
            optimizeImageUrl(img, 700, 700)) || []}
          productName={product.name}
          badges={[
            ...(product.badge ? [{ text: product.badge, variant: 'destructive' as const }] : []),
            ...(product.characteristics?.['Акция'] ? [{ text: 'АКЦИЯ', variant: 'destructive' as const }] : []),
            ...(product.is_hit ? [{ text: 'ХИТ ПРОДАЖ', variant: 'secondary' as const }] : [])
          ]}
        />
      </div>

      {/* Product Info with Gray Background */}
      <ProductInfo
        product={product}
        quantity={quantity}
        onIncrementQuantity={onIncrementQuantity}
        onDecrementQuantity={onDecrementQuantity}
        onBuyClick={onBuyClick}
        onShowAllCharacteristics={onShowAllCharacteristics}
      />
    </div>
  );
};

export default ProductHeader;