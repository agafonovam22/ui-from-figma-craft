import { useMemo } from 'react';

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
  currentPage: number;
}

export function usePagination<T>({ data, itemsPerPage, currentPage }: UsePaginationProps<T>) {
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, itemsPerPage, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  return {
    paginatedData,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    totalItems: data.length
  };
}