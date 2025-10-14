import { type SchemaTypeDefinition } from "sanity"

import { author } from "@/sanity/schemaTypes/author"
import { startup } from "@/sanity/schemaTypes/startup"
import { playlist } from "@/sanity/schemaTypes/playlist"
import { blockContent } from "./blockContent"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist, blockContent],
}
