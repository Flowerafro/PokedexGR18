import { client } from "./client";
// henter all innhold om teams fra Sanity

export async function fetchTeams() {
    const data = await client.fetch(`*[_type == "teams"]{
        _id,
        title,
        "slug": slug_url.current, 
        pokemon, 
        "imageUrl": image.asset->url
    }`)
    return data
}
