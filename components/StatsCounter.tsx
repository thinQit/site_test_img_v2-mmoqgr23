'use client'

import { useEffect, useState } from 'react'

export default function StatsCounter() {
  const [count, setCount] = useState([0, 0, 0, 0])

  useEffect(() => {
    const target = [1200, 40000, 8, 94]
    const id = setInterval(() => {
      setCount((prev) => prev.map((n, i) => (n < target[i] ? n + Math.ceil(target[i] / 50) : target[i])))
    }, 40)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-[#111111] py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-6">
        <div><p className="text-4xl font-black text-[#FF2E00]">{count[0]}+</p><p className="text-sm uppercase text-white/70">Members coached</p></div>
        <div><p className="text-4xl font-black text-[#FF2E00]">{count[1]}+</p><p className="text-sm uppercase text-white/70">Sessions completed</p></div>
        <div><p className="text-4xl font-black text-[#FF2E00]">{count[2]}</p><p className="text-sm uppercase text-white/70">Expert coaches</p></div>
        <div><p className="text-4xl font-black text-[#FF2E00]">{count[3]}%</p><p className="text-sm uppercase text-white/70">Retention rate</p></div>
      </div>
    </section>
  )
}
