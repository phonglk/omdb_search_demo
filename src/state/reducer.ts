import { State } from '../types';
import { Action, ActionType } from './actions';

export const initialState: State = {
  searchTerm: '',
  isSearching: false,
  searchResult: [],
};

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
  case ActionType.UPDATE_SEARCH_TERM:
    return { ...state, searchTerm: action.payload };
  case ActionType.SEARCH_MOVIE:
    return { ...state, isSearching: true };
  case ActionType.SEARCH_DONE:
    return { ...state, isSearching: false, searchResult: action.payload };
  default:
    return state;
  }
}
