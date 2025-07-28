import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  const mapboxToken = 'pk.eyJ1Ijoid2VsbGZpdG5lc3MiLCJhIjoiY21kaDR0aGw2MDAwZzJqc2R5eGN3ZTRiaCJ9.Q5YCu1Mnrw4S6W1scjYRlg';
  const tokenEntered = true;

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

  return (
    <div className="relative w-full h-[328px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;