import { Box, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <Box as='nav'>
      <HStack as='ul'>
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
      </HStack>
    </Box>
  );
};
