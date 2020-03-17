import React from 'react';
import Pokecard from './Pokecard';
import './Pokedeck.css'

class Pokedeck extends React.Component {

  render() {
    console.log(this.props)
    return (
      <ul className="Pokedeck-ul">
        {this.props.cards.map((item, index) => <li key={index}><Pokecard card={item}/></li>) }
      </ul>
    )
  }
}

export default Pokedeck