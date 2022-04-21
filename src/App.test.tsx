import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/OMDB Search/i);
  expect(linkElement).toBeInTheDocument();
});
