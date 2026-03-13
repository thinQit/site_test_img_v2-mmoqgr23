"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TrainerCardProps {
  name?: string
  credentials?: string
  specialties?: string[]
  bio?: string
  signatureSession?: string
  imageSrc?: string
}

export default function TrainerCard({
  name = 'Coach Maya Brooks',
  credentials = 'CSCS, USAW-L1',
  specialties = ['Strength Progressions', 'Women’s Performance', 'Technique'],
  bio = 'Maya helps members build confidence under the bar with precise programming and no-fluff coaching.',
  signatureSession = 'Barbell Confidence Blueprint',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg',
}: Partial<TrainerCardProps>) {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5 text-white">
      <Image src={imageSrc} alt={name} width={600} height={420} unoptimized className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-black uppercase">{name}</h3>
        <p className="text-sm text-[#FF2E00]">{credentials}</p>
        <p className="mt-3 text-sm text-white/75">{bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs">{s}</span>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold uppercase">Signature Session: <span className="text-[#FF2E00]">{signatureSession}</span></p>
      </div>
    </Card>
  )
}
