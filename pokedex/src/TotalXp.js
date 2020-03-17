import React from 'react';
import Pokecard from './Pokecard';

class Pokedeck extends React.Component {

  render() {
    return (
      <div className="deck">
      <Pokecard />
      <Pokecard />
      <Pokecard />
      <Pokecard />
      </div>
    )
  }
}

export default Pokedeck