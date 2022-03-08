import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
