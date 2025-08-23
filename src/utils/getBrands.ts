// Утилита для получения всех брендов из каталога
export const getAllBrandsFromAPI = async () => {
  try {
    const response = await fetch('https://cp44652.tw1.ru/catalog.php');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    const brandsSet = new Set<string>();
    const brandMapping: Record<string, string[]> = {};

    data.products.forEach((product: any) => {
      const brandId = product.characteristics?.['Бренд (id)'] || '';
      const brandName = product.characteristics?.['Бренд'] || '';
      const countryBrand = product.characteristics?.['Страна бренда'] || '';
      
      if (brandId) {
        brandsSet.add(brandId);
        if (!brandMapping[brandId]) {
          brandMapping[brandId] = [];
        }
        if (brandName && !brandMapping[brandId].includes(brandName)) {
          brandMapping[brandId].push(brandName);
        }
        if (countryBrand && !brandMapping[brandId].includes(countryBrand)) {
          brandMapping[brandId].push(countryBrand);
        }
      }
      if (brandName) {
        brandsSet.add(brandName);
      }
    });

    const brandsList = Array.from(brandsSet).sort();
    
    console.log('=== СПИСОК ВСЕХ БРЕНДОВ ===');
    console.log('Всего уникальных брендов:', brandsList.length);
    console.log('Список брендов:', brandsList);
    console.log('=== СООТВЕТСТВИЕ ID - НАЗВАНИЯ ===');
    console.log(brandMapping);
    
    return {
      brands: brandsList,
      mapping: brandMapping,
      total: brandsList.length
    };
  } catch (error) {
    console.error('Ошибка при получении брендов:', error);
    return { brands: [], mapping: {}, total: 0 };
  }
};