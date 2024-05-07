import './styles/style.scss'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Teams from './components/Teams'
import Layout from './components/Layout'
import Type from './components/Type'
import PokeCard from './components/PokeCard'

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/type" element={<Type />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;


/* 
          <Route path="/:type" element={<Type />} />
          <Route path="/searchresults/:pokemon" element={<SearchResults />} />
          <Route path="/pokemons/:pokemon" element={<Pokemon />} />
*/