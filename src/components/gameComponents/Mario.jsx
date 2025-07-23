import React, { use, useEffect, useState } from 'react'

function Mario({pos}) {

    const [num,setNum] = useState(0)

    const addBalls = () => {
        setNum(p => p + 1);
    }

  return (
    <>
    
        <div style={{position: 'absolute', left: pos.x, top: pos.y + 500}}>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRmZzNobHJhbmFvdmoyem1rY3l5bW03Zndlc2gzMTIwaDFwdHd5YSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/12oufCB0MyZ1Go/200w.webp" alt="" />
            <FireBalls num={num} />
        </div>
    </>
  )
}

export default Mario


function FireBalls({num}) {

    let fireballs = '';

    for (let x = 0; x < num; x++) {
        fireballs += ' 🔥 '
    }

    return (
        <>
            {fireballs}
        </>
    )
}