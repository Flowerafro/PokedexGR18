import PokeCard from "./PokeCard";
import TypeCard from "./TypeCard";
import { useEffect, useState } from "react";

export default function Home({ setLimit, pokeData }) {
    
  useEffect(() => {
    setLimit("?limit=9")
  }, [])
  
  
    return (
        <>
        
        {pokeData?.map((poke, index) => {
                    let paddedId;
                    if (poke.id < 10) {
                        paddedId = '00' + poke.id;
                    } else if (poke.id < 100) {
                        paddedId = '0' + poke.id;
                    } else {
                        paddedId = poke.id;
                    }
                    return (
                        <PokeCard 
                        key={index} 
                        name={poke.name} 
                        paddedId={paddedId} 
                        image={poke.sprites.front_default}
                        />
                    );
                })}
    </>
        
    )
}
