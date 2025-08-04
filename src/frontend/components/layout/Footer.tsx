import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <Link href="/">
              <a className="flex">
                <Image
                  src="/assets/logo.svg"
                  alt="Fraldas e Patas Assinatura"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
            </Link>
            <p className="text-gray-500 mt-4 text-sm">
              Assinatura de produtos de higiene para idosos e pets com entrega recorrente e economia garantida.
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.447 3.553a12.695 12.695 0 00-17.894 0A12.695 12.695 0 000 12c0 2.136.535 4.15 1.474 5.916L0 24l6.294-1.463A12.68 12.68 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.24-6.2-3.553-8.447zM12 22.154c-1.863 0-3.687-.476-5.293-1.366l-.377-.223-3.936.916.936-3.826-.246-.394A10.817 10.817 0 011.846 12C1.846 6.48 6.48 1.846 12 1.846S22.154 6.48 22.154 12c0 5.52-4.634 10.154-10.154 10.154zm5.947-7.47c-.32-.16-1.888-.932-2.18-1.04-.292-.106-.504-.16-.716.16-.213.32-.824 1.04-1.01 1.25-.186.213-.372.24-.692.08-.32-.16-1.35-.497-2.57-1.583-.95-.845-1.59-1.89-1.777-2.207-.186-.32-.02-.492.14-.65.143-.143.32-.372.48-.558.16-.186.213-.32.32-.53.106-.214.053-.4-.027-.558-.08-.16-.717-1.726-1.01-2.36-.266-.613-.536-.53-.717-.54-.186-.013-.4-.013-.61-.013s-.56.08-.85.4c-.293.32-1.118 1.092-1.118 2.66s1.144 3.093 1.304 3.306c.16.213 2.236 3.574 5.52 4.86.77.335 1.37.536 1.84.685.773.246 1.478.212 2.035.13.62-.094 1.888-.773 2.153-1.52.266-.746.266-1.385.186-1.52-.08-.132-.293-.212-.613-.372z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Produtos</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/produtos?categoria=fraldas">
                  <a className="text-base text-gray-500 hover:text-primary-500">Fraldas Geriátricas</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=absorventes">
                  <a className="text-base text-gray-500 hover:text-primary-500">Absorventes</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=tapetes">
                  <a className="text-base text-gray-500 hover:text-primary-500">Tapetes Higiênicos</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=complementares">
                  <a className="text-base text-gray-500 hover:text-primary-500">Produtos Complementares</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/sobre">
                  <a className="text-base text-gray-500 hover:text-primary-500">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/como-funciona">
                  <a className="text-base text-gray-500 hover:text-primary-500">Como Funciona</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-base text-gray-500 hover:text-primary-500">Contato</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-base text-gray-500 hover:text-primary-500">Perguntas Frequentes</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/politica-de-privacidade">
                  <a className="text-base text-gray-500 hover:text-primary-500">Política de Privacidade</a>
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso">
                  <a className="text-base text-gray-500 hover:text-primary-500">Termos de Uso</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Fraldas e Patas Assinatura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}