import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreditCardIcon, QrCodeIcon as QrcodeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

export type PaymentMethod = 'credit_card' | 'pix' | 'boleto';

export interface CreditCardData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  installments: number;
}

export interface PaymentFormData {
  paymentMethod: PaymentMethod;
  creditCardData?: CreditCardData;
}

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  isLoading?: boolean;
  total: number;
}

const creditCardSchema = yup.object().shape({
  cardNumber: yup.string().required('Número do cartão é obrigatório'),
  cardName: yup.string().required('Nome no cartão é obrigatório'),
  expiryDate: yup.string().required('Data de validade é obrigatória'),
  cvv: yup.string().required('CVV é obrigatório'),
  installments: yup.number().required('Número de parcelas é obrigatório'),
});

export default function PaymentForm({ onSubmit, isLoading = false, total }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardData>({
    resolver: yupResolver(creditCardSchema),
  });

  const handleFormSubmit = (data: CreditCardData) => {
    onSubmit({
      paymentMethod,
      creditCardData: paymentMethod === 'credit_card' ? data : undefined,
    });
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
    
    if (method !== 'credit_card') {
      onSubmit({ paymentMethod: method });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Método de Pagamento</h3>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            className={`
              relative rounded-lg border p-4 cursor-pointer transition-all flex flex-col items-center
              ${paymentMethod === 'credit_card' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-gray-400'}
            `}
            onClick={() => handlePaymentMethodChange('credit_card')}
          >
            <CreditCardIcon className="h-8 w-8 text-gray-600" />
            <span className="mt-2 font-medium">Cartão de Crédito</span>
          </div>
          
          <div
            className={`
              relative rounded-lg border p-4 cursor-pointer transition-all flex flex-col items-center
              ${paymentMethod === 'pix' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-gray-400'}
            `}
            onClick={() => handlePaymentMethodChange('pix')}
          >
            <QrcodeIcon className="h-8 w-8 text-gray-600" />
            <span className="mt-2 font-medium">PIX</span>
          </div>
          
          <div
            className={`
              relative rounded-lg border p-4 cursor-pointer transition-all flex flex-col items-center
              ${paymentMethod === 'boleto' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-gray-400'}
            `}
            onClick={() => handlePaymentMethodChange('boleto')}
          >
            <DocumentTextIcon className="h-8 w-8 text-gray-600" />
            <span className="mt-2 font-medium">Boleto</span>
          </div>
        </div>
      </div>
      
      {paymentMethod === 'credit_card' ? (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Número do Cartão
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  {...register('cardNumber')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              {errors.cardNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                Nome no Cartão
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="cardName"
                  placeholder="Nome como está no cartão"
                  {...register('cardName')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              {errors.cardName && (
                <p className="mt-1 text-sm text-red-600">{errors.cardName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Data de Validade
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/AA"
                  {...register('expiryDate')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              {errors.expiryDate && (
                <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  {...register('cvv')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              {errors.cvv && (
                <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="installments" className="block text-sm font-medium text-gray-700">
                Parcelas
              </label>
              <div className="mt-1">
                <select
                  id="installments"
                  {...register('installments')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option value="1">1x de R$ {total.toFixed(2)} sem juros</option>
                  <option value="2">2x de R$ {(total / 2).toFixed(2)} sem juros</option>
                  <option value="3">3x de R$ {(total / 3).toFixed(2)} sem juros</option>
                  <option value="4">4x de R$ {(total / 4).toFixed(2)} sem juros</option>
                  <option value="5">5x de R$ {(total / 5).toFixed(2)} sem juros</option>
                  <option value="6">6x de R$ {(total / 6).toFixed(2)} sem juros</option>
                </select>
              </div>
              {errors.installments && (
                <p className="mt-1 text-sm text-red-600">{errors.installments.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={isLoading}
            >
              Finalizar Compra
            </Button>
          </div>
        </form>
      ) : paymentMethod === 'pix' ? (
        <div className="text-center p-6 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-lg mb-4">Pagamento via PIX</h4>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 inline-block">
            <QrcodeIcon className="h-32 w-32 mx-auto text-gray-600" />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Escaneie o QR Code acima com o aplicativo do seu banco ou copie o código PIX abaixo.
          </p>
          <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between mb-6">
            <code className="text-xs text-gray-800 overflow-hidden overflow-ellipsis">00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-f142082d7b230217Fraldas e Patas5204000053039865802BR5923FRALDAS E PATAS LTDA6009SAO PAULO62070503***6304E2CA</code>
            <button className="text-primary-600 text-sm font-medium ml-2 whitespace-nowrap">
              Copiar
            </button>
          </div>
          <Button
            variant="primary"
            fullWidth
            onClick={() => onSubmit({ paymentMethod: 'pix' })}
            loading={isLoading}
          >
            Confirmar Pagamento
          </Button>
        </div>
      ) : (
        <div className="text-center p-6 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-lg mb-4">Pagamento via Boleto</h4>
          <p className="text-sm text-gray-600 mb-6">
            Clique no botão abaixo para gerar o boleto. O prazo de compensação é de até 3 dias úteis.
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => onSubmit({ paymentMethod: 'boleto' })}
            loading={isLoading}
          >
            Gerar Boleto
          </Button>
        </div>
      )}
    </div>
  );
}