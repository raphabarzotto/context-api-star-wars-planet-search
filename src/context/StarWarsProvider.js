import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const starWarsState = {
    planets,
  };

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data.results));
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
