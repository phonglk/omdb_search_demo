import { useMemo } from 'react';
import { Movie } from '../types';
import { useStoreContext } from './store';

export enum ActionType {
  UPDATE_SEARCH_TERM,
  SEARCH_MOVIE,
  SEARCH_DONE,
}

export type Action =
  | { type: ActionType.UPDATE_SEARCH_TERM; payload: string }
  | { type: ActionType.SEARCH_MOVIE }
  | { type: ActionType.SEARCH_DONE; payload: Movie[] };

export const useActions = () => {
  const { dispatch } = useStoreContext();

  return useMemo(
    () => ({
      updateSearchTerm: (term: string) =>
        dispatch({
          type: ActionType.UPDATE_SEARCH_TERM,
          payload: term,
        }),
      searchMovie: () => dispatch({ type: ActionType.SEARCH_MOVIE }),
      searchDone: (result: Movie[]) =>
        dispatch({ type: ActionType.SEARCH_DONE, payload: result }),
    }),
    [dispatch]
  );
};
