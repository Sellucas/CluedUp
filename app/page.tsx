import { RotateCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-[#1E2749]">
      <div className="radial" />
      <h1 className="text-7xl font-bold text-[#FAFAFF] tracking-tighter">
        CluedUp.
      </h1>
      <Button className="text-lg shadow-xl flex flex-col md:flex-row items-center justify-center h-15">
        Under Construction
        <span>
          <RotateCw className="animate-spin ml-2" absoluteStrokeWidth />
        </span>
      </Button>
    </main>
  )
}
