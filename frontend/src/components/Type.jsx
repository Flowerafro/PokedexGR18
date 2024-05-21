import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PokeCard from "./PokeCard"

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
    
    // Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.

    return (
        <>
        <section>
            <h2 className="typeTitle"><img src={`/src/assets/${slug}.png`} alt="image of poketype"/>{slug.toUpperCase()}</h2>
            <div className="pokemons">
                {pokemonUrl?.sort((a, b) => a.id - b.id).map((poke, index) => {
                    return (
                    <PokeCard 
                        key={index} 
                        name={poke.name} 
                        id={poke.id} 
                        image={poke.sprites.front_default}
                        typeColor={slug}
                    />
                    );
                })}
            </div>
        </section>
        </>
    )
}