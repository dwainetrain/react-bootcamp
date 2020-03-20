import React from "react";

class Die extends React.Component {
  render() {
    return (
      <div className={this.props.animate}>
        <h1>{this.props.dieNumber}</h1>
      </div>
    );
  }
}

export default Die;
