import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

import Table from './components/Table';
import Header from './components/Header';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <NameFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
