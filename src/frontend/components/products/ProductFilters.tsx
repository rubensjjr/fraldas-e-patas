import React, { useState } from 'react';
import { FunnelIcon as FilterIcon } from '@heroicons/react/24/solid';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';

export interface FilterOption {
  id: string;
  name: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface ProductFiltersProps {
  filters: FilterGroup[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, optionId: string, isActive: boolean) => void;
  onClearFilters: () => void;
}

export default function ProductFilters({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}: ProductFiltersProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (filterId: string, optionId: string) => {
    const isActive = activeFilters[filterId]?.includes(optionId) || false;
    onFilterChange(filterId, optionId, !isActive);
  };

  const hasActiveFilters = Object.values(activeFilters).some(options => options.length > 0);

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)} />
          
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Filters */}
            <div className="mt-4 border-t border-gray-200">
              {filters.map((filter) => (
                <div key={filter.id} className="px-4 py-6 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
                  <div className="mt-4 space-y-3">
                    {filter.options.map((option) => (
                      <div key={option.id} className="flex items-center">
                        <input
                          id={`mobile-${filter.id}-${option.id}`}
                          name={`${filter.id}[]`}
                          type="checkbox"
                          checked={activeFilters[filter.id]?.includes(option.id) || false}
                          onChange={() => handleFilterChange(filter.id, option.id)}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label
                          htmlFor={`mobile-${filter.id}-${option.id}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.name}
                          {option.count !== undefined && (
                            <span className="ml-1 text-gray-400">({option.count})</span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {hasActiveFilters && (
              <div className="px-4 py-4">
                <button
                  type="button"
                  className="text-sm text-primary-600 hover:text-primary-500"
                  onClick={onClearFilters}
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
          <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
          
          <button
            type="button"
            className="inline-flex items-center lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="text-sm font-medium">Filtrar</span>
            <FilterIcon className="ml-1 h-5 w-5" aria-hidden="true" />
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              className="hidden lg:block text-sm text-primary-600 hover:text-primary-500"
              onClick={onClearFilters}
            >
              Limpar todos os filtros
            </button>
          )}
        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block">
        <div className="divide-y divide-gray-200 space-y-6">
          {filters.map((filter) => (
            <div key={filter.id} className="py-6">
              <h3 className="text-sm font-medium text-gray-900">{filter.name}</h3>
              <div className="mt-4 space-y-3">
                {filter.options.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      id={`desktop-${filter.id}-${option.id}`}
                      name={`${filter.id}[]`}
                      type="checkbox"
                      checked={activeFilters[filter.id]?.includes(option.id) || false}
                      onChange={() => handleFilterChange(filter.id, option.id)}
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`desktop-${filter.id}-${option.id}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.name}
                      {option.count !== undefined && (
                        <span className="ml-1 text-gray-400">({option.count})</span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const productFilters: FilterGroup[] = [
  {
    id: 'category',
    name: 'Categoria',
    options: [
      { id: 'fraldas', name: 'Fraldas Geriátricas', count: 12 },
      { id: 'absorventes', name: 'Absorventes', count: 8 },
      { id: 'tapetes', name: 'Tapetes Higiênicos', count: 10 },
      { id: 'complementares', name: 'Produtos Complementares', count: 6 },
    ],
  },
  {
    id: 'size',
    name: 'Tamanho',
    options: [
      { id: 'p', name: 'P' },
      { id: 'm', name: 'M' },
      { id: 'g', name: 'G' },
      { id: 'gg', name: 'GG' },
      { id: 'xg', name: 'XG' },
    ],
  },
  {
    id: 'absorption',
    name: 'Absorção',
    options: [
      { id: 'regular', name: 'Regular' },
      { id: 'extra', name: 'Extra' },
      { id: 'super', name: 'Super' },
      { id: 'noturna', name: 'Noturna' },
    ],
  },
];