import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

import Table from './components/Table';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import FilterByNumericValueForm from './components/FilterByNumericValueForm';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <div className="form-wrap">
        <NameFilter />
        <FilterByNumericValueForm />
      </div>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
