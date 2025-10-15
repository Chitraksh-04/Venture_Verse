"use client"

import { useEffect, useState } from "react"
import { listenQuery, sanityFetch } from "@/sanity/lib/live"
import StartupCard, { StartupTypeCard } from "@/components/startup-card"

interface LiveStartupsProps {
  query?: string
  limit?: number // optional: limit number of results
}

export default function LiveStartups({ query, limit = 50 }: LiveStartupsProps) {
  const [ventures, setVentures] = useState<StartupTypeCard[]>([])
  const [loading, setLoading] = useState(true)

  // Build GROQ query with optional search
  const groqQuery = query
    ? `*[_type == "venture" && name match $search] | order(_createdAt desc) [0...$limit]`
    : `*[_type == "venture"] | order(_createdAt desc) [0...$limit]`

  const params = query ? { search: `*${query}*`, limit } : { limit }

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    // Fetch initial data
    sanityFetch(groqQuery, params).then((data: StartupTypeCard[]) => {
      if (isMounted) {
        setVentures(data)
        setLoading(false)
      }
    })

    // Subscribe to live updates
    const subscription = listenQuery(groqQuery, params).subscribe((update: any) => {
      setVentures((prev) => {
        // Remove old document if exists
        const filtered = prev.filter(v => v._id !== update.documentId)
        // Add updated/new document at the top
        return [update.result, ...filtered]
      })
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [query, limit])

  if (loading) return <p className="text-center text-white/60">Loading startups...</p>
  if (!ventures.length) return <p className="text-center text-white/60">No startups found</p>

  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {ventures.map((post) => (
        <StartupCard key={post._id} post={post} />
      ))}
    </ul>
  )
}
