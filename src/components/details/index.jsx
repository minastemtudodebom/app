import { faPix } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Details({ title, price }) {
  return (
    <div className="flex">
      <div className="bg-red-500">Rodrigo</div>
      <div className="bg-yellow-500">Rodrigo</div>
      <div className="mt-20 flex flex-col  gap-5">
        <div className="text-5xl font-black text-preto">{title}</div>
        <div className="text-2xl font-bold text-vermelho">{price}</div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="h-5 w-10 text-preto"
            />
            <p className="font-bold text-vermelho">à vista R$ 135,79 &nbsp;</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faPix} className="h-5 w-10 text-preto" />
            <p className="font-bold text-vermelho">economize 3% no PIX</p>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="h-5 w-10 text-vermelho"
            />
            <p className="text-preto">3x de R$ 46,66 sem juros</p>
          </div>
          <button className="mb-5 w-32 rounded-xl bg-vermelho px-5 py-1 font-bold text-beje drop-shadow-dark2 transition-all duration-300 ease-in-out hover:bg-red-500">
            Comprar
          </button>
          <div className="rounded-xl border border-vermelho">Rodrigo</div>
        </div>
      </div>
    </div>
  )
}
