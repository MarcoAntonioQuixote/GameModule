import { Link } from "react-router-dom"

function Header({cart}) {
  return (
    <div className='header'>
        <img style={{position: 'relative', left: '-20px'}} src="https://static.vecteezy.com/system/resources/previews/017/068/883/non_2x/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg" className="logo" alt="" />
        <div style={{position: 'relative'}}>
        </div>
        <div className="navbar">
            <h2>Bad Ass Games 🐦‍🔥</h2>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/signin'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/pokemonmap'>
                    <button>Pokemon Map</button>
                </Link>
                <Link to='/trailers'>
                    <button>Trailers</button>
                </Link>
                <Link to='/game/none'>
                    <button>Games</button>
                </Link>
            </div>
        </div>
        <Link to='/cart'>
            <button id="cart">🛒 {cart.length} </button>
        </Link>
    </div>
  )
}

export default Header