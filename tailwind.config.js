/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/frontend/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/frontend/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    colors: {
      // Cores primárias
      'primary': {
        DEFAULT: '#3A86FF', // Azul Confiança
        '50': '#EBF3FF',
        '100': '#D6E7FF',
        '200': '#ADCFFF',
        '300': '#85B7FF',
        '400': '#5C9FFF',
        '500': '#3A86FF', // Base
        '600': '#0A6CFF',
        '700': '#0055E1',
        '800': '#0044B3',
        '900': '#003385',
      },
      'secondary': {
        DEFAULT: '#38B000', // Verde Saúde
        '50': '#E8FFDF',
        '100': '#D1FFBF',
        '200': '#A3FF80',
        '300': '#75FF40',
        '400': '#52E600',
        '500': '#38B000', // Base
        '600': '#2D8D00',
        '700': '#226A00',
        '800': '#174700',
        '900': '#0C2400',
      },
      // Cores secundárias
      'accent-yellow': {
        DEFAULT: '#FFBE0B', // Amarelo Alegria
        '50': '#FFF8E6',
        '100': '#FFF1CC',
        '200': '#FFE499',
        '300': '#FFD666',
        '400': '#FFC833',
        '500': '#FFBE0B', // Base
        '600': '#D79C00',
        '700': '#A47500',
        '800': '#714F00',
        '900': '#3F2C00',
      },
      'accent-pink': {
        DEFAULT: '#FF85A1', // Rosa Suave
        '50': '#FFF0F4',
        '100': '#FFE1E9',
        '200': '#FFC3D3',
        '300': '#FFA4BD',
        '400': '#FF85A1', // Base
        '500': '#FF5785',
        '600': '#FF2969',
        '700': '#FA004D',
        '800': '#C7003D',
        '900': '#94002D',
      },
      // Cores neutras
      'gray': {
        '50': '#F5F7FA', // Cinza Claro
        '100': '#EDF0F5',
        '200': '#E2E7EF',
        '300': '#D1D5DB', // Cinza Médio
        '400': '#9CA3AF',
        '500': '#6B7280',
        '600': '#4B5563', // Cinza Escuro
        '700': '#374151',
        '800': '#1F2937', // Preto Suave
        '900': '#111827',
      },
      'danger': '#FF4A4A', // Vermelho para ações de cancelamento/erro
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      'heading': ['Montserrat', 'ui-sans-serif', 'system-ui'],
    },
    borderRadius: {
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    boxShadow: {
      'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  },
  plugins: [],
}