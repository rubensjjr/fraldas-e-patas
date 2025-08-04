import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export interface SortOption {
  name: string;
  value: string;
}

interface SortOptionsProps {
  options: SortOption[];
  currentSort: string;
  onSortChange: (value: string) => void;
}

export default function SortOptions({
  options,
  currentSort,
  onSortChange,
}: SortOptionsProps) {
  const currentOption = options.find((option) => option.value === currentSort) || options[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Ordenar por
          <ChevronDownIcon
            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    onClick={() => onSortChange(option.value)}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } ${option.value === currentSort ? 'font-medium text-gray-900' : 'text-gray-500'} block px-4 py-2 text-sm w-full text-left`}
                  >
                    {option.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export const sortOptions: SortOption[] = [
  { name: 'Mais Populares', value: 'popularity' },
  { name: 'Menor Preço', value: 'price-asc' },
  { name: 'Maior Preço', value: 'price-desc' },
  { name: 'Avaliações', value: 'rating' },
  { name: 'Mais Recentes', value: 'newest' },
];