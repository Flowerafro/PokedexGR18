import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeams } from '../../sanity/services/teamServices';
import PokeCard from './PokeCard';


export default function TeamDisplay({pokeData, setPokeData}) {
    const { slug } = useParams();
    const [teamDisplay, setTeamDisplay] = useState([])

    useEffect(() => {
        fetchTeams(slug)
        .then(data => {
            console.log(data);
            setTeamDisplay(data)
        })
    }, [slug]);

    const teamPokemons = pokeData.filter(poke => poke.teamSlug === slug)

    console.log(pokeData + "pokedata");
    console.log(teamPokemons + "teamsPokemon");
    console.log(slug + "slug");

    return (
        <section>
            {teamPokemons?.map((poke, index) => {
                <PokeCard 
                key={index}
                name={poke.name} 
                id={poke.id} 
                image={poke.sprites.front_default}
            /> 
            })}
                       
        </section>
    )
}