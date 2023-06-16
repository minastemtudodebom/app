import Nav from '@/components/nave'
import Artigo from '@/components/artigo'
import Produtos from '@/components/produtos'
export default function Home() {
  return (
    <div className="bg-beje font-sans">
      <Nav />
      <Artigo />
      <Produtos />
    </div>
  )
}
