import React from 'react';

class Pokecard extends React.Component {

  card = this.props.card
  
  render() {
    console.log(this.props)
    return (
      <div>
      <div className="card">
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

