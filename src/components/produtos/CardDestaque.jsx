import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link'

function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) {
      return 0; // Se não houver avaliações ou se ratings for undefined, a média é 0.
  }

  // const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
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

export default function CardDestaque({ imagem, produto, valor, pagamento,ratings, }) {
  const averageRating = calculateAverageRating(ratings);
  return (
    <div>
      <div className="flex w-80 flex-col items-center justify-center rounded-xl border-4 border-vermelho text-center">
        <div className="">
          <Image src={imagem} width={300} height={300} alt={produto}/>
        </div>
        <div className="mt-5 text-2xl font-bold">{produto}</div>
        <StarRating rating={averageRating} />
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
