import React, { useState, useEffect, useContext } from 'react';
import { PopulateBoard } from './PopulateBoard'
import { AppContext } from "./AppContext";
import { GameOver } from "./GameOver";


export const GameBoard = () => {
    const { grid, setGrid } = useContext(AppContext);
    const temp = grid.slice();


    return (
        <div class="container text-center bg-light border-dark">
            {temp.map(arr => {
                return (
                    <div class="row border-dark" style={{ height: '7vh', border: '1px solid black' }}>
                        {arr.map((obj) => {
                            return (
                                <button class="col" style={{ height: '7vh', border: '1px solid black' }}
                                    onClick={() => {
                                        (obj.visible = true)
                                        setGrid(temp);
                                    }} onContextMenu={() => { (obj.flagged = true)(console.log(obj.flagged)); return false }}>
                                    {(obj.visible ? (obj.value === 'X' ? <GameOver/> : <h1>{obj.value}</h1>) : <h1></h1>)}
                                </button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}
