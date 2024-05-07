import Teams from "./Teams";
import PokeCard from "./PokeCard";
import { Link } from "react-router-dom";

export default function Layout({children}) {
    return (
        <>
        <header>
            <Link to={"/"}><img id="pokeball" src="#" alt="logo" />UIN Pokedex</Link>
            <Link to={"/teams"}>Teams</Link>
            <input type="search" />
        </header>
        <main>
            {children}
        </main>
        </>
    )
}