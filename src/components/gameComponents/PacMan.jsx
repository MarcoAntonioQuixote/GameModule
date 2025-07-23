import axios from "axios";
import { useEffect, useState } from "react";


function PacMan({frozen,girl,pos}) {

    // animation-name



    let animate = frozen ? 'eat' : null;

    useEffect(() => {

        let fetchPoke = async () => {
            let res = await axios.get('https://pokeapi.co/api/v2/pokemon/25')
            console.log(res.data)
        }

        fetchPoke()

    },[])

  return (
    <div>
        Pokemon
    </div>
    
    // <div class="pacman" onClick={startMovement} style={{left: pos, backgroundColor: color}}>
    //     <div class="pacman__eye"></div>
    //     <div class="pacman__mouth" style={{animationName: animate}}></div>
    //     {girl ? <h2 className="bow">🎀</h2> : null}
    // </div>
  )
}

export default PacMan