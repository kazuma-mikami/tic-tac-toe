export interface HistoryElement {
  squares: ISquare[];
  col: number | null;
  row: number | null;
}

export type Settlement = {
  winner:ISquare;
  line: number[];
}

export type Histories = HistoryElement[];
export type ISquare = "X" | "O" | null;
