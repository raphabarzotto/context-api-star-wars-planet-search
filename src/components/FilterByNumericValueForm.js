import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import numericSortOptions from '../services/numericSortOptions';

function FilterByNumericValueForm() {
  return (
    <form>
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
        >
          {
            numericSortOptions.map((option) => <option key={ option }>{ option }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterByNumericValueForm;
