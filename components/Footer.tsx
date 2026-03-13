"use client";

import Link from 'next/link'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react'

interface FooterProps {
  gymName?: string
  address?: string
  phone?: string
  email?: string
}

export default function Footer({
  gymName = 'Iron & Oak Fitness',
  address = '215 Forge Avenue, Suite B, Austin, TX 78701',
  phone = '(512) 555-0148',
  email = 'hello@ironoakfitness.com',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-black uppercase tracking-wide">{gymName}</h3>
          <p className="mt-3 text-sm text-white/75">Premium strength training, personal coaching, and high-energy group classes.</p>
        </div>
        <div>
          <h4 className="font-bold uppercase">Visit</h4>
          <p className="mt-3 text-sm text-white/75 flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[#FF2E00]" />{address}</p>
          <p className="mt-2 text-sm text-white/75">Mon-Fri: 5AM-9PM<br />Sat-Sun: 7AM-5PM</p>
        </div>
        <div>
          <h4 className="font-bold uppercase">Contact</h4>
          <p className="mt-3 text-sm text-white/75 flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[#FF2E00]" />{phone}</p>
          <p className="mt-2 text-sm text-white/75 flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[#FF2E00]" />{email}</p>
        </div>
        <div>
          <h4 className="font-bold uppercase">Follow</h4>
          <div className="mt-3 flex gap-3">
            <Link href="#" className="text-white/80 hover:text-[#FF2E00]"><Instagram /></Link>
            <Link href="#" className="text-white/80 hover:text-[#FF2E00]"><Facebook /></Link>
            <Link href="#" className="text-white/80 hover:text-[#FF2E00]"><Youtube /></Link>
          </div>
          <div className="mt-4 space-y-1 text-sm text-white/70">
            <Link href="#" className="block hover:text-white">Privacy Policy</Link>
            <Link href="#" className="block hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
