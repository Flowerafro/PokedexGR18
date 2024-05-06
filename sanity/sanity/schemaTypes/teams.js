export const teams = {
    title: "Teams",
    name: "teams",
    type: "document",
    field: [
        {
            title: "Navn",
            name: "Teamname",
            type: "string"
        },
        {
            title: "Teambilde",
            name: "teamimage",
            type: "image"
        },
        {
            title: "Slug",
            name: "slug_url",
            type: "slug",
            options: {
                source: "Teamname",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        }
        // her skal det også inn en Pokemon
    ]
}