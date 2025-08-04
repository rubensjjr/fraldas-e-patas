import React, { useState } from 'react';
import Image from 'next/image';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  absorption?: string;
  onAddToCart?: (id: string, quantity: number) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  size,
  absorption,
  onAddToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0 && onAddToCart) {
      onAddToCart(id, quantity);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {size && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              Tamanho: {size}
            </span>
          )}
          {absorption && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              Absorção: {absorption}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-800">
            R$ {price.toFixed(2)}
          </span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-1"
              disabled={quantity === 0}
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <span className="text-gray-700 w-6 text-center">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-1"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <Button
          variant={quantity > 0 ? 'primary' : 'outline'}
          fullWidth
          className="mt-4"
          disabled={quantity === 0}
          onClick={handleAddToCart}
        >
          {quantity > 0 ? 'Adicionar à Assinatura' : 'Selecionar Quantidade'}
        </Button>
      </div>
    </div>
  );
}