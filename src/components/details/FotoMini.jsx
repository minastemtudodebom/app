import Image from 'next/image'
import queijo from '../../../public/queijo.jpg'

export default function FotoMini() {
  return (
    <div className="mt-20 hidden w-44 md:block">
      <Image src={queijo} alt="imagen do produto" />
    </div>
  )
}
