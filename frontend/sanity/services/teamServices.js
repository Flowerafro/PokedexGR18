import { client } from "./client";
// Fetcher alt innhold om teamene fra Sanity, utenom tilhørende pokemon
// Brukes til utskrift av teamene i teams-komponentet

export async function fetchTeams() {
    const data = await client.fetch(`*[_type == "teams"]{
        _id,
        title,
        "slug": slug_url.current, 
        "imageUrl": image.asset->url,
    }`)
    return data
}

// Fetcher relevant innhold om klikket team (basert på slug) og tilhørende pokemon fra Sanity
// Brukes til utskrift av relevante pokeCard i team-komponentet

export async function fetchPokemonByTeam(slug) {
    const data = await client.fetch(`*[_type == "pokemon" && slug_url.current == $slug]{
        _id,
        title,
        "slug": slug_url.current,
        pokemon[]->{
            _id,
            name,
        }
    }`, {slug})
    console.log(data.pokemon) // Får undefined med data.pokemon og en tom array med bare data...
    return data
}
