import { useParams } from "react-router-dom"

//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type() {

    // Gjøre en ny fetch i dette komponentet som bare henter ut de pokemon som stemmer med slugen som representerer typen som er klikket
    return (
        <>
        <h2>Type</h2>
        {/* {pokemon?.filter((card, index, slug) => {
            return <PokeCard  slug={slug} key={index} card={card}/>;
            })} */}
        </>
    )
}