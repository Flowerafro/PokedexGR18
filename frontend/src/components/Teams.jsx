import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../sanity/services/teamServices';  
import { Link } from 'react-router-dom';

export default function Teams() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchTeams()
        .then(data => {
            setTeams(data)   
        })
    }, [])


    return (
        <>
        <h1>Teams</h1>
            <section className='teams-box'>
            {teams.map((team, index) => {
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