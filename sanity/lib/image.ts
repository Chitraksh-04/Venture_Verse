import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { dataset, projectId } from "../env"

// Reuse your client config
const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2024-11-02", // match your apiVersion
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
