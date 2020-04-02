import React from "react";

function Square(props) {
  const squareStyle = {
    height: props.size,
    width: props.size,
    backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`
  };

  return (
    <div>
      <div style={squareStyle} id={props.id}></div>
    </div>
  );
}

export default Square;
