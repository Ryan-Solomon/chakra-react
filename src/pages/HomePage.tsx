import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ListComponent } from '../components/List';

export const HomePage = () => {
  return (
    <Box color='white'>
      <Text>
        This app demonstrates my ability to build a variety of components using
        React and Chakra UI
      </Text>
      <ListComponent />
    </Box>
  );
};
