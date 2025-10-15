"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <h1 className="text-3xl font-bold">Login to VentureVerse</h1>

      <Button
        onClick={() => signIn("github")}
        className="bg-gray-800 px-6 py-2 hover:bg-gray-700"
      >
        Login with GitHub
      </Button>

      <Button
        onClick={() => signIn("google")}
        className="bg-red-600 px-6 py-2 hover:bg-red-500"
      >
        Login with Google
      </Button>
    </div>
  )
}
