import React, { useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface ConfirmationAnimationProps {
  onComplete?: () => void;
}

export default function ConfirmationAnimation({ onComplete }: ConfirmationAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center">
          <CheckIcon className="h-12 w-12 text-primary-600" aria-hidden="true" />
        </div>
        <svg
          className="absolute top-0 left-0 h-24 w-24 animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="text-primary-300"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="46"
            cx="50"
            cy="50"
          />
          <path
            className="text-primary-500"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            d="M 50 4 A 46 46 0 0 1 96 50"
          />
        </svg>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Assinatura Confirmada!
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Seu pedido foi processado com sucesso e sua assinatura está ativa.
      </p>
    </div>
  );
}