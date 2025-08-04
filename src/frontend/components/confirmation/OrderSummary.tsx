import React from 'react';
import Image from 'next/image';

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
  absorption?: string;
}

interface OrderSummaryProps {
  orderNumber: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  frequency: string;
}

export default function OrderSummary({
  orderNumber,
  orderDate,
  items,
  subtotal,
  discount,
  shipping,
  total,
  frequency,
}: OrderSummaryProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Resumo do Pedido</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Pedido #{orderNumber} • {orderDate}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-2">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                    <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="mt-1 flex text-sm">
                    {item.size && <p className="text-gray-500 mr-4">Tamanho: {item.size}</p>}
                    {item.absorption && <p className="text-gray-500">Absorção: {item.absorption}</p>}
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qtd {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600 mb-2">
              <p>Desconto ({frequency})</p>
              <p>- R$ {discount.toFixed(2)}</p>
            </div>
          )}
          
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <p>Frete</p>
            {shipping === 0 ? (
              <p className="text-green-600">Grátis</p>
            ) : (
              <p>R$ {shipping.toFixed(2)}</p>
            )}
          </div>
          
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>
          
          <p className="mt-2 text-sm text-gray-500">
            Assinatura {frequency.toLowerCase()} com renovação automática
          </p>
        </div>
      </div>
    </div>
  );
}