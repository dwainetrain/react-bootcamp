import React from 'react';
import Pokedeck from './Pokedeck';

class Pokegame extends React.Component {

  static defaultProps = { 
    pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
}

  handGenerator = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
 
    let firstHand = array.slice(0,4)

    let secondHand = array.slice(4,8)

    return [firstHand, secondHand];
  }

  render() {
    let [hand1, hand2] = this.handGenerator(this.props.pokemon);
    return (
      <div>
      <h1>Player 1:</h1>
      <Pokedeck cards={hand1} />
      <h1>Player 2:</h1>
      <Pokedeck cards={hand2} />
      </div>
    )
    
  }
}

export default Pokegame