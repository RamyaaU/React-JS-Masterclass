import React from 'react'
import TicTacToe from './TicTacToe.css'
import circleicon from '../assets/circle.png'
import crossicon from '../assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
     <div className='board'>

     </div>
     <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe
