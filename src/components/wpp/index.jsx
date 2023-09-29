import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Wpp() {
  return (
    <div className="fixed bottom-5 right-5 z-30  text-green-500 transition-all duration-300 ease-out">
      <Link href="https://wa.me/" target="blank">
        <FontAwesomeIcon
          icon={faWhatsappSquare}
          className="h-14 animate-bounce"
        />
      </Link>
    </div>
  );
}
