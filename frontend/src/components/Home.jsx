import PokeCard from "./PokeCard";
import Type from "./Type";
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
          .then(data => setPokeData(prevState => [...prevState, data])) //https://chat.openai.com/share/c9fa4901-bfc8-474c-b193-d48614373831 Jeg brukte chathpt her for å få til å lagre på usestaten når det allerede er data på den uten å overskrive :)
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
            <Type pokemon={pokemon}/>
        </section>
    </>
        
    )
}
