import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TypeCard() {

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
            <Link to={`/type/${type.name}`} key={type.name}><button className={`${type.name}`}><img src={`src/assets/${type.name}.png`}/><h2>{type.name}</h2></button></Link>
            )
        })}
        </>
    )
}