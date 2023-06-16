import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheese,
  faLocationDot,
  faShield,
} from '@fortawesome/free-solid-svg-icons'
export default function Section() {
  return (
    <div className="flex h-28 items-center justify-around bg-vermelho text-2xl font-bold text-beje">
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faCheese} className="h-10 w-10 text-beje" />
        <h2 className="w-56">Produtos Artesanais</h2>
      </div>
      <div className="flex h-20 w-meu items-center justify-center bg-beje"></div>
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faLocationDot} className="h-10 w-10 text-beje" />
        <h2 className="w-56">Produtos direto de Minas Gerais</h2>
      </div>
      <div className="flex h-20 w-meu items-center justify-center bg-beje"></div>
      <div className="flex items-center justify-center gap-10">
        <FontAwesomeIcon icon={faShield} className="h-10 w-10 text-beje" />
        <h2 className="w-56">Loja 100% segura compra garantida</h2>
      </div>
    </div>
  )
}
