import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const starWarsState = {
    data,
    filteredData,
    setFilteredData,
    filterByName,
    setFilterByName,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  useEffect(() => {
    getPlanets().then(({ results }) => {
      setData(results);
      setFilteredData(results);
    });
  }, []);

  return (
    <StarWarsContext.Provider value={ starWarsState }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
