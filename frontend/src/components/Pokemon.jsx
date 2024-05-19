import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

export default function Pokemon() {

  const {slug} = useParams()
  const [details, setDetails] = useState()
  const [abilities, setAbilities] = useState([])

  // Her har vi først brukt et forslag fra Copilot i VS code til å fetche og skrive ut pokemon-komponentet. Dette forslaget syns vi virket "for komplisert", og tenkte av vi kunne gjøre det mer som i home-komponentet.
  // Vi brukte så Bing Copilot til å gjøre fetchen slik den er i home, slik vi mener er mer oversiktlig. I sette steget hjalp Bing Chat oss mest med sjekking av syntax og korrekturlesing.

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
          <article className={`pokemon-img ${details ? details.types[0].type.name : ''}`}> {/* Er dette endelig kode? Kilde her?*/}
            <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
            <img src={details.sprites.other?.['official-artwork'].front_default} alt={details.name} />
          </article>

          <section>
            <article className="pokemon-type">
              <h2>Types</h2>
              {details.types?.map((type, index) => (<TypeCard key={index} name={type.type.name} />))}
            </article>
            <article className="pokemon-stats">
              <h2>Stats</h2>
              {details.stats?.map((stat, index) => (
                <ul key={index} className="stats">
                  <li>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: </li>
                  <progress value={stat.base_stat} max="100"></progress>
                  <li>{stat.base_stat}</li>
                </ul>
              ))}
            </article>
          </section>

          <article className="pokemon-abilities">
            <h2>Abilities</h2>
            {abilities?.map((ability, index) => (
              <section key={index}>
                <h3>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</h3>
                <p>Effect: {ability.effect_entries.find(entry => entry.language.name === 'en').effect}</p> {/* Filtrere etter engelsk, henter nå index 1, som ofte er engelsk*/}
                <p>Short Effect: {ability.effect_entries.find(entry => entry.language.name === 'en').short_effect}</p> {/* Filtrere etter engelsk, henter nå index 1, som ofte er engelsk*/}
              </section>
            ))}
          </article>
        </>
      )}
    </section>
  )
}