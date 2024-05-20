import { client } from "./client";

export async function fetchTeams() {
    const data = await client.fetch(`*[_type == "teams"]{
        _id,
        title,
        "slug": slug_url.current, 
        "imageUrl": image.asset->url,
    }`)
    return data
}

export async function fetchPokemonByTeam(slug) {
    const data = await client.fetch(`*[_type == "teams" && slug_url.current == $slug]{
        _id,
        title,
        "slug": slug_url.current,
        pokemon[]{
            name,
            number,
        }
    }`, {slug})

    console.log(data[0].pokemon) 
    return data[0].pokemon 
}