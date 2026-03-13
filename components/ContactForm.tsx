'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [name, setName] = useState('')

  return (
    <section id="contact" className="bg-[#111111] py-16 text-white">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="text-3xl font-black uppercase">Book Your Free Intro</h2>
        <form className="mt-6 space-y-4">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="bg-white/5 text-white" />
          <Input type="email" placeholder="Email Address" className="bg-white/5 text-white" />
          <Input type="tel" placeholder="Phone Number" className="bg-white/5 text-white" />
          <Input placeholder="Primary Goal (Strength, Fat Loss, Performance)" className="bg-white/5 text-white" />
          <Button className="w-full bg-[#FF2E00] text-white hover:bg-[#ff4420]">Request Session</Button>
        </form>
      </div>
    </section>
  )
}
