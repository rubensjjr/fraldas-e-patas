import React, { Fragment, ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Versão simplificada do Modal para máxima compatibilidade

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
}: ModalProps) {
  if (!isOpen) return null;

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'sm:max-w-sm';
      case 'md':
        return 'sm:max-w-md';
      case 'lg':
        return 'sm:max-w-2xl';
      case 'xl':
        return 'sm:max-w-4xl';
      default:
        return 'sm:max-w-md';
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
        &#8203;
      </span>

      <div 
        className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full ${getSizeClass()}`}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-headline"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          {showCloseButton && (
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={onClose}
              >
                <span className="sr-only">Fechar</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}

          {title && (
            <div className="mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
            </div>
          )}
          
          <div className={title ? '' : 'mt-2'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}