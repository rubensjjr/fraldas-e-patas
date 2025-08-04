import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Step {
  id: string;
  name: string;
  description?: string;
  status: 'complete' | 'current' | 'upcoming';
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: string;
}

export default function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="md:flex md:space-x-8 md:space-y-0 space-y-4">
        {steps.map((step, stepIdx) => {
          const isCurrent = step.id === currentStep;
          const isComplete = steps.findIndex(s => s.id === currentStep) > steps.findIndex(s => s.id === step.id);
          
          return (
            <li key={step.id} className="md:flex-1">
              <div className="group flex flex-col border-l-4 border-primary-500 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {stepIdx + 1}. {step.name}
                </span>
                <span className="text-sm">{step.description}</span>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:top-0">
                  {isComplete ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
                      <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                  ) : isCurrent ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary-500 bg-white">
                      <span className="h-2 w-2 rounded-full bg-primary-500" />
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                      <span className="h-2 w-2 rounded-full bg-transparent" />
                    </span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export const subscriptionSteps: Step[] = [
  { id: 'produtos', name: 'Produtos', description: 'Selecione seus produtos', status: 'complete' },
  { id: 'assinatura', name: 'Assinatura', description: 'Configure sua assinatura', status: 'current' },
  { id: 'checkout', name: 'Pagamento', description: 'Informações de pagamento', status: 'upcoming' },
  { id: 'confirmacao', name: 'Confirmação', description: 'Pedido confirmado', status: 'upcoming' },
];