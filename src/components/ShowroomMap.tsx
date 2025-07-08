import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ShowroomMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenEntered, setTokenEntered] = useState(false);

  // Coordinates for the showroom: Москва, ТЦ Капитолий, Правобережная улица, 1Б
  const showroomCoordinates: [number, number] = [37.5304, 55.8647];

  useEffect(() => {
    if (!mapContainer.current || !tokenEntered || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: showroomCoordinates,
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Create marker element for showroom
    const markerElement = document.createElement('div');
    markerElement.className = 'w-8 h-8 bg-[#F53B49] rounded-full border-2 border-white shadow-lg cursor-pointer flex items-center justify-center';
    markerElement.innerHTML = '<div class="w-3 h-3 bg-white rounded-full"></div>';
    
    // Create popup for showroom
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="p-3">
        <h3 class="font-bold text-gray-900 mb-2">Шоу-рум WellFitness</h3>
        <p class="text-sm text-gray-600 mb-1">Москва, ТЦ Капитолий, Правобережная улица, 1Б</p>
        <p class="text-sm text-gray-600 mb-1">+7 (499) 677-56-32 доб. 337</p>
        <p class="text-sm text-gray-600">10:00 - 22:00</p>
      </div>
    `);

    // Add marker to map
    new mapboxgl.Marker(markerElement)
      .setLngLat(showroomCoordinates)
      .setPopup(popup)
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenEntered, mapboxToken]);

  if (!tokenEntered) {
    return (
      <div className="bg-gray-100 flex flex-col items-center justify-center h-full p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Карта шоу-рума
        </h3>
        <p className="text-xs text-gray-600 mb-3 text-center">
          Получите токен на{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-[#F53B49] hover:underline">
            mapbox.com
          </a>
        </p>
        <div className="flex gap-1 w-full">
          <Input
            type="text"
            placeholder="Mapbox токен..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1 text-xs h-8"
          />
          <Button
            onClick={() => setTokenEntered(true)}
            disabled={!mapboxToken.trim()}
            className="bg-[#F53B49] hover:bg-[#e63946] text-white text-xs h-8 px-2"
          >
            OK
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default ShowroomMap;