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
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771578069/site-images/fitness/12905815.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="min-h-[80vh]">
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-24 md:grid-cols-2 md:px-6">
        <div>
          <p className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">Trusted by 1,200+ members</p>
          <TextGenerateEffect words={headline} className="text-4xl font-black uppercase text-foreground md:text-6xl" />
          <p className="mt-4 max-w-xl text-muted-foreground">{subheadline}</p>
          <div className="mt-6 flex gap-3">
            <Button className="bg-[#FF2E00] text-white hover:bg-[#ff4420]">Book Free Intro</Button>
            <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5">View Classes</Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-foreground">
            <div><p className="text-2xl font-black">8+</p><p className="text-xs uppercase text-muted-foreground">Expert Coaches</p></div>
            <div><p className="text-2xl font-black">40</p><p className="text-xs uppercase text-muted-foreground">Weekly Sessions</p></div>
            <div><p className="text-2xl font-black">94%</p><p className="text-xs uppercase text-muted-foreground">Retention Rate</p></div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  )
}
