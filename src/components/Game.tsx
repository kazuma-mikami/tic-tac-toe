import React, { useState } from "react";
import { calculateWinner, getStatus } from "../domain/service";
import Board from "./Board";
import {Histories, ISquare} from "../domain/entity";
import Moves from "./Moves";

const Game = () => {
  const [history, setHistory] = useState<Histories>([
    { squares: Array<ISquare>(9).fill(null) }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(_history.concat([{ squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{getStatus(winner,xIsNext)}</div>
        <Moves histories={history} jumpTo={jumpTo}/>
      </div>
    </div>
  );
};

export default Game;
