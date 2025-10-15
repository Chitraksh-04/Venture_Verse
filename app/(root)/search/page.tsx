import React from "react"

import { auth } from "@/auth"
import SearchForm from "@/components/search-form"
import LiveStartups from "./LiveStartups"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string | string[] }
}) {
  // Get search query from URL
  const query =
    typeof searchParams?.query === "string"
      ? searchParams.query
      : undefined

  // Fetch user session (optional, if you need user info)
  const session = await auth()
  console.log(session?.id)

  return (
    <>
      {/* Hero Section */}
      <section className="container mt-10 py-20 text-center text-white">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ £7.5M seed round raised
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        {/* Search Form */}
        <SearchForm query={query} />
      </section>

      {/* Startups Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">
            {query ? `Search results for "${query}"` : "All Startups"}
          </h2>

          {/* LiveStartups component handles fetching and live updates */}
          <LiveStartups query={query} limit={50} />
        </div>
      </section>
    </>
  )
}
