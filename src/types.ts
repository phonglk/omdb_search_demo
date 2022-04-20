import { ReactNode } from 'react';

export type ComponentProps = {
  children: ReactNode;
};

export type State = {
  searchTerm: string;
  isSearching: boolean;
  searchResult: Movie[];
};

export type Movie = {
  title: string;
  poster: string;
  year: number;
  id: string;
};

export type APIResponse = {
  Error?: string;
  Search?: Array<{
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
  }>;
};
