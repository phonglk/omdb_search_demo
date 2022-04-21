import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from './SearchResult';
import { Movie } from '../types';

test('Search Result render correctly', () => {
  const movies: Movie[] = [
    {
      title: 'Movie 1',
      year: 2019,
      poster: 'poster1',
      id: 'tt00001',
    },
    {
      title: 'Movie 2',
      year: 2019,
      poster: 'poster2',
      id: 'tt00002',
    },
    {
      title: 'Movie 3',
      year: 2019,
      poster: 'poster3',
      id: 'tt00003',
    },
    {
      title: 'Movie 4',
      year: 2019,
      poster: 'poster4',
      id: 'tt00004',
    },
  ];

  const { container } = render(<SearchResult movies={movies} />);
  expect(container).toMatchSnapshot();
});
