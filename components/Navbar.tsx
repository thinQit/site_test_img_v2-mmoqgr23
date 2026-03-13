'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  ctaText?: string
  ctaHref?: string
  links?: { label: string; href: string }[]
}

export default function Navbar({
  logoText = 'IRON & OAK FITNESS',
  ctaText = 'START FREE INTRO',
  ctaHref = '#contact',
  links = [
    { label: 'Classes', href: '#classes' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#pricing' },
    { label: 'Results', href: '#transformations' },
    { label: 'Contact', href: '#contact' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-white">
          <Dumbbell className="h-5 w-5 text-[#FF2E00]" />
          <span className="font-black tracking-wide">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-[#FF2E00] text-white hover:bg-[#ff4420]">{ctaText}</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn('md:hidden border-t border-white/10 bg-[#111111]', open ? 'block' : 'hidden')}>
        <div className="space-y-4 px-4 py-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="block text-sm font-semibold uppercase tracking-wide text-white/90" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button className="w-full bg-[#FF2E00] text-white hover:bg-[#ff4420]">{ctaText}</Button>
        </div>
      </div>
    </header>
  )
}
