import Link from 'next/link'

export default function CardDestaque({ imagem, produto, valor, pagamento }) {
  return (
    <div>
      <div className="flex w-80 flex-col items-center justify-center rounded-xl border-4 border-vermelho text-center">
        <div className="">{imagem}</div>
        <div className="mt-5 text-2xl font-bold">{produto}</div>
        <div className="text-2xl font-bold text-vermelho">{valor}</div>
        <div className="p-5 text-sm">{pagamento}</div>
        <div className="space-x-5">
          <button className="mb-5 rounded-xl bg-vermelho px-5 py-1 font-bold text-beje drop-shadow-dark2 transition-all duration-300 ease-in-out hover:bg-red-500">
            Comprar
          </button>
          <Link
            href="/detalhes"
            className="mb-5 rounded-xl bg-vermelho px-5 py-2 font-bold text-beje drop-shadow-dark2 transition-all duration-300 ease-in-out hover:bg-red-500"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}
