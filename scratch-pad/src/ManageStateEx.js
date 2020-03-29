import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Equation extends Component {
  render() {
    return (
      <div className="equation">
        <p className="text">
          {`${this.props.value1} + 
          ${this.props.value2} + 
          ${this.props.value3} = 
          ${this.props.proposedAnswer}`}
        </p>
      </div>
    );
  }
}

class ManageStateEx extends Component {
  constructor(props) {
    super(props);

    this.numbers = this.randomGenerator();

    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      value1: this.numbers[0],
      value2: this.numbers[1],
      value3: this.numbers[2],
      proposedAnswer: this.numbers[3]
    };
  }

  generateEquation = () => {
    this.numbers = this.randomGenerator();
    this.setState(() => ({
      value1: this.numbers[0],
      value2: this.numbers[1],
      value3: this.numbers[2],
      proposedAnswer: this.numbers[3]
    }));
  };

  randomGenerator = () => {
    const generateNum = () => Math.floor(Math.random() * 100);
    const randomArray = [generateNum(), generateNum(), generateNum()];
    const generateAnswer =
      Math.floor(Math.random() * 3) +
      randomArray[0] +
      randomArray[1] +
      randomArray[2];
    randomArray.push(generateAnswer);
    return randomArray;
  };

  tallyQuestion = () => {
    this.setState(currentState => ({
      numQuestions: currentState.numQuestions + 1
    }));
    this.generateEquation();
  };

  tallyCorrect = () => {
    this.setState(currentState => ({
      numCorrect: currentState.numCorrect + 1
    }));
    this.tallyQuestion();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Equation
            value1={this.state.value1}
            value2={this.state.value2}
            value3={this.state.value3}
            proposedAnswer={this.state.proposedAnswer}
          />
          <button onClick={() => this.tallyCorrect()}>True</button>
          <button onClick={() => this.tallyQuestion()}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default ManageStateEx;
