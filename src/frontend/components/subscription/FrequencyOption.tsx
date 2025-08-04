import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export interface FrequencyOptionType {
  id: string;
  name: string;
  description: string;
  discount: number;
  period: string;
  recommended?: boolean;
}

interface FrequencyOptionProps {
  option: FrequencyOptionType;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function FrequencyOption({ option, selected, onSelect }: FrequencyOptionProps) {
  const { id, name, description, discount, period, recommended } = option;

  return (
    <div
      className={`
        relative rounded-lg border p-4 cursor-pointer transition-all
        ${selected ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-gray-400'}
        ${recommended ? 'ring-2 ring-primary-500 ring-offset-2' : ''}
      `}
      onClick={() => onSelect(id)}
    >
      {recommended && (
        <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full bg-primary-500 px-2.5 py-0.5 text-xs font-medium text-white">
          Recomendado
        </span>
      )}
      
      <div className="flex items-start">
        {selected && (
          <div className="flex-shrink-0 mr-2">
            <CheckCircleIcon className="h-5 w-5 text-primary-500" aria-hidden="true" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          
          <div className="mt-4 flex items-baseline">
            <span className="text-2xl font-semibold text-gray-900">
              {discount > 0 ? `${discount}%` : 'Sem desconto'}
            </span>
            <span className="ml-1 text-sm text-gray-500">
              de desconto
            </span>
          </div>
          
          <p className="mt-1 text-sm text-gray-500">
            Entrega a cada {period}
          </p>
        </div>
      </div>
    </div>
  );
}

export const frequencyOptions: FrequencyOptionType[] = [
  {
    id: 'monthly',
    name: 'Mensal',
    description: 'Receba seus produtos todo mês',
    discount: 0,
    period: 'mês',
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    description: 'Receba seus produtos a cada 3 meses',
    discount: 5,
    period: '3 meses',
    recommended: true,
  },
  {
    id: 'semiannual',
    name: 'Semestral',
    description: 'Receba seus produtos a cada 6 meses',
    discount: 10,
    period: '6 meses',
  },
  {
    id: 'annual',
    name: 'Anual',
    description: 'Receba seus produtos uma vez por ano',
    discount: 15,
    period: 'ano',
  },
];