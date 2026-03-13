"use client";

import TrainerCard from '@/components/TrainerCard'

export default function TrainerCardsGrid() {
  return (
    <section id="trainers" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black uppercase text-white md:text-4xl">Meet Your Coaches</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="transition-transform hover:-translate-y-1"><TrainerCard /></div>
          <div className="transition-transform hover:-translate-y-1"><TrainerCard name="Coach Eli Carter" imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578064/site-images/fitness/11385974.jpg" /></div>
          <div className="transition-transform hover:-translate-y-1"><TrainerCard name="Coach Roman Hale" imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578047/site-images/fitness/13965335.jpg" /></div>
        </div>
      </div>
    </section>
  )
}
