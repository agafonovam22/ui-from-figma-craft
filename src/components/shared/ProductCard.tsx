import React from 'react';
import { Link } from 'react-router-dom';
import { optimizeImageUrl } from '@/utils/imageOptimization';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useComparison } from '@/contexts/ComparisonContext';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import LazyImage from '@/components/shared/LazyImage';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    original_price?: number;
    discount_percentage?: number;
    gallery_images?: string[];
    rating?: number;
    reviews_count?: number;
    in_stock?: boolean;
    is_available?: boolean;
    quantity?: number;
    badge?: string;
    badge_color?: string;
  };
  variant?: 'grid' | 'list';
  showCarousel?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'grid',
  showCarousel = true 
}) => {
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleComparison, isInComparison } = useComparison();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: (product.gallery_images && product.gallery_images.length > 0) ? 
        optimizeImageUrl(product.gallery_images[0], 200, 200) : '/placeholder.svg',
      is_available: product.is_available || true
    });
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: (product.gallery_images && product.gallery_images.length > 0) ? 
        optimizeImageUrl(product.gallery_images[0], 200, 200) : '/placeholder.svg'
    });
  };

  const handleStatsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleComparison({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: (product.gallery_images && product.gallery_images.length > 0) ? 
        optimizeImageUrl(product.gallery_images[0], 200, 200) : '/placeholder.svg',
      originalPrice: product.original_price,
      discount: product.original_price && product.original_price > product.price ? 
        Math.round(((product.original_price - product.price) / product.original_price) * 100) : undefined
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill={i < Math.floor(rating) ? "#F99808" : "#D1D5DB"}
        className="inline-block"
      >
        <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07 9.09 11 6 9.385 2.91 11 3.5 7.07 1 4.635l3.455-.505L6 1z" />
      </svg>
    ));
  };

  const discount = product.original_price && product.original_price > product.price ? 
    Math.round(((product.original_price - product.price) / product.original_price) * 100) : 0;

  return (
    <Link 
      to={`/product/${product.id}`}
      className="block"
    >
      <div 
        className="relative group rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
        style={{ 
          height: '460px', 
          backgroundColor: '#F8F8FD',
          background: 'var(--card-bg, #F8F8FD)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.setProperty('--card-bg', 'linear-gradient(179deg, #3C3C50 38.62%, #262631 99.45%)');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--card-bg', '#F8F8FD');
        }}
      >
      {/* Овальные бейджи в верхнем левом углу */}
      <div className="absolute top-3 left-3 z-10 flex flex-row gap-2">
        {product.badge && (
          <span className={`${
            product.badge_color === 'green' ? 'bg-green-500' : 
            product.badge_color === 'red' ? 'bg-destructive' : 
            product.badge_color === 'blue' ? 'bg-blue-500' : 
            'bg-destructive'
          } text-white text-xs px-3 py-1 rounded-full font-medium`}>
            {product.badge}
          </span>
        )}
        {!product.badge && (
          <span className="text-white text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#31BF00' }}>
            НОВИНКА
          </span>
        )}
        {/* Показываем дополнительные бейджи если есть акция */}
        {product.original_price && product.original_price > product.price && (
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            АКЦИЯ
          </span>
        )}
        {/* Остались мало */}
        {product.in_stock && product.quantity && product.quantity <= 3 && (
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Осталось мало
          </span>
        )}
      </div>

      {/* Статичные иконки в правом верхнем углу */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button 
          className={`hover:scale-110 transition-transform ${isInComparison(product.id) ? 'opacity-100' : 'opacity-70'}`}
          onClick={handleStatsClick}
        >
          <img 
            src="/lovable-uploads/f351cc32-0fbf-4fcd-86b4-c021d9c7a83e.png" 
            alt={isInComparison(product.id) ? "Убрать из сравнения" : "Добавить в сравнение"} 
            className={`w-5 h-5 ${isInComparison(product.id) ? 'brightness-110' : ''}`} 
          />
        </button>
        <button 
          className="hover:scale-110 transition-transform"
          onClick={handleFavoriteClick}
        >
          {isFavorite(product.id) ? (
            <img src="/lovable-uploads/aa033c83-aa02-4002-a479-038f0197d56c.png" alt="Убрать из избранного" className="w-5 h-5" />
          ) : (
            <img src="/lovable-uploads/a35e0596-2d48-4f67-8241-6448cdcf5d64.png" alt="Добавить в избранное" className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Слайдер изображений */}
      <div 
        className="relative h-60 overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Декоративный элемент в правом верхнем углу */}
        <div className="absolute top-0 -right-8 w-60 h-60 z-0">
          <img 
            src="/lovable-uploads/5e75cf63-44ac-40f1-932d-ab5786810641.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
        {showCarousel && product.gallery_images && product.gallery_images.length > 1 ? (
          <Carousel 
            className="h-full group/carousel"
            setApi={(api) => {
              if (api) {
                api.on('select', () => {
                  setCarouselIndex(api.selectedScrollSnap());
                });
              }
            }}
          >
            <CarouselContent className="h-full">
              {product.gallery_images.map((image: string, imageIndex: number) => (
                <CarouselItem key={imageIndex} className="h-full">
                  <div className="h-full flex items-center justify-center p-4">
                    <LazyImage 
                      src={optimizeImageUrl(image, 400, 320)} 
                      alt={`${product.name} - фото ${imageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 w-10 h-10 rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors opacity-0 group-hover:opacity-100" />
            <CarouselNext className="right-2 w-10 h-10 rounded-full border border-gray-300 hover:bg-[#262631] hover:text-white hover:border-[#262631] transition-colors opacity-0 group-hover:opacity-100" />
          </Carousel>
        ) : (
          <div className="h-full flex items-center justify-center p-4">
            <LazyImage 
              src={optimizeImageUrl((product.gallery_images && product.gallery_images.length > 0) ? product.gallery_images[0] : '/placeholder.svg', 400, 320)} 
              alt={product.name || "Товар"}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Красный индикатор слайдера */}
      {showCarousel && product.gallery_images && product.gallery_images.length > 1 && (
        <div className="flex justify-center gap-1 -mb-4">
          {product.gallery_images.map((_: string, dotIndex: number) => {
            const isActive = dotIndex === carouselIndex;
            return (
              <div 
                key={dotIndex} 
                className={`h-1 rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 bg-destructive' : 'w-2'
                }`}
                style={!isActive ? { backgroundColor: '#5C6476' } : {}}
              />
            );
          })}
        </div>
      )}

      {/* Серая разделительная полоса */}
      <div className="mx-4 h-px bg-gray-200 mt-7"></div>

        {/* Информация о товаре */}
        <div className="p-4 pb-2.5 mt-4 flex flex-col justify-between transition-colors duration-300" style={{ height: '160px', backgroundColor: 'transparent' }}>
          <div>
            {/* Статус наличия */}
            {(() => {
              if (!product.in_stock) {
                return (
                  <div className="flex items-center justify-start gap-1 mb-2">
                    <span className="text-xs font-medium group-hover:text-white" style={{ color: '#F53B49' }}>Нет в наличии</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ border: '1px solid #F53B49' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ border: '1px solid #F53B49' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ border: '1px solid #F53B49' }}></div>
                    </div>
                  </div>
                );
              } else if (product.quantity && product.quantity <= 3) {
                return (
                  <div className="flex items-center justify-start gap-1 mb-2">
                    <span className="text-xs font-medium group-hover:text-white" style={{ color: '#F99808' }}>Осталось мало</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F99808' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ border: '1px solid #F99808' }}></div>
                      <div className="w-2 h-2 rounded-full" style={{ border: '1px solid #F99808' }}></div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="flex items-center justify-start gap-1 mb-2">
                    <span className="text-xs text-green-600 group-hover:text-white font-medium">В наличии</span>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 border border-green-500 rounded-full"></div>
                    </div>
                  </div>
                );
              }
            })()}

            {/* Название товара */}
            <h3 className="text-gray-900 group-hover:text-white text-sm mb-3 line-clamp-2 leading-relaxed transition-colors duration-300">
              {(() => {
                const name = product.name;
                // Ищем бренды в названии
                const brands = ['Centr', 'CardioMaster', 'CardioPower', 'FitnessPro', 'SportMax', 'GymLine', 'ProFit', 'ActiveZone'];
                const foundBrand = brands.find(brand => name.includes(brand));
                
                if (foundBrand) {
                  const brandIndex = name.indexOf(foundBrand);
                  if (brandIndex > 0) {
                    const beforeBrand = name.substring(0, brandIndex).trim();
                    const fromBrand = name.substring(brandIndex).trim();
                    return (
                      <>
                        <span className="font-benzin">{beforeBrand} </span>
                        <span className="font-benzin-semibold">{fromBrand}</span>
                      </>
                    );
                  }
                }
                
                return <span className="font-benzin">{name}</span>;
              })()}
            </h3>

            {/* Рейтинг */}
            {(product.rating && product.rating > 0) && (
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs group-hover:text-white transition-colors duration-300" style={{ color: '#F99808' }}>
                  {product.rating}/5
                </span>
                {product.reviews_count && product.reviews_count > 0 && (
                  <span className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">
                    ({product.reviews_count})
                  </span>
                )}
              </div>
            )}

            {/* Цена */}
            <div className="flex items-center gap-2 mb-3">
              {discount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{discount}%
                </span>
              )}
              {product.original_price && product.original_price > product.price && (
                <span className="text-gray-400 group-hover:text-white line-through text-sm transition-colors duration-300">
                  {product.original_price.toLocaleString()} ₽
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
              {product.price.toLocaleString()} ₽
            </span>
            
            <Button 
              className="bg-[#F53B49] hover:bg-[#e63946] text-white px-4 py-2"
              onClick={handleBuyClick}
            >
              Купить
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;