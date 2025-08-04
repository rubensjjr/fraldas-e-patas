import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Precisa de Ajuda?</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Nossa equipe está pronta para atendê-lo
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
            <span className="text-gray-700">contato@fraldasepatas.com.br</span>
          </div>
          
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" aria-hidden="true" />
            <span className="text-gray-700">(11) 99999-9999</span>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá,%20preciso%20de%20ajuda%20com%20minha%20assinatura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M20.447 3.553a12.695 12.695 0 00-17.894 0A12.695 12.695 0 000 12c0 2.136.535 4.15 1.474 5.916L0 24l6.294-1.463A12.68 12.68 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.24-6.2-3.553-8.447zM12 22.154c-1.863 0-3.687-.476-5.293-1.366l-.377-.223-3.936.916.936-3.826-.246-.394A10.817 10.817 0 011.846 12C1.846 6.48 6.48 1.846 12 1.846S22.154 6.48 22.154 12c0 5.52-4.634 10.154-10.154 10.154zm5.947-7.47c-.32-.16-1.888-.932-2.18-1.04-.292-.106-.504-.16-.716.16-.213.32-.824 1.04-1.01 1.25-.186.213-.372.24-.692.08-.32-.16-1.35-.497-2.57-1.583-.95-.845-1.59-1.89-1.777-2.207-.186-.32-.02-.492.14-.65.143-.143.32-.372.48-.558.16-.186.213-.32.32-.53.106-.214.053-.4-.027-.558-.08-.16-.717-1.726-1.01-2.36-.266-.613-.536-.53-.717-.54-.186-.013-.4-.013-.61-.013s-.56.08-.85.4c-.293.32-1.118 1.092-1.118 2.66s1.144 3.093 1.304 3.306c.16.213 2.236 3.574 5.52 4.86.77.335 1.37.536 1.84.685.773.246 1.478.212 2.035.13.62-.094 1.888-.773 2.153-1.52.266-.746.266-1.385.186-1.52-.08-.132-.293-.212-.613-.372z" clipRule="evenodd" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}