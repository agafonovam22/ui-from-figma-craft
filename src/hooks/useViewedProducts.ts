import { useEffect, useState } from 'react';

interface ViewedProduct {
  id: string;
  timestamp: number;
}

const VIEWED_PRODUCTS_KEY = 'viewedProducts';
const MAX_VIEWED_PRODUCTS = 10;

export const useViewedProducts = () => {
  const [viewedProducts, setViewedProducts] = useState<ViewedProduct[]>([]);

  // Загружаем просмотренные товары из localStorage при инициализации
  useEffect(() => {
    const stored = localStorage.getItem(VIEWED_PRODUCTS_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setViewedProducts(parsed);
      } catch (error) {
        console.warn('Ошибка при загрузке просмотренных товаров:', error);
        localStorage.removeItem(VIEWED_PRODUCTS_KEY);
      }
    }
  }, []);

  // Добавить товар в просмотренные
  const addViewedProduct = (productId: string) => {
    setViewedProducts(prev => {
      // Удаляем товар из списка, если он уже есть
      const filtered = prev.filter(item => item.id !== productId);
      
      // Добавляем товар в начало списка
      const updated = [
        { id: productId, timestamp: Date.now() },
        ...filtered
      ].slice(0, MAX_VIEWED_PRODUCTS); // Ограничиваем количество

      // Сохраняем в localStorage
      localStorage.setItem(VIEWED_PRODUCTS_KEY, JSON.stringify(updated));
      
      return updated;
    });
  };

  // Получить ID просмотренных товаров (исключая текущий)
  const getViewedProductIds = (excludeId?: string): string[] => {
    return viewedProducts
      .filter(item => item.id !== excludeId)
      .map(item => item.id);
  };

  // Очистить просмотренные товары
  const clearViewedProducts = () => {
    setViewedProducts([]);
    localStorage.removeItem(VIEWED_PRODUCTS_KEY);
  };

  return {
    viewedProducts,
    addViewedProduct,
    getViewedProductIds,
    clearViewedProducts
  };
};