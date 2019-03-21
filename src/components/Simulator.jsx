import React from "react";
import "./Simulator.css";

const cellSize = 20;
const width = 1000;
const height = 800;

class Simulator extends React.Component {
  render() {
    return (
      <div>
        <div
          className="grid"
          style={{
            width: width,
            height: height,
            backgroundSize: `${cellSize}px ${cellSize}px`
          }}
        />
      </div>
    );
  }
}

export default Simulator;
