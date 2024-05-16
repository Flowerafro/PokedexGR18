import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "2veoq2m0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})