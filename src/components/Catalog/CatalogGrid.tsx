import React, { memo } from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from "@/components/ui/button";

interface Product {
  id: number | string;
  name: string;
  price: string | null;
  originalPrice: string | null;
  discount: string | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  badgeColor: string;
  isAvailable: boolean;
  hasComparison: boolean;
  inStock: boolean;
}

interface CatalogGridProps {
  products: Product[];
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

const CatalogGrid: React.FC<CatalogGridProps> = memo(({ 
  products, 
  totalPages = 1, 
  currentPage = 1, 
  onPageChange,
  hasNextPage = false,
  hasPreviousPage = false
}) => {


  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="catalog" />
        ))}
      </div>

      {/* Ad Banner */}
      <div className="bg-gray-800 text-white p-8 rounded-lg mb-8">
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

      {/* More Products - убираем для лучшей производительности */}
      {/* Load More Button - убираем, используем пагинацию */}

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <button 
          className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className={`px-4 py-2 rounded ${
                isActive
                  ? "bg-[#F53B49] text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => onPageChange?.(page)}
            >
              {page}
            </button>
          );
        })}
        
        <button 
          className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={!hasNextPage}
        >
          ›
        </button>
      </div>
    </>
  );
});

CatalogGrid.displayName = 'CatalogGrid';

export default CatalogGrid;