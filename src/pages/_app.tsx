import '@/styles/globals.css'; // Importar Tailwind CSS
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme'; // Importar tema de Chakra UI, si lo tienes
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar /> {/* Este puede usar Tailwind */}
      <Component {...pageProps} />
      <Footer /> {/* Este también puede usar Tailwind */}
    </ChakraProvider>
  );
}
