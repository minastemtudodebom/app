import Image from 'next/image'
import vaca from '../../../public/vaca.png'
import Section from './Section'

export default function Largura() {
  return (
    <div>
      <div className="flex h-[500px] flex-col justify-center bg-queijo bg-cover bg-no-repeat">
        <h1 className="mx-20 w-[650px] font-alt text-7xl text-beje drop-shadow-dark2">
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
