import axios from "axios"

function GameCard({game, setGame}) {

    const {image,title,cost,onSale} = game

    const play = () => {
        setGame(title)
    }

    const deleteGame = async () => {
        let res = await axios.delete('https://6854cfc26a6ef0ed663028e6.mockapi.io/games/' + game.id)

        console.log(res)
    }

  return (
    <div className='movieCard' >
        <img src={image} alt="" />
        <h2>{title} {onSale ? '🟢':'⭕'}</h2>
        <button onClick={play}>Play</button>
        {/* <MovieSnippet /> */}
        <p>Your product costs {cost}</p>
        <button onClick={deleteGame}>Delete</button>
    </div>
  )
}

export default GameCard