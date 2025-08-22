// Оптимизация URL изображений
export const optimizeImageUrl = (url: string, width?: number, height?: number): string => {
  if (!url || url.includes('placeholder.svg')) {
    return url;
  }
  
  // Добавляем параметры сжатия и размера для изображений Bitrix
  if (url.includes('cp44652.tw1.ru')) {
    const params = new URLSearchParams();
    if (width) params.set('width', width.toString());
    if (height) params.set('height', height.toString());
    params.set('quality', '80');
    params.set('format', 'webp');
    
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}${params.toString()}`;
  }
  
  return url;
};

// Предзагрузка критических изображений
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Ленивая загрузка изображений с intersection observer
export const useLazyImage = (src: string, threshold = 0.1) => {
  return {
    src,
    loading: 'lazy' as const,
    decoding: 'async' as const,
    style: { 
      imageRendering: 'auto',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden'
    }
  };
};