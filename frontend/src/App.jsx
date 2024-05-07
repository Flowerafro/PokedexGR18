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

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/type/:slug" element={<Type />} />
          <Route path="/pokemon/:slug" element={<Pokemon />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;


/* 
          <Route path="/searchresults/:pokemon" element={<SearchResults />} />
*/