import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Link from 'next/link'

export function Faq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-2xl max-w-[52rem]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Preciso pagar para usar o CluedUp?</AccordionTrigger>
        <AccordionContent className="text-xl">
          Não, o CluedUp é gratuito para uso. Não é necessário pagar para
          acessar e utilizar os recursos básicos do CluedUp.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Quais são os principais recursos de produtividade?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          Organize sua rotina de estudos, projetos de forma eficiente, acompanhe
          suas candidaturas de emprego e nunca perca eventos importantes com a
          nossa plataforma Clued Up.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Posso acessar o CluedUp em dispositivos móveis?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          Sim, o CluedUp é responsivo e pode ser acessado em dispositivos
          móveis. Isso significa que você pode usar o CluedUp em smartphones e
          tablets, permitindo que você gerencie suas tarefas e atividades mesmo
          quando estiver fora do seu computador.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Os aplicativos de produtividade podem realmente aumentar minha
          produtividade?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          Sim, os aplicativos de produtividade podem ser ferramentas valiosas
          para aumentar a eficiência e a organização. Eles fornecem recursos
          para ajudar a planejar, gerenciar tarefas, definir prioridades e
          acompanhar sua programação. No entanto, o sucesso depende do uso
          consistente e eficaz dessas ferramentas.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Como posso sugerir um novo recurso ou relatar um bug?
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          Adoraríamos ouvir seu feedback! Abra um issue em nosso{' '}
          <Link
            className="text-blue-500"
            href={'https://github.com/Sellucas/CluedUp'}
            target="_blank"
          >
            repositório GitHub
          </Link>{' '}
          para sugerir um novo recurso ou relatar um bug que você encontrou.
          Nossa equipe analisará e responderá prontamente.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
