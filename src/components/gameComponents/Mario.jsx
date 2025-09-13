import { useEffect, useRef, useState } from 'react'
import GameController from '../GameController';
import marioFunctions from '../../gameFunctions/marioFunctions';

function Mario({setNumPlays}) {
    const {createEnemies,moveMario,isColliding,modifyHitState} = marioFunctions;

    const [pos,setPos] = useState({x: 0, y: 0});
    const [jumping, setJumping] = useState(false)
    const [enemies,setEnemies] = useState(createEnemies())
    const [fireballs,setFireballs] = useState([])
    const [enemyPos,setEnemyPos] = useState(0)
    const [numFire,setNumFire] = useState(3)
    const [hearts,setHearts] = useState(3)
    const [hit,setHit] = useState(false)
    const [gameOver,setGameOver] = useState(false)
    const enemiesRef = useRef(enemies)
    const enemyMarchRef = useRef(null)
    const reloadFireRef = useRef(null)

    useEffect(() => {
        const checkCollisions = () => {
            const mario = document.querySelector('.mario')
            
            enemiesRef.current.forEach((enemy,index) => {
                const e = document.getElementById(`e-${index}`)
                if (isColliding(mario,e)) {
                    modifyHitState(index,setEnemies,setHit,setHearts);
                }
            })
            requestAnimationFrame(checkCollisions)
        }

        requestAnimationFrame(checkCollisions)
    },[])

    useEffect(() => {
        enemyMarchRef.current = setInterval(() => {
            setEnemyPos(prev => prev + 7)
        },20)

        reloadFireRef.current = setInterval(() => {
            setNumFire(prev => {
                if (prev < 3) { return prev + 1 }
                return prev
            })
        },3000)

        if (hearts <= 0) {
            setGameOver(true);
            clearInterval(enemyMarchRef.current)
            clearInterval(reloadFireRef.current)
        }

        return () => {
            clearInterval(enemyMarchRef.current)
            clearInterval(reloadFireRef.current)
        }
    },[hearts])

    const shootFireball = () => {
        if (numFire <= 0) return
        let marioLocation = document.querySelector('.mario').getBoundingClientRect();
        
        const {top,right} = marioLocation;
        let fireball = {hit: false, id: Math.random(), x: 0, right, top}
        setFireballs(prev => ([...prev,fireball]))
        setNumFire(p => p - 1)
    }

    const aJump = () => move('ArrowUp');

    const move = (dir) => {
        moveMario(dir,setPos,jumping,setJumping)
    }

  return (
    <div style={{backgroundImage: `url(https://imgcdn.stablediffusionweb.com/2024/12/27/f56fe887-8bb3-4084-8cb2-3555774c2eb7.jpg)`, height: '100vh',backgroundRepeat: 'no-repeat'}}>
        <div className='ground'>
            <img className={`mario ${hit ? 'marioHit' : ''}`} style={{left: `${pos.x}px`, bottom: `${pos.y}px`}} src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRmZzNobHJhbmFvdmoyem1rY3l5bW03Zndlc2gzMTIwaDFwdHd5YSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/12oufCB0MyZ1Go/200w.webp" />
            <MarioEnemies enemies={enemies} enemyPos={enemyPos} />
            <FireBalls fireballs={fireballs} />
        </div>
        <div className='marioStatusBar'>
            <FireCounter numFire={numFire} />
            <LifeCounter hearts={hearts}/>
        </div>
        <GameController handleMove={move} a={aJump} b={shootFireball} />
        {gameOver && <GameOverScreen setNumPlays={setNumPlays}/> }
    </div>
  )
}

export default Mario

function MarioEnemies({enemies,enemyPos}) {

    function EnemyToken({e,i}) {
        const show = e.hit && e.projectile ? 'hidden' : 'visible'

        return (
        <h2 className='marioEnemy' id={`e-${i}`} style={{marginRight: `${e.x}px`, visibility: show}}>
            {e.token}
        </h2>
        )
    }

    const showEnemies = enemies.map((e,i) => <EnemyToken i={i} key={i} e={e} /> )

    return (
    <div className='marioEnemies' style={{left: `-${enemyPos}px`}}>
        {showEnemies}
    </div>
    )
}

function GameOverScreen({setNumPlays}) {

    const restart = () => {
        setNumPlays(p => p + 1)
    }

    return (
        <div id='marioGameOver'>
            <h2 style={{scale: 2, marginBottom: 50}}>Defeated. 🐢</h2>
            <button style={{scale: 2}} onClick={restart}>Retry 🍄</button>
        </div>
    )
}

function LifeCounter({hearts}) {

    let heartCounter = '';

    for (let x = 0; x < hearts; x++) {
        heartCounter += ' ❤️ '
    }

    return (
    <h1 className='marioStatusBar-hearts'>
       {heartCounter}
    </h1>
    )
}

function FireCounter({numFire}) {

    let fireCount = '';

    for (let x = 0; x < numFire; x++) {
        fireCount += ' 🔥 '
    }

    return (
    <h1 className='marioStatusBar-fires'>
        {fireCount}
    </h1>
    )
}

function FireBalls({fireballs}) {

    const showFireballs = fireballs.map(fireball => <Fireball fireball={fireball} />)

    return (
        <div className='fireballs'>
            {showFireballs}
        </div>
    )
}

function Fireball({fireball}) {

        const [pos,setPos] = useState(0)
        const {top,right,x} = fireball;

        useEffect(() => {
            setInterval(() => {
                setPos(prev => prev + 3)
            },20)
        },[])

    return (
        <h2 key={fireball.id} className='fireball' style={{top: top+70,left: right-50 + pos, position: 'fixed' }}>🔥</h2>
    )
}
