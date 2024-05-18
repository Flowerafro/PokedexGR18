import { client } from "./client";
// henter all innhold om teams fra Sanity

export async function fetchTeammembers() {
    const data = await client.fetch(`*[_type == "teammembers"]{
        _id,
        title,
        "slug": slug_url.current,
    }`)
    return data
}
