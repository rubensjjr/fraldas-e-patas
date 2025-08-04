import React from 'react';
import { EnvelopeIcon, TruckIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

export default function NextSteps() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Próximos Passos</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          O que acontece agora com sua assinatura
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Confirmação por Email</h4>
              <p className="mt-1 text-sm text-gray-500">
                Enviamos um email de confirmação para o endereço fornecido com todos os detalhes da sua assinatura.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                <TruckIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Preparação do Pedido</h4>
              <p className="mt-1 text-sm text-gray-500">
                Sua primeira entrega será preparada e enviada nos próximos dias úteis. Você receberá atualizações sobre o status do envio.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Acesse sua Conta</h4>
              <p className="mt-1 text-sm text-gray-500">
                Você pode acessar sua conta a qualquer momento para gerenciar sua assinatura, alterar produtos, pausar ou cancelar.
              </p>
              <div className="mt-3">
                <Button href="/dashboard" variant="outline" size="sm">
                  Ir para o Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}