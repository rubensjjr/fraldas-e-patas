import React from 'react';

export default function SocialShare() {
  const shareMessage = "Acabei de assinar o Fraldas e Patas! Produtos de qualidade com entrega recorrente e economia garantida. 🎉";
  
  const handleShare = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareMessage)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage + ' ' + window.location.href)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 bg-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Compartilhe sua Experiência</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Conte para seus amigos sobre sua assinatura
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <p className="text-sm text-gray-600 mb-4">
          Ajude outras pessoas a descobrirem a conveniência da assinatura Fraldas e Patas!
        </p>
        
        <div className="flex space-x-4">
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <svg className="h-5 w-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            Facebook
          </button>
          
          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <svg className="h-5 w-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            Twitter
          </button>
          
          <button
            onClick={() => handleShare('whatsapp')}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <svg className="h-5 w-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M20.447 3.553a12.695 12.695 0 00-17.894 0A12.695 12.695 0 000 12c0 2.136.535 4.15 1.474 5.916L0 24l6.294-1.463A12.68 12.68 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.24-6.2-3.553-8.447zM12 22.154c-1.863 0-3.687-.476-5.293-1.366l-.377-.223-3.936.916.936-3.826-.246-.394A10.817 10.817 0 011.846 12C1.846 6.48 6.48 1.846 12 1.846S22.154 6.48 22.154 12c0 5.52-4.634 10.154-10.154 10.154zm5.947-7.47c-.32-.16-1.888-.932-2.18-1.04-.292-.106-.504-.16-.716.16-.213.32-.824 1.04-1.01 1.25-.186.213-.372.24-.692.08-.32-.16-1.35-.497-2.57-1.583-.95-.845-1.59-1.89-1.777-2.207-.186-.32-.02-.492.14-.65.143-.143.32-.372.48-.558.16-.186.213-.32.32-.53.106-.214.053-.4-.027-.558-.08-.16-.717-1.726-1.01-2.36-.266-.613-.536-.53-.717-.54-.186-.013-.4-.013-.61-.013s-.56.08-.85.4c-.293.32-1.118 1.092-1.118 2.66s1.144 3.093 1.304 3.306c.16.213 2.236 3.574 5.52 4.86.77.335 1.37.536 1.84.685.773.246 1.478.212 2.035.13.62-.094 1.888-.773 2.153-1.52.266-.746.266-1.385.186-1.52-.08-.132-.293-.212-.613-.372z" clipRule="evenodd" />
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}