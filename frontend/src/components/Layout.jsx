import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({children}) {

    return (
        <>
        <header>
            <Link to={"/"}><img id="pokeball" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="logo" />UIN Pokedex</Link>
            <Link to={"/teams"}>Teams</Link>
            <input type="search" />
        </header>
        <main>
            {children}
        </main>
        </>
    )
}