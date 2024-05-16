import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

export default function Pokemon() {

  const {slug} = useParams()
  const [details, setDetails] = useState()
  const [abilities, setAbilities] = useState([])

  const getDetails = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
    .then(response => response.json())
    .then(data => {
        setDetails(data);
        data.abilities.forEach(ability => getAbilities(ability.ability.url));
        })
    .catch(error => console.error(error))
  }

  const getAbilities = async (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setAbilities(prevState => [...prevState, data]))
    .catch(error => console.error(error))
  }

  useEffect(()=> {
      getDetails()
  }, [slug])

  console.log("Details", details)

  return (
    <section id="pokemon">
      {details?.sprites && (
        <>
          <section>
            <article className="pokemon-img">
              <h1>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h1>
              <img src={details.sprites.other?.['official-artwork'].front_default} alt={details.name} />  
            </article>
            
            <article className="pokemon-abilities">
              <h1>Abilities</h1>
              {abilities?.map((ability, index) => (
                <div key={index}>
                  <h2>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</h2>
                  <p>Effect: {ability.effect_entries[0].effect}</p> {/* Filtrere etter engelsk */}
                  <p>Short Effect: {ability.effect_entries[0].short_effect}</p> {/* Filtrere etter engelsk */}
                </div>
              ))}
            </article>
          </section>

          <section>
            <article className="pokemon-type">
              <h1>Types</h1>
              {details.types?.map((type, index) => (<TypeCard key={index} name={type.type.name} />))}
            </article>

            <article className="pokemon-stats">
              <h1>Stats</h1>
              {details.stats?.map((stat, index) => (
                <ul key={index} className="stats">
                  <li>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: </li>
                  <progress value={stat.base_stat} max="100"></progress>
                  <li>{stat.base_stat}</li>
                </ul>
              ))}
            </article>
          </section>
        </>
      )}
    </section>
  )
}