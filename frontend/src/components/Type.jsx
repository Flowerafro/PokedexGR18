import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import PokeCard from "./PokeCard"

//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type() {

    const {slug} = useParams()
    const [typeSlug, setTypeSlug] = useState([])
    const [pokemonUrl, setPokemonUrl] = useState([])

    const getTypeSlug = async () => {
        fetch(`https://pokeapi.co/api/v2/type/${slug}`)
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
        <section className="pokemons">
            {pokemonUrl?.map((poke, index) => {
                return (
                    <PokeCard 
                        key={index} 
                        name={poke.name} 
                        id={poke.id} 
                        image={poke.sprites.front_default}
                    />
                );
            })}
        </section>
        </>
    )
}