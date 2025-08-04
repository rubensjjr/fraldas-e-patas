import React from 'react';
import Button from '../ui/Button';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  discountCode?: string;
  onApplyDiscount?: (code: string) => void;
  buttonText: string;
  onButtonClick: () => void;
  isLoading?: boolean;
}

export default function CartSummary({
  subtotal,
  discount,
  shipping,
  total,
  discountCode,
  onApplyDiscount,
  buttonText,
  onButtonClick,
  isLoading = false,
}: CartSummaryProps) {
  const [code, setCode] = React.useState(discountCode || '');

  const handleApplyDiscount = () => {
    if (onApplyDiscount && code) {
      onApplyDiscount(code);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Resumo do Pedido</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-base text-gray-700">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-base text-green-600">
            <p>Desconto</p>
            <p>- R$ {discount.toFixed(2)}</p>
          </div>
        )}
        
        <div className="flex justify-between text-base text-gray-700">
          <p>Frete</p>
          {shipping === 0 ? (
            <p className="text-green-600">Grátis</p>
          ) : (
            <p>R$ {shipping.toFixed(2)}</p>
          )}
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between text-lg font-medium text-gray-900">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Incluindo impostos e taxas
          </p>
        </div>
      </div>
      
      {onApplyDiscount && (
        <div className="mt-6">
          <div className="flex space-x-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código de desconto"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleApplyDiscount}
              disabled={!code}
            >
              Aplicar
            </Button>
          </div>
        </div>
      )}
      
      <div className="mt-6">
        <Button
          variant="primary"
          fullWidth
          onClick={onButtonClick}
          loading={isLoading}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}