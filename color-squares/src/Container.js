import React from "react";
import Square from "./Square";

// This approach works, but is overall inefficent.
// Once you take it up to some number like 1280 squares
// mapping of the grid slows down
// Could be solved by letting the squares control their own state
// and not having the overall state each time one thing is clicked

// Kind of interesting how you can 'draw' a line through it and the brain will
// somehow connect what's changed for a brief moment. This is using on Pointer Enter.

class Container extends React.Component {
  // Initial Parameters for Grid
  static defaultProps = {
    gridSize: 500,
    squareSize: 20
  };

  constructor(props) {
    super(props);

    // Initialize the grid with random colors by creating an empty grid
    // and then mapping over with randomColor function
    this.state = {
      gridColored: [...Array(this.props.gridSize)].map(item =>
        this.randomColor()
      )
    };
  }

  // Generates a random number between 0 and 255 for rgb
  randomNumber = () => Math.floor(Math.random() * 256);

  // Creates a color from three random values
  randomColor = () => {
    const r = this.randomNumber();
    const g = this.randomNumber();
    const b = this.randomNumber();
    return [r, g, b];
  };

  // handle the click event, making sure to conver the event value to a number using +
  handleClick = e => {
    this.changeColor(+e.target.id);
  };

  // Map over original state, if the index matches the id of the clicked square, then change that color
  changeColor = id => {
    this.setState(currentState => ({
      gridColored: currentState.gridColored.map((item, index) => {
        return index === id ? this.randomColor() : item;
      })
    }));
  };

  render() {
    // the only tricky part here is assigning the index to the id so I have a way of tracking
    // which square was clicked, right now this is the best solution I know of
    return (
      <div>
        <h1>It works!</h1>
        <ul>
          {this.state.gridColored.map((square, index) => (
            <div onPointerEnter={e => this.handleClick(e)} on>
              <li>
                <Square
                  id={index}
                  color={this.state.gridColored[index]}
                  size={this.props.squareSize}
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Container;
