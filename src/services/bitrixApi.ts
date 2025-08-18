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
        name: 'Беговая дорожка CardioPower T20',
        price: '45000',
        originalPrice: '50000',
        image: '/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png',
        description: 'Профессиональная беговая дорожка CardioPower T20 для дома',
        available: true,
        categoryId: 'gym'
      },
      {
        id: '2',
        name: 'Беговая дорожка CardioPower T40',
        price: '65000',
        originalPrice: '72000',
        image: '/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png',
        description: 'Профессиональная беговая дорожка CardioPower T40 с расширенными возможностями',
        available: true,
        categoryId: 'gym'
      },
      {
        id: '3',
        name: 'Велотренажер магнитный',
        price: '25000',
        originalPrice: '28000',
        image: '/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png',
        description: 'Велотренажер с магнитной системой нагрузки',
        available: false,
        categoryId: 'cardio'
      }
    ];
  }
}

export const bitrixApi = new BitrixAPI();
export type { BitrixProduct };