import React from 'react'
import GameScreen from './GameScreen'
import GameController from './GameController'
import PacMan from './PacMan'


function GameSystem() {
  return (
    <div className='game'>
        <GameScreen />
        <GameController />
        <PacMan frozen={true} girl={false} />
        <PacMan frozen={false} girl={true} />
    </div>
  )
}

export default GameSystem