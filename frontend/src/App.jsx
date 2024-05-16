import './styles/style.scss'
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
    
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/type/:slug" element={<Type />} />
          <Route path="/pokemon/:slug" element={<Pokemon />} />
          <Route path="/searchresults/:slug" element={<SearchResults />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;


/* 
Tror vi må ha en route til Teams som sender brukeren til en liste over Pokemons som er under laget
<Route path="/teammembers" element={<Teams />} />
        
*/