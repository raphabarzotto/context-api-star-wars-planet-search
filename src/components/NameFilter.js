import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const {
    data,
    setFilteredData,
    filterByName,
    setFilterByName,
  } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
    setFilteredData(data.filter((({ name }) => name.includes(target.value))));
  };

  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        id="name-filter"
        className="form-input"
        data-testid="name-filter"
        placeholder="Search By Name"
        onChange={ ({ target }) => handleChange({ target }) }
        value={ filterByName.name }
      />
    </label>
  );
}

export default NameFilter;
