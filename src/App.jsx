import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import TrailersPage from './components/pages/TrailersPage'
import UserPage from './components/pages/UserPage'
import PokemonMapPage from './components/pages/PokemonMapPage'
import GameSystemPage from './components/pages/GameSystemPage'


function App() {
    const [categories, setCategories] = useState([])
    const [game,setGame] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {
            let res = await axios.get('https://6854cfc26a6ef0ed663028e6.mockapi.io/games')

            let c = []
            
            for (let game of res.data) {
                if (!c.includes(game.category)) { c.push(game.category)}
            }
            let loadedCategories = []
            for (let cateogry of c) {
                let filtered = res.data.filter(game => game.category === cateogry);
                loadedCategories.push({games: filtered, label: cateogry})
            }
            setCategories(loadedCategories)
        }

        fetchData();
        
    },[])

  return (
    <div>
        <Header />

        <Routes>
            <Route path='/' element={
                <HomePage game={game} setGame={setGame} categories={categories} />
            }/>
            <Route path='/trailers' element={<TrailersPage />}/>
            <Route path='/signin' element={<UserPage />}/>
            <Route path='/pokemonMap' element={<PokemonMapPage />}/>
            <Route path='/game/:gameName' element={
                <GameSystemPage game={game} setGame={setGame} categories={categories}/>
            }/>
        </Routes>

    </div>
  )
}

export default App
