import './styles/style.scss'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </Layout>
    </>
  )
}

export default App;


/* 
 <Route path="/teams" element={<Teams />} />
          <Route path="/:type" element={<Type />} />
          <Route path="/searchresults/:pokemon" element={<SearchResults />} />
          <Route path="/pokemons/:pokemon" element={<Pokemon />} />
*/