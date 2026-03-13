"use client";

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface MembershipTierCardProps {
  name?: string
  price?: string
  badge?: string
  features?: string[]
}

export default function MembershipTierCard({
  name = 'Performance Plan',
  price = '$169/mo',
  badge = 'Most Popular',
  features = ['Unlimited group classes', '1 coaching check-in/mo', 'Open gym access', 'Progress tracking'],
}: Partial<MembershipTierCardProps>) {
  return (
    <Card className="border-white/10 bg-white/5 p-6 text-white">
      <p className="inline-block rounded-full bg-[#FF2E00] px-3 py-1 text-xs font-bold uppercase">{badge}</p>
      <h3 className="mt-4 text-2xl font-black uppercase">{name}</h3>
      <p className="mt-1 text-3xl font-black">{price}</p>
      <ul className="mt-5 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-[#FF2E00]" />{f}</li>
        ))}
      </ul>
      <Button className="mt-6 w-full bg-[#FF2E00] text-white hover:bg-[#ff4420]">Choose Plan</Button>
    </Card>
  )
}
