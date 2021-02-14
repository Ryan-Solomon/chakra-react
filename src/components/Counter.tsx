import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React, { useReducer } from 'react';

type TCountState = {
  count: number;
};

type TAction =
  | {
      type: 'INCREASE';
      payload: number;
    }
  | {
      type: 'DECREASE';
      payload: number;
    }
  | {
      type: 'CLEAR';
    };

function countReducer(state: TCountState, action: TAction): TCountState {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + action.payload };
    case 'DECREASE':
      return { count: state.count - action.payload };
    case 'CLEAR':
      return { count: 0 };
    default:
      throw new Error('Action in countReducer is not supported');
  }
}

const initialState: TCountState = {
  count: 0,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  function increase(step: number) {
    dispatch({ type: 'INCREASE', payload: step });
  }
  function decrease(step: number) {
    dispatch({ type: 'DECREASE', payload: step });
  }
  function clear() {
    dispatch({ type: 'CLEAR' });
  }

  return (
    <Box boxShadow='dark-lg' maxW={80} p={6} mx='auto' mt={10}>
      <Text mb={6} fontSize={30} as='h1'>
        Count: {state.count}
      </Text>
      <HStack>
        <Button
          onClick={() => increase(1)}
          variant='outline'
          colorScheme='teal'
        >
          Increase
        </Button>
        <Button
          onClick={() => decrease(1)}
          variant='outline'
          colorScheme='orange'
        >
          Decrease
        </Button>
        <Button variant='outline' onClick={() => clear()} colorScheme='red'>
          Clear
        </Button>
      </HStack>
    </Box>
  );
};
