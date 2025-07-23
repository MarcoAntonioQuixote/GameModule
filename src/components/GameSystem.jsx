import { useEffect, useState } from 'react'
import GameController from './GameController'
import PacMan from './gameComponents/PacMan'
import Mario from './gameComponents/Mario';
import Zelda from './gameComponents/Zelda';


function GameSystem({game,setGame}) {

    const [pos,setPos] = useState({x: 0, y: 0});

    const turnOff = () => {
        setGame(null)
    }

    let gameComponent = null;

    switch(game) {
        case 'Pac Man': gameComponent = <PacMan pos={pos} frozen={false} girl={true} />;
            break;
        case 'Mario': gameComponent = <Mario pos={pos} />
            break;
        case 'Zelda': gameComponent = <Zelda pos={pos} />
            break;
    }


  return (
    <div className='game'>
        <button onClick={turnOff}>Exit</button>
        
        {gameComponent}
        <div style={{position: 'relative', border: 'solid red 2px',display: 'flex',justifyContent: 'center',bottom: '-1000px'}}>
            <GameController setPos={setPos}/>
        </div>
    </div>
  )
}

export default GameSystem