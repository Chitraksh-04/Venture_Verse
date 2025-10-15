import { createClient } from "next-sanity"

import { client } from "@/sanity/lib/client"

// If you need live previews, you can use the `listen` method on the client
// instead of defineLive
export const sanityFetch = async (query: string, params?: Record<string, unknown>) => {
  return client.fetch(query, params)
}

// Live query helper
export const listenQuery = (query: string, params?: Record<string, unknown>) => {
  return client.listen(query, params)
}
