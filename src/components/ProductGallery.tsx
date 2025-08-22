import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductGalleryProps {
  mainImage: string;
  images?: string[];
  galleryImages?: string[];
  productName: string;
  characteristics?: any;
  badges?: Array<{
    text: string;
    variant: 'default' | 'destructive' | 'secondary' | 'outline';
  }>;
}

export default function ProductGallery({ mainImage, images = [], galleryImages = [], productName, characteristics, badges = [] }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  console.log('🖼️ ProductGallery получил изображения:', {
    mainImage,
    galleryImages,
    productName,
    allImagesSources: [mainImage, ...galleryImages]
  });
  
  // Создаем массив всех изображений, начиная с главного
  const allImages = [mainImage, ...images.filter(img => img !== mainImage), ...galleryImages].filter(Boolean);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-lg bg-gray-100 min-h-[500px] max-h-[700px] w-full flex items-center justify-center">
          <img
            src={allImages[currentImageIndex] || '/placeholder.svg'}
            alt={productName}
            className="w-full h-full max-w-full max-h-full object-contain"
            style={{ 
              imageRendering: 'auto',
              filter: 'none',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            loading="eager"
            decoding="sync"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
          
          {/* Badges */}
          {badges.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant={badge.variant} className="text-xs font-medium">
                  {badge.text}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white/90"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white/90"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-all ${
                currentImageIndex === index 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => selectImage(index)}
            >
              <img
                src={image || '/placeholder.svg'}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}