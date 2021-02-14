import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

type TContext = {
  count: number;
  increase: (s: number) => void;
  decrease: (s: number) => void;
  clear: () => void;
};

const initialContext: TContext = {
  count: 0,
  increase: (s: number) => null,
  decrease: (s: number) => null,
  clear: () => null,
};

const CountContext = createContext(initialContext);

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
  const value = {
    count: state.count,
    increase,
    decrease,
    clear,
  };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCountContext = () => {
  return useContext(CountContext);
};
