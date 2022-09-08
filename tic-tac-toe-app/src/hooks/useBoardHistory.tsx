import { useState } from "react";

export const useBoardHistory = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsnext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: number) => {
    history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      history.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(history.length);
    setXIsnext(!xIsNext);
  };
  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsnext(step % 2 === 0);
  };

  return {
    history: history,
    xIsNext: xIsNext,
    stepNumber: stepNumber,
    handleClick: handleClick,
    calculateWinner: calculateWinner,
    jumpTo: jumpTo,
  };
};
