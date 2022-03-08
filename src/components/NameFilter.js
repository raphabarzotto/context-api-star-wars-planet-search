import React, { useContext } from 'react';

function NameFilter() {
  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
      />
    </label>
  );
}

export default NameFilter;
