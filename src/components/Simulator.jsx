import React from "react";
import "./Simulator.css";
import keys from "../config/keys";
import Cell from "./Cell";

const cellSize = keys.cellSize;
const width = keys.width;
const height = keys.height;

class Simulator extends React.Component {
  constructor() {
    super();

    this.rows = height / cellSize;
    this.cols = width / cellSize;
    this.grid = this.makeEmptyGrid();

    // cell toggles in state force re-renders
    this.state = {
      cells: [],
      interval: keys.interval,
      isRunning: false
    };
  }

  // Create an empty 2d array for the grid
  makeEmptyGrid() {
    let grid = [];
    for (let y = 0; y < this.rows; y++) {
      grid[y] = [];
      for (let x = 0; x < this.cols; x++) {
        grid[y][x] = false;
      }
    }
    return grid;
  }

  getElementOffset() {
    const rect = this.gridRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  // Create cells from this.grid
  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.grid[y][x]) {
          cells.push({ x, y });
        }
      }
    }

    return cells;
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;

    const x = Math.floor(offsetX / cellSize);
    const y = Math.floor(offsetY / cellSize);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.grid[y][x] = !this.grid[y][x];
    }

    this.setState({ cells: this.makeCells() });
  };

  runGame = () => {
    this.setState({ isRunning: true });
  };

  stopGame = () => {
    this.setState({ isRunning: false });
  };

  render() {
    const { cells, isRunning } = this.state;

    return (
      <div>
        <div
          className="grid"
          style={{
            width: width,
            height: height,
            backgroundSize: `${cellSize}px ${cellSize}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.gridRef = n;
          }}
        >
          {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
          ))}
        </div>

        <div className="controls">
          {isRunning ? (
            <button className="button" onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className="button" onClick={this.runGame}>
              Run
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Simulator;
