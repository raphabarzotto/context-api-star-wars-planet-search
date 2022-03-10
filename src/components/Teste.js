import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Teste() {
  const { filteredData } = useContext(StarWarsContext);
  return (
    <header>
      <h1>{ JSON.stringify(filteredData) }</h1>
    </header>
  );
}

export default Teste;
