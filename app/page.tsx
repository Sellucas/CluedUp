import { RotateCw } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-12 bg-[#1E2749]">
      <div className="radial z-10" />
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-7xl max-w-4xl font-bold text-[#FAFAFF] tracking-tight">
          Gerencie de forma eficiente seus estudos, projetos, acompanhe suas
          candidaturas e eventos
        </h1>
        <p className="text-[#E4D9FF] max-w-2xl mt-12 text-xl">
          Maximize sua produtividade, conquiste metas e centralize o
          gerenciamento de estudos, projetos, candidaturas e eventos - tudo na
          mesma plataforma.
        </p>
      </div>

      <Button className="text-lg shadow-xl flex flex-row items-center justify-center h-15">
        Em construção
        <span>
          <RotateCw className="animate-spin ml-2" absoluteStrokeWidth />
        </span>
      </Button>
    </main>
  )
}
