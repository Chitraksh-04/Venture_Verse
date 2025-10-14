'use client'

import { defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"

import { deskTool } from "sanity/desk"   // ✅ correct import

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }),   // ✅ pass your custom structure here
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
