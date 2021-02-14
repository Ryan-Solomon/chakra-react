import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = 'https://icanhazdadjoke.com/slack';
type TResponse = {
  attachments: [
    {
      text: string;
    }
  ];
};

export const DadJoke = () => {
  const { data, error } = useSWR<TResponse>(url, fetcher);
  console.log({
    data,
    error,
  });
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Box>
        <Spinner size='lg' />
      </Box>
    );

  const { text } = data.attachments[0];
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
};
