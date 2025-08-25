/**
 * Извлекает название бренда из названия товара
 * Предполагается, что бренд идет после типа продукции в названии
 * Например: "Фитнес набор Centr Fitness Kit (CFK1)" -> "Centr"
 */
export const extractBrandFromProductName = (productName: string): string => {
  if (!productName) return '';
  
  // Разбиваем название на слова
  const words = productName.trim().split(' ');
  
  // Если слов меньше 2, возвращаем пустую строку
  if (words.length < 2) return '';
  
  // Обычно бренд - это второе слово после типа продукции
  // Например: "Фитнес набор Centr..." -> "Centr"
  // "Беговая дорожка True..." -> "True"
  const potentialBrand = words[2] || words[1];
  
  // Очищаем от возможных символов в скобках и других символов
  return potentialBrand.replace(/[()]/g, '').trim();
};