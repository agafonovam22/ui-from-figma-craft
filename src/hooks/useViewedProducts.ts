import { useEffect, useState, useCallback } from 'react';

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
    console.log('🔍 Загружаем просмотренные товары из localStorage:', stored);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log('🔍 Распарсили товары:', parsed);
        setViewedProducts(parsed);
      } catch (error) {
        console.warn('Ошибка при загрузке просмотренных товаров:', error);
        localStorage.removeItem(VIEWED_PRODUCTS_KEY);
      }
    }
  }, []);

  // Добавить товар в просмотренные
  const addViewedProduct = useCallback((productId: string) => {
    console.log('🔍 addViewedProduct вызван для товара:', productId);
    setViewedProducts(prev => {
      // Удаляем товар из списка, если он уже есть
      const filtered = prev.filter(item => item.id !== productId);
      
      // Добавляем товар в начало списка
      const updated = [
        { id: productId, timestamp: Date.now() },
        ...filtered
      ].slice(0, MAX_VIEWED_PRODUCTS); // Ограничиваем количество

      console.log('🔍 Обновленный список просмотренных товаров:', updated);

      // Сохраняем в localStorage
      localStorage.setItem(VIEWED_PRODUCTS_KEY, JSON.stringify(updated));
      
      return updated;
    });
  }, []);

  // Получить ID просмотренных товаров (исключая текущий)
  const getViewedProductIds = useCallback((excludeId?: string): string[] => {
    const result = viewedProducts
      .filter(item => item.id !== excludeId)
      .map(item => item.id);
    
    console.log('🔍 getViewedProductIds вызван:', { 
      excludeId, 
      viewedProducts, 
      result 
    });
    
    return result;
  }, [viewedProducts]);

  // Очистить просмотренные товары
  const clearViewedProducts = useCallback(() => {
    setViewedProducts([]);
    localStorage.removeItem(VIEWED_PRODUCTS_KEY);
  }, []);

  return {
    viewedProducts,
    addViewedProduct,
    getViewedProductIds,
    clearViewedProducts
  };
};