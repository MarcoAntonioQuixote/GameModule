
function GameCard({game, setPlay}) {

    const {image,title,cost,onSale} = game

    const play = () => {
        if (title !== 'Pac Man') return;
        setPlay(p => !p)
    }

  return (
    <div className='movieCard' >
        <img src={image} alt="" />
        <h2>{title} {onSale ? '🟢':'⭕'}</h2>
        <button onClick={play}>Play</button>
        {/* <MovieSnippet /> */}
        <p>Your product costs {cost}</p>
    </div>
  )
}

export default GameCard