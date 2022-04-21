import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInputWrapper from './SearchInputWrapper';
import { StoreProvider } from '../state/store';
import SearchInput from './SearchInput';
import _ from 'lodash';

beforeEach(() => {
  jest.spyOn(global, 'fetch');
});

afterEach(() => {
  jest.restoreAllMocks();
});

const setup = () => {
  render(
    <StoreProvider>
      <SearchInputWrapper />
    </StoreProvider>
  );
  const input =
    screen.getByPlaceholderText<HTMLInputElement>('Search title...');
  fireEvent.change(input, { target: { value: 'spider' } });

  const searchBtn = screen.getByText('Search');

  return { input, searchBtn };
};

test('Input update text', () => {
  const { input } = setup();
  expect(input.value).toBe('spider');
});

test('Call API when user click search', () => {
  const { searchBtn } = setup();
  fireEvent.click(searchBtn);
  expect(global.fetch).toBeCalledWith(
    'https://omdbapi.com/?s=spider&apikey=TEST'
  );
});

test('Call API when user click search', () => {
  const { input } = setup();
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(global.fetch).toBeCalledWith(
    'https://omdbapi.com/?s=spider&apikey=TEST'
  );
});

test('SearchInput snapshot test', () => {
  const { container } = render(
    <SearchInput
      handleSearch={_.identity}
      searchTerm={'search'}
      handleInputUpdate={_.identity}
      disabled={false}
    />
  );
  expect(container).toMatchSnapshot();
});
