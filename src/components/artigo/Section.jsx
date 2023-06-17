import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheese,
  faLocationDot,
  faShield,
} from '@fortawesome/free-solid-svg-icons'
export default function Section() {
  return (
    <div className="flex flex-col items-center justify-around gap-5 bg-vermelho py-5 font-bold text-beje md:h-28 md:flex-row md:py-0 md:text-2xl">
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faCheese} className="h-10 w-10 text-beje" />
        <h2 className="w-56">Produtos Artesanais</h2>
      </div>
      <div className="hidden h-20 w-meu items-center justify-center bg-beje md:flex"></div>
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faLocationDot} className="h-10 w-10 text-beje" />
        <h2 className="w-56">Produtos direto de Minas Gerais</h2>
      </div>
      <div className="hidden h-20 w-meu items-center justify-center bg-beje md:flex"></div>
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faShield} className=" h-10 w-10 text-beje" />
        <h2 className="w-56">Loja 100% segura compra garantida</h2>
      </div>
    </div>
  )
}
