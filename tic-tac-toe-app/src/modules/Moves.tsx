import React from "react";

type moves = {
  history: {
    squares: any[];
  }[];
  onClick: (i: number) => void;
};
export const Moves: React.FC<moves> = (props) => {
  return (
    <>
      {props.history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        return (
          <li key={move}>
            <button data-testid="move" onClick={() => props.onClick(move)}>
              {desc}
            </button>
          </li>
        );
      })}
    </>
  );
};
