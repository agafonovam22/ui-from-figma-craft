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

  // Mock данные для демонстрации (заменить на реальные данные)
  private getMockProducts(): BitrixProduct[] {
    return [
      {
        id: '1',
        name: 'Беговая дорожка профессиональная',
        price: '45000',
        originalPrice: '50000',
        image: '/placeholder.svg',
        description: 'Профессиональная беговая дорожка для дома',
        available: true,
        categoryId: 'gym'
      },
      {
        id: '2',
        name: 'Гантели наборные 20кг',
        price: '3500',
        image: '/placeholder.svg',
        description: 'Набор гантелей с возможностью регулировки веса',
        available: true,
        categoryId: 'weights'
      },
      {
        id: '3',
        name: 'Велотренажер магнитный',
        price: '25000',
        originalPrice: '28000',
        image: '/placeholder.svg',
        description: 'Велотренажер с магнитной системой нагрузки',
        available: false,
        categoryId: 'cardio'
      }
    ];
  }
}

export const bitrixApi = new BitrixAPI();
export type { BitrixProduct };