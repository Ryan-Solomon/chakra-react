import React from 'react';
import { Text } from '@chakra-ui/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = 'https://icanhazdadjoke.com/';
type TResponse = {
  id: string;
  joke: string;
};

export const DadJoke = () => {
  const { data, error } = useSWR<TResponse>(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <Text>Dad Joke</Text>;
};
