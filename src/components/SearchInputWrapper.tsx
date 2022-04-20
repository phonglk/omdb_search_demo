import React from 'react';
import { useActions } from '../state/actions';
import { useStoreState } from '../state/store';
import search from '../utils.ts/search';
import SearchInput from './SearchInput';

export default function SearchInputWrapper() {
  const { updateSearchTerm, searchMovie, searchDone } = useActions();
  const { searchTerm, isSearching } = useStoreState();

  const handleSearch = async () => {
    searchMovie();
    try {
      const movies = await search(searchTerm);
      console.log(movies);

      searchDone(movies);
    } catch (error: any) {
      alert(error.message);
      searchDone([]);
    }
  };

  return (
    <SearchInput
      handleSearch={handleSearch}
      handleInputUpdate={updateSearchTerm}
      searchTerm={searchTerm}
      disabled={isSearching}
    />
  );
}
