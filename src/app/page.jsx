import Nav from '@/components/nave'
import Artigo from '@/components/artigo'
import Produtos from '@/components/produtos'
import Footer from '@/components/footer'
import Blog from '@/components/blog'
import Wpp from '@/components/wpp'

export default function Home() {
  return (
    <div className="bg-beje font-sans">
      <Nav />
      <Artigo />
      <Produtos />
      <Blog />
      <Footer />
      <Wpp />
    </div>
  )
}
