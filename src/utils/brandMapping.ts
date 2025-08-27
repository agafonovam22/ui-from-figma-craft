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

// Функция для проверки, является ли товар беговой дорожкой
export const isTreadmill = (productType: string | undefined): boolean => {
  // Добавьте здесь ID типов оборудования для беговых дорожек
  const treadmillTypes = ['840', '841', '842']; // примерные ID, нужно уточнить
  return productType ? treadmillTypes.includes(productType) : false;
};