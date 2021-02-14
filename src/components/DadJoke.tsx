import React, { useState } from 'react';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
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

  function refreshPage() {
    window.location.reload(false);
  }

  const { text } = data.attachments[0];
  return (
    <Stack
      padding={5}
      spacing={5}
      bgColor='#333'
      boxShadow='lg'
      mx='auto'
      mt={10}
      maxW='500px'
    >
      <Text>{text}</Text>
      <Button onClick={refreshPage} colorScheme='teal' variant='outline'>
        Fetch Joke
      </Button>
    </Stack>
  );
};
