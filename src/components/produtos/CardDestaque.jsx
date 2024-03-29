import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) {
    return 0;
  }
  const averageRating = ratings.length;
  return averageRating;
}

function StarRating({ rating }) {
  const numStars = 5;
  const filledStars = Math.floor(rating);

  const starIcons = [];
  for (let i = 0; i < numStars; i++) {
    if (i < filledStars) {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    } else {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-zinc-300" />
      );
    }
  }

  return <div className="flex">{starIcons}</div>;
}

export default function CardDestaque({
  imagem,
  produto,
  valor,
  pagamento,
  ratings,
  linkcompra,
}) {
  const averageRating = calculateAverageRating(ratings);
  return (
    <div>
      <div className="flex w-64 md:w-80 flex-col items-center justify-center rounded-2xl border-2 border-vermelho text-center">
        <div className="">
          <Image src={imagem} width={350} height={300} alt={produto} className="rounded-t-xl" />
        </div>
        <div className="mt-5 text-2xl font-bold">{produto}</div>
        {/* <StarRating rating={averageRating} /> */}
        <div className="text-2xl font-bold text-vermelho">R$ {valor}</div>
        <div className="p-5 text-sm">{pagamento}</div>
        <div className="space-x-5">
          <Link
            href={linkcompra}
            target="_blank"
            className="mb-5 rounded-xl bg-vermelho px-5 py-2 font-bold text-beje drop-shadow-dark2 transition-all duration-300 ease-in-out hover:bg-red-500"
          >
            Comprar
          </Link>
          <Link
            href="/detalhes"
            className="mb-5 rounded-xl bg-vermelho px-5 py-2 font-bold text-beje drop-shadow-dark2 transition-all duration-300 ease-in-out hover:bg-red-500"
          >
            Detalhes
          </Link>
        </div>
        <div className="p-3">&nbsp;</div>
      </div>
    </div>
  );
}
