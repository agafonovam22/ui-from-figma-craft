// Утилита для получения всех брендов из каталога
export interface BrandInfo {
  id: string;
  name: string;
  country?: string;
}

export const getAllBrandsFromAPI = async () => {
  try {
    const response = await fetch('https://cp44652.tw1.ru/catalog.php');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    const brandsMap = new Map<string, BrandInfo>();
    const brandNamesSet = new Set<string>();

    data.products.forEach((product: any) => {
      const brandId = product.characteristics?.['Бренд (id)'] || '';
      const brandName = product.characteristics?.['Бренд'] || '';
      const countryBrand = product.characteristics?.['Страна бренда'] || '';
      
      // Если есть название бренда, используем его как основной идентификатор
      if (brandName && brandName.trim()) {
        const cleanBrandName = brandName.trim();
        brandNamesSet.add(cleanBrandName);
        
        // Сохраняем информацию о бренде
        if (!brandsMap.has(cleanBrandName)) {
          brandsMap.set(cleanBrandName, {
            id: brandId || cleanBrandName,
            name: cleanBrandName,
            country: countryBrand || undefined
          });
        }
      }
      // Если только ID есть, но нет названия
      else if (brandId && brandId.trim() && !brandName) {
        const cleanBrandId = brandId.trim();
        if (!brandsMap.has(cleanBrandId)) {
          brandsMap.set(cleanBrandId, {
            id: cleanBrandId,
            name: cleanBrandId, // Используем ID как название, если нет настоящего названия
            country: countryBrand || undefined
          });
        }
        brandNamesSet.add(cleanBrandId);
      }
    });

    const brandsList = Array.from(brandNamesSet).sort();
    const brandsInfo = Array.from(brandsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    
    console.log('=== СПИСОК ВСЕХ БРЕНДОВ (НАЗВАНИЯ) ===');
    console.log('Всего уникальных брендов:', brandsList.length);
    console.log('Список брендов:', brandsList);
    console.log('=== ДЕТАЛЬНАЯ ИНФОРМАЦИЯ О БРЕНДАХ ===');
    console.log(brandsInfo);
    
    return {
      brands: brandsList, // Массив названий брендов
      brandsInfo, // Детальная информация о брендах
      total: brandsList.length
    };
  } catch (error) {
    console.error('Ошибка при получении брендов:', error);
    return { brands: [], brandsInfo: [], total: 0 };
  }
};

// Утилита для получения названия бренда по ID или наоборот
export const getBrandName = (brandId: string, brandsInfo: BrandInfo[]): string => {
  const brand = brandsInfo.find(b => b.id === brandId);
  return brand ? brand.name : brandId;
};