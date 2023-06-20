import Image from 'next/image'
import queijo from '../../../public/queijo.jpg'

export default function Foto() {
  return (
    <div className="mt-20 w-[600px]">
      <Image src={queijo} alt="imagen do produto" />
    </div>
  )
}
