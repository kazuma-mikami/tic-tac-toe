export interface HistoryElement {
  squares: ISquare[];
}

export type Histories = HistoryElement[];
export type ISquare = "X" | "O" | null;
