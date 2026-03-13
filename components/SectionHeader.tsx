"use client";

import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCta?: string
  secondaryCta?: string
}

export default function SectionHeader({
  eyebrow = 'IRON & OAK FITNESS',
  headline = 'Train Hard. Stay Consistent.',
  subheadline = 'Evidence-based coaching and structured classes for long-term results.',
  primaryCta = '',
  secondaryCta = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black uppercase text-white md:text-5xl">{headline}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/75">{subheadline}</p>
      {(primaryCta || secondaryCta) && (
        <div className="mt-5 flex justify-center gap-3">
          {primaryCta && <Button className="bg-[#FF2E00] text-white hover:bg-[#ff4420]">{primaryCta}</Button>}
          {secondaryCta && <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">{secondaryCta}</Button>}
        </div>
      )}
    </div>
  )
}
