"use client";

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface ClassScheduleProps {
  days?: { day: string; classes: { time: string; type: string; coach: string }[] }[]
}

export default function ClassSchedule({
  days = [
    { day: 'Monday', classes: [{ time: '6:00 AM', type: 'Barbell Foundations', coach: 'Coach Maya' }, { time: '6:00 PM', type: 'Strength Circuit', coach: 'Coach Dex' }] },
    { day: 'Wednesday', classes: [{ time: '7:00 AM', type: 'Power Build', coach: 'Coach Eli' }, { time: '6:30 PM', type: 'Athletic Conditioning', coach: 'Coach Nia' }] },
    { day: 'Friday', classes: [{ time: '6:00 AM', type: 'Deadlift Lab', coach: 'Coach Roman' }, { time: '5:30 PM', type: 'Full Body Ignite', coach: 'Coach Maya' }] },
  ],
}: Partial<ClassScheduleProps>) {
  return (
    <section id="classes" className="bg-[#111111] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black uppercase md:text-4xl">Class Schedule</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {days.map((d) => (
            <Card key={d.day} className="border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-bold uppercase">{d.day}</h3>
              <div className="mt-4 space-y-3">
                {d.classes.map((c) => (
                  <div key={c.time + c.type} className="rounded-lg border border-white/10 p-3">
                    <p className="text-sm text-[#FF2E00] font-semibold">{c.time}</p>
                    <p className="font-bold">{c.type}</p>
                    <p className="text-sm text-white/70">{c.coach}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Button className="mt-8 bg-[#FF2E00] text-white hover:bg-[#ff4420]">Reserve Your Spot</Button>
      </div>
    </section>
  )
}
