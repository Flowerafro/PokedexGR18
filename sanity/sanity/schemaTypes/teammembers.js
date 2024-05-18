

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
            type: "string"

        }
        // trenger kanskje flere fields??
    ]
}