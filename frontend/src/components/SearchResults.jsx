import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokeCard from "./PokeCard"

export default function SearchResults() {

    const {slug} = useParams() 
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Søker etter pokemon ...")

    const getResult = async() => {
        setLoading(true) 
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

    // For å få en feilmelding når søkene ikke stemmer over ens med Pokemon-navn i API har vi laget en loading state. Kilden er oppført i eksamensdokumentet
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

