// src/app.tsx
import '@/styles/globals.css'; // Importa Tailwind CSS
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme'; // Ajusta la ruta si lo colocaste en `styles`
import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
   
  );
}