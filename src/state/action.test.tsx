import React, { JSXElementConstructor } from 'react';
import { renderHook } from '@testing-library/react';
import { ActionType, useActions } from './actions';
import { StoreContext } from './store';
import { ComponentProps } from '../types';
import { initialState } from './reducer';

const setup = () => {
  const dispatch = jest.fn();
  const wrapper: JSXElementConstructor<ComponentProps> = ({ children }) => (
    <StoreContext.Provider value={{ state: initialState, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
  const {
    result: { current },
  } = renderHook(() => useActions(), { wrapper });
  return { ...current, dispatch };
};

test('updateSearchTerm', () => {
  const { updateSearchTerm, dispatch } = setup();
  updateSearchTerm('search');

  expect(dispatch).toHaveBeenCalledWith({
    payload: 'search',
    type: ActionType.UPDATE_SEARCH_TERM,
  });
});

test('searchMovie', () => {
  const { searchMovie, dispatch } = setup();
  searchMovie();

  expect(dispatch).toHaveBeenCalledWith({
    type: ActionType.SEARCH_MOVIE,
  });
});

test('searchDone', () => {
  const { searchDone, dispatch } = setup();
  searchDone([{ title: 'title', id: 'id', poster: 'poster', year: 2000 }]);

  expect(dispatch).toHaveBeenCalledWith({
    payload: [{ title: 'title', id: 'id', poster: 'poster', year: 2000 }],
    type: ActionType.SEARCH_DONE,
  });
});
