import { useEffect, useState } from "react";

function PokeCard({pokeData}) {
    return (
        <article>
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
                        <section key={index}>
                            <img src={poke.sprites.front_default} alt={poke.name} />
                            <h2>{poke.name}</h2>
                            <p>#{paddedId}</p>
                        </section>
                    );
                })}
        </article>
    );
}

export default PokeCard;