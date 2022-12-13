import React from 'react';
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import AppNavigator from './components/AppNavigator';
import PokemonDetails from './config/PokemonDetails';
import Pokedex from './containers/Pokedex';

function App() {
  return (
    <Router>
      <AppNavigator/>
      <Routes>
      <Route  path="/" element={<Pokedex/>} />
      <Route  path="/pokemon/:id" element={<PokemonDetails/>} />
      </Routes>
    
  </Router>
   
  );
}

export default App;
