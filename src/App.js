import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      star wars project
    </StarWarsProvider>
  );
}

export default App;
