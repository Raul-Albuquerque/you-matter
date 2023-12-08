'use client'

import { useState } from 'react'

const MotivationalQuotes = [
  'Somos capazes de fazer muito mais do que imaginamos!',
  'Abra os olhos e aventure-se nessa jornada chamada vida!',
  'Siga sempre confiante do seu potencial!',
  'Hoje é um novo dia. Não fique pensando no ontem.',
  'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
  'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!',
  'Não há a necessidade de caminhar rápido. Apenas siga caminhando.',
  'Dias complicados fazem parte. O bom é que passam e depois aparecem dias bons.',
  'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
  'Não se torture quando as coisas não ocorrerem como você planejou. Os planos nos ajudam a traçar o caminho, mas é normal que tenhamos que mudá-los depois!',
]

const DemotivationalQuotes = [
  'A vida é um pêndulo entre o "me deu mal" e o "me ferrei".',
  'Na hora certa, tudo vai dar errado.',
  'É por isso que, na hora de apresentar o trabalho, você só segurava a cartolina.',
  'O mérito da derrota é todo seu, orgulhe-se.',
  'Por causa de gente como você que na caixa de ovo vem escrito "Contém ovo".',
  'Faça uma vez, erre uma vez. Faça de novo, erre de novo.',
  'Você não pode mudar o seu passado, mas pode estragar seu futuro.',
  'Nunca desista, faça até dar errado.',
  'Tudo aquilo que você passou até agora está te preparando para algo pior.',
  'Um dia você perde. No outro você não ganha.',
]

export function Main() {
  const getRandomNumber = (max: number) => {
    const randomNumber = Math.floor(Math.random() * max)
    return console.log(randomNumber)
  }

  const [isMotivational, setIsMotivational] = useState(true)
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <section className="w-full max-w-[1024px] mx-auto bg-neutral-50 rounded-lg mt-14 p-10">
        <h2 className="text-center font-maven text-red-600 font-bold text-xl">
          ESCOLHA UMA DAS OPÇÕES ABAIXO E ALEGRE O SEU DIA:
        </h2>
        <div className="mx-auto w-full flex items-center justify-around mt-10">
          <button
            onClick={() => {
              getRandomNumber(10)
              setIsMotivational(true)
              setIsActive(true)
            }}
            className="bg-red-500 text-neutral-50 text-center font-bold px-6 py-4 rounded-lg"
          >
            MENSAGEM MOTIVACIONAL
          </button>
          <button
            onClick={() => {
              getRandomNumber(10)
              setIsMotivational(false)
              setIsActive(true)
            }}
            className="bg-red-500 text-neutral-50 text-center font-bold px-6 py-4 rounded-lg"
          >
            MENSAGEM DESMOTIVACIONAL
          </button>
        </div>
      </section>
      {isActive && (
        <section className="w-full max-w-[1024px] mx-auto bg-neutral-50 rounded-lg mt-3 p-5">
          <div className="bg-[url('/notebook.svg')] bg-no-repeat mx-auto max-w-[588px] max-h-[260px] p-10">
            {isMotivational ? (
              <p className="text-center font-whisper text-3xl">
                &quot; {MotivationalQuotes[9]} &quot;
              </p>
            ) : (
              <p className="text-center font-whisper text-3xl">
                &quot; {DemotivationalQuotes[9]} &quot;
              </p>
            )}
          </div>
        </section>
      )}
    </>
  )
}
