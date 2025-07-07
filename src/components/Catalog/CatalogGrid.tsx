import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
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
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ products }) => {
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
            <h3 className="text-xl font-bold mb-2">Место для рекламы</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white">
            Перейти →
          </Button>
        </div>
      </div>

      {/* More Products */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={`second-${product.id}`} product={product} variant="catalog" />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mb-8">
        <Button variant="outline" className="px-8 py-3">
          Показать еще
        </Button>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
          ‹
        </button>
        <button className="px-4 py-2 bg-[#F53B49] text-white rounded">1</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">4</button>
        <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
          ›
        </button>
      </div>
    </>
  );
};

export default CatalogGrid;