import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

export default function Pokemon() {

    const {slug} = useParams()
    const [itAll, setItAll] = useState([])

    const getItAll = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`) //Kaaaanskje endre denne fetchen til en slik vi har i search-results? Siden vi her også bare skal hente ett objekt?
        .then(response => response.json())
        .then(data => setItAll(data))
        .catch(error => console.error(error))
    }

    useEffect(()=> {
        getItAll()
    }, [slug])

    console.log("itAll" + itAll)

    return (
        <section id="pokemon">
            {itAll.sprites && (
                <>
                <article className="pokemon-img">
                <h1>{itAll.name.charAt(0).toUpperCase() + itAll.name.slice(1)}</h1>
                <img src={itAll.sprites.other?.['official-artwork'].front_default} alt={itAll.name} />  
                </article>
                <article className="pokemon-type">
                    <h1>Types</h1>
                    {itAll.types?.map((type, index) => <p key={index} className={`${type.type.name}`}>{type.type.name}</p>)}
                </article>
                <article className="pokemon-stats">
                    <h1>Stats</h1>
                    {itAll.stats?.map((stat, index) => <p key={index}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</p>)}
                </article>
                </>
            )}
        </section>
    )}