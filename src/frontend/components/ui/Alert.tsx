import React from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon as ExclamationIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string;
  onClose?: () => void;
  showIcon?: boolean;
  showCloseButton?: boolean;
}

export default function Alert({
  type,
  title,
  message,
  onClose,
  showIcon = true,
  showCloseButton = true,
}: AlertProps) {
  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return {
          containerClass: 'bg-green-50 border-green-400',
          iconClass: 'text-green-400',
          titleClass: 'text-green-800',
          messageClass: 'text-green-700',
          icon: <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />,
        };
      case 'error':
        return {
          containerClass: 'bg-red-50 border-red-400',
          iconClass: 'text-red-400',
          titleClass: 'text-red-800',
          messageClass: 'text-red-700',
          icon: <XCircleIcon className="h-5 w-5" aria-hidden="true" />,
        };
      case 'warning':
        return {
          containerClass: 'bg-yellow-50 border-yellow-400',
          iconClass: 'text-yellow-400',
          titleClass: 'text-yellow-800',
          messageClass: 'text-yellow-700',
          icon: <ExclamationIcon className="h-5 w-5" aria-hidden="true" />,
        };
      case 'info':
      default:
        return {
          containerClass: 'bg-blue-50 border-blue-400',
          iconClass: 'text-blue-400',
          titleClass: 'text-blue-800',
          messageClass: 'text-blue-700',
          icon: <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />,
        };
    }
  };

  const styles = getAlertStyles();

  return (
    <div className={`rounded-md border p-4 ${styles.containerClass}`}>
      <div className="flex">
        {showIcon && (
          <div className={`flex-shrink-0 ${styles.iconClass}`}>{styles.icon}</div>
        )}
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${styles.titleClass}`}>{title}</h3>
          )}
          <div className={`text-sm ${title ? 'mt-2' : ''} ${styles.messageClass}`}>
            {message}
          </div>
        </div>
        {showCloseButton && onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className={`inline-flex rounded-md p-1.5 ${styles.iconClass} hover:bg-opacity-20 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${type}-50 focus:ring-${type}-600`}
              >
                <span className="sr-only">Fechar</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}