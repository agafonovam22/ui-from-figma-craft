export interface PriceFilter {
  min: number;
  max: number;
  ranges: string[];
}

export interface FilterState {
  price: PriceFilter;
  brands: string[];
  purposeTypes: string[];
  powerRange: {
    min?: number;
    max?: number;
  };
  equipmentTypes: string[];
}

export interface FilterCallbacks {
  onPriceChange: (priceFilter: PriceFilter) => void;
  onBrandsChange: (brands: string[]) => void;
  onPurposeTypesChange: (types: string[]) => void;
  onPowerRangeChange: (range: { min?: number; max?: number }) => void;
  onEquipmentTypesChange: (types: string[]) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}