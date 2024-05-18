

export const teammembers = {
    title: "Pokemon",
    name: "teammembers",
    type: "document",
    fields: [
        {
            title: "Navn",
            name: "name",
            type: "string",
            of: [{ type: "string" }]
        }, 
        {
            title: "Nummer",
            name: "number",
            type: "number" 
        }, 
        {
            title: "Team navn",
            name: "teamname",
            type: "reference",
            to: [{type: "teams"}]

        }
        // trenger kanskje flere fields??
    ]
}