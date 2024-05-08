import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type() {

    const {slug} = useParams()
    const [typeSlug, setTypeSlug] = useState([])
    const [pokemonUrl, setPokemonUrl] = useState([])

    const getTypeSlug = async () => {
        fetch(`https://pokeapi.co/api/v2/type/${slug}?limit=10`)
            .then(response => response.json())
            .then(data => {
                setTypeSlug(data.pokemon);
                data.pokemon.forEach(poke => getTypeData(poke.pokemon.url));
            })
            .catch(error => console.error(error))
    }

    const getTypeData = async (url) => {
        fetch(`${url}?limit=1`) //Får mange objekter i konsollen, og får ikke ut noe info, så må arbeides videre med :)
          .then(response => response.json())
          .then(data => setPokemonUrl(prevState => [...prevState, data]))
          .catch(error => console.error(error))
    }

    useEffect(()=> {
        getTypeSlug()
    }, [])

    console.log(slug + "pokemonUrl" + pokemonUrl)
    
    // Gjøre en ny fetch i dette komponentet som bare henter ut de pokemon som stemmer med slugen som representerer typen som er klikket
    // Prøver meg her på å hente verdien i slugen, men har ikke helt funnet ut av det ennå...

    return (
        <>
        {/* {typeSlug?.map((poke) => {
            return (
                <h2>{poke.pokemon.name}</h2> 
                <Link key={index} to={`/pokemon/${}`}>
                    <article key={index}>
                        <img src={poke.sprites.front_default} alt={poke.name} />
                        <h2>{poke.name}</h2>
                        <p>#{paddedId}</p>
                    </article>
                </Link>
            )
        })}
        */}
        </>
    )
}