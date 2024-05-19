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
              // setPokeByTeam oppdaterer state med å ta "tidligere state", sprer den ut og legger den inn i en ny array
              setPokeByTeam(prevState => [
                ...prevState,
                // ny objekt med ny name, id og image
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
    <section className='teampoke'>
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
  // import React, { useEffect, useState } from 'react';
  // import { useParams } from 'react-router-dom';
  // import { fetchTeams } from '../../sanity/services/teamServices';
  // import PokeCard from './PokeCard';


  // export default function TeamDisplay({pokeData, setPokeData}) {
  //     const { slug } = useParams();


  //     const [teamDisplay, setTeamDisplay] = useState([])


  //     // kjører fetch fra Sanity
  //     useEffect(() => {
  //         fetchTeams(slug)
  //         .then(data => {
  //             console.log(data);
  //             setTeamDisplay(data)
  //         })
  //     }, [slug]);

  //     // hente pokemon-navn fra sanity basert på slug
      

  //     console.log(slug, "slug");

  //     useEffect(()=> {
  //         setPokeData()
  //     })

  //     return (
  //         <section>
  //             <PokeCard/>  
  //         </section>
  //     )
  // }

  // /*
  //   {teamPokemons?.map((poke, index) => {
  //                 <PokeCard 
  //                 key={index}
  //                 name={poke.name} 
  //                 id={poke.id} 
  //                 image={poke.sprites.front_default}
  //             /> 
  //             })} */