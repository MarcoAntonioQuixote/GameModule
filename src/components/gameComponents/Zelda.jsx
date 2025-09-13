import React from 'react'

function Zelda() {
  return (
    <div onClick={startMovement} style={{position: 'absolute', left: pos.x, top: pos.y + 500}}>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHM2bWVnZjBmYzRkenhtcmJuZTJpZzY2bGhrMnNpN2FqYnl2djY0dSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/BHCFcibksBxAV0FDoL/giphy.webp" alt="" />
    </div>
  )
}

export default Zelda