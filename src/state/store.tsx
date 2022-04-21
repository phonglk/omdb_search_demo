import React from 'react';
import _ from 'lodash';
import { createContext, Dispatch, useContext, useReducer } from 'react';
import { ComponentProps, State } from '../types';
import { Action } from './actions';
import reducer, { initialState } from './reducer';

type StoreContextValue = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const StoreContext = createContext<StoreContextValue>({
  state: initialState,
  dispatch: _.identity,
});

export const useStoreReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export const StoreProvider = (props: ComponentProps) => {
  const { state, dispatch } = useStoreReducer();
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export const useStoreState = () => {
  const { state } = useStoreContext();
  return state;
};
