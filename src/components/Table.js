import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import tableOptions from '../services/tableOptions';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          { tableOptions.map((option, index) => <th key={ index }>{option}</th>) }
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet, index) => (
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
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
