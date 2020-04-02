import { ISquare } from "../domain/entity";
import React from "react";

interface SquareProps {
  value: ISquare;
  isHighlight: boolean;
  onClick: () => void;
}

const Square: React.SFC<SquareProps> = ({ value,isHighlight, onClick }) => {
  const addClass = isHighlight? "highlight" : "";

  return (
    <button className={`square ${addClass}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
