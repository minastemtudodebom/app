import Card from "./Card";

export default function Blog() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-vermelho p-20">
      <div className="flex items-center justify-center gap-5">
        <div className="h-meuh w-16 bg-beje md:w-56" />
        <h2 className="text-2xl font-bold text-beje">Blog</h2>
        <div className="h-meuh w-16 bg-beje md:w-56" />
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
        <Card
          title="Título"
          description="Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos,"
        />
      </div>
    </div>
  );
}
