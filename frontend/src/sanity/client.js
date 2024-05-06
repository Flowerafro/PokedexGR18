import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "2veoq2m0", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})