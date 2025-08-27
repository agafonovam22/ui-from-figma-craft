import React, { memo } from 'react';
import ProductCard from '@/components/shared/ProductCard';
import { Button } from "@/components/ui/button";

interface Product {
  id: number | string;
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
}

interface CatalogGridProps {
  products: Product[];
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  onLoadMore?: () => void;
  showLoadMore?: boolean;
}

const CatalogGrid: React.FC<CatalogGridProps> = memo(({ 
  products, 
  totalPages = 1, 
  currentPage = 1, 
  onPageChange,
  hasNextPage = false,
  hasPreviousPage = false,
  onLoadMore,
  showLoadMore = false
}) => {


  return (
    <>
      {/* Products Grid with Ad Banner */}
      <div className="grid grid-cols-4 gap-2.5 mb-8">
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard product={{ 
              id: product.id.toString(),
              name: product.name,
              price: product.price,
              original_price: product.original_price,
              discount_percentage: product.discount_percentage,
              gallery_images: product.gallery_images,
              rating: product.rating,
              reviews_count: product.reviews_count,
              in_stock: product.in_stock,
              is_available: product.is_available,
              quantity: product.quantity,
              badge: product.badge,
              badge_color: product.badge_color
            }} />
            
            {/* Ad Banner after 8th product (between 2nd and 3rd row) */}
            {index === 7 && (
              <div 
                className="col-span-4 text-white p-8 rounded-lg"
                style={{ background: 'linear-gradient(97deg, #262631 1.32%, #6F6F90 108.06%)' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Место для рекламы</h3>
                    <p className="text-sm text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                  <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
                    Перейти →
                  </Button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && (
        <div className="flex justify-center mb-8">
          <Button 
            variant="outline" 
            onClick={onLoadMore}
            className="border-[#F53B49] text-[#F53B49] hover:bg-[#F53B49] hover:text-white px-8 py-2"
          >
            Показать еще
          </Button>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex items-center space-x-1">
          <button 
            className="flex h-10 w-10 items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={!hasPreviousPage}
          >
            ‹
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  isActive
                    ? "bg-black text-white"
                    : "border border-gray-300 text-[#778093] hover:bg-gray-50"
                }`}
                onClick={() => onPageChange?.(page)}
              >
                {page}
              </button>
            );
          })}
          
          <button 
            className="flex h-10 w-10 items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={!hasNextPage}
          >
            ›
          </button>
        </nav>
      </div>
    </>
  );
});

CatalogGrid.displayName = 'CatalogGrid';

export default CatalogGrid;