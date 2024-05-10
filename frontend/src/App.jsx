import './styles/style.scss'
import './styles/_color.scss'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Type from './components/Type'
import Home from './components/Home'
import Teams from './components/Teams'
import Layout from './components/Layout'
import Pokemon from './components/Pokemon'
import PokeCard from './components/PokeCard'
import SearchResults from './components/SearchResults'
import { useEffect, useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokeData, setPokeData] = useState([])
  const [limit, setLimit] = useState("?limit=9")
  
    const getPokemon = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results);
                data.results.forEach(poke => getPokemonData(poke.url));
            })
            .catch(error => console.error(error))
    }

    const getPokemonData = async (url) => {
        fetch(url)
          .then(response => response.json())
          .then(data => setPokeData(prevState => [...prevState, data])) //https://chat.openai.com/share/c9fa4901-bfc8-474c-b193-d48614373831 Jeg brukte chathpt her for å få til å lagre på usestaten når det allerede er data på den uten å overskrive :)
          .catch(error => console.error(error))
    }

    useEffect(() => {
    getPokemon()
    }, [])
    
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home pokeData={pokeData} setLimit={setLimit} getPokemon={getPokemon}/>} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/type/:slug" element={<Type />} />
          <Route path="/pokemon/:slug" element={<Pokemon pokeData={pokeData} />} />
          <Route path="/searchresults/:slug" element={<SearchResults />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;


/* 
          <Route path="/searchresults/:pokemon" element={<SearchResults />} />
*/