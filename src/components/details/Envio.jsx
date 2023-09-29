import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
export default function Envio() {
  return (
    <div>
      <div className="flex items-center gap-5">
        <FontAwesomeIcon icon={faTruckFast} className="h-5 text-vermelho" />
        <h2 className="text-preto">Meios de envio</h2>
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Seu CEP"
          className="rounded-s-xl border border-vermelho p-2 "
        />
        <button className="rounded-e-xl bg-vermelho p-2 px-5 text-beje">
          Calcular
        </button>
      </div>
    </div>
  );
}
