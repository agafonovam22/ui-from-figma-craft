
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
  rating?: number;
  reviews_count?: number;
}

class BitrixAPI {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://cp44652.tw1.ru') {
    this.baseUrl = baseUrl;
  }

  // Метод для получения товаров через публичный каталог
  async getProducts(): Promise<BitrixProduct[]> {
    try {
      // Пробуем получить данные через working API endpoint
      const response = await fetch(`${this.baseUrl}/catalog.php`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'ok' && data.products) {
          // Конвертируем данные из Bitrix в наш формат
          return data.products.map((product: any) => ({
            id: product.id,
            name: product.name,
            price: product.price.toString(),
            originalPrice: product.original_price ? product.original_price.toString() : undefined,
            image: product.image_url,
            description: product.name,
            available: product.is_available && product.in_stock,
            categoryId: undefined,
            rating: product.rating,
            reviews_count: product.reviews_count
          }));
        }
      }
      
      // Если API не работает, возвращаем пустой массив
      console.log('API failed, no products available');
      return [];
    } catch (error) {
      console.error('Error fetching products from Bitrix:', error);
      return [];
    }
  }

  // Получение товаров по категории
  async getProductsByCategory(categoryId: string): Promise<BitrixProduct[]> {
    try {
      const response = await fetch(`${this.baseUrl}/catalog/${categoryId}/`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch category products');
      }

      return [];
    } catch (error) {
      console.error('Error fetching category products:', error);
      return [];
    }
  }

  // Поиск товаров по запросу
  async searchProducts(query: string): Promise<BitrixProduct[]> {
    try {
      console.log('Starting search for products with query:', query);
      
      // Получаем ВСЕ товары из реального API
      const allProducts = await this.getProducts();
      console.log('Total products loaded for search:', allProducts.length);
      
      if (allProducts.length > 0) {
        console.log('Sample product name:', allProducts[0].name);
        console.log('Sample products:', allProducts.slice(0, 3).map(p => p.name));
      }
      
      // Делаем поиск на фронтенде по реальным данным
      const filteredProducts = allProducts.filter(product => {
        const productName = product.name.toLowerCase();
        const searchTerm = query.toLowerCase();
        const matches = productName.includes(searchTerm);
        
        if (matches) {
          console.log(`Match found: "${product.name}" contains "${query}"`);
        }
        
        return matches || (product.description && product.description.toLowerCase().includes(searchTerm));
      });

      console.log(`Found ${filteredProducts.length} products matching "${query}" from real data`);
      
      if (filteredProducts.length > 0) {
        console.log('Found products:', filteredProducts.map(p => p.name));
      }
      
      return filteredProducts;
    } catch (error) {
      console.error('Error searching products:', error);
      // В случае ошибки возвращаем пустой массив
      return [];
    }
  }

  // Mock данные больше не используются - показываем только реальные товары из API
  private getMockProducts(): BitrixProduct[] {
    return [];
  }
}

export const bitrixApi = new BitrixAPI();
export type { BitrixProduct };
