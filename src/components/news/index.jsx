import Image from 'next/image'
import imagem from '../../../public/queijo.jpg'

export default function News() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-vermelho p-20">
      <div className="flex items-center justify-center gap-5">
        <div className="h-meuh w-56 bg-beje" />
        <h2 className="text-2xl font-bold text-beje">Novidades</h2>
        <div className="h-meuh w-56 bg-beje" />
      </div>
      <div className="mt-20 flex w-[1000px] flex-wrap items-center justify-center gap-5 rounded-xl bg-beje bg-opacity-5 py-5">
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
        <div>
          <Image src={imagem} alt="imagem" width={300} />
        </div>
      </div>
    </div>
  )
}
