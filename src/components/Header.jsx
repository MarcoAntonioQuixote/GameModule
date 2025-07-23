import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <h2>Bad Ass Games 🐦‍🔥</h2>
        <img src="https://static.vecteezy.com/system/resources/previews/017/068/883/non_2x/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg" alt="" />
        <div>
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
  )
}

export default Header