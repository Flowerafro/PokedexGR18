import Teams from "./Teams";
import PokeCard from "./PokeCard";
import { Link } from "react-router-dom";

export default function Layout({children}) {
    return (
        <>
        <header>
            <Link to={"/"}><img id="pokeball" src="#" alt="logo" />UIN pokedex</Link>
            <Link to={"/teams"}>TEAMS</Link>
            <input type="search" />
        </header>
        <main>
            {children}
        </main>
        </>
    )
}