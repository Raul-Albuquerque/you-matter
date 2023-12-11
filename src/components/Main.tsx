'use client'

import { useState } from 'react'

const MotivationalQuotes = [
  'Somos capazes de fazer muito mais do que imaginamos!',
  'Abra os olhos e aventure-se nessa jornada chamada vida!',
  'Siga sempre confiante do seu potencial!',
  'Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior.',
  'A gratidão é uma grande aliada do sucesso!',
  'A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.',
  'É importante agradecer pelo hoje sem nunca desistir do amanhã!',
  'A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!',
  'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
  'Hoje é um novo dia. Não fique pensando no ontem.',
  'Agradeça todos os dias pela sua vida, por tudo o que você conquistou até aqui. E tenha fé de que o futuro lhe reserva realizações ainda maiores!',
  'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.',
  'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
  'Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!!!',
  'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
  'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!',
  'Não há a necessidade de caminhar rápido. Apenas siga caminhando.',
  'Dias complicados fazem parte. O bom é que passam e depois aparecem dias bons.',
  'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
  'Não se torture quando as coisas não ocorrerem como você planejou. Os planos nos ajudam a traçar o caminho, mas é normal que tenhamos que mudá-los depois!',
]

const DemotivationalQuotes = [
  'A sua vida é um pêndulo entre o "me dei mal" e o "me ferrei".',
  'Na hora certa, tudo vai dar errado.',
  'É por isso que, na hora de apresentar o trabalho, você só segurava a cartolina.',
  'O mérito da derrota é todo seu, orgulhe-se.',
  'Por causa de gente como você que na caixa de ovo vem escrito "Contém ovo".',
  'Faça uma vez, erre uma vez. Faça de novo, erre de novo.',
  'Você não pode mudar o seu passado, mas pode estragar seu futuro.',
  'Nunca desista, faça até dar errado.',
  'Tudo aquilo que você passou até agora está te preparando para algo pior.',
  'Um dia você perde. No outro você não ganha.',
  'O caminho é longo, mas a derrota é certa.',
  'É só uma fase ruim, logo ela vai piorar.',
  'Pare de desejar e comece a desistir.',
  'Nunca foi azar, sempre foi incompetência.',
  'Você é mais fraco do que pensa.',
  'Você não é incrível.',
  'Quando sua mente pensar em desistir, desista.',
  'Para ficar ruim, você terá que melhorar muito.',
  'Nunca subestime a sua incapacidade.',
  'Durma 12 horas por dia, assim as chances de você fazer merda caem pela metade.',
]

export function Main() {
  const [isMotivational, setIsMotivational] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [quote, setQuote] = useState('')

  const getQuote = () => {
    const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 20)
      return randomNumber
    }
    setIsActive(true)

    if (!isMotivational) {
      setQuote(MotivationalQuotes[getRandomNumber()])
    } else {
      setQuote(DemotivationalQuotes[getRandomNumber()])
    }
  }

  return (
    <>
      <section className="w-[80%] max-w-[1024px] mx-auto rounded-lg mt-14 p-10w">
        <h2 className="text-center font-maven text-red-600 font-bold text-xl">
          ESCOLHA UMA DAS OPÇÕES ABAIXO E SINTA-SE MELHOR:
        </h2>
        <div className="flex flex-col mx-auto w-full items-center justify-around mt-10 lg:flex-row ">
          <button
            onClick={() => {
              getQuote()
              setIsMotivational(true)
            }}
            className="block mb-4 w-full bg-red-500 text-neutral-50 text-center font-bold sm:px-6 py-4 rounded-lg lg:mb-0"
          >
            QUERO ME SENTIR BEM
          </button>
          <button
            onClick={() => {
              getQuote()
              setIsMotivational(false)
            }}
            className="block w-full bg-red-500 text-neutral-50 text-center font-bold sm:px-6 py-4 rounded-lg lg:ms-2"
          >
            QUERO ME SENTIR MELHOR AINDA
          </button>
        </div>
      </section>
      {isActive && (
        <section className="w-[80%] max-w-[1024px] mx-auto rounded-lg mt-3 p-5 md:w-[80%]">
          <div className="bg-[url('/notebook.svg')] bg-no-repeat mx-auto max-w-[588px] max-h-[260px] p-10">
            {isMotivational ? (
              <p className="text-center font-whisper text-3xl">
                &quot; {quote} &quot;
              </p>
            ) : (
              <p className="text-center font-whisper text-3xl">
                &quot; {quote} &quot;
              </p>
            )}
          </div>
        </section>
      )}
    </>
  )
}
