// src/styles/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      200:"red"
      // Puedes agregar más colores personalizados aquí
    },
  },
});

export default theme;