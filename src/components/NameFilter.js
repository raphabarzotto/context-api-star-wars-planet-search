import React, { useContext } from 'react';

function NameFilter() {
  return (
    <label htmlFor="name-filter">
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
      />
    </label>
  );
}

export default NameFilter;
