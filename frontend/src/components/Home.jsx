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
            .then(data => setPokeData(prevState => [...prevState, data])) //https://chat.openai.com/share/c9fa4901-bfc8-474c-b193-d48614373831 Jeg brukte chathpt her for å få til å lagre på usestaten når det allerede er data på den uten å overskrive :)
            .catch(error => console.error(error))
      }
  
      useEffect(() => {
      getPokemon()
      }, [])
      
    return (
        <> 
        {pokeData?.map((poke, index) => {
                    let paddedId;
                    if (poke.id < 10) {
                        paddedId = '00' + poke.id;
                    } else if (poke.id < 100) {
                        paddedId = '0' + poke.id;
                    } else {
                        paddedId = poke.id;
                    }
                    return (
                        <PokeCard 
                        key={index} 
                        name={poke.name} 
                        paddedId={paddedId} 
                        image={poke.sprites.front_default}
                        />
                    );
                })}
        </>
        
    )
}
