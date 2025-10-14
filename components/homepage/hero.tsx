"use client"
import PitchCard from "@/components/pitch-card"
import { motion, useAnimate } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import Pointer from "@/components/pointer"
import cursorYouImage from "@/public/images/cursor-you.svg"
import SearchForm from "../search-form"
import { client } from "@/sanity/lib/client"
import { STARTUPS_QUERY } from "@/sanity/lib/queries"

export default function Hero() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  const [pitches, setPitches] = useState<any[]>([])

  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()
  const constraintRef = useRef(null)

  // ✅ Fetch 2 random startups from Sanity
  useEffect(() => {
    async function fetchPitches() {
      const data = await client.fetch(STARTUPS_QUERY, { search: "" })
      if (data?.length > 2) {
        const shuffled = [...data].sort(() => 0.5 - Math.random())
        setPitches(shuffled.slice(0, 2))
      } else {
        setPitches(data)
      }
    }
    fetchPitches()
  }, [])

  // ✅ Animate only after data and refs are ready
  useEffect(() => {
    if (
      !leftDesignScope.current ||
      !rightDesignScope.current ||
      !leftPointerScope.current ||
      !rightPointerScope.current ||
      pitches.length < 2
    )
      return

    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ])

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ])
  }, [pitches])

  return (
    <section
      className="mx-auto mt-20 max-w-[1600px] overflow-x-clip py-24"
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
      ref={constraintRef}
    >
      <div className="container relative">
        {/* ✅ Left random pitch */}
        {pitches[0] && (
          <motion.div
            ref={leftDesignScope}
            initial={{ opacity: 0, y: 100, x: -100 }}
            drag
            dragConstraints={{ left: -100, top: -300, right: 850, bottom: 200 }}
            className="absolute -left-32 top-16 z-50 hidden lg:block w-[380px]"
          >
            <PitchCard
              title={pitches[0].title}
              desc={pitches[0].description}
              img={pitches[0].image}
              category={pitches[0].category}
            />
          </motion.div>
        )}

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 z-[60] hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        {/* ✅ Right random pitch */}
        {pitches[1] && (
          <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, x: 100, y: 100 }}
            drag
            dragConstraints={{
              left: -850,
              top: -300,
              right: 150,
              bottom: 200,
            }}
            className="absolute right-60 top-28 z-50 hidden lg:block w-[440px]"
          >
            <PitchCard
              title={pitches[1].title}
              desc={pitches[1].description}
              img={pitches[1].image}
              category={pitches[1].category}
            />
          </motion.div>
        )}

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 z-[60] hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>

        {/* ✅ Hero main content */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ Secured £7.5M in Seed Funding
          </div>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-8xl">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Submit your startup ideas, explore innovative pitches, and shine in
          virtual competitions with a sleek, user-friendly platform designed to
          empower entrepreneurs.
        </p>

        <SearchForm query={query} />
      </div>
    </section>
  )
}
