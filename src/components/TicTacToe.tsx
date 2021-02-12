import { Box, Grid } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { TPlayers } from '../pages/ticTacToe/TicTacToePage';

type TProps = {
  setNextPlayer: (p: TPlayers) => void;
  currentPlayer: TPlayers;
};

export const TicTacToe: FC<TProps> = ({ setNextPlayer, currentPlayer }) => {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const nextPlayer = currentPlayer === 'X' ? '0' : 'X';

  function handleClick(idx: number) {
    setNextPlayer(nextPlayer);
    const newBoard = [...board];
    const boardValue = currentPlayer === 'X' ? -1 : 1;
    newBoard[idx] = boardValue;
    setBoard(newBoard);
  }
  return (
    <Grid
      w='500px'
      templateColumns='repeat(3,1fr)'
      templateRows='repeat(3,1fr)'
    >
      {board.map((value, idx) => {
        return (
          <Box
            as='button'
            _hover={{
              background: 'white',
              cursor: 'pointer',
              color: 'gray.800',
              transition: 'all .2s ease',
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            fontSize={20}
            p={4}
            key={Math.random()}
            height='100%'
            width='100%'
            bg='gray.600'
            color='white'
            onClick={() => handleClick(idx)}
            disabled={value !== 0}
          >
            {value === 0 ? '-' : value === -1 ? 'X' : '0'}
          </Box>
        );
      })}
    </Grid>
  );
};
