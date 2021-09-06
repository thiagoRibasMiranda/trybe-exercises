import './App.css';
import  React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemons={pokemons}/>
    )
  }
}

export default App;