import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SearchResults() {

    const {slug} = useParams() 
    const [result, setResult] = useState()

    const getResult = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            const data = await response.json()
            setResult(data)
        } catch {
            console.error("Det har skjedd en feil")
        }
    }

    useEffect(()=> {
        getResult()
    }, [slug])

    console.log(result)
    
    return (
        <>
        <img src={result?.sprites.front_default} alt={result?.name} />
        <h3>{result?.name}</h3>
        <h3>{result?.id}</h3>
        </>

        // Har ikke fått til å sende som props til pokeCard ennå, så hardkodet over her

        // <PokeCard
        //     name={result?.name} 
        //     id={result?.id} 
        //     image={result?.sprites.front_default}
        // />
        
    )
}

