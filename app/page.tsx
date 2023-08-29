import { RotateCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-[#1E2749]">
      <div className="radial" />
      <h1 className="text-7xl font-bold text-[#FAFAFF]">CluedUp.</h1>
      <Button
        size={'lg'}
        className="text-xl shadow-xl flex items-center justify-center"
      >
        Under Construction
        <span>
          <RotateCw className="animate-spin ml-2" absoluteStrokeWidth />
        </span>
      </Button>
    </main>
  )
}
