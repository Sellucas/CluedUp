import {
  ArrowBigRightDash,
  BarChart4,
  CalendarDays,
  Lightbulb,
  PlayCircle,
  Split
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Faq } from '@/components/faq'

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
      <section className="works w-full bg-[#E4D9FF] flex flex-col items-center justify-center pt-24 pb-36">
        <div className="flex flex-col items-center justify-center text-center gap-12 p-4 max-w-5xl">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl">
              CluedUp Ajuda Você a Elevar Sua Produtividade Diária.
            </h1>
          </div>
          <p className="md:text-xl max-w-3xl mb-4">
            Com um sistema de trabalho organizado e estruturado, o CluedUp ajuda
            você a gerenciar cada um dos seus projetos e planos de estudos com
            mais facilidade, concluí-los mais rapidamente e obter mais
            benefícios. Sinta as vantagens.
          </p>
          <Button className="md:text-xl shadow-xl py-6">
            <span className="mr-2">
              <PlayCircle size={35} absoluteStrokeWidth />
            </span>
            Como isso Funciona?
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 p-4 gap-12 mt-32">
          <div className="flex flex-col gap-12 max-w-lg">
            <div className="bg-[#FAFAFF] h-96 md:h-80 p-12 rounded-xl shadow-xl">
              <p className="pb-20">
                <Lightbulb size={35} color="#1E2749" absoluteStrokeWidth />
              </p>
              <p className="text-blue-500 pb-4 text-lg">SIMPLICIDADE</p>
              <h2 className="text-[#1E2749] text-3xl font-bold">
                Foco no trabalho é mais importante
              </h2>
            </div>

            <div className="bg-[#FAFAFF] h-96 md:h-80 p-12 rounded-xl shadow-xl">
              <p className="pb-20">
                <Split size={35} color="#1E2749" absoluteStrokeWidth />
              </p>
              <p className="text-blue-500 pb-4 text-lg">FLEXIBILIDADE</p>
              <h2 className="text-[#1E2749] text-3xl font-bold">
                Uma plataforma para todos os seus negócios
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-12 max-w-lg">
            <div className="bg-[#1E2749] h-96 md:h-80 p-12 rounded-xl shadow-xl">
              <p className="pb-10">
                <CalendarDays size={35} color="#E4D9FF" absoluteStrokeWidth />
              </p>
              <p className="text-blue-500 pb-4 text-lg">ORGANIZAÇÃO</p>
              <h2 className="text-[#FAFAFF] text-3xl font-bold mb-2">
                Concretização dos seus planos
              </h2>
              <p className="text-[#E4D9FF]">
                Transformando planos em realidade, crescimento pessoal e
                profissional, rumo ao sucesso que tanto deseja alcançar.
              </p>
            </div>

            <div className="bg-[#FAFAFF] h-96 md:h-80 p-12 rounded-xl shadow-xl">
              <p className="pb-20">
                <BarChart4 size={35} color="#1E2749" absoluteStrokeWidth />
              </p>
              <p className="text-blue-500 pb-4 text-lg">PRODUTIVIDADE</p>
              <h2 className="text-[#1E2749] text-3xl font-bold">
                Aumento de produtividade em até 80%
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="faq w-full flex justify-center bg-[#FAFAFF] pt-36 pb-52">
        <div className="flex flex-col justify-center items-center max-w-7xl p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-16">
            Perguntas Frequentes (FAQ)
          </h1>
          <Faq />
        </div>
      </section>
      <section className="banner flex flex-col justify-center items-center w-full max-w-7xl text-center px-12 py-32 rounded-3xl mb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAFF] mb-12">
          Comece Agora!
        </h1>
        <p className="text-[#E4D9FF] max-w-4xl mb-16 text-xl">
          Explore uma solução integrada e intuitiva que otimiza a gestão de
          tarefas, aprimorando a colaboração e impulsionando sua produtividade.
          Deixe para trás a complexidade e dê as boas-vindas a uma nova era de
          eficiência no gerenciamento de projetos, com a nossa plataforma de
          suporte sempre ao seu lado.
        </p>
        <div className="flex gap-8 text-[#FAFAFF]">
          <Button
            variant={'outline'}
            className="text-xl bg-[#1E2749] shadow-xl"
          >
            Ver Preços
          </Button>
          <Button className="text-xl bg-blue-500 shadow-xl">Cadastre-se</Button>
        </div>
      </section>
    </main>
  )
}
