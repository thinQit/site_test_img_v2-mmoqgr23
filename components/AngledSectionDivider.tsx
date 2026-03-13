"use client";

interface AngledSectionDividerProps {
  flip?: boolean
}

export default function AngledSectionDivider({ flip = false }: Partial<AngledSectionDividerProps>) {
  return (
    <div className="relative h-12 w-full overflow-hidden bg-transparent">
      <div
        className={"absolute inset-0 bg-[#FF2E00]/90 " + (flip ? '-skew-y-2 origin-top-right' : 'skew-y-2 origin-top-left')}
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      />
    </div>
  )
}
