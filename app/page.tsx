import { ArrowBigRightDash } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-12 bg-[#1E2749]">
      <div className="radial z-10" />
      <div className="flex flex-col justify-center items-center text-center mt-12">
        <h1 className="text-4xl md:text-7xl max-w-4xl font-bold text-[#FAFAFF] tracking-tight">
          Gerencie de forma eficiente seus estudos, projetos, acompanhe suas
          candidaturas e eventos
        </h1>
        <p className="text-[#E4D9FF] max-w-2xl mt-12 md:text-xl">
          Maximize sua produtividade, conquiste metas e centralize o
          gerenciamento de estudos, projetos, candidaturas e eventos - tudo na
          mesma plataforma.
        </p>
      </div>

      <div className="flex gap-6 text-[#FAFAFF]">
        <Button
          variant={'outline'}
          className="md:text-lg shadow-xl flex flex-row items-center justify-center h-15 bg-[#1E2749]"
        >
          Como Funciona
        </Button>
        <Button className="md:text-lg shadow-xl flex flex-row items-center justify-center h-15 bg-blue-500">
          Comece Agora
          <span className="ml-1">
            <ArrowBigRightDash />
          </span>
        </Button>
      </div>
    </main>
  )
}
