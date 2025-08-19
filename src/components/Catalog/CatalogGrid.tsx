import React from 'react';
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
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ 
  products, 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange 
}) => {

  return (
    <>
      {/* Products Grid - возвращаем исходный вид */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

      {/* More Products - убираем дублирование */}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button 
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button 
              key={pageNum}
              className={`px-4 py-2 rounded ${
                pageNum === currentPage 
                  ? 'bg-[#F53B49] text-white' 
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => onPageChange?.(pageNum)}
            >
              {pageNum}
            </button>
          ))}
          <button 
            className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogGrid;