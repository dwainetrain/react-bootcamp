import React from "react";

// State structure, what changes
// State of the coin, heads or tails (random)
// State of the number of flips (++1)
// State of type of flip, number of heads (derive number of tails total flips - head flips)

// This works, but I could probably offload even more logic to the main component
class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.image = "/images/heads.jpg";
  }
  render() {
    this.image =
      this.props.side === "Heads" ? "/images/heads.jpg" : "/images/tails.jpg";
    return (
      <div>
        <h2>{this.props.side}</h2>
        <img src={this.image} width="400" />
      </div>
    );
  }
}

class CoinFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: "Heads",
      timesFlipped: 0,
      tails: 0
    };
  }

  render() {
    this.flip = () => {
      Math.floor(Math.random() * 2) + 1 !== 1
        ? this.setState(currentState => ({
            coin: "Tails",
            tails: currentState.tails + 1
          }))
        : this.setState(() => ({
            coin: "Heads"
          }));
    };

    this.incrementFlips = () => {
      this.setState(currentState => ({
        timesFlipped: currentState.timesFlipped + 1
      }));
    };

    this.handleClick = () => {
      this.incrementFlips();
      this.flip();
    };

    return (
      <div>
        <Coin side={this.state.coin} />
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>
          {this.state.timesFlipped} total flips. {this.state.tails} Tails and{" "}
          {this.state.timesFlipped - this.state.tails} Heads.
        </p>
      </div>
    );
  }
}

export default CoinFlip;
