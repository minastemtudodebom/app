import Image from "next/image";
import logo from "../../../public/minas-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram,
  faFacebook,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  const data = new Date();
  const ano = data.getFullYear();
  return (
    <div className="flex flex-col border-t border-vermelho">
      <div className="flex flex-col items-center justify-center py-14 md:flex-row">
        <div>
          <Image src={logo} alt="Minas Tem Tudo de Bom" width={200} />
        </div>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center gap-28 font-bold md:flex-row">
        <div className="flex flex-col items-center justify-center gap-5 md:items-center md:justify-center">
          <Link href={"/quem-somos"} className="text-vermelho">
            Quem somos
          </Link>
          <Link href={"/politica-de-privacidade"} className="text-vermelho">
            Política de Privacidade
          </Link>
          <Link href={"/troca-devolucao"} className="text-vermelho">
            Política de Troca e Devolução
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:items-center md:justify-center">
          <Link href={"https://instagram.com"} target="_blank" className="text-vermelho">
          <FontAwesomeIcon
            icon={faInstagram}
          /> &nbsp;
            Siga-nos no Instagram
          </Link>
          <Link href={"https://facebook.com"} target="_blank" className="text-vermelho">
          <FontAwesomeIcon
            icon={faFacebook} target="_blank"
          /> &nbsp;Curta nossa Página no Facebook
          </Link>
          <Link href={"https://wa.me/5535997233493"} target="_blank" className="text-vermelho">
          <FontAwesomeIcon
            icon={faWhatsapp}
          /> &nbsp;
          +55 (35) 99723-3493
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm">
          {ano}, Minas tem tudo de bom - Todos os Direitos Reservados
        </p>
        <div className="flex">
          <p className="text-sm">Developed by&nbsp; </p>{" "}
          <a href="https://rixxer.com.br" target="_blank" className="font-bold text-vermelho">
            Rixxer &trade;
          </a>
        </div>
      </div>
    </div>
  );
}
