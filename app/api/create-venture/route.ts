import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  const doc = {
    _type: "venture",
    name: data.name,
    description: data.description,
    author: data.author,
    imageUrl: data.imageUrl,
  }

  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-03/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}`,
    },
    body: JSON.stringify({ mutations: [{ create: doc }] }),
  })

  const result = await res.json()
  return NextResponse.json(result)
}
