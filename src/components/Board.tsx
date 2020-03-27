import React from "react";
import Square from "./Square";
import { ISquare } from "../domain/entity";

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

const Board: React.SFC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
