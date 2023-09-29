import Details from "@/components/details";
import Nav from "@/components/nave";

export default function Detalhes() {
  return (
    <div className="bg-beje">
      <Nav />
      <Details title="Queijo Minas" price="R$100,00" />
    </div>
  );
}
