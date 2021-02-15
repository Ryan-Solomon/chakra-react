import { Box, Button, HStack, Link, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { CountProvider } from '../context/countContext';
import { CountPopover } from './CountPopover';

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box boxShadow='2xl' as='nav' bgColor='#333' p={2}>
      <HStack pl={4} spacing={5} color='white' as='ul' listStyleType='none'>
        <Box as='li'>
          <Link as={NavLink} to='/home'>
            Home
          </Link>
        </Box>
        <Box as='li'>
          <Link as={NavLink} to='/greeting'>
            Greeting
          </Link>
        </Box>
        <Box as='li'>
          <Link as={NavLink} to='/tictactoe'>
            Tic Tac Toe
          </Link>
        </Box>
        <Box as='li'>
          <Link as={NavLink} to='/dadjokes'>
            Dad Jokes
          </Link>
        </Box>
        <Box as='li'>
          <Link as={NavLink} to='/accordion'>
            Accordion
          </Link>
        </Box>
        <Box as='li'>
          <Link as={NavLink} to='/counter'>
            Counter
          </Link>
        </Box>
        <Box color={colorMode === 'light' ? 'black' : 'white'}>
          <Button variant='outline' onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Box>
        <Box>
          <CountPopover />
        </Box>
      </HStack>
    </Box>
  );
};
