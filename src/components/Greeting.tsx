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
import { useLocalStorage } from '../customHooks/useLocalStorage';

type TProps = {
  initialName: string;
};

export const Greeting: FC<TProps> = ({ initialName }) => {
  const { storedValue, setStoredValue } = useLocalStorage({
    key: 'name',
    defaultValue: 'James Bond',
  });
  const [name, setName] = useState(storedValue);

  useEffect(() => {
    setStoredValue(name);
  }, [name]);

  return (
    <Box mx='auto' mt={5} width='400px'>
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
          <FormHelperText>Hi, {name}</FormHelperText>
        ) : (
          <FormHelperText>Please enter your name</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
