'use client'

import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASparkles() {
  return (
    <section className="relative overflow-hidden bg-[#FF2E00] py-16 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10"><Sparkles /></div>
        <div className="absolute right-16 top-20"><Sparkles /></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-black uppercase md:text-5xl">Claim Your Free Intro Session</h2>
        <p className="mx-auto mt-4 max-w-2xl">Tour the facility, meet your coach, and get a custom strength roadmap.</p>
        <ul className="mt-6 space-y-1 text-sm uppercase tracking-wide">
          <li>✔ Movement Screen</li>
          <li>✔ Goal Mapping</li>
          <li>✔ First Workout Plan</li>
        </ul>
        <div className="mt-6 flex justify-center gap-3">
          <Button className="bg-black text-white hover:bg-black/80">Book Now</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">View Programs</Button>
        </div>
      </div>
    </section>
  )
}
