"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Card = ({ slug, foto, title, description }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`src/app/article/${slug}`);
  };

  return (
    <div className="flex w-80 flex-wrap items-center justify-center gap-5 rounded-xl bg-beje bg-opacity-10">
      <div className="relative">
        <Image src={foto} alt={title} className="rounded-lg" width={384} height={256} />
      </div>

      <div className="flex flex-col justify-center">
        <div className="my-2 flex w-40 items-center justify-center rounded-xl bg-beje font-bold text-vermelho ">
          <h2>{title}</h2>
        </div>
        <div className="w-72 text-xl text-beje">
          <h2>{description}</h2>
        </div>
        <button className="mt-5 w-28 rounded-xl bg-beje font-bold text-vermelho" onClick={handleClick}>
          Confira!
        </button>
        <br />
      </div>
    </div>
  );
};

export default Card;
