"use client"

import React from "react"
import dynamic from "next/dynamic"
import { set, unset } from "sanity"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

type MarkdownEditorProps = {
  value?: string
  onChange: (patch: any) => void
}

export default function MarkdownEditor({ value = "", onChange }: MarkdownEditorProps) {
  return (
    <div data-color-mode="dark">
      <MDEditor
        value={value}
        onChange={(val) => {
          onChange(val ? set(val) : unset()) // ✅ Sanity-compatible
        }}
      />
    </div>
  )
}
