import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Pokemon() {

    const {slug} = useParams()
    const [itAll, setItAll] = useState()

    const getItAll = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`) //Kaaaanskje endre denne fetchen til en slik vi har i search-results? Siden vi her også bare skal hente ett objekt?
        .then(response => response.json())
        .then(data => setItAll(data))
        .catch(error => console.error(error))
    }

    useEffect(()=> {
        getItAll()
    }, [slug])

    console.log("itAll" + itAll)

    return (
        <h2>{slug}</h2>
    )
}