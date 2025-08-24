import { useMemo } from 'react';
import { useSharedProducts, SharedProduct } from './useSharedProducts';

interface PaginatedProductsResponse {
  status: string;
  products: SharedProduct[];
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
  // Используем централизованный хук
  const { data, isLoading, error } = useSharedProducts();
  
  const allProducts = data?.products || [];

  // Фильтрация и пагинация на клиенте (оптимизированная)
  const paginatedData = useMemo((): PaginatedProductsResponse | null => {
    if (!allProducts.length) return null;

    let filteredProducts = allProducts;

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
  }, [allProducts, searchQuery, categoryFilter, page, limit]);

  return {
    data: paginatedData,
    isLoading,
    error,
    products: paginatedData?.products || [],
    total: paginatedData?.total || 0,
    totalPages: paginatedData?.totalPages || 0,
    currentPage: page,
    hasNextPage: page < (paginatedData?.totalPages || 0),
    hasPrevPage: page > 1
  };
};