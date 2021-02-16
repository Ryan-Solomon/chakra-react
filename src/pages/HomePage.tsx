import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ListComponent } from '../components/List';

export const HomePage = () => {
  return (
    <Box p={8} maxW='600px' mx='auto' mt={10} boxShadow='dark-lg'>
      <Text fontSize={25} textAlign='center' mb={5}>
        This app includes a variety of features built with React and Chakra UI
      </Text>
      <ListComponent />
    </Box>
  );
};
