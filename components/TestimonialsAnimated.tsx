'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

export default function TestimonialsAnimated() {
  const testimonials = [
    { quote: 'I hit lifetime PRs in 5 months. The coaching is elite.', name: 'David K.' },
    { quote: 'Group classes feel personal and focused. Zero wasted time.', name: 'Priya M.' },
    { quote: 'I finally stuck with training. Iron & Oak changed everything.', name: 'Lauren T.' },
  ]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 3500)
    return () => clearInterval(id)
  }, [testimonials.length])

  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-sm uppercase text-[#FF2E00]">4.9/5 from 300+ reviews</p>
        <Card className="mt-6 border-white/10 bg-white/5 p-8 transition-all">
          <p className="text-xl font-semibold">“{testimonials[idx].quote}”</p>
          <p className="mt-4 text-sm uppercase text-white/70">{testimonials[idx].name}</p>
        </Card>
      </div>
    </section>
  )
}
