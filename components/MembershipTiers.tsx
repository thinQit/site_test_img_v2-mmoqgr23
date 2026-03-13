"use client";

import MembershipTierCard from '@/components/MembershipTierCard'

export default function MembershipTiers() {
  return (
    <section id="pricing" className="bg-[#111111] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black uppercase md:text-4xl">Membership Options</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <MembershipTierCard name="Starter" price="$99/mo" badge="Begin Here" features={['2 classes/week', 'Intro assessment', 'Gym orientation']} />
          <MembershipTierCard />
          <MembershipTierCard name="Elite Coaching" price="$299/mo" badge="1:1 Focus" features={['Unlimited classes', '4 PT sessions/mo', 'Nutrition support', 'Priority booking']} />
        </div>
        <p className="mt-6 text-sm text-white/60">Add-ons: InBody scans ($20), custom macros coaching ($79/mo), recovery sessions ($30).</p>
      </div>
    </section>
  )
}
