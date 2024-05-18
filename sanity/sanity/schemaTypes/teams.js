export const teams = {
    title: "Teams",
    name: "teams",
    type: "document",
    fields: [
        {
            title: "Tittel",
            name: "title",
            type: "string"
        },
        {
            title: "Bilde",
            name: "image",
            type: "image"
        },
        {
            title: "Slug",
            name: "slug_url",
            type: "slug",
            options: {
                source: "title",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        }, 
        {
            title: "Pokemon",
            name: "pokemon",
            type: "array",
            of: [{type: "pokemon"}]
        }
       
    ]
}