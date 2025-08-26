import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BarChart3, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';
import { optimizeImageUrl, useLazyImage } from '@/utils/imageOptimization';

interface ProductCardProps {
  product: {
    id: number | string;
    name?: string;
    price?: string | null;
    originalPrice?: string | null;
    discount?: string | null;
    rating?: number;
    reviews?: number;
    image: string;
    badge?: string;
    badgeColor?: string;
    isAvailable?: boolean;
    hasComparison?: boolean;
    inStock?: boolean;
    category?: string;
  };
  variant?: 'catalog' | 'grid';
  linkTo?: string;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ 
  product, 
  variant = 'catalog',
  linkTo = '/product-card'
}) => {
  const { addItem } = useCart();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id.toString(),
      name: product.name || 'Товар',
      price: typeof product.price === 'string' ? parseFloat(product.price.replace(/[^\d.-]/g, '')) : 0,
      image_url: product.image,
      is_available: product.isAvailable || false
    });
  };
  if (variant === 'grid') {
    // Simplified version for ProductCatalog
    return (
      <div className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <img 
          src={optimizeImageUrl(product.image, 280, 200)} 
          alt={product.name || "Категория товаров"}
          className="w-full h-32 object-cover object-center"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <Link 
          to={linkTo}
          className="absolute bottom-2 left-2 bg-white text-[#262631] px-2 py-1 rounded-lg font-benzin text-xs font-normal hover:bg-[#262631] hover:text-white transition-colors flex items-center justify-center"
        >
          <span className="group-hover:hidden">{product.price || 'от 29 990₽'}</span>
          <span className="hidden group-hover:flex items-center gap-1">
            Перейти <ArrowRight className="w-3 h-3" />
          </span>
        </Link>
      </div>
    );
  }

  // Full catalog version
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative mb-3">
        <img 
          src={optimizeImageUrl(product.image, 240, 180)} 
          alt={product.name || "Товар"}
          className="w-full h-24 object-contain bg-gray-50 rounded-lg hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            console.error('❌ Ошибка загрузки изображения товара:', {
              productName: product.name,
              productId: product.id,
              imageUrl: product.image,
              errorMessage: 'Image failed to load'
            });
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {/* Badges */}
        {(product.badge || product.hasComparison) && (
          <div className="absolute top-1 left-1 flex flex-col gap-1">
            {product.badge && (
              <Badge className={`${product.badgeColor || 'bg-gray-500'} text-white text-[10px] px-1 py-0.5`}>
                {product.badge}
              </Badge>
            )}
            {product.hasComparison && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-[10px] px-1 py-0.5">
                Сравнить
              </Badge>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute top-1 right-1 flex flex-col gap-1">
          <button className="p-0.5 bg-white rounded shadow hover:bg-gray-50">
            <Heart className="w-3 h-3 text-gray-400" />
          </button>
          <button className="p-0.5 bg-white rounded shadow hover:bg-gray-50">
            <BarChart3 className="w-3 h-3 text-gray-400" />
          </button>
        </div>

        {/* Stock indicator */}
        {typeof product.inStock === 'boolean' && (
          <div className="absolute bottom-1 right-1">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
        )}
      </div>

      <div className="space-y-1">
        {product.name && (
        <h3 className="text-[10px] font-medium text-[#262631] line-clamp-2">
          {product.name}
        </h3>
        )}
        
        {product.rating && product.reviews && (
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400 text-[8px]">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-[8px] text-gray-500">
              {product.rating} ({product.reviews})
            </span>
          </div>
        )}

        {typeof product.inStock === 'boolean' && (
          <>
            {product.inStock ? (
              <div className="text-[10px] text-green-600">В наличии ●</div>
            ) : (
              <div className="text-[10px] text-red-600">Нет в наличии</div>
            )}
          </>
        )}

        <div className="text-[10px] text-blue-600 cursor-pointer hover:underline">
          Есть в интернете
        </div>

        {product.price ? (
          <div className="text-xs font-bold text-[#262631]">
            {product.price}
          </div>
        ) : (
          <div className="text-[10px] text-gray-500">Цена по запросу</div>
        )}

        <div className="flex gap-1">
          {product.isAvailable ? (
            <Button 
              size="sm" 
              className="flex-1 bg-[#F53B49] hover:bg-[#e63946] text-white text-[10px] py-0.5 h-6"
              onClick={handleBuyClick}
            >
              Купить
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1 text-[10px] py-0.5 h-6">
              Запросить
            </Button>
          )}
        </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;