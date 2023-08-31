import { ArrowBigRightDash, PlayCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="hero w-full bg-[#1E2749] pb-14">
        <div className="radial absolute w-full h-full z-10" />
        <div className="flex flex-col justify-center items-center text-center mt-12 py-16 md:py-36 px-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-4xl font-bold text-[#FAFAFF] tracking-tight">
            Gerencie de forma eficiente seus estudos, projetos, acompanhe suas
            candidaturas e eventos
          </h1>
          <p className="text-[#E4D9FF] max-w-2xl mt-12 md:text-xl">
            Maximize sua produtividade, conquiste metas e centralize o
            gerenciamento de estudos, projetos, candidaturas e eventos - tudo na
            mesma plataforma.
          </p>
        </div>
        <div className="flex justify-center gap-6 text-[#FAFAFF] pt-12 pb-32">
          <Button
            variant={'outline'}
            className="md:text-lg shadow-xl flex flex-row items-center justify-center h-15 bg-[#1E2749] z-40"
          >
            Como Funciona
          </Button>
          <Button className="md:text-lg shadow-xl flex flex-row items-center justify-center h-15 bg-blue-500 z-40">
            Comece Agora
            <span className="ml-1">
              <ArrowBigRightDash />
            </span>
          </Button>
        </div>
      </section>
      <section className="works w-full bg-[#E4D9FF] flex justify-center py-24">
        <div className="grid md:grid-cols-2 gap-8 p-4 max-w-[100rem]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl ">
              CluedUp Ajuda <br />
              Você a Elevar Sua Produtividade Diária.
            </h1>
          </div>
          <div>
            <p className="md:text-xl mb-8">
              Com um sistema de trabalho organizado e estruturado, o CluedUp
              ajuda você a gerenciar cada um dos seus projetos e planos de
              estudos, com mais facilidade, concluí-los mais rapidamente e obter
              mais benefícios. Sinta as vantagens.
            </p>
            <Button className="md:text-xl shadow-xl py-6">
              <span className="mr-2">
                <PlayCircle size={35} absoluteStrokeWidth />
              </span>
              Como isso Funciona?
            </Button>
          </div>
        </div>
      </section>
      <section className="functionalities">
        <div>
          <span></span>
          <p></p>
          <h2></h2>
        </div>
      </section>
    </main>
  )
}
