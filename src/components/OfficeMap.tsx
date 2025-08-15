import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OfficeMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = 'pk.eyJ1Ijoid2VsbGZpdG5lc3MiLCJhIjoiY21kaDR0aGw2MDAwZzJqc2R5eGN3ZTRiaCJ9.Q5YCu1Mnrw4S6W1scjYRlg';
  const tokenEntered = true;

  // Coordinates for the office: Москва, ул. Маршала Прошлякова, д. 30, офис 407, БЦ «Зенит Плаза»
  const officeCoordinates: [number, number] = [37.3877, 55.7588];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: officeCoordinates,
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Create marker element for office
    const markerElement = document.createElement('div');
    markerElement.className = 'w-8 h-8 bg-[#F53B49] rounded-full border-2 border-white shadow-lg cursor-pointer flex items-center justify-center';
    markerElement.innerHTML = '<div class="w-3 h-3 bg-white rounded-full"></div>';
    
    // Create popup for office
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="p-3">
        <h3 class="font-bold text-gray-900 mb-2">Офис WellFitness</h3>
        <p class="text-sm text-gray-600 mb-1">Москва, ул. Маршала Прошлякова, д. 30, офис 407, БЦ «Зенит Плаза»</p>
        <p class="text-sm text-gray-600">09:30 – 17:30</p>
      </div>
    `);

    // Add marker to map
    new mapboxgl.Marker(markerElement)
      .setLngLat(officeCoordinates)
      .setPopup(popup)
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);


  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default OfficeMap;