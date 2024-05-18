import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Layout({children}) {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <>
        <header>
            <nav>
            <Link to={"/"}><img id="pokeball" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="logo" />UIN Pokedex</Link>
            <Link to={"/teams"}>Teams</Link>
            </nav>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="text" id="search" placeholder="Søk etter pokemon" onChange={(e) => setInput(e.target.value)}></input>
                <Link to={`/searchresults/${input}`}>
                <button type="submit" value="Søk">
                <FontAwesomeIcon icon={faSearch} /> 
                </button>
            </Link>
            </form>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}