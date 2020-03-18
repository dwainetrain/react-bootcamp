import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1
    };
  }

  randomNum = () => {
    this.randomNumber = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: this.randomNumber });
  };

  render() {
    return (
      <div id="Button">
        <h1>Your Number is {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>You Win, you Bastard!!!!</h2>
        ) : (
          <button onClick={this.randomNum}>Randomagraph It!</button>
        )}
      </div>
    );
  }
}

export default Button;
