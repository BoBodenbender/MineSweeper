import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./Components/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameBoard } from "./Components/GameBoard"
import { PopulateBoard } from './Components/PopulateBoard'


function App() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
        const newBoard = PopulateBoard(10,10,20);
        setGrid(newBoard.board)
}, [])

var states = {
  grid,
  setGrid
}


  return (
    <AppContext.Provider value = {states}>
      <GameBoard/>
    </AppContext.Provider>
  );
}

export default App;
