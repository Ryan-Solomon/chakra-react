import React, { createContext, FC, ReactNode, useContext } from 'react';

const CountContext = createContext({});

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

export const CountProvider: FC<ReactNode> = ({ children }) => {
  const value = {};
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCountContext = () => {
  return useContext(CountContext);
};
