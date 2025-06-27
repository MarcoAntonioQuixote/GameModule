import { useEffect, useState } from "react";


function PacMan({frozen,girl}) {

    // animation-name

    const [pos,setPos] = useState(0);

    const startPacMan = () => {
        setInterval(() => {
            setPos(p => p + 2)
        },20)
    }

    let animate = frozen ? 'eat' : null;

  return (
    <div class="pacman" onClick={startPacMan} style={{left: pos}}>
        <div class="pacman__eye"></div>
        <div class="pacman__mouth" style={{animationName: animate}}></div>
        {girl ? <h2 className="bow">🎀</h2> : null}
    </div>
  )
}

export default PacMan