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
  
  // Логируем все типы оборудования для отладки
  if (data.products) {
    const equipmentTypes = new Set();
    data.products.forEach(product => {
      if (product.characteristics['Тип оборудования']) {
        equipmentTypes.add(product.characteristics['Тип оборудования']);
      }
    });
    console.log('Доступные типы оборудования:', Array.from(equipmentTypes).sort());
    
    // Группируем товары по типам для анализа
    const groupedByType: Record<string, string[]> = {};
    data.products.forEach(product => {
      const type = product.characteristics['Тип оборудования'];
      if (type) {
        if (!groupedByType[type]) groupedByType[type] = [];
        groupedByType[type].push(product.name);
      }
    });
    console.log('Товары по типам:', groupedByType);
  }
  
  return data.products || [];
};

// Маппинг категорий к типам оборудования из Битрикс (на основе анализа реальных данных API)
export const categoryMapping: Record<string, string[]> = {
  'Беговые дорожки': [], // Пока нет в данных
  'Эллиптические тренажеры': [], // Пока нет в данных  
  'Велотренажеры': [], // Пока нет в данных
  'Гребные тренажеры': [], // Пока нет в данных
  'Силовые тренажеры': ['870'], // Утяжелители и силовое оборудование
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