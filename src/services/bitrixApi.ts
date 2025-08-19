
// Bitrix API integration service
interface BitrixProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description?: string;
  available: boolean;
  categoryId?: string;
}

class BitrixAPI {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://cp44652.tw1.ru') {
    this.baseUrl = baseUrl;
  }

  // Метод для получения товаров через публичный каталог
  async getProducts(): Promise<BitrixProduct[]> {
    try {
      // Попробуем получить данные через стандартные пути Bitrix
      const response = await fetch(`${this.baseUrl}/catalog/`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      // Здесь нужно будет парсить HTML или использовать API endpoints
      // Пока возвращаем mock данные для демонстрации
      return this.getMockProducts();
    } catch (error) {
      console.error('Error fetching products from Bitrix:', error);
      return this.getMockProducts();
    }
  }

  // Получение товаров по категории
  async getProductsByCategory(categoryId: string): Promise<BitrixProduct[]> {
    try {
      const response = await fetch(`${this.baseUrl}/catalog/${categoryId}/`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch category products');
      }

      return this.getMockProducts();
    } catch (error) {
      console.error('Error fetching category products:', error);
      return this.getMockProducts();
    }
  }

  // Поиск товаров по запросу
  async searchProducts(query: string): Promise<BitrixProduct[]> {
    try {
      console.log('Searching for products with query:', query);
      
      // В реальной интеграции здесь будет запрос к Bitrix API для поиска
      // Например: GET /catalog/search/?q=${encodeURIComponent(query)}
      const response = await fetch(`${this.baseUrl}/catalog/search/?q=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Failed to search products');
      }

      // Для демонстрации фильтруем mock данные по названию
      const allProducts = this.getMockProducts();
      const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
      );

      console.log(`Found ${filteredProducts.length} products matching "${query}"`);
      return filteredProducts;
    } catch (error) {
      console.error('Error searching products:', error);
      // Fallback: поиск по mock данным
      const allProducts = this.getMockProducts();
      return allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  // Mock данные для демонстрации (заменить на реальные данные)
  private getMockProducts(): BitrixProduct[] {
    return [
      {
        id: '1',
        name: 'Беговая дорожка CardioPower T20',
        price: '45000',
        originalPrice: '50000',
        image: '/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png',
        description: 'Профессиональная беговая дорожка CardioPower T20 для дома',
        available: true,
        categoryId: 'treadmills'
      },
      {
        id: '2',
        name: 'Беговая дорожка CardioPower T40',
        price: '65000',
        originalPrice: '72000',
        image: '/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png',
        description: 'Профессиональная беговая дорожка CardioPower T40 с расширенными возможностями',
        available: true,
        categoryId: 'treadmills'
      },
      {
        id: '3',
        name: 'Велотренажер магнитный CardioPower B35',
        price: '25000',
        originalPrice: '28000',
        image: '/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png',
        description: 'Велотренажер с магнитной системой нагрузки для эффективных кардиотренировок',
        available: true,
        categoryId: 'bikes'
      },
      {
        id: '4',
        name: 'Эллиптический тренажер CardioPower E200',
        price: '35000',
        originalPrice: '38000',
        image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
        description: 'Эллиптический тренажер для комплексной кардио нагрузки',
        available: true,
        categoryId: 'ellipticals'
      },
      {
        id: '5',
        name: 'Гребной тренажер CardioPower CR300',
        price: '40000',
        originalPrice: '45000',
        image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
        description: 'Профессиональный гребной тренажер для развития всех групп мышц',
        available: true,
        categoryId: 'rowing'
      },
      {
        id: '6',
        name: 'Силовой комплекс CardioPower S150',
        price: '85000',
        originalPrice: '95000',
        image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
        description: 'Многофункциональный силовой тренажер для дома',
        available: true,
        categoryId: 'strength'
      }
    ];
  }
}

export const bitrixApi = new BitrixAPI();
export type { BitrixProduct };
