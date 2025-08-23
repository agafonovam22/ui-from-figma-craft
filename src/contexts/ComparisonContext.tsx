import React, { createContext, useContext, useState, useCallback } from 'react';

interface ComparisonItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  originalPrice?: number;
  discount?: number;
}

interface ComparisonContextType {
  comparison: ComparisonItem[];
  addToComparison: (item: ComparisonItem) => void;
  removeFromComparison: (id: string) => void;
  isInComparison: (id: string) => boolean;
  toggleComparison: (item: ComparisonItem) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [comparison, setComparison] = useState<ComparisonItem[]>([]);

  const addToComparison = useCallback((item: ComparisonItem) => {
    setComparison(prev => {
      const exists = prev.find(comp => comp.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  }, []);

  const removeFromComparison = useCallback((id: string) => {
    setComparison(prev => prev.filter(comp => comp.id !== id));
  }, []);

  const isInComparison = useCallback((id: string) => {
    return comparison.some(comp => comp.id === id);
  }, [comparison]);

  const toggleComparison = useCallback((item: ComparisonItem) => {
    if (isInComparison(item.id)) {
      removeFromComparison(item.id);
    } else {
      addToComparison(item);
    }
  }, [isInComparison, addToComparison, removeFromComparison]);

  return (
    <ComparisonContext.Provider value={{ 
      comparison, 
      addToComparison, 
      removeFromComparison, 
      isInComparison, 
      toggleComparison 
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};