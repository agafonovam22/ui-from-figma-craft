import { useState, useEffect } from 'react';

interface BitrixProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  gallery_images?: string[];
  category_id?: string;
  is_available: boolean;
  in_stock: boolean;
  rating: number;
  reviews_count: number;
  badge?: string;
  badge_color?: string;
  has_comparison: boolean;
  characteristics?: { [key: string]: any };
}

interface BitrixCategory {
  id: string;
  name: string;
  code: string;
  description?: string;
  image_url?: string;
  url?: string;
}

interface BitrixCatalogData {
  categories: BitrixCategory[];
  products: BitrixProduct[];
  total_categories: number;
  total_products: number;
}

export const useBitrixCatalog = (bitrixUrl?: string) => {
  const [data, setData] = useState<BitrixCatalogData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCatalog = async (url?: string) => {
    if (!url && !bitrixUrl) return;
    
    const targetUrl = url || bitrixUrl;
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(targetUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const catalogData = await response.json();
      
      if (catalogData.error) {
        throw new Error(catalogData.error);
      }
      
      setData(catalogData);
    } catch (err) {
      console.error('Error fetching Bitrix catalog:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch catalog');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bitrixUrl) {
      fetchCatalog();
    }
  }, [bitrixUrl]);

  return {
    data,
    loading,
    error,
    fetchCatalog,
    products: data?.products || [],
    categories: data?.categories || []
  };
};