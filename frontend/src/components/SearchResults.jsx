import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokeCard from "./PokeCard"

export default function SearchResults() {

    const {slug} = useParams() 
    const [result, setResult] = useState()
    //state til loading slik at result er tilgjengelig når komp renderes
    const [loading, setLoading] = useState(true)
    // state til feilmelding hvis pokemon ikke finnes i søk
    const [loadingMessage, setLoadingMessage] = useState("Searching for pokemon ...")

    const getResult = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            const data = await response.json()
            setResult(data)
            setLoading(false)
        } catch {
            console.error("Det har skjedd en feil")
        }
    }

    useEffect(()=> {
        getResult()

        const timeOut = setTimeout(() => {
            setLoadingMessage('Det du søker etter finnes ikke..')
        }, 5000);
        return () => clearTimeout(timeOut)
    }, [slug])

    console.log(result)

    // når søket skjer vises en "loading-melding" og om søket ikke gir resultat, vil en feilmelding vises
    if(loading){
        return (
            <>
            {loadingMessage === 'Det du søker etter finnes ikke..' && <img src="/src/assets/sadpikachu.png" alt="sadPokemon" />}
            <p className="notfound">{loadingMessage}</p>
            </>   
    )
    }
    
    return (
        <>
        <PokeCard 
            key={result.id}
            image={result?.sprites.front_default}
            name={result?.name}
            id={result?.id} 
            />
        </>
    )
}

