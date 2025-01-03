import React from 'react';
import { ServiceCategory } from '../../types/service';

interface ServiceFilterProps {
  selectedCategory: ServiceCategory | 'all';
  onCategoryChange: (category: ServiceCategory | 'all') => void;
}

const ServiceFilter = ({ selectedCategory, onCategoryChange }: ServiceFilterProps) => {
  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'screen', label: 'Écran' },
    { id: 'battery', label: 'Batterie' },
    { id: 'connectivity', label: 'Connectique' },
    { id: 'software', label: 'Logiciel' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id as ServiceCategory | 'all')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ServiceFilter;