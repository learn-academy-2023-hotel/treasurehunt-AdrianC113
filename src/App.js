import React, { useState } from "react"

import Square from "./components/Square"

import "./App.css"
import { upload } from "@testing-library/user-event/dist/upload"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ])

const handleSquareClick = (clickedSquareIndex) => {
  // create a variable holding copy of current state
  let updatedBoard = [...board]
  // use index from clickedSqureIndex to update the current square's value with emoji using bracket notation
  updatedBoard[clickedSquareIndex] = "🌲"
  // update state with the new board
  setBoard(updatedBoard)
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board">
      {/* Map over array and return a square for each element */}
      {board.map((value, index) => {
        console.log(value, index)
        return (
        <Square 
         value={value} 
         index={index} 
         handleSquareClick={handleSquareClick}
        />
        )
      })}
      </div>
    </>
  )
}

export default App
