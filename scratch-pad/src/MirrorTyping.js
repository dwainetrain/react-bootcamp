import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class MirrorTyping extends Component {
  state = {
    inputText: ""
  };

  echoChamber = text => {
    this.setState(() => ({
      inputText: text
    }));
  };

  render() {
    const { inputText } = this.state;
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header> */}
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={inputText}
            onChange={event => this.echoChamber(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>{inputText}</p>
        </div>
      </div>
    );
  }
}

export default MirrorTyping;
