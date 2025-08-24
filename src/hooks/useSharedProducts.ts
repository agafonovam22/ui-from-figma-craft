import { useQuery } from '@tanstack/react-query';

export interface SharedProduct {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  gallery_images?: string[];
  is_available: boolean;
  in_stock: boolean;
  rating: number;
  reviews_count: number;
  badge?: string;
  badge_color?: string;
  characteristics?: { [key: string]: any };
  quantity?: number;
}

// Централизованный хук для получения всех товаров
export const useSharedProducts = () => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: async (): Promise<{ products: SharedProduct[]; status: string }> => {
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 минут - данные считаются свежими
    gcTime: 30 * 60 * 1000, // 30 минут - время хранения в кеше
    refetchOnWindowFocus: false, // Не перезапрашивать при фокусе окна
  });
};

// Хук для получения новинок (оптимизированный)
export const useNewProducts = (limit: number = 5) => {
  const { data, isLoading, error } = useSharedProducts();
  
  const products = data?.products || [];
  
  // Приоритетные товары CardioPower
  const t40Product = products.find(product => 
    product.name.toLowerCase().includes('cardiopower t40')
  );
  const t20Product = products.find(product => 
    product.name.toLowerCase().includes('cardiopower t20')
  );
  
  const priorityProducts = [t40Product, t20Product].filter(Boolean);
  const otherProducts = products.filter(product => 
    !product.name.toLowerCase().includes('cardiopower t40') &&
    !product.name.toLowerCase().includes('cardiopower t20')
  );
  
  const displayProducts = [
    ...priorityProducts,
    ...otherProducts.slice(0, limit - priorityProducts.length)
  ].slice(0, limit);

  return {
    products: displayProducts,
    isLoading,
    error,
    total: products.length
  };
};