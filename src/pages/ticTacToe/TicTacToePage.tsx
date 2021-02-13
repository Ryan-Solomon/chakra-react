import { Grid, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TicTacToe } from '../../components/TicTacToe';
import { AiOutlineArrowRight } from 'react-icons/ai';

export type TPlayers = 'X' | '0';

export const TicTacToePage = () => {
  const [player, setPlayer] = useState<TPlayers>('X');
  const [winner, setWinner] = useState<TPlayers | null>(null);

  return (
    <Grid placeItems='center'>
      <Stack spacing={4} mx='auto' mt={10}>
        {winner ? (
          <Text>{winner} has won!</Text>
        ) : (
          <HStack spacing={4} align='center' direction='row'>
            <Text color='gray.700'>Player </Text>
            <AiOutlineArrowRight color='black' />
            <Text fontWeight='bold'>{player}</Text>
          </HStack>
        )}
        <TicTacToe
          thereIsAWinner={winner !== null}
          setWinner={setWinner}
          setNextPlayer={setPlayer}
          currentPlayer={player}
        />
      </Stack>
    </Grid>
  );
};
