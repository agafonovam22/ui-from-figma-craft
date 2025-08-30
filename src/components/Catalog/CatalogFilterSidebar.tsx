import React from 'react';
import { Filter } from 'lucide-react';
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
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Фильтры</h2>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-0">
        <div className="h-full overflow-y-auto">
          <CatalogFilters {...props} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

// Mobile Filter Trigger Button  
export function MobileFilterTrigger() {
  return (
    <div className="lg:hidden mb-4">
      <SidebarTrigger className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
        <Filter className="w-4 h-4" />
        Фильтры
      </SidebarTrigger>
    </div>
  );
}