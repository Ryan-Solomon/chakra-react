import { Text } from '@chakra-ui/react';
import React from 'react';

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

function countReducer(state: TCountState, action: TAction) {
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

export const Counter = () => {
  return <Text>Count</Text>;
};
