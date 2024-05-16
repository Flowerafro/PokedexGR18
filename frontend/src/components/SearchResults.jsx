import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokeCard from "./PokeCard"

export default function SearchResults() {

    const {slug} = useParams() 
    const [result, setResult] = useState()
    //state til loading slik at result er tilgjengelig når komp renderes
    const [loading, setLoading] = useState(true)
    // state til feilmelding hvis pokemon ikke finnes i søk
    const [loadingMessage, setLoadingMessage] = useState("Søker etter pokemon ...")

    const getResult = async() => {
        setLoading(true) // for hvert søk settes loading til true/default
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            const data = await response.json()
            setResult(data)
            setLoading(false) 
        } catch {
            console.error("Det har skjedd en feil")
            setLoadingMessage("Det du søker etter finnes ikke..")
        }
    }

    useEffect(()=> {
        getResult()
    } , [slug])

   
    console.log(result)

    // når søket skjer vises en "loading-melding" og om søket ikke gir resultat, vil en feilmelding vises
    if(loading){
        return (
            <>
            {loadingMessage === 'Det du søker etter finnes ikke..' && <img src="/src/assets/sadpikachu.png" alt="sadPokemon" />}
            <p className="notfound">{loadingMessage}</p>
            </>   
    ) 
    } else {
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
   
}

