import Image from "next/image";
import queijo from "../../../public/queijo.jpg";

export default function Foto() {
  return (
    <div className="mt-20 flex items-center justify-center md:w-[600px]">
      <Image
        src={queijo}
        alt="imagen do produto"
        className="w-96 md:w-[600px]"
      />
    </div>
  );
}
