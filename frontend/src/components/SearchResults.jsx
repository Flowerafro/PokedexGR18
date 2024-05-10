import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

export default function SearchResults({pokeSearch, setPokeSearch, input}) {
    
   

    const getPokeSearch = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(response => response.json())
            .then(data => setPokeSearch(data.results))
            .catch(error => console.error(error + "noe gikk galt"));
    }

    useEffect(() => {
        getPokeSearch();
    }, [input]);

    return (
        <>
            
            <PokeCard pokeData={pokeSearch} />
        </>
    );
}