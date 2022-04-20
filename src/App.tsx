import React from 'react';
import Layout from './components/Layout';
import SearchInputWrapper from './components/SearchInputWrapper';
import SearchResultWrapper from './components/SearchResultWrapper';
import { StoreProvider } from './state/store';

function App() {
  return (
    <Layout>
      <StoreProvider>
        <SearchInputWrapper />
        <SearchResultWrapper />
      </StoreProvider>
    </Layout>
  );
}

export default App;
