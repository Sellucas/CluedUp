import { RotateCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-12 bg-[#1E2749]">
      <div className="radial" />
      <h1 className="text-4xl md:text-6xl max-w-4xl font-bold text-center text-[#FAFAFF] tracking-tight">
        Gerencie de forma eficiente seus estudos, projetos, acompanhe suas
        candidaturas e eventos
      </h1>
      <Button className="text-lg shadow-xl flex flex-row items-center justify-center h-15">
        Em construção
        <span>
          <RotateCw className="animate-spin ml-2" absoluteStrokeWidth />
        </span>
      </Button>
    </main>
  )
}
