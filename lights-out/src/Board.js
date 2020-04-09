import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    boardSize: 5
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      board: this.createBoard(this.props.boardSize),
      hasWon: false
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard(size) {
    let board = new Array(size).fill(true);
    return board.map(i => new Array(size).fill(true));
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let boardSize = this.props.boardSize;
    let board = this.state.board;
    let hasWon = this.state.hasWon; // Added this line for now - Dwaine
    let [y, x] = coord.split("-").map(Number);

    function flipCell(board, y, x) {
      // if this coord is actually on board, flip it

      // map over the values, if they match coordinates, flip boolean
      let newBoard = board.map((i, idx) =>
        i.map((j, jdx) => (jdx === y && idx === x ? !j : j))
      );

      if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        return newBoard;
      } else {
        return board;
      }
    }

    // Very clunky, but go through each coordinate and flip
    function flipCellCross(board, y, x) {
      let centerCellBoard = flipCell(board, y, x);
      let leftCellBoard = flipCell(centerCellBoard, y - 1, x);
      let rightCellBoard = flipCell(leftCellBoard, y + 1, x);
      let topCellBoard = flipCell(rightCellBoard, y, x + 1);
      let bottomCellBoard = flipCell(topCellBoard, y, x - 1);
      return bottomCellBoard;
    }

    // Well, it's laborious, but it works
    // I'll look at it again tomorrow and see
    // if I have any revelations on refactoring

    // Still need to create the win condition, if ever I'm able to win

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState(currentState => ({
      board: flipCellCross(board, y, x),
      hasWon
    }));
  }

  /** Render game board or winning message. */

  render() {
    return (
      <div className="Board">
        {this.state.board.map((i, iIndex) => (
          <div>
            {i.map((j, jIndex) => (
              <Cell
                coord={`${jIndex}-${iIndex}`}
                flipCellsAroundMe={this.flipCellsAround}
                isLit={j}
              />
            ))}
          </div>
        ))}
      </div>
    );
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}

export default Board;
