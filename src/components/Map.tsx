import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: [number, number];
}

interface MapProps {
  stores: Store[];
}

const Map: React.FC<MapProps> = ({ stores }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenEntered, setTokenEntered] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenEntered || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.6173, 55.7558], // Moscow center
      zoom: 10,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for stores
    stores.forEach((store) => {
      if (map.current) {
        // Create marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'w-6 h-6 bg-[#F53B49] rounded-full border-2 border-white shadow-lg cursor-pointer';
        
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-gray-900 mb-2">${store.name}</h3>
            <p class="text-sm text-gray-600 mb-1">${store.address}</p>
            <p class="text-sm text-gray-600 mb-1">${store.phone}</p>
            <p class="text-sm text-gray-600">${store.hours}</p>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(markerElement)
          .setLngLat(store.coordinates)
          .setPopup(popup)
          .addTo(map.current);
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [stores, tokenEntered, mapboxToken]);

  if (!tokenEntered) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center h-[400px]">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Для отображения карты требуется Mapbox токен
        </h3>
        <p className="text-sm text-gray-600 mb-4 text-center max-w-md">
          Получите бесплатный публичный токен на{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-[#F53B49] hover:underline">
            mapbox.com
          </a>{' '}
          и введите его ниже:
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Введите Mapbox токен..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={() => setTokenEntered(true)}
            disabled={!mapboxToken.trim()}
            className="bg-[#F53B49] hover:bg-[#e63946] text-white"
          >
            Показать карту
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;