import React, { useEffect, useState } from 'react';
import { getAllBrandsFromAPI } from '@/utils/getBrands';

const BrandsDebug: React.FC = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [mapping, setMapping] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      const result = await getAllBrandsFromAPI();
      setBrands(result.brands);
      setMapping(result.mapping);
      setLoading(false);
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <div className="p-4">Загрузка брендов...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Все бренды из каталога API</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Всего брендов: {brands.length}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {brands.map((brand, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded text-sm">
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          Соответствие ID брендов:
        </h3>
        <div className="space-y-2">
          {Object.entries(mapping).map(([id, names]) => (
            <div key={id} className="p-3 bg-gray-50 rounded">
              <strong>ID: {id}</strong>
              {names.length > 0 && (
                <div className="text-sm text-gray-600 mt-1">
                  Дополнительная информация: {names.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsDebug;