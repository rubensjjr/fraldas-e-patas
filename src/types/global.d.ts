// Extend NodeJS global type
namespace NodeJS {
  interface ProcessEnv {
    // Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_FIREBASE_APP_ID: string;
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
    
    // Outras variáveis de ambiente
    NODE_ENV: 'development' | 'production' | 'test';
  }
}

// Extend Window interface
interface Window {
  // Adicione propriedades globais do navegador aqui, se necessário
  gtag: (...args: any[]) => void;
}
