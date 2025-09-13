import { useEffect, useState } from 'react'
import GameController from './GameController'
import PacMan from './gameComponents/PacMan'
import Mario from './gameComponents/Mario';
import Zelda from './gameComponents/Zelda';
import { Link, useNavigate } from 'react-router-dom';


function GameSystem({game,setGame}) {

    const [numPlays,setNumPlays] = useState(0)

    const navigate = useNavigate();
    const turnOff = () => {
        navigate('/')
        setGame(null)
    }

    let gameComponent = null;

    switch(game) {
        case 'Pac Man': gameComponent = <PacMan frozen={false} girl={true} />;
            break;
        case 'Mario': gameComponent = <Mario key={numPlays} setNumPlays={setNumPlays} />
            break;
        case 'Zelda': gameComponent = <Zelda />
            break;
        default: gameComponent = <h2>That game is unavailable to you.</h2>
    }


  return (
    <div className='game'>
        <button style={{position: 'fixed', bottom: '30px', right: '30px', scale: 2}} onClick={turnOff}>Exit</button>
        {gameComponent}
    </div>
  )
}

export default GameSystem