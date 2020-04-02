import React, { useState } from "react";
import { Histories } from "../domain/entity";

interface MovesProps {
  histories: Histories;
  stepNumber: number;
  jumpTo: (move: number) => void;
}

const Moves: React.SFC<MovesProps> = ({ histories, stepNumber, jumpTo }) => {
  const [isDesc, setIsDesc] = useState(false);

  const moves = histories.map((history, move) => {
    const desc = move
      ? `Go to move #${move}(${history.col},${history.row})`
      : "Go to game start";

    const className = stepNumber === move ? "bold" : undefined;

    return (
      <li key={move}>
        <button className={className} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <>
      <input type="checkbox" onChange={() => setIsDesc(!isDesc)} />
      降順に並べ替え
      <ol reversed={isDesc}>
        {isDesc? moves.reverse(): moves}
      </ol>
    </>
  );
};

export default Moves;
