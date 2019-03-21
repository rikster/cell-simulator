import React from "react";
import keys from "../config/keys";
import "./Simulator.css";

const cellSize = keys.cellSize;

class Cell extends React.Component {
  render() {
    const { x, y } = this.props;
    return (
      <div
        className="cell"
        style={{
          left: `${cellSize * x + 1}px`,
          top: `${cellSize * y + 1}px`,
          width: `${cellSize - 1}px`,
          height: `${cellSize - 1}px`
        }}
      />
    );
  }
}

export default Cell;