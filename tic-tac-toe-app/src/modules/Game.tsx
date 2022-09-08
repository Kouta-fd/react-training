import { Board } from "./Board";
import { Moves } from "./Moves";
import { useBoardHistory } from "../hooks/useBoardHistory";

export const Game = () => {
  const { history, status, current, handleClick, jumpTo } = useBoardHistory();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div data-testid="status">{status}</div>
        <ol>
          <Moves history={history} onClick={jumpTo} />
        </ol>
      </div>
    </div>
  );
};
