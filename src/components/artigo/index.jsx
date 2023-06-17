import Image from 'next/image'
import vaca from '../../../public/vaca.png'
import Section from './Section'

export default function Largura() {
  return (
    <div>
      <div className="flex h-96 flex-col justify-center bg-queijo bg-cover bg-no-repeat md:h-[500px]">
        <h1 className="mx-20 font-alt text-4xl text-beje drop-shadow-dark2 md:w-[650px] md:text-7xl">
          Produtos mineiros artesanais direto de fábrica
        </h1>
        <button className="relative mx-20 mt-10 flex w-60 rounded-2xl bg-vermelho py-2 pl-4 font-alt font-bold text-beje drop-shadow-drop1 transition-all duration-300 ease-in-out hover:bg-red-500">
          Confira nossos produtos
          <Image
            src={vaca}
            alt="vaca do logotipo"
            className="absolute -right-7 -top-7 w-20 drop-shadow-drop1"
          />
        </button>
      </div>
      <Section />
    </div>
  )
}
