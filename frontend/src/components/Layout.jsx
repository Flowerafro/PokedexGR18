import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
                <Link to={`/searchresults/${input}`}><input type="submit" value="Søk"></input></Link>
            </form>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}