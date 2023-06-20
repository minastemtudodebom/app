import Image from 'next/image'
import queijo from '../../../public/queijo.jpg'

export default function FotoMini() {
  return (
    <div className="mt-20 w-44">
      <Image src={queijo} alt="imagen do produto" />
    </div>
  )
}
