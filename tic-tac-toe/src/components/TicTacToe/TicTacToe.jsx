import React, { useState } from 'react';
import './TicTacToe.css';
import circleicon from '../assets/circle.png';
import crossicon from '../assets/cross.png';

const TicTacToe = () => {
  //creates board with 9 elements
  const initialBoard = Array(9).fill(null);
  //board - holds current state and setBoard holds the updated value 
  const [board, setBoard] = useState(initialBoard);
  //isnext is boolean
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    //checks whether the winner is already present or the board position is already filled
    if (board[index] || winner) return; 

    //creates the copy of teh board
    const newBoard = [...board];
    //updates the position
    newBoard[index] = isXNext ? 'X' : 'O';
    //updates the board as per position
    setBoard(newBoard);
    //if it was X's turn (isXNext was true), now it's O's turn (isXNext becomes false), and vice versa.
    setIsXNext(!isXNext);

    const winningPlayer = calculateWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
  };

  const calculateWinner = (squares) => {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    const icon = board[index] === 'X' ? crossicon : board[index] === 'O' ? circleicon : null;
    return (
      <div className='boxes' onClick={() => handleClick(index)}>
        {icon && <img src={icon} alt={board[index]} />}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='row2'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='row3'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
      {winner && <h2 className='winner'>{`Winner: ${winner}`}</h2>}
    </div>
  );
};

export default TicTacToe;
