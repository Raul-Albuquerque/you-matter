import Logo from '../../public/heart.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="w-full h-28 bg-neutral-50 ">
      <div className="w-full max-w-[1024px] mx-auto flex items-center py-5">
        <Image className="h-20" src={Logo} alt="logo" />
        <h1 className="font-shizuru text-4xl ml-4 text-red-600">YouMATTER</h1>
      </div>
    </header>
  )
}
