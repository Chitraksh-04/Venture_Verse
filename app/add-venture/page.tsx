"use client"
import { useState } from "react"

export default function AddVenturePage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    author: "",
    imageUrl: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Submitting...")

    const res = await fetch("/api/create-venture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) setStatus("✅ Venture submitted successfully!")
    else setStatus("❌ Something went wrong.")
  }

  return (
    <div className="max-w-xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Submit Your Venture</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Venture Name" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
        <input name="author" placeholder="Author Name" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
        <input name="imageUrl" placeholder="Image URL" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" />
        <button type="submit" className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-700">
          Submit
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  )
}
