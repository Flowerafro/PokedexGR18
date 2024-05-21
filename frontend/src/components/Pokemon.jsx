import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

export default function Pokemon() {

  const {slug} = useParams()
  const [details, setDetails] = useState()
  const [abilities, setAbilities] = useState([])

  // Her har vi først brukt et forslag fra Copilot i VS code til å fetche og skrive ut pokemon-komponentet. Dette forslaget syns vi virket "for komplisert", og tenkte av vi kunne gjøre det mer som i home-komponentet.
  // Vi brukte så Bing Copilot til å gjøre fetchen slik den er i home, slik vi mener er mer oversiktlig. I sette steget hjalp Bing Chat oss mest med sjekking av syntax og korrekturlesing.

  // Gul error: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.
  // Gul error: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
  // Element progress not allowed as child of element ul in this context. (Suppressing further errors from this subtree.)

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
        <article className={`pokemon-img ${details ? details.types[0].type.name : ''}`}>
          <h2>{details.name.toUpperCase()}</h2>
          <img src={details.sprites.other?.['official-artwork'].front_default} alt={details.name} />
        </article>

        <article>
          <section className="pokemon-type">
            <h2>TYPE(S)</h2>
            {details.types?.map((type, index) => (<TypeCard key={index} name={type.type.name} />))}
          </section>
          <section className="pokemon-stats">
            <h2>STATS</h2>
            {details.stats?.map((stat, index) => (
              <ul key={index} className="stats">
                <li>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: </li>
                <progress value={stat.base_stat} max="200"></progress>
                <li>{stat.base_stat}</li>
              </ul>
            ))}
          </section>
        </article>

        <article className="pokemon-abilities">
          <h2>ABILITIES</h2>
          {abilities?.map((ability, index) => {
            const effectEntry = ability.effect_entries.find(entry => entry.language.name === 'en');
            return (
              <section key={index}>
                <h3>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</h3>
                {effectEntry && <p>Effect: {effectEntry.effect}</p>}
                {effectEntry && <p>Short Effect: {effectEntry.short_effect}</p>}
              </section>
            );
          })}
        </article>
        </>
      )}
    </section>
  )
}