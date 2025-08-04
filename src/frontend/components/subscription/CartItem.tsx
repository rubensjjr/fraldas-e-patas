import React from 'react';
import Image from 'next/image';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
  absorption?: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  size,
  absorption,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">R$ {(price * quantity).toFixed(2)}</p>
          </div>
          <div className="mt-1 flex text-sm">
            {size && <p className="text-gray-500 mr-4">Tamanho: {size}</p>}
            {absorption && <p className="text-gray-500">Absorção: {absorption}</p>}
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full border border-gray-300 hover:border-gray-400"
              disabled={quantity <= 1}
            >
              <MinusIcon className="h-3 w-3" />
            </button>
            <span className="text-gray-500 w-6 text-center">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full border border-gray-300 hover:border-gray-400"
            >
              <PlusIcon className="h-3 w-3" />
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={handleRemove}
              className="font-medium text-primary-600 hover:text-primary-500 flex items-center"
            >
              <TrashIcon className="h-4 w-4 mr-1" />
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}