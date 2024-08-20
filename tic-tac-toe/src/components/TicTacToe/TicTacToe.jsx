import React from 'react';
import './TicTacToe.css'; // Correctly import the CSS file
import circleicon from '../assets/circle.png';
import crossicon from '../assets/cross.png';

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes'> </div>
          <div className='boxes'></div>
          <div className='boxes'></div>
        </div>
      </div>
      <button className='reset'>Reset</button>
    </div>
  );
}

export default TicTacToe;
