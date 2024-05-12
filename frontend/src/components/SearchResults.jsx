import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SearchResults() {

    const [result, setResult] = useState([])
    const {slug} = useParams() 

    const getResult = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
            const data = await response.json()
            setResult(data.results)
        } catch {
            console.error("Det har skjedd en feil")
        }
    }

    useEffect(() => {
        getResult()
        console.log(result)
    })
    
    return (
        <h2>{slug}</h2>
    )
}

