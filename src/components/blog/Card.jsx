import Image from 'next/image'
import imagem from '../../../public/queijo.jpg'
export default function Card({ title, description }) {
  return (
    <div>
      <div>
        <div className=" flex w-80 flex-wrap items-center justify-center gap-5 rounded-xl bg-beje bg-opacity-10 py-5">
          <div className="relative">
            <Image
              src={imagem}
              alt="imagem"
              width={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col  justify-center">
            <div className=" my-2 flex w-20 items-center justify-center rounded-xl bg-beje font-bold text-vermelho ">
              <h2>{title}</h2>
            </div>
            <div className=" w-72 text-sm text-beje ">
              <h2>{description}</h2>
            </div>
            <button className="mt-5 w-28 rounded-xl bg-beje font-bold text-vermelho">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
