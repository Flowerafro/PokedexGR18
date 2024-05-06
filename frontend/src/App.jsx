import './styles/style.scss'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:type" element={<Type />} />
          <Route path="/searchresults/:pokemon" element={<SearchResults />} />
          <Route path="/pokemons/:pokemon" element={<Pokemon />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
