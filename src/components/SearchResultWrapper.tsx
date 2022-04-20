import React from 'react';
import { useStoreState } from '../state/store';
import SearchResult from './SearchResult';

export default function SearchResultWrapper() {
  const { searchResult } = useStoreState();

  return <SearchResult movies={searchResult} />;
}
