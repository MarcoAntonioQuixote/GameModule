import CategoryRow from "../CategoryRow"
import GameSystem from "../GameSystem"


function HomePage({game,setGame,categories,setCart}) {

    const showCategories = categories.map((category,i) => <CategoryRow setCart={setCart} key={i} games={category.games} label={category.label} setGame={setGame}/>)

  return (
    <div>
        {showCategories} 
    </div>
  )
}

export default HomePage