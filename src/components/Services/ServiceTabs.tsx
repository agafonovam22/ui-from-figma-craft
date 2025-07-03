import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface ServiceTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
            activeTab === tab.id
              ? 'bg-brand-red text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ServiceTabs;