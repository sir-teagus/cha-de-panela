import Link from 'next/link'
import Image from 'next/image'

import { Hero } from '@/components/ui/hero'
import { Button } from '@/components/ui/button'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className="flex min-h-dvh md:min-h-screen flex-col">
      <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 w-full h-dhv">
        <div className="max-w-5xl mx-auto min-h-dvh md:min-h-screen w-full px-6 md:px-10 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-8xl mb-8 md:mb-16 font-mono font-bold dark:text-white">
            Chá de Casa Nova
          </h2>
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            Amanda <br /> & Thiago
          </h1>

          <p className="text-base md:text-xl mt-8 md:mt-16 dark:text-neutral-200">
            Vamos juntar amigos e felicidade para brindar essa nova fase!
            <br />
            Venha celebrar com a gente.
          </p>
        </div>
      </div>

      <div className="py-10">
        <Hero />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 min-h-dvh md:min-h-screen w-full flex flex-col items-start justify-center">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white mb-10 md:mb-20">
          Lista de presentes
        </h2>
        <p className="max-w-2xl text-justify text-base md:text-xl dark:text-neutral-200">
          Esta é nossa própria lista de desejos, a qual tornamos pública para
          facilitar a escolha dos presentes. Os produtos foram escolhidos
          levando em consideração tanto o nosso gosto pessoal quanto a faixa de
          preço que consideramos razoável.
          <br />
          <br />
          A lista abrange uma ampla variedade de produtos, desde os mais
          acessíveis até os mais luxuosos, para aqueles que se sentirem mais
          arrojados.
          <br />
          <br />
          Os preços dos itens podem ter variado desde o momento em que foram
          adicionados à lista, por isso é importante verificar os preços atuais
          na Amazon. Esperamos que esta lista facilite a escolha do presente, e
          estamos ansiosos para compartilhar este momento especial com cada um
          de vocês.
        </p>
        <Button asChild className="mt-6 md:mt-10 px-4 py-4">
          {/* <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> */}
          <Link
            href={
              'https://www.amazon.com.br/hz/wishlist/ls/3B3RP4W27SPNI?ref_=wl_share'
            }
            target="blank"
          >
            Ir para lista
          </Link>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 h-screen w-full flex flex-col items-start justify-center mt-20">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
          Quando e onde vai rolar?
        </h2>
        <p className="text-xl mt-8 md:mt-16 underline md:text-xl dark:text-neutral-200">
          Sábado, 9 de março às 13:00.
        </p>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Torre Alpha Mangal
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              R. Luiz Silva Rodrigues, 241 - Mangal, Sorocaba - SP, 18040-336
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/alpha.jpeg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-end mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-4 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link
                  href="https://maps.app.goo.gl/YGJwqNYiYQin9KSt9"
                  target="blank"
                >
                  Partiu →
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 w-full h-screen flex flex-col items-start justify-center">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white">
          Confirmar presença
        </h2>
        <p className="text-xl mt-8 md:mt-16 md:text-xl dark:text-neutral-200">
          Confirmar sua presença até dia 1 de março.
        </p>
        <Button
          asChild
          variant="destructive"
          className="mt-8 md:mt-16 py-8 px-16"
        >
          <Link href={'https://wa.me/5515981563139'} target="blank">
            CONFIRMAR PRESENÇA
          </Link>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 h-screen w-full flex flex-col items-start justify-center">
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white mb-10 md:mb-20">
          O que mais preciso saber?
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que devo levar?</AccordionTrigger>
            <AccordionContent>
              Aquele kit churrasco tradicional - uma pequena contribuição de
              carne/linguiça/frango e a bebida de sua preferência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Preciso levar presente?</AccordionTrigger>
            <AccordionContent>
              Não precisa levar, porém, uma lista de presentes está disponível.
              Comprando por lá, sua compra será feita na Amazon e entregue
              diretamente a nós. Caso não possa comprar nenhum presente, tudo
              bem também.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Posso comprar o presente em outro site?
            </AccordionTrigger>
            <AccordionContent>
              Pode, desde que o produto tenha qualidade e características
              similares. Só pedimos que nos avise para tirarmos o item da lista
              e evitar que outra pessoa compre o mesmo produto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quando e onde será mesmo?</AccordionTrigger>
            <AccordionContent>
              <strong>Quando:</strong> 9 de março. <br />
              <strong>Onde:</strong> Rua Luiz Silva Rodrigues, 241, Mangal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Até quando devo confirmar minha presença?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Preferencialmente até dia 1 de março.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
