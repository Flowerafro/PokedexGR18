import PokeCard from "./PokeCard";
import TypeCard from "./TypeCard";
import { useEffect, useState } from "react";

export default function Home() {
    const [pokemon, setPokemon] = useState([])
    const [pokeData, setPokeData] = useState([])

    const getPokemon = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=9`)
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
          .then(data => setPokeData(prevState => [...prevState, data]))
          .catch(error => console.error(error))
    }
    console.log(pokeData)
  useEffect(() => {
    getPokemon()
  }, [])
  
  
    return (
        <>
        <h1>Main pokemons</h1>
        <section id="pokemons">
            <PokeCard pokeData={pokeData}/>
        </section>
        <section id="types">
            <TypeCard pokemon={pokemon}/>
        </section>
    </>
        
    )
}
