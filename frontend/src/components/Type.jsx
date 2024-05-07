//Dette komponentet inneholder en mapping av fetch-en som henter pokemon-endepunktet i API-et og filtrerer på slugen??

export default function Type(pokemon) {

    //To forslag her:
    //1: Bruke .filter-metoden for å filtrere hvilke pokemons som skal skrives ut, basert på slugen
    //2: Gjøre en ny fetch i dette komponentet som bare henter ut de pokemon som stemmer med slugen som representerer typen som er klikket
    // Tror det er siste som er tenkt...
    // Kanskje vi trenger både en ny fetch og filter??
    return (
        <>
        <h2>Type</h2>
        {/* {pokemon?.filter((card, index, slug) => {
            return <PokeCard  slug={slug} key={index} card={card}/>;
            })} */}
        </>
    )
}