import { useQuery } from '@tanstack/react-query';

export const useCategoryProducts = (categoryId?: string, limit: number = 5) => {
  return useQuery({
    queryKey: ['category-products', categoryId, limit],
    queryFn: async () => {
      if (!categoryId) return { products: [] };
      
      console.log(`🔄 Загружаем товары категории ${categoryId}...`);
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      // Фильтруем товары по категории
      const categoryProducts = data.products?.filter((product: any) => 
        product.category_id === categoryId
      ) || [];

      return {
        products: categoryProducts.slice(0, limit)
      };
    },
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 30 * 60 * 1000, // 30 минут
  });
};