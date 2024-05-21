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

    // Element h2 not allowed as child of element button in this context. (Suppressing further errors from this subtree.)
    // The element button must not appear as a descendant of the a element. Her sier ai at link kan styles som en button, og at button kan fjernes??
    // Vi kan bare fjerne alle h2 inni buttons for de godtar å bare ha tekst inni seg, må bare få stylet det

    return (
        <section>
            <h1 className='title'>Teams</h1>
            <div className='teams-box'>
                {teams.map((team, index) => {
                    return (
                        <Link key={index} to={`/teams/${team.slug}`} className="teams">
                            <span>{team.title}</span>
                            <img src={team.imageUrl} alt={team.title} />
                        </Link>       
                    );
                })}
            </div>
        </section>
    )
}