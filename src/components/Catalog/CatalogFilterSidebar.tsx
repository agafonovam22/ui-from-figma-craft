import React from 'react';
import { Menu } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import CatalogFilters from './CatalogFilters';
import { FilterState } from '@/types/filters';

interface CatalogFilterSidebarProps {
  filters: FilterState;
  filterOptions: {
    brands: string[];
    equipmentTypes: string[];
  };
  onPriceChange: (priceFilter: FilterState['price']) => void;
  onBrandsChange: (brands: string[]) => void;
  onPurposeTypesChange: (types: string[]) => void;
  onPowerRangeChange: (range: FilterState['powerRange']) => void;
  onEquipmentTypesChange: (types: string[]) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

export function CatalogFilterSidebar(props: CatalogFilterSidebarProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-end">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-0">
        <div className="h-full overflow-y-auto">
          <CatalogFilters {...props} hideHeaders />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

// Mobile Filter Trigger Button  
export function MobileFilterTrigger() {
  return (
    <div className="lg:hidden mb-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 bg-white shadow-sm" />
        <span className="text-sm font-medium text-gray-700 md:block hidden">Фильтр</span>
      </div>
    </div>
  );
}