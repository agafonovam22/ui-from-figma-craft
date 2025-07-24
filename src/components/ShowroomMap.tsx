import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ShowroomMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = 'pk.eyJ1Ijoid2VsbGZpdG5lc3MiLCJhIjoiY21kaDR0aGw2MDAwZzJqc2R5eGN3ZTRiaCJ9.Q5YCu1Mnrw4S6W1scjYRlg';
  const tokenEntered = true;

  // Coordinates for the showroom: Правобережная ул., 1Б, Москва, Россия, 125445
  const showroomCoordinates: [number, number] = [37.448739268736084, 55.88084760674918];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: showroomCoordinates,
      zoom: 16,
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
  }, []);


  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default ShowroomMap;