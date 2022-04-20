import React from 'react';
import './App.css';
import contextPlanetList from './context/contextPlanetList';
import Provider from './context/providerCreate';
import Home from './pages/Home';

function App() {
  return (
    <Provider valeu={ contextPlanetList }>
      <Home />
    </Provider>
  );
}

export default App;
