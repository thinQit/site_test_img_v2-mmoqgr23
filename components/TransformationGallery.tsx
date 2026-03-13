"use client";

import { Card } from '@/components/ui/card'

export default function TransformationGallery() {
  const stories = [
    { name: 'Alyssa', timeframe: '16 weeks', results: '+95lb deadlift', highlight: 'From beginner to confident lifter with consistent coaching.' },
    { name: 'Marcus', timeframe: '12 weeks', results: '-7% body fat', highlight: 'Improved conditioning and built lean, athletic strength.' },
    { name: 'Jen + Mike', timeframe: '20 weeks', results: '28 classes completed', highlight: 'Accountability and small group energy kept them locked in.' },
  ]
  return (
    <section id="transformations" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black uppercase md:text-4xl">Transformation Stories</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <Card key={s.name} className="border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase text-[#FF2E00]">{s.timeframe}</p>
              <h3 className="mt-2 text-xl font-black uppercase">{s.name}</h3>
              <p className="mt-2 text-lg font-bold">{s.results}</p>
              <p className="mt-3 text-sm text-white/75">{s.highlight}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
