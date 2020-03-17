import React from 'react';

class Pokecard extends React.Component {

  card = this.props.card
  
  numberPadding = (number) => {
    let string = number.toString();
    let paddedNumber = string.padStart(3, 0)
    return paddedNumber
  }
  
  render() {
    console.log(this.card.id)
    let paddedNumber = this.numberPadding(this.card.id);

    let cardImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedNumber}.png`
    return (
      <div>
      <div className="card">
        <img src={cardImg} alt=""/>
        <p>{this.card.id}</p>
        <p>{this.card.name}</p>
        <p>{this.card.type}</p>
        <p>{this.card.base_experience}</p>
      </div>
      </div>
      
    )
  }
}

export default Pokecard

