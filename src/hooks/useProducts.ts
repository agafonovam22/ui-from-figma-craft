import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number;
  discount_percentage: number;
  image_url: string;
  gallery_images?: string[];
  is_available: boolean;
  in_stock: boolean;
  quantity?: number;
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
    console.log('Общее количество товаров в каталоге:', data.products.length);
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
    
    // Проверяем все возможные значения "Тип назначения"
    const purposeTypes = new Set();
    data.products.forEach(product => {
      if (product.characteristics['Тип назначения']) {
        purposeTypes.add(product.characteristics['Тип назначения']);
      }
    });
    console.log('Доступные типы назначения:', Array.from(purposeTypes).sort());
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

// Функция поиска по товарам
export const searchProducts = (products: Product[], searchQuery: string): Product[] => {
  if (!searchQuery.trim()) return products;
  
  const query = searchQuery.toLowerCase();
  console.log('🔍 Поиск товаров по запросу:', query);
  
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    const productCharacteristics = Object.values(product.characteristics || {}).join(' ').toLowerCase();
    
    const nameMatch = productName.includes(query);
    const characteristicsMatch = productCharacteristics.includes(query);
    const isMatch = nameMatch || characteristicsMatch;
    
    if (isMatch) {
      console.log('✅ Найден товар:', {
        name: product.name,
        nameMatch,
        characteristicsMatch,
        characteristics: product.characteristics
      });
    }
    
    return isMatch;
  });
  
  console.log(`📊 Результаты поиска "${query}":`, {
    total: filteredProducts.length,
    products: filteredProducts.map(p => p.name)
  });
  
  return filteredProducts;
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
      if (categoryFilter === 'Для дома') {
        return data.filter(product => 
          product.characteristics['Тип назначения'] === 'Для дома' ||
          product.characteristics['Тип назначения'] === 'Для дома;Для фитнес-клубов'
        );
      }
      
      if (categoryFilter === 'Для фитнес-клуба') {
        return data.filter(product => 
          product.characteristics['Тип назначения'] === 'Для фитнес-клубов' ||
          product.characteristics['Тип назначения'] === 'Для дома;Для фитнес-клубов'
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

// Хук для поиска товаров с поддержкой query параметра
export const useProductSearch = (searchQuery?: string) => {
  return useQuery({
    queryKey: ['products', 'search', searchQuery],
    queryFn: async () => {
      const data = await fetchProducts();
      console.log('Общее количество товаров в каталоге (через useProductSearch):', data.length);
      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    select: (data: Product[]) => {
      if (!searchQuery) return data;
      return searchProducts(data, searchQuery);
    }
  });
};