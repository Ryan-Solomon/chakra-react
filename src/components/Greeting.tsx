import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';

type TProps = {
  initialName: string;
};

export const Greeting: FC<TProps> = ({ initialName }) => {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      const storedName = localStorage.getItem('name');
      setName(storedName || initialName);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      localStorage.removeItem('name');
    }
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <Box mx='auto' mt={5} width='400px' color='gray.800'>
      <FormControl id='name'>
        <HStack>
          <FormLabel>Name: </FormLabel>
          <Input
            bgColor='gray.800'
            color='white'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
          />
        </HStack>
        {name ? (
          <FormHelperText color='gray.700'>Hi, {name}</FormHelperText>
        ) : (
          <FormHelperText color='gray.700'>
            Please enter your name
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
