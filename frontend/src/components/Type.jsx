import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type() {

    const {slug} = useParams()
    const [typeSlug, setTypeSlug] = useState([])
    const [pokemonUrl, setPokemonUrl] = useState([])

    const getTypeSlug = async () => {
        fetch(`https://pokeapi.co/api/v2/type/${slug}?limit=10`)
            .then(response => response.json())
            .then(data => {
                setTypeSlug(data.pokemon);
                data.pokemon.forEach(poke => getTypeData(poke.pokemon.url));
            })
            .catch(error => console.error(error))
    }

    const getTypeData = async (url) => {
        fetch(url)
          .then(response => response.json())
          .then(data => setPokemonUrl(prevState => [...prevState, data]))
          .catch(error => console.error(error))
    }

    useEffect(()=> {
        getTypeSlug()
    }, [])

    console.log(pokemonUrl)
    
    return (
        <>
        {pokemonUrl?.map((pokeUrl, index) => {
            return (
                <Link key={index} to={`/pokemon/${pokeUrl.name}`}><article key={index}>
                    <img src={pokeUrl.sprites.front_default} alt={pokeUrl.name} />
                    <h2>{pokeUrl.name}</h2>
                    <p>paddedId</p>
                </article></Link>
            )
        })}
        </>
    )
}