import Nav from '@/components/nave'
import Artigo from '@/components/artigo'
import Produtos from '@/components/produtos'
import Footer from '@/components/footer'
import Blog from '@/components/blog'

export default function Home() {
  return (
    <div className="bg-beje font-sans">
      <Nav />
      <Artigo />
      <Produtos />
      <Blog />
      <Footer />
    </div>
  )
}
