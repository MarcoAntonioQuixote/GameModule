import GameCard from './GameCard'

function CategoryRow({setGame,games,label}) {

    const showGames = games.map((game,i) => <GameCard key={i} game={game} setGame={setGame}/>)

  return (
    <div>
        <h2>Category: {label}</h2>
        <div className='category'>
            {showGames}
        </div>
    </div>
  )
}

export default CategoryRow
