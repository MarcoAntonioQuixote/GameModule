import { useState } from 'react'
import './App.css'
import CategoryRow from './components/CategoryRow'
import GameSystem from './components/GameSystem'
import Header from './components/Header'


function App() {

    const [play,setPlay] = useState(false)

    function NoGamePlay() {
        return (
            <h2>GAME NOT LOADED</h2>
        )
    }

  return (
    <div>
        <Header />
        <CategoryRow setPlay={setPlay}/>
        { play ? <GameSystem /> : <NoGamePlay /> }
    </div>
  )
}

export default App

