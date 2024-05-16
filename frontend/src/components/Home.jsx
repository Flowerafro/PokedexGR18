import PokeCard from "./PokeCard";
import TypeCard from "./TypeCard";
import { useEffect, useState } from "react";

export default function Home() {

    const [pokemon, setPokemon] = useState([])
    const [pokeData, setPokeData] = useState([])
    // state til Type
    const [type, setType] = useState([])

    // FETCH til POKEMON
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

    // Fetch til TYPES
    const getType = async () => {
        fetch(`https://pokeapi.co/api/v2/type/`)
        .then(response => response.json())
        .then(data => setType(data.results))
        .catch(error => console.error(error))
    }


    
    useEffect(() => {
    getPokemon()
    getType()
    }, [])

    
    return (
        <> 
         <section id="pokemons">
            {pokeData?.filter(poke => poke.id <= 9)
            .sort((a, b) => a.id - b.id)
            .map((poke, index) => {
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

        <section id="types">
            {type?.map((type, index) => {
                return (
                    <TypeCard
                    key={index}
                    name={type.name}
                     />
                )
            })}
            
        </section>
        </>
        
    )
}
