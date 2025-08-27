// Маппинг ID брендов на их названия
export const brandMapping: Record<string, string> = {
  '38769': 'CardioPower PRO',
  '38752': 'CardioPower',
  '49654': 'MAXGYM',
  '38767': 'Sole',
  '38753': 'BowFlex',
  '38770': 'Schwinn',
  '38768': 'Nautilus',
  '38771': 'Smith',
  '38761': 'TRUE',
  '38773': 'Gym80'
};

// Функция для получения названия бренда по ID
export const getBrandName = (brandId: string | undefined): string => {
  if (!brandId) return 'Неизвестный бренд';
  return brandMapping[brandId] || `Бренд ID: ${brandId}`;
};

// Маппинг типов назначения (Использование)
export const usageMapping: Record<string, string> = {
  // Нужно узнать ID для каждого типа
  // '488': 'реабилитационная', // пример ID из API
  'домашние': 'Домашние',
  'реабилитационная': 'Реабилитационная',
  'профессиональные': 'Профессиональные',
  'полупрофессиональные': 'Полупрофессиональные',
  'профессиональные_24_7': 'Профессиональные (24/7)'
};

// Маппинг типов оборудования
export const equipmentTypeMapping: Record<string, string> = {
  // Нужно узнать точные ID из API
  'беговые_дорожки': 'Беговые дорожки для дома',
  'беговые_дорожки_профессиональные': 'Беговые дорожки профессиональные'
};

// Функция для получения названия типа использования по ID
export const getUsageName = (usageId: string | undefined): string => {
  if (!usageId) return 'Неизвестное назначение';
  return usageMapping[usageId] || `Назначение ID: ${usageId}`;
};

// Функция для получения названия типа оборудования по ID  
export const getEquipmentTypeName = (equipmentId: string | undefined): string => {
  if (!equipmentId) return 'Неизвестный тип';
  return equipmentTypeMapping[equipmentId] || `Тип ID: ${equipmentId}`;
};

// Функция для проверки, является ли товар беговой дорожкой
export const isTreadmill = (productType: string | undefined): boolean => {
  // Добавьте здесь ID типов оборудования для беговых дорожек
  const treadmillTypes = ['840', '841', '842']; // примерные ID, нужно уточнить
  return productType ? treadmillTypes.includes(productType) : false;
};