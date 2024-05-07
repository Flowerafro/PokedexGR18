// Skal dette komponentet representere utskriften av type-knappene? Altså inneholde:

//1: Mapping av typer som ligger i API-et <3
//2: Utskrift av ikoner basert på slugen eller type.name
//3: Mapping av farger som ligger i _color.scss
//4: Sammenfletting av disse 3 mappene slik at vi får en utskrift av alle typekortene

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TypeCard({}) {

    const [type, setType] = useState([])

    const getType = async () => {
        fetch(`https://pokeapi.co/api/v2/type/`)
            .then(response => response.json())
            .then(data => setType(data.results))
            .catch(error => console.error(error))
    }

    useEffect(()=> {
        getType()
    }, [])

    return (
        <>
        {type?.map((type) => {
            return (
            <Link to={`/type/${type.name}`} key={type.name}><button>{type.name}</button></Link>
            )
        })}
        </>
    )
}