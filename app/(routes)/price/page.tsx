'use client'

import {
  BarChart3,
  CalendarDays,
  FileCheck,
  GraduationCap,
  Server,
  ShoppingBag,
  CalendarClock,
  Gauge,
  Share,
  UploadCloud,
  Star,
  Crown,
  PencilRuler
} from 'lucide-react'
import { useState } from 'react'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const PricePage = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  const handleToggle = () => {
    setIsMonthly(!isMonthly)
  }

  const freePlan = [
    {
      id: 1,
      icon: <Server absoluteStrokeWidth size={20} />,
      description: 'Armazenamento de documentos e artigos'
    },
    {
      id: 2,
      icon: <FileCheck absoluteStrokeWidth size={20} />,
      description: 'Armazenamento de documentos relacionados a empregos'
    },
    {
      id: 3,
      icon: <CalendarDays absoluteStrokeWidth size={20} />,
      description: 'Acesso a detalhes de eventos'
    },
    {
      id: 4,
      icon: <GraduationCap absoluteStrokeWidth size={20} />,
      description: 'Recursos de criação e edição de roteiro de estudos'
    },
    {
      id: 5,
      icon: <BarChart3 absoluteStrokeWidth size={20} />,
      description: 'Acesso a ferramentas de produtividade'
    }
  ]

  const proPlan = [
    {
      id: 1,
      icon: <ShoppingBag absoluteStrokeWidth size={20} />,
      description: 'Capacidade de armazenamento expandida'
    },
    {
      id: 2,
      icon: <CalendarClock absoluteStrokeWidth size={20} />,
      description: 'Integração de calendário sincronizado'
    },
    {
      id: 3,
      icon: <Gauge absoluteStrokeWidth size={20} />,
      description: 'Representação visual do progresso nos estudos'
    },
    {
      id: 4,
      icon: <Share absoluteStrokeWidth size={20} />,
      description: 'Recursos de colaboração com compartilhamento de tarefas'
    }
  ]

  const premiumPlan = [
    {
      id: 1,
      icon: <UploadCloud absoluteStrokeWidth size={20} />,
      description: 'Capacidade de armazenamento ilimitada'
    },
    {
      id: 2,
      icon: <Star absoluteStrokeWidth size={20} />,
      description: 'Recursos avançados de organização e produtividade'
    },
    {
      id: 3,
      icon: <Crown absoluteStrokeWidth size={20} />,
      description: 'Acesso exclusivo a eventos premium e insights do mercado'
    },
    {
      id: 4,
      icon: <PencilRuler absoluteStrokeWidth size={20} />,
      description: 'Acesso antecipado a novas ferramentas'
    }
  ]

  return (
    <div>
      <section className="pt-32 md:pt-48 pb-32 flex flex-col justify-center items-center text-center gap-12">
        <h1 className="text-4xl md:text-5xl lg:text-7xl">
          Pague Apenas o que{' '}
          <span className="bg-gradient-to-b from-[#1E2749] to-[#5b72cf] bg-clip-text text-transparent">
            Você Necessita
          </span>
        </h1>
        <p className="text-2xl text-[#30343F]">
          Escolha o plano que seja adequado para o seu propósito.
        </p>

        <div
          className="flex items-center cursor-pointer border-2 border-[#1E2749] shadow-xl rounded-xl p-1"
          onClick={handleToggle}
        >
          <span
            className={`p-4 rounded-xl text-xl transition duration-500 ${
              isMonthly ? 'bg-[#1E2749] text-white' : 'bg-white text-gray-700'
            }`}
          >
            Plano Mensal
          </span>
          <span
            className={`p-4 rounded-xl text-xl transition duration-500 ${
              !isMonthly ? 'bg-[#1E2749] text-white' : 'bg-white text-gray-700'
            }`}
          >
            Plano Anual
          </span>
        </div>
      </section>

      <section className="flex justify-center items-center w-full">
        <Reveal>
          <div className="grid lg:grid-cols-3 px-4 md:px-24 lg:px-32 gap-12 lg:gap-8">
            <div className="shadow-2xl p-4 flex flex-col gap-6">
              <h2 className="text-2xl bg-[rgba(30,39,73,0.2)] w-fit p-2 rounded-lg">
                Essencial
              </h2>
              <h1 className="font-bold relative text-[#1E2749]">
                <span className="text-2xl absolute t-0 tracking-tighter">
                  R$
                </span>{' '}
                <span className="text-7xl ml-8">0,00</span>
              </h1>
              <p className="text-xl text-[#30343F] pb-4 border-b">
                Comece sua jornada conosco gratuitamente e tenha acesso aos
                recursos essenciais que irão impulsionar seus projetos e
                melhorar sua eficiência.
              </p>
              <ul className="text-lg flex flex-col gap-4">
                {freePlan.map((item) => (
                  <li key={item.id} className="flex flex-row gap-2">
                    {item.icon} {item.description}
                  </li>
                ))}
              </ul>
              <Button className="w-fit text-xl mt-6 p-6">
                Comece gratuitamente
              </Button>
            </div>

            <div className="shadow-2xl p-4 flex flex-col gap-6">
              <div className="relative">
                <h2 className="text-2xl bg-[rgba(30,39,73,0.2)] w-fit p-2 rounded-lg">
                  Pro
                </h2>
                <h3 className="bg-yellow-500 p-4 rounded-full font-bold shadow-xl text-2xl absolute right-0 top-0">
                  Popular
                </h3>
              </div>
              <h1 className="font-bold relative text-[#1E2749]">
                <span className="text-2xl absolute t-0 tracking-tighter">
                  R$
                </span>{' '}
                <span className="text-7xl ml-8">29,99</span>
              </h1>
              <p className="text-xl text-[#30343F] pb-4 border-b">
                Eleve seus negócios com nosso Plano Pro, que oferece recursos
                avançados, aprimorando significativamente sua produtividade e
                capacidade de gerenciamento.
              </p>
              <ul className="text-lg flex flex-col gap-4">
                Todos os recursos do Plano Essencial, mais:
                {proPlan.map((item) => (
                  <li key={item.id} className="flex flex-row gap-2">
                    {item.icon} {item.description}
                  </li>
                ))}
              </ul>
              <Button className="w-fit text-xl mt-6 p-6 bg-blue-500">
                Comprar Plano Pro
              </Button>
            </div>

            <div className="shadow-2xl p-4 flex flex-col gap-6">
              <h2 className="text-2xl bg-[rgba(30,39,73,0.2)] w-fit p-2 rounded-lg">
                Premium
              </h2>
              <h1 className="font-bold relative text-[#1E2749]">
                <span className="text-2xl absolute t-0 tracking-tighter">
                  R$
                </span>{' '}
                <span className="text-7xl ml-8">69,99</span>
              </h1>
              <p className="text-xl text-[#30343F] pb-4 border-b">
                O Plano Premium é a escolha definitiva para os que buscam
                excelência, com recursos premium e vantagens competitivas que
                proporcionam desempenho excepcional.
              </p>
              <ul className="text-lg flex flex-col gap-4">
                Todos os recursos do Plano Pro, mais:
                {premiumPlan.map((item) => (
                  <li key={item.id} className="flex flex-row gap-2">
                    {item.icon} {item.description}
                  </li>
                ))}
              </ul>
              <Button className="w-fit text-xl mt-6 p-6">
                Comprar Plano Premium
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="flex flex-col justify-center items-center w-full my-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl pb-16">
          Perguntas Frequentes (FAQ)
        </h1>
        <Reveal>
          <div className="grid md:grid-cols-2 max-w-7xl gap-8 p-4">
            <div>
              <h2 className="text-2xl">Você fornece suporte ao cliente?</h2>
              <p className="text-xl mt-4 text-gray-600">
                Sim, fornecemos suporte ao cliente em todos os nossos planos.
                Nossa equipe está disponível via chat e e-mail para ajudar com
                suas perguntas e preocupações, garantindo uma experiência
                tranquila para nossos usuários.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Quais são as opções de pagamento?</h2>
              <p className="text-xl mt-4 text-gray-600">
                Aceitamos pagamento por cartão de crédito, débito automático e
                PIX. Selecione a opção de pagamento que for mais conveniente
                para você.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Posso cancelar a qualquer momento?</h2>
              <p className="text-xl mt-4 text-gray-600">
                Sim, você pode cancelar a qualquer momento. Estamos aqui para
                atender às suas necessidades, e o cancelamento é um processo
                simples e sem complicações.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">
                Existe um limite de usuários ou de recursos em cada plano?
              </h2>
              <p className="text-xl mt-4 text-gray-600">
                Não, não há um limite estrito de usuários ou recursos em cada
                plano. Após criar sua conta, você pode compartilhar o usuário e
                senha com quantas pessoas desejar.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default PricePage
