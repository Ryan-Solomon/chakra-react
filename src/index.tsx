import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
