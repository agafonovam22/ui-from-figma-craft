import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from "@/components/ui/button";
import { useBitrixProducts } from '@/hooks/useBitrixProducts';

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
  const { products: bitrixProducts, loading, error } = useBitrixProducts();
  
  // Используем товары из Bitrix, если они загружены, иначе fallback на переданные
  const displayProducts = bitrixProducts.length > 0 ? bitrixProducts.map(product => ({
    id: parseInt(product.id),
    name: product.name,
    price: product.price + ' ₽',
    originalPrice: product.originalPrice ? product.originalPrice + ' ₽' : null,
    discount: product.originalPrice ? 
      Math.round(((parseInt(product.originalPrice) - parseInt(product.price)) / parseInt(product.originalPrice)) * 100) + '%' 
      : null,
    rating: 4.5, // default rating
    reviews: 12, // default reviews
    image: product.image,
    badge: product.available ? 'В наличии' : 'Нет в наличии',
    badgeColor: product.available ? 'green' : 'red',
    isAvailable: product.available,
    hasComparison: true,
    inStock: product.available
  })) : products;

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Загрузка товаров из Bitrix...</p>
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