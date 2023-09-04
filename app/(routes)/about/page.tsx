import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="hero bg-[#1E2749]">
      <div className="radial absolute w-full h-full z-10" />
      <section className="pt-32 md:pt-48 pb-32 flex flex-col justify-center items-center p-4">
        <div className="max-w-7xl text-center flex flex-col gap-6 z-40">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-[#FAFAFF]">
            Nossa Missão
          </h1>
          <p className="text-xl text-[#E4D9FF] max-w-4xl">
            Acreditamos que o sucesso é alcançado através do planejamento
            cuidadoso, da organização sólida e da gestão eficaz do tempo.
            Sabemos que estudar e gerenciar projetos pode ser desafiador,
            especialmente em um mundo cada vez mais ocupado e digital. É por
            isso que estamos empenhados em fornecer a você as melhores práticas
            e soluções inovadoras para tornar sua jornada mais simples e mais
            produtiva.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 max-w-7xl mt-32">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FAFAFF]">
              Nossa Abordagem.
            </h1>
            <p className="text-xl text-[#E4D9FF]">
              Baseada em ferramentas intuitivas e estratégias eficazes que
              qualquer pessoa pode adotar, independentemente de seu nível de
              experiência. Quer você seja um estudante que busca melhorar suas
              notas, um profissional em busca de uma gestão mais eficiente de
              projetos ou alguém que simplesmente deseja ser mais organizado em
              sua vida cotidiana.
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FAFAFF]">
              Como Alcançamos <br /> Nossa Missão.
            </h2>
            <ol className="text-xl text-[#E4D9FF] list-disc flex flex-col gap-4 ml-5">
              <li>
                <span className="font-bold">
                  Desenvolver Ferramentas de Alta Qualidade
                </span>
                : Criamos e mantemos ferramentas inovadoras que facilitam o
                gerenciamento de tarefas, o acompanhamento de progresso e a
                organização geral de estudos e projetos.
              </li>
              <li>
                <span className="font-bold">Compartilhar Conhecimento</span>:
                Publicamos regularmente artigos, guias e dicas úteis para ajudar
                você a aprender a arte da organização e produtividade pessoal.
              </li>
              <li>
                <span className="font-bold">
                  Oferecer Suporte Personalizado
                </span>
                : Entendemos que cada pessoa é única, e estamos aqui para
                responder às suas perguntas, fornecer orientações personalizadas
                e oferecer suporte quando você mais precisar.
              </li>
              <li>
                <span className="font-bold">Manter-nos Atualizados</span>: A
                evolução é constante, e estamos sempre atentos às últimas
                tendências em produtividade e tecnologia, garantindo que você
                tenha acesso às soluções mais recentes.
              </li>
            </ol>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#FAFAFF]">
              Junte-se a Nós.
            </h2>
            <p className="text-xl text-[#E4D9FF]">
              Queremos convidar você a fazer parte da comunidade da [Nome do seu
              site] e a embarcar nesta jornada de aprimoramento pessoal conosco.
              Juntos, podemos transformar a maneira como você aborda seus
              estudos e projetos, capacitando-o a alcançar seus objetivos de
              forma mais eficaz e gratificante.
            </p>
          </div>
          <div className="flex justify-center items-center mt-12 lg:mt-0">
            <Image
              src={'/organization.svg'}
              alt="Organization"
              width={900}
              height={1}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
