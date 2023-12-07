import { Shizuru } from 'next/font/google'
import Logo from '../../../public/heart.svg'
import Image from 'next/image'

const shizuru = Shizuru({ subsets: ['latin'], weight: ['400'] })

export const Header = () => {
  return (
    <header className="w-full h-28 bg-neutral-50 ">
      <div className="w-full max-w-[1024px] mx-auto flex items-center">
        <Image src={Logo} alt="logo" />
        <h1 className={shizuru.className}>You Matter</h1>
      </div>
    </header>
  )
}
