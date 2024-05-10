import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Hvorfor kommer pokemon nummer 5 før pokemon nummer 4?

function PokeCard({name, paddedId, index, image}) {
    return (
        <>
                <Link key={index} to={`/pokemon/${name}`}><article key={index}>
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                    <p>#{paddedId}</p>
                </article></Link>
        </>
    );
}

export default PokeCard;