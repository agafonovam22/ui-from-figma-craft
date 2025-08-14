import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from "@/components/ui/button";
import { useBitrixCatalog } from '@/hooks/useBitrixCatalog';

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
  bitrixUrl?: string;
}

const CatalogGrid: React.FC<CatalogGridProps> = ({ products, bitrixUrl }) => {
  const { products: bitrixProducts, loading, error } = useBitrixCatalog(bitrixUrl);
  
  // Используем товары из Битрикс, если они загружены, иначе fallback на переданные
  const displayProducts = bitrixProducts.length > 0 ? bitrixProducts.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price > 0 ? `${product.price.toLocaleString()} ₽` : null,
    originalPrice: product.original_price && product.original_price > 0 ? `${product.original_price.toLocaleString()} ₽` : null,
    discount: product.discount_percentage ? `${product.discount_percentage}%` : null,
    rating: product.rating,
    reviews: product.reviews_count,
    image: product.image_url ? `https://cp44652.tw1.ru${product.image_url}` : '/placeholder.svg',
    badge: product.badge || (product.is_available ? 'В наличии' : 'Нет в наличии'),
    badgeColor: product.badge_color === 'red' ? 'bg-red-500' : 
                product.badge_color === 'green' ? 'bg-green-500' : 
                product.badge_color === 'blue' ? 'bg-blue-500' : 
                (product.is_available ? 'bg-green-500' : 'bg-red-500'),
    isAvailable: product.is_available,
    hasComparison: product.has_comparison,
    inStock: product.in_stock
  })) : products;

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Загрузка товаров...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Ошибка загрузки: {error}</p>
        <p className="text-sm text-gray-500 mt-2">Используются демо-данные</p>
      </div>
    );
  }

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {displayProducts.map((product) => (
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

      {/* More Products */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={`second-${product.id}`} product={product} variant="catalog" />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mb-8">
        <Button variant="outline" className="px-6 py-2 text-sm">
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