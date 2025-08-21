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
    
    // Ищем товары со словом "инверсионный" в названии
    const inversionProducts = data.products.filter(product => 
      product.name.toLowerCase().includes('инверсионный')
    );
    console.log('Товары с "инверсионный" в названии:', inversionProducts.map(p => ({
      name: p.name,
      type: p.characteristics['Тип оборудования']
    })));
  }
  
  return data.products || [];
};

// Маппинг категорий к типам оборудования из Битрикс (на основе анализа реальных данных API)
export const categoryMapping: Record<string, string[]> = {
  'Беговые дорожки': [], // Нет в текущих данных API
  'Эллиптические тренажеры': [], // Нет в текущих данных API  
  'Велотренажеры': [], // Нет в текущих данных API
  'Гребные тренажеры': [], // Нет в текущих данных API
  'Силовые тренажеры': [], // Используем поиск по ключевым словам
  'Инверсионные столы': [], // У инверсионных столов тип оборудования undefined - используем поиск по словам
};

// Ключевые слова для поиска по названию товара (fallback когда нет точного типа)
export const categoryKeywords: Record<string, string[]> = {
  'Беговые дорожки': ['беговая', 'дорожка', 'treadmill'],
  'Эллиптические тренажеры': ['эллиптический', 'эллипс', 'elliptical'],
  'Велотренажеры': ['велотренажер', 'велосипед', 'bike', 'cycling'],
  'Гребные тренажеры': ['гребной', 'rowing'],
  'Силовые тренажеры': ['скамья', 'стойка', 'рама', 'мультистанция', 'грузоблочный', 'смита', 'жим', 'тяга', 'силовая станция', 'турник', 'брусья'],
  'Инверсионные столы': ['инверсионный'],
};

export const useProducts = (categoryFilter?: string) => {
  return useQuery({
    queryKey: ['products', categoryFilter],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    select: (data: Product[]) => {
      if (!categoryFilter) return data;
      
      // Фильтрация по типу назначения (Для дома / Для фитнес-клуба)
      if (categoryFilter === 'Для дома' || categoryFilter === 'Для фитнес-клуба') {
        return data.filter(product => 
          product.characteristics['Тип назначения'] === categoryFilter
        );
      }
      
      const equipmentTypes = categoryMapping[categoryFilter];
      
      // Если есть точные типы оборудования, используем их
      if (equipmentTypes && equipmentTypes.length > 0) {
        return data.filter(product => 
          equipmentTypes.includes(product.characteristics['Тип оборудования'])
        );
      }
      
      // Если нет точных типов, ищем по ключевым словам в названии
      const keywords = categoryKeywords[categoryFilter];
      if (keywords && keywords.length > 0) {
        return data.filter(product => {
          const productName = product.name.toLowerCase();
          return keywords.some(keyword => 
            productName.includes(keyword.toLowerCase())
          );
        });
      }
      
      // Если ни то ни другое не найдено, показываем все товары
      return data;
    }
  });
};