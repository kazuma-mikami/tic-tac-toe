import React, { useState, useEffect } from "react";
import { calculateWinner, getStatus } from "../domain/service";
import Board from "./Board";
import { Histories, ISquare, Settlement } from "../domain/entity";
import Moves from "./Moves";

const Game = () => {
  const [history, setHistory] = useState<Histories>([
    { squares: Array<ISquare>(9).fill(null), col: null, row: null }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [settlement, setSettlement] = useState<Settlement | null>(null);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    // もうすでに勝者が決まっているか、空いているマスがない場合、リターン
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    const col: number = (i % 3) + 1;
    const row: number = Math.floor(i / 3 + 1);

    setHistory(_history.concat([{ squares, col, row }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  useEffect(() => {
    setSettlement(calculateWinner(history[stepNumber].squares));
  }, [history, stepNumber]);

  const current = history[stepNumber];
  const winner = settlement ? settlement.winner : settlement;
  const line = settlement ? settlement.line : null;
  const isDraw = history.length > 9 && !winner ? true : false;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          line={line}
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{getStatus(winner, xIsNext, isDraw)}</div>
        <Moves histories={history} stepNumber={stepNumber} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
