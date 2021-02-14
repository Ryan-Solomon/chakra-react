import React from 'react';
import { Text } from '@chakra-ui/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const DadJoke = () => {
  const { data, error } = useSWR('/api/user/123', fetcher);
  return <Text>Dad Joke</Text>;
};
