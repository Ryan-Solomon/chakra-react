import { Box, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

export const Nav = () => {
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
      </HStack>
    </Box>
  );
};
