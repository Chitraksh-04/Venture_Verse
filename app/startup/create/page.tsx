"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { useSession, signIn } from "next-auth/react"

export default function CreateVenturePage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [website, setWebsite] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // If user is not logged in, show a login button
  if (!session?.user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black text-white">
        <h1 className="text-2xl font-bold">You must be logged in to create a venture</h1>
        <button
          className="rounded-full bg-pink-400 px-6 py-2 font-semibold text-black hover:bg-pink-500"
          onClick={() => signIn()}
        >
          Login
        </button>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
        if (!session?.user) {
  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={() => signIn()}>Login</button>
    </div>
  )
}
      await client.create({
        _type: "venture",
        name: title,
        description,
        website,
        author: {
          _type: "reference",
          _ref: session.user.id, // automatically assign logged-in user
        },
      })
      router.push("/search")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Create New Venture</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Venture Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-md bg-gray-900 p-2 text-white"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full rounded-md bg-gray-900 p-2 text-white"
        />
        <input
          type="url"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full rounded-md bg-gray-900 p-2 text-white"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-pink-400 px-6 py-2 font-semibold text-black hover:bg-pink-500"
        >
          {loading ? "Submitting..." : "Create Venture"}
        </button>
      </form>
    </div>
  )
}
