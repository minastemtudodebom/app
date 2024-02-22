import Footer from "@/components/footer";
import Nav from "@/components/nave";

export default function QuemSomos() {
  return (
    <div className="bg-beje">
      <Nav />
      <dir className="flex flex-col items-center px-5 text-justify md:mt-20 md:px-20">
        <h2 className="py-5 text-5xl font-bold mb-12 text-vermelho">Quem somos</h2>
        <p className="">
          Somos a Minas Tem Tudo de Bom!
          <br /><br /><br />
        </p>
      </dir>
      <Footer />
    </div>
  );
}
