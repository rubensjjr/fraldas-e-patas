import React from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  absorption?: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (id: string, quantity: number) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
        <p className="text-gray-500">Tente ajustar seus filtros ou buscar por outro termo.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          size={product.size}
          absorption={product.absorption}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export const sampleProducts: Product[] = [
  {
    id: 'fralda-geriatrica-p-1',
    name: 'Fralda Geriátrica Premium P',
    description: 'Fralda geriátrica tamanho P com absorção extra e tecnologia anti-vazamento.',
    price: 49.90,
    image: '/images/products/fralda-geriatrica-p.jpg',
    category: 'Fraldas',
    size: 'P',
    absorption: 'Extra',
  },
  {
    id: 'fralda-geriatrica-m-1',
    name: 'Fralda Geriátrica Premium M',
    description: 'Fralda geriátrica tamanho M com absorção extra e tecnologia anti-vazamento.',
    price: 59.90,
    image: '/images/products/fralda-geriatrica-m.jpg',
    category: 'Fraldas',
    size: 'M',
    absorption: 'Extra',
  },
  {
    id: 'fralda-geriatrica-g-1',
    name: 'Fralda Geriátrica Premium G',
    description: 'Fralda geriátrica tamanho G com absorção extra e tecnologia anti-vazamento.',
    price: 69.90,
    image: '/images/products/fralda-geriatrica-g.jpg',
    category: 'Fraldas',
    size: 'G',
    absorption: 'Extra',
  },
  {
    id: 'fralda-geriatrica-gg-1',
    name: 'Fralda Geriátrica Premium GG',
    description: 'Fralda geriátrica tamanho GG com absorção extra e tecnologia anti-vazamento.',
    price: 79.90,
    image: '/images/products/fralda-geriatrica-gg.jpg',
    category: 'Fraldas',
    size: 'GG',
    absorption: 'Extra',
  },
  {
    id: 'tapete-higienico-p-1',
    name: 'Tapete Higiênico Premium P',
    description: 'Tapete higiênico para pets tamanho P com alta absorção e secagem rápida.',
    price: 39.90,
    image: '/images/products/tapete-higienico-p.jpg',
    category: 'Tapetes',
    size: 'P',
  },
  {
    id: 'tapete-higienico-m-1',
    name: 'Tapete Higiênico Premium M',
    description: 'Tapete higiênico para pets tamanho M com alta absorção e secagem rápida.',
    price: 49.90,
    image: '/images/products/tapete-higienico-m.jpg',
    category: 'Tapetes',
    size: 'M',
  },
  {
    id: 'tapete-higienico-g-1',
    name: 'Tapete Higiênico Premium G',
    description: 'Tapete higiênico para pets tamanho G com alta absorção e secagem rápida.',
    price: 59.90,
    image: '/images/products/tapete-higienico-g.jpg',
    category: 'Tapetes',
    size: 'G',
  },
  {
    id: 'absorvente-regular-1',
    name: 'Absorvente Regular',
    description: 'Absorvente com proteção regular para incontinência leve.',
    price: 29.90,
    image: '/images/products/absorvente-regular.jpg',
    category: 'Absorventes',
    absorption: 'Regular',
  },
  {
    id: 'absorvente-extra-1',
    name: 'Absorvente Extra',
    description: 'Absorvente com proteção extra para incontinência moderada.',
    price: 39.90,
    image: '/images/products/absorvente-extra.jpg',
    category: 'Absorventes',
    absorption: 'Extra',
  },
  {
    id: 'absorvente-super-1',
    name: 'Absorvente Super',
    description: 'Absorvente com proteção super para incontinência intensa.',
    price: 49.90,
    image: '/images/products/absorvente-super.jpg',
    category: 'Absorventes',
    absorption: 'Super',
  },
  {
    id: 'pomada-assadura-1',
    name: 'Pomada para Assaduras',
    description: 'Pomada preventiva e curativa para assaduras, com óxido de zinco.',
    price: 19.90,
    image: '/images/products/pomada-assadura.jpg',
    category: 'Complementares',
  },
  {
    id: 'lencos-umedecidos-1',
    name: 'Lenços Umedecidos',
    description: 'Lenços umedecidos hipoalergênicos para limpeza e higiene.',
    price: 15.90,
    image: '/images/products/lencos-umedecidos.jpg',
    category: 'Complementares',
  },
];