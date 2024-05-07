// Skal dette komponentet representere utskriften av type-knappene? Altså inneholde:

//1: Mapping av typer som ligger i API-et
//2: Mapping av type-ikoner som vi lager en .js-fil med en array for
//3: Mapping av farger som ligger i _color.scss
//4: Sammenfletting av disse 3 mappene slik at vi får en utskrift av alle typekortene

import { useEffect, useState } from "react";

export default function TypeCard({pokemon}) {

    const [type, setType] = useState([])

    const getType = async () => {
        fetch(`https://pokeapi.co/api/v2/type/4/`)
            .then(response => response.json())
            .then(data => setType(data.results))
            .catch(error => console.error(error))
    }

    useEffect(()=> {
        getType()
    }, [])

    return (
        <>
        <article>
            <img src="type-symbols/bug.png" alt="logo" />
            <h3>bug</h3>
        </article>
   
        </>
    )
}