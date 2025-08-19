import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BarChart3, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'catalog',
  linkTo = '/product-card'
}) => {
  if (variant === 'grid') {
    // Simplified version for ProductCatalog
    return (
      <div className="relative group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-[300px]">
        <img 
          src={product.image} 
          alt={product.name || "Категория товаров"}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <Link 
          to={`/product/${product.id}`}
          className="absolute bottom-4 left-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-colors flex items-center justify-center"
        >
          <span className="group-hover:hidden">{product.price || 'от 29 990₽'}</span>
          <span className="hidden group-hover:flex items-center gap-2">
            Перейти <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    );
  }

  // Full catalog version
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer h-fit">
      <div className="relative mb-3">
        <img 
          src={product.image} 
          alt={product.name || "Товар"}
          className="w-full h-32 object-cover rounded-lg"
          loading="lazy"
          onError={(e) => {
            console.log('Ошибка загрузки изображения:', product.image);
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {/* Badges */}
        {(product.badge || product.hasComparison) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.badge && (
              <Badge className={`${product.badgeColor || 'bg-gray-500'} text-white text-xs px-2 py-1`}>
                {product.badge}
              </Badge>
            )}
            {product.hasComparison && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs px-2 py-1">
                Выбрать для сравнения
              </Badge>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="p-1 bg-white rounded shadow hover:bg-gray-50">
            <Heart className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 bg-white rounded shadow hover:bg-gray-50">
            <BarChart3 className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Stock indicator */}
        {typeof product.inStock === 'boolean' && (
          <div className="absolute bottom-2 right-2">
            <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {product.name && (
        <h3 className="text-xs font-medium text-[#262631] line-clamp-2">
          {product.name}
        </h3>
        )}
        
        {product.rating && product.reviews && (
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-[10px] text-gray-500">
              {product.rating} ({product.reviews})
            </span>
          </div>
        )}

        {typeof product.inStock === 'boolean' && (
          <>
            {product.inStock ? (
              <div className="text-xs text-green-600">В наличии ●●</div>
            ) : (
              <div className="text-xs text-red-600">Нет в наличии</div>
            )}
          </>
        )}

        <div className="text-xs text-blue-600 cursor-pointer hover:underline">
          Есть в интернете
        </div>

        {product.price ? (
          <div className="text-sm font-bold text-[#262631]">
            {product.price}
          </div>
        ) : (
          <div className="text-xs text-gray-500">Цена по запросу</div>
        )}

        <div className="flex gap-2">
          {product.isAvailable ? (
            <Button size="sm" className="flex-1 bg-[#F53B49] hover:bg-[#e63946] text-white text-xs py-1">
              Купить
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1 text-xs py-1">
              Запросить цену
            </Button>
          )}
        </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;