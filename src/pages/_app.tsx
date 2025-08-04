import '@/frontend/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { app, Analytics } from '@/lib/firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Configuração do Firebase Analytics
  useEffect(() => {
    // Inicializa o Firebase Analytics apenas no navegador
    if (typeof window !== 'undefined') {
      const initializeAnalytics = async () => {
        const { getAnalytics, logEvent } = await import('firebase/analytics');
        const analytics = getAnalytics(app);
        
        const logPageView = (url: string) => {
          logEvent(analytics, 'page_view', {
            page_path: url,
            page_title: document?.title || 'Fraldas e Patas',
          });
        };

        // Loga a visualização da página inicial
        logPageView(window.location.pathname);

        // Configura o listener para rotas
        const handleRouteChange = (url: string) => {
          logPageView(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      };

      initializeAnalytics().catch(console.error);
    }
  }, [router.events]);

  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fraldas e Patas</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
