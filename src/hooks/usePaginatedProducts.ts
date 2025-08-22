import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Product } from './useProducts';

interface PaginatedProductsResponse {
  status: string;
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const usePaginatedProducts = (
  page: number = 1,
  limit: number = 24,
  searchQuery?: string,
  categoryFilter?: string
) => {
  // Получаем все товары один раз и кешируем
  const { data: allProductsData, isLoading: allProductsLoading, error } = useQuery({
    queryKey: ['all-products'],
    queryFn: async (): Promise<{ products: Product[] }> => {
      console.log('🔄 Загружаем все товары...');
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 30 * 60 * 1000, // 30 минут (заменено cacheTime)
  });

  // Фильтрация и пагинация на клиенте (оптимизированная)
  const paginatedData = useMemo((): PaginatedProductsResponse | null => {
    if (!allProductsData?.products) return null;

    let filteredProducts = allProductsData.products;

    // Фильтрация по поиску
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        Object.values(product.characteristics || {}).some(value => 
          value.toString().toLowerCase().includes(query)
        )
      );
    }

    // Фильтрация по категории
    if (categoryFilter && categoryFilter !== 'all') {
      filteredProducts = filteredProducts.filter(product => {
        const type = product.characteristics?.['Тип оборудования'];
        const purpose = product.characteristics?.['Тип назначения'];
        return type?.includes(categoryFilter) || purpose?.includes(categoryFilter);
      });
    }

    // Пагинация
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      status: 'ok',
      products: paginatedProducts,
      total: filteredProducts.length,
      page,
      limit,
      totalPages: Math.ceil(filteredProducts.length / limit)
    };
  }, [allProductsData, searchQuery, categoryFilter, page, limit]);

  return {
    data: paginatedData,
    isLoading: allProductsLoading,
    error,
    products: paginatedData?.products || [],
    total: paginatedData?.total || 0,
    totalPages: paginatedData?.totalPages || 0,
    currentPage: page,
    hasNextPage: page < (paginatedData?.totalPages || 0),
    hasPrevPage: page > 1
  };
};