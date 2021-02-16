import {
  Button,
  Grid,
  HStack,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TicTacToe } from '../../components/TicTacToe';
import { AiOutlineArrowRight } from 'react-icons/ai';

export type TPlayers = 'X' | '0';

export const TicTacToePage = () => {
  const [player, setPlayer] = useState<TPlayers>('X');
  const [winner, setWinner] = useState<TPlayers | null>(null);
  const [shouldReset, setShouldReset] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Grid placeItems='center'>
      <Stack spacing={4} mx='auto' mt={10}>
        {winner ? (
          <Text>{winner} has won!</Text>
        ) : (
          <HStack spacing={4} align='center' direction='row'>
            <Text>Player </Text>
            <AiOutlineArrowRight
              color={colorMode === 'light' ? 'black' : 'white'}
            />
            <Text fontWeight='bold'>{player}</Text>
          </HStack>
        )}
        <TicTacToe
          shouldReset={shouldReset}
          thereIsAWinner={winner !== null}
          setWinner={setWinner}
          setNextPlayer={setPlayer}
          currentPlayer={player}
          setShouldReset={setShouldReset}
        />
        {winner && (
          <Button
            colorScheme='teal'
            variant='outline'
            onClick={() => setShouldReset(true)}
          >
            Reset Game
          </Button>
        )}
      </Stack>
    </Grid>
  );
};
