import React, { useState } from 'react';
import './TicTacToe.css';
import circleicon from '../assets/circle.png';
import crossicon from '../assets/cross.png';

// empty array
let data = ["", "", "", "", "", "", "", "", ""];
let x = "X";
let o = "O";

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    if (data[num] !== "") {
      return; // Prevent overwriting an already filled box
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${crossicon}' alt='X'>`;
      data[num] = x;
    } else {
      e.target.innerHTML = `<img src='${circleicon}' alt='O'>`;
      data[num] = o;
    }
    setCount(count + 1);
  }

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    document.querySelectorAll('.boxes').forEach(box => {
      box.innerHTML = "";
    });
  }

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(e) => toggle(e, 0)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 1)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e) => toggle(e, 3)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 4)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e) => toggle(e, 6)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 7)}></div>
          <div className='boxes' onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TicTacToe;
