import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const blogPosts = {
    queijo: {
      foto: '/blog_queijo.jpg',
      title: 'Dicas',
      description: 'Queijos e Bebidas: Um Casamento Perfeito!',
    },
    azeite: {
      foto: '/blog_azeite.jpg',
      title: 'Dicas',
      description: 'Descubra o Poder do Azeite Extra Virgem',
    },
    goiabadacascao: {
      foto: '/blog_goiabadacascao.jpg',
      title: 'Receitas',
      description: 'A versatilidade da Goiabada Cascão',
    },
  };

  const post = blogPosts[slug];

  if (!post) return <div>Carregando...</div>;

  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-vermelho p-20">
      <div className="flex items-center justify-center gap-5">
        <div className="h-meuh w-16 bg-beje md:w-56" />
        <h2 className="text-2xl font-bold text-beje">Blog</h2>
        <div className="h-meuh w-16 bg-beje md:w-56" />
      </div>
      <div className="flex flex-col justify-center items-center py-16 md:p-16">
        <div className="mt-10 flex flex-wrap justify-center gap-5 md:px-16">
          <div className="flex w-80 flex-wrap items-center justify-center gap-5 rounded-xl bg-beje bg-opacity-10">
            <div className="relative">
              <Image src={post.foto} alt={post.title} className="rounded-lg" width={384} height={256} />
            </div>

            <div className="flex flex-col justify-center">
              <div className="my-2 flex w-40 items-center justify-center rounded-xl bg-beje font-bold text-vermelho ">
                <h2>{post.title}</h2>
              </div>
              <div className="w-72 text-xl text-beje">
                <h2>{post.description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
