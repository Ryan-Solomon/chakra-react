import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ListComponent } from '../components/List';

export const HomePage = () => {
  return (
    <Box color='white'>
      <Text>Home Page</Text>
      <ListComponent />
    </Box>
  );
};
