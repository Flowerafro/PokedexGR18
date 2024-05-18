import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeams } from '../../sanity/services/teamServices';
import PokeCard from './PokeCard';


export default function TeamDisplay({pokeData, setPokeData}) {
    const { slug } = useParams();


    const [teamDisplay, setTeamDisplay] = useState([])


    // kjører fetch fra Sanity
    useEffect(() => {
        fetchTeams(slug)
        .then(data => {
            console.log(data);
            setTeamDisplay(data)
        })
    }, [slug]);

    // hente pokemon-navn fra sanity basert på slug
    

    console.log(slug, "slug");

    useEffect(()=> {
        setPokeData()
    })

    return (
        <section>
            <PokeCard/>  
        </section>
    )
}

/*
  {teamPokemons?.map((poke, index) => {
                <PokeCard 
                key={index}
                name={poke.name} 
                id={poke.id} 
                image={poke.sprites.front_default}
            /> 
            })} */