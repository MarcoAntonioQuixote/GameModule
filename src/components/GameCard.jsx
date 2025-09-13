import { useState } from "react"
import { useNavigate } from "react-router-dom";

function GameCard({game, setGame, setCart}) {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const {image,title,cost,onSale} = game

    const play = () => {
        setGame(title)
        navigate('/game/' + title)
    }

    const buy = () => {
        let addedItem = {...game, id: Math.random()}
        setCart(prev => [...prev, addedItem])
    }

    // {onSale ? '🟢':'⭕'}

  return (
    <div style={{position: 'relative', display: 'flex', justifyContent: "center", alignItems: 'center'}} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>    
    <div className='movieCard' style={{backgroundImage: `url(${image})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
        {/* <img src={image} alt="" /> */}
        <div className="movieCardContent">
            {title}
        </div>
    </div>
    {show && 
        <>        
            <button onClick={play} className="playButton">
                <img style={{height: '100px', width: '100px'}} src="https://cdn-icons-png.freepik.com/512/8212/8212668.png" alt="" />
            </button>
            <button onClick={buy} className="buyButton">buy</button>
        </>
    }
    </div>
    )
}

export default GameCard