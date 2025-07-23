import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GameSystem from '../GameSystem';

function GameSystemPage({setGame,game,categories}) {

    const [loaded,setLoaded] = useState(false)

    const navigate = useNavigate();

    const {gameName} = useParams();

    useEffect(() => {
        console.log(categories)
        for (let c of categories) {
            for (let g of c.games) {
                if (g.title.toLowerCase() === gameName.toLowerCase()) {
                    setGame(g.title)
                }
            }
        }
    },[categories])

  return (
    <div>
        {game ? <GameSystem game={game} setGame={setGame} /> :
            <h2>No Game Loaded</h2>
        }
        
    </div>
  )
}

export default GameSystemPage