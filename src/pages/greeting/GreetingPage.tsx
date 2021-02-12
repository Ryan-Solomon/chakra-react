import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Greeting } from '../../components/Greeting';

export const GreetingPage = () => {
  return (
    <>
      <Greeting initialName='James Bond' />
    </>
  );
};
