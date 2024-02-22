import Card from './Card';

export default function Blog() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-vermelho p-20">
      <div className="flex items-center justify-center gap-5">
        <div className="h-meuh w-16 bg-beje md:w-56" />
        <h2 className="text-2xl font-bold text-beje">Blog</h2>
        <div className="h-meuh w-16 bg-beje md:w-56" />
      </div>
      <div className="flex flex-col justify-center items-center py-16 md:p-16">
        <div className="mt-10 flex flex-wrap justify-center gap-5 md:px-16">
          <Card slug="queijo" foto="/blog_queijo.jpg" title="Dicas" description="Queijos e Bebidas: Um Casamento Perfeito!" />
          <Card slug="azeite" foto="/blog_azeite.jpg" title="Dicas" description="Descubra o Poder do Azeite Extra Virgem" />
          <Card slug="goiabadacascao" foto="/blog_goiabadacascao.jpg" title="Receitas" description="A versatilidade da Goiabada Cascão" />
        </div>
      </div>
    </div>
  );
}
