import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../sanity/services/teamServices';  
import { Link } from 'react-router-dom';  

export default function Teams() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchTeams()
        .then(data => {
            console.log(data);
            setTeams(data)   
        })
    }, [])

    // <Link to={`/teams/${team.slug_url}`}> // Må legge til en Link to som sender brukeren til listen over Pokemons som er under laget

    return (
        <>
        <h1>Teams</h1>
            <section className='teams-box'>
            {teams.map((team, index) => {
            console.log(team.image);
            return (
                <Link key={index} to={`/teams/${team.slug}`} team={team.title}>
                    <button className="teams">
                    <h2>{team.title}</h2>
                    <img src={team.imageUrl} alt={team.title} />
                    </button>
                </Link>       
            );
        })}
        </section>
        </>
    )
}