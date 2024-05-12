import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokeCard({name, id, index, image}) {
    let paddedId;
    if (id < 10) {
        paddedId = '00' + id;
    } else if (id < 100) {
        paddedId = '0' + id;
    } else {
        paddedId = id;
    }

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