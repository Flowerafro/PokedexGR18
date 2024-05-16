import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

export default function Pokemon() {

    const {slug} = useParams()
    const [itAll, setItAll] = useState([])
    

    const getItAll = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
          .then(response => response.json())
          .then(data => {
            const abilities = data.abilities;
            const promises = abilities.map(ability => 
              fetch(ability.ability.url)
                .then(response => response.json())
                .then(abilityData => {
                  const effectEntry = abilityData.effect_entries.find(entry => entry.language.name === 'en');
                  const effect = effectEntry.effect;
                  const shortEffect = effectEntry.short_effect;
                  return { ...ability, description: { effect, shortEffect } };
                })
            );
            Promise.all(promises)
              .then(abilitiesWithDescriptions => {
                setItAll({ ...data, abilities: abilitiesWithDescriptions });
              });
          })
          .catch(error => console.error(error));
      };  //Denne funksjonen var ikke lett å lage med tanke på ability descriptions. Så jeg måtte bruke copilot for å få til linje 19 til 28. Jeg legger ved bilde av chatten på dokumentet.

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
                    {itAll.types?.map((type, index) => (<TypeCard key={index} name={type.type.name} />))}
                </article>

                <article className="pokemon-stats">
                    <h1>Stats</h1>
                    {itAll.stats?.map((stat, index) => <p key={index}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</p>)}
                </article>

                <article className="pokemon-abilities">
                <h1>Abilities</h1>
                {itAll.abilities?.map((ability, index) => (
                    <div key={index}>
                    <h2>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</h2>
                    <p>Effect: {ability.description.effect}</p>
                    <p>Short Effect: {ability.description.shortEffect}</p>
                    </div>
                ))}
                </article>

                </>
            )}
        </section>
    )}