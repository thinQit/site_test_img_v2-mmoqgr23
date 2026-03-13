"use client";

import { Button } from '@/components/ui/button'
import { MapPin, Car } from 'lucide-react'

export default function LocationMapBlock() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <p className="uppercase text-white/60">Map Embed Placeholder</p>
        </div>
        <div>
          <h3 className="text-3xl font-black uppercase">Visit Iron & Oak</h3>
          <p className="mt-4 flex gap-2 text-white/80"><MapPin className="h-5 w-5 text-[#FF2E00]" />215 Forge Avenue, Austin, TX</p>
          <p className="mt-2 flex gap-2 text-white/80"><Car className="h-5 w-5 text-[#FF2E00]" />Free parking behind building + street parking.</p>
          <Button className="mt-6 bg-[#FF2E00] text-white hover:bg-[#ff4420]">Get Directions</Button>
        </div>
      </div>
    </section>
  )
}
