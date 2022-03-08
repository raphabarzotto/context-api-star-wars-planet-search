import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { filterByName, setFilterByName } = useContext(StarWarsContext);
  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        value={ filterByName.name }
      />
    </label>
  );
}

export default NameFilter;
