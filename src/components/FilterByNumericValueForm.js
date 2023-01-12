import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import numericSortOptions from '../services/numericSortOptions';

function FilterByNumericValueForm() {
  const {
    data,
    filteredData,
    setFilteredData,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  const handleClick = () => {
    setFilteredData(data);
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ]);
    if (comparisonFilter === 'maior que') {
      setFilteredData(
        filteredData.filter((planet) => parseInt(planet[columnFilter], 10) > valueFilter),
      );
    } else if (comparisonFilter === 'menor que') {
      setFilteredData(
        filteredData.filter((planet) => parseInt(planet[columnFilter], 10) < valueFilter),
      );
    } else {
      setFilteredData(
        filteredData.filter((planet) => planet[columnFilter] === valueFilter),
      );
    }
  };

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
          className="form-input"
          value={ columnFilter }
          onChange={ ({ target }) => setColumnFilter(target.value) }
        >
          <option value="" disabled selected>Filter By</option>
          {
            numericSortOptions.map((option) => {
              if (filterByNumericValues.some((value) => value.column === option)) {
                return null;
              }
              return <option key={ option }>{ option }</option>;
            })
          }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          className="form-input"
          value={ comparisonFilter }
          onChange={ ({ target }) => setComparisonFilter(target.value) }
        >
          <option>Greater Than</option>
          <option>Less Than</option>
          <option>Equal to</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          id="value-filter"
          data-testid="value-filter"
          className="form-input"
          type="number"
          value={ valueFilter }
          onChange={ ({ target }) => setValueFilter(target.value) }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        className="form-button"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </form>
  );
}

export default FilterByNumericValueForm;
