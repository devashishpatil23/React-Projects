import { useState } from "react";
const initialBoard = () => Array(9).fill(null);
const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXTurn, setIsXTurn] = useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calulateWinner = (currentBoard) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handelClick = (idx) => {
    const winner = calulateWinner(board);
    if (winner || board[idx]) return;
    const newBoard = [...board];
    newBoard[idx] = isXTurn ? "X" : "0";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };
  const getStausMessage = () => {
    const winner = calulateWinner(board);
    if (winner) return `Player ${winner} wins !`;
    if (!board.includes(null)) return `Its a draw!`;
    return `Player ${isXTurn ? "X" : "0"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };
  return { board, calulateWinner, handelClick, getStausMessage, resetGame };
};

export default useTicTacToe;
