import * as React from 'react';
import { ChakraProvider, Text, theme } from '@chakra-ui/react';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Text>React app</Text>
  </ChakraProvider>
);
