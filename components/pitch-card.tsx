import Image from "next/image"

export default function PitchCard({ title, desc, img, category }: any) {
  return (
    <div className="w-72 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-lg">
      <Image
        src={img}
        alt={title}
        width={400}
        height={250}
        className="rounded-xl object-cover"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400 line-clamp-2">{desc}</p>
        <span className="mt-2 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
          {category}
        </span>
      </div>
    </div>
  )
}
