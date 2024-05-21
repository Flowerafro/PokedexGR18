import React from 'react';
import { useEffect, useState } from "react";
import PokeCard from './PokeCard';
import { fetchPokemonByTeam } from '../../sanity/services/teamServices';
import { useParams } from 'react-router-dom';

export default function TeamDisplay() {
  const {slug} = useParams()
  const [pokeByTeam, setPokeByTeam] = useState([])

  useEffect(() => {
    fetchPokemonByTeam(slug)
    .then(data => {
        data.map((pokemon) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.number}`)
          .then(response => response.json())
          .then(pokemonTeam => {
            setPokeByTeam(prevState => [...prevState,
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


  
  return (
    <>
    <section>
      <h1 className='title'>{slug.toUpperCase()}</h1>
      <div className='pokemons'>
        {pokeByTeam.map((pokemon, index) => (
          <PokeCard 
            key={index}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.image}
          />
        ))} 
      </div>
    </section>
    </>
  )
}