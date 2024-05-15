import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokeCard from "./PokeCard"

export default function SearchResults() {

    const {slug} = useParams() 
    const [result, setResult] = useState()

    //state til loading slik at result er tilgjengelig når komp renderes
    const [loading, setLoading] = useState(true)

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
    }, [slug])

    console.log(result)

    if(loading){
        return <p> Searching for pokemon ...</p>
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

