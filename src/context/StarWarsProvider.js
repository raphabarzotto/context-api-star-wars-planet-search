import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const starWarsState = {
    data,
    filterByName,
    setFilterByName,
  };

  useEffect(() => {
    getPlanets().then(({ results }) => setData(results));
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
