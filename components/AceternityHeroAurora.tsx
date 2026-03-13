'use client'

import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'

interface AceternityHeroAuroraProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
}

export default function AceternityHeroAurora({
  headline = 'BUILD BRUTAL STRENGTH. TRAIN WITH PURPOSE.',
  subheadline = 'Personal coaching + group performance classes designed for real progress.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578052/site-images/fitness/13106575.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="min-h-[80vh]">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-24 md:grid-cols-2 md:px-6">
        <div>
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Trusted by 1,200+ members</p>
          <TextGenerateEffect words={headline} className="text-4xl font-black uppercase text-white md:text-6xl" />
          <p className="mt-4 max-w-xl text-white/85">{subheadline}</p>
          <div className="mt-6 flex gap-3">
            <Button className="bg-[#FF2E00] text-white hover:bg-[#ff4420]">Book Free Intro</Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">View Classes</Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-white">
            <div><p className="text-2xl font-black">8+</p><p className="text-xs uppercase text-white/70">Expert Coaches</p></div>
            <div><p className="text-2xl font-black">40</p><p className="text-xs uppercase text-white/70">Weekly Sessions</p></div>
            <div><p className="text-2xl font-black">94%</p><p className="text-xs uppercase text-white/70">Retention Rate</p></div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  )
}
