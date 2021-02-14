import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useCountContext } from '../context/countContext';

export const Counter = () => {
  const { count, increase, decrease, clear } = useCountContext();

  return (
    <Box boxShadow='dark-lg' maxW={80} p={6} mx='auto' mt={10}>
      <Text mb={6} fontSize={30} as='h1'>
        Count: {count}
      </Text>
      <HStack>
        <Button
          onClick={() => increase(1)}
          variant='outline'
          colorScheme='teal'
        >
          Increase
        </Button>
        <Button
          onClick={() => decrease(1)}
          variant='outline'
          colorScheme='orange'
        >
          Decrease
        </Button>
        <Button variant='outline' onClick={() => clear()} colorScheme='red'>
          Clear
        </Button>
      </HStack>
    </Box>
  );
};
