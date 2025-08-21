import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number;
  discount_percentage: number;
  image_url: string;
  is_available: boolean;
  in_stock: boolean;
  rating: number;
  reviews_count: number;
  characteristics: Record<string, string>;
}

interface ProductsResponse {
  status: string;
  products: Product[];
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://cp44652.tw1.ru/catalog.php');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: ProductsResponse = await response.json();
  return data.products || [];
};

// Маппинг категорий к типам оборудования из Битрикс (обновлен на основе реальных данных API)
export const categoryMapping: Record<string, string[]> = {
  'Беговые дорожки': ['854'], // Нужно уточнить реальный ID
  'Эллиптические тренажеры': ['855'], // Нужно уточнить реальный ID  
  'Велотренажеры': ['858', '859'], // Обновленные ID для велотренажеров
  'Гребные тренажеры': ['861'], // Обновленный ID для гребных тренажеров
  'Силовые тренажеры': ['860', '865', '870'], // Силовые тренажеры и аксессуары
  'Инверсионные столы': ['862'], // Балансировочные платформы
};

export const useProducts = (categoryFilter?: string) => {
  return useQuery({
    queryKey: ['products', categoryFilter],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    select: (data: Product[]) => {
      if (!categoryFilter) return data;
      
      const equipmentTypes = categoryMapping[categoryFilter];
      if (!equipmentTypes) return data;
      
      return data.filter(product => 
        equipmentTypes.includes(product.characteristics['Тип оборудования'])
      );
    }
  });
};