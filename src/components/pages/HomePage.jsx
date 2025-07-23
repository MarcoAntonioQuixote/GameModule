import CategoryRow from "../CategoryRow"
import GameSystem from "../GameSystem"


function HomePage({game,setGame,categories}) {

    const showCategories = categories.map((category,i) => <CategoryRow key={i} games={category.games} label={category.label} setGame={setGame}/>)

  return (
    <div>

        {showCategories}
        
    </div>
  )
}

export default HomePage