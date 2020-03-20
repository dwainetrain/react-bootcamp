import React from "react";
import Die from "./Die";
import "./Die.css";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: 1,
      dieTwo: 1,
      dieClass: "still",
      buttonDisabled: false,
      message: "Shake 'Em Up!'"
    };
  }

  dieNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  shakeDie = e => {
    this.setState({
      dieClass: "shake",
      buttonDisabled: true,
      message: "Rollin'!"
    });
    // When it times out, this change state back...
    setTimeout(() => {
      this.setState({
        dieClass: "still",
        dieOne: this.dieNumber(),
        dieTwo: this.dieNumber(),
        buttonDisabled: false,
        message: "Shake 'Em Up!'"
      });
    }, 1500);
  };

  render() {
    return (
      <div className="Dice">
        <Die animate={this.state.dieClass} dieNumber={this.state.dieOne} />
        <Die animate={this.state.dieClass} dieNumber={this.state.dieTwo} />
        <button onClick={this.shakeDie} disabled={this.state.buttonDisabled}>
          {this.state.message}
        </button>
      </div>
    );
  }
}

export default Dice;
