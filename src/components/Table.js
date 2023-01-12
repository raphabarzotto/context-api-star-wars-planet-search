import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import tableOptions from '../services/tableOptions';

function Table() {
  const { filteredData } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          { tableOptions.map((option, index) => <th key={ index }>{option}</th>) }
        </tr>
      </thead>
      <tbody>
        {
          filteredData.map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films.map((film) => `${film[film.length - 2]} `) }</td>
              <td>{ planet.created.slice(0, 9) }</td>
              <td>{ planet.edited.slice(0, 9) }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
