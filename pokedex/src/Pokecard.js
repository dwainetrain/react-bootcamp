import React from 'react';

class Pokecard extends React.Component {
  state = {
      smiles: 10
    }

  card = this.props.card
  
  numberPadding = (number) => {
    let string = number.toString();
    let paddedNumber = string.padStart(3, 0)
    return paddedNumber
  }
  
  render() {
    let paddedNumber = this.numberPadding(this.card.id);
    let cardImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNumber}.png`
    return (
      <div>
      <div className="card">
        <img src={cardImg} alt={this.card.name}/>
        <p>{this.card.id}</p>
        <p>{this.card.name}</p>
        <p>{this.card.type}</p>
        <p>{this.card.base_experience}</p>
        <p>Smiles: {this.state.smiles}</p>
      </div>
      </div>
      
    )
  }
}

export default Pokecard

