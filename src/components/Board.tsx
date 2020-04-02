import React from "react";
import Square from "./Square";
import { ISquare } from "../domain/entity";

interface BoardProps {
  squares: ISquare[];
  line: number[] | null;
  onClick: (i: number) => void;
}

const Board: React.SFC<BoardProps> = ({ squares, line, onClick }) => {
  const renderSquare = (i: number) => {
    let isHighlight = false;
    if (line != null && line.includes(i)) {
      isHighlight = true;
    }

    return (
      <Square
        key={i}
        value={squares[i]}
        isHighlight={isHighlight}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div>
      {Array(3)
        .fill(0)
        .map((_, i) => {
          return (
            <BoardRow key={i}>
              {Array(3)
                .fill(0)
                .map((_, j) => renderSquare(i * 3 + j))}
            </BoardRow>
          );
        })}
    </div>
  );
};

const BoardRow: React.FC = ({ children }) => {
  return <div className="board-row">{children}</div>;
};

export default Board;
