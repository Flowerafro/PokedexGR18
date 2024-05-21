import { Link } from "react-router-dom";
import { useState } from "react";
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
                    {/* Her får vi error når vi validerer HTML: "The element button must not appear as a descendant of the a element."*/}
                    {/* Vi har ikke funnet en måte å fjerne button på, uten å miste funksjoneliteten vi har bygget opp.*/}
                    {/* Om tiden hadde strukket til kunne vi jobbet mer med det, og vi renger med at det finnes en fornuftig måte å gjøre dette på, egentlig */}
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