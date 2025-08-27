import { bitrixApi } from '../services/bitrixApi';

// Функция для поиска конкретных товаров и вывода их характеристик
export const debugSpecificProducts = async () => {
  try {
    const products = await bitrixApi.getProducts();
    console.log('🔍 Всего товаров загружено:', products.length);

    const targetProducts = [
      'CardioPower T50',
      'CardioPower TR150', 
      'CardioPower PRO CT400',
      'TRUE'  // для профессиональных (24/7)
    ];

    targetProducts.forEach(searchTerm => {
      const foundProducts = products.filter(product => 
        product.name.includes(searchTerm)
      );

      console.log(`\n🔍 === Товары с "${searchTerm}" ===`);
      foundProducts.forEach(product => {
        console.log(`📦 ID: ${product.id} | Название: ${product.name}`);
        
        const productAny = product as any;
        if (productAny.characteristics) {
          const usage = productAny.characteristics['Использование'] || 'НЕТ';
          const equipmentType = productAny.characteristics['Тип оборудования'] || 'НЕТ';
          
          console.log(`   ➜ Использование: ${usage}`);
          console.log(`   ➜ Тип оборудования: ${equipmentType}`);
          
          // Показываем несколько ключевых характеристик
          const keyChars = ['Назначение', 'Тип назначения', 'Бренд (id)'];
          keyChars.forEach(key => {
            if (productAny.characteristics[key]) {
              console.log(`   ➜ ${key}: ${productAny.characteristics[key]}`);
            }
          });
        }
        console.log('---');
      });
    });

    return products;
  } catch (error) {
    console.error('❌ Ошибка при получении товаров:', error);
    return [];
  }
};

// Функция для быстрого вызова из консоли браузера
(window as any).debugProducts = debugSpecificProducts;