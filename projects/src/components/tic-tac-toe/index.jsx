import "./style.css";
import useTicTacToe from "./ticTacToeHooks";

export default function TicTacToe() {
  const { board, calulateWinner, handelClick, getStausMessage, resetGame } =
    useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getStausMessage()}
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, idx) => {
          return (
            <button
              onClick={() => handelClick(idx)}
              disabled={b !== null}
              className="cell"
              key={idx}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}
