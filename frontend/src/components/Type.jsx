import { useParams } from "react-router-dom"

//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type() {

    const {slug} = useParams
    
    // Gjøre en ny fetch i dette komponentet som bare henter ut de pokemon som stemmer med slugen som representerer typen som er klikket
    // Prøver meg her på å hente verdien i slugen, men har ikke helt funnet ut av det ennå...
    return (
        <>
        <h2>{slug}</h2>
        </>
    )
}