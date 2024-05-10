import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export default function Layout({children, getPokeSearch}) {

    const [pokeSearch, setPokeSearch] = useState([]);

    const [input, setInput] = useState("");

    return (
        <>
        <header>
            <Link to={"/"}><img id="pokeball" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="logo" />UIN Pokedex</Link>
            <Link to={"/teams"}>Teams</Link>
            <form action="">
                <label htmlFor="search"></label>
                <input type="text" id="search" onChange={(e) => setInput(e.target.value)} />
                <Link to={`/searchresults/${input}`}><button onClick={getPokeSearch}>søk</button></Link>
                
            </form>
            
        </header>
        <main>
            {children}
        </main>
        </>
    )
}