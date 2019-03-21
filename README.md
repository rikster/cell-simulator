# Cell Simulator

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Cell Simulator by creating an initial configuration and observing how it evolves. It follows these rules of regeneration:

  - A Cell with fewer than two live neighbours dies of under-population.
  - A Cell with 2 or 3 live neighbours lives on to the next generation.
  - A Cell with more than 3 live neighbours dies of overcrowding.
  - An empty Cell with exactly 3 live neighbours "comes to life".
  - A Cell who "comes to life" outside the board should wrap at the other side of the board.
  - Once the next generation is done, User can trigger "next generation" again.

![extreme cell simulator](https://user-images.githubusercontent.com/291728/33158075-ec01ddde-d05a-11e7-99b8-35af2fed02e5.gif)

## To Install the App's dependencies
Open a terminal in the root directory and run:

    npm install

## To Start the App
Open a terminal in the root directory and run:

    npm start

This will load locally into a browser:  http://localhost:3000/

Click a pattern of cells into the grid to make them alive, then click START to execute the game. You can continue to click on the grid whist its running.

## To Configure the App

You can change the grid size, cell size and regen interval in the config file: 

        /config/keys.js   


## To Test the App

    npm test

## Notes
This is written in ES6. Given I had only one day to complete this test there was not enough time to get up to speed with Typescript.

There is test framewook in place based on react-testing-library, however, only one test.

Cells that come to life outside the grid do not wrap to the other side at this stage.  

