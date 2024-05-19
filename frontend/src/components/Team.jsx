import React from 'react';
import { useEffect, useState } from "react";
import PokeCard from './PokeCard';
import { fetchPokemonByTeam } from '../../sanity/services/teamServices';
import { useParams } from 'react-router-dom';

export default function TeamDisplay() {
  const {slug} = useParams()
  const [pokeByTeam, setPokeByTeam] = useState([])

  // useEffect kjører hver gang slug-verdi endres:
  useEffect(() => {
    // fetch fra Sanity basert på slug (teamnavn)
    fetchPokemonByTeam(slug)
    .then(data => {
        data.map((pokemon) => {
          // for hver pokemon i array, så fetch-er fra pokeApi basert på pokemons nummer
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.number}`)
          .then(response => response.json())
          .then(pokemonTeam => {
          // setPokeByTeam oppdaterer state ved å ta "tidligere state", sprer den ut og legger den inn i en ny array
            setPokeByTeam(prevState => [...prevState,
            // nytt objekt med ny name, id og image
            {
            name: pokemonTeam.name,
            id: pokemonTeam.id,
            image: pokemonTeam.sprites.front_default
            }
            ]);
          });
        });
      });
  }, [slug]); 

 /* fetchedData.push({name: pokemonData.name, number: pokemonData.id})
            if(fetchedData.length === data.length) {
              setPokeByTeam(fetchedData)*/
  
  return (
    <section className='pokemons'>
      {pokeByTeam.map((pokemon, index) => (
        <PokeCard 
          key={index}
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.image}
        />
      ))}  
    </section>
  )
}