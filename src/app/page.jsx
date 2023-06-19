import Nav from '@/components/nave'
import Artigo from '@/components/artigo'
import Produtos from '@/components/produtos'
import Footer from '@/components/footer'
import News from '@/components/news'

export default function Home() {
  return (
    <div className="bg-beje font-sans">
      <Nav />
      <Artigo />
      <Produtos />
      <News />
      <Footer />
    </div>
  )
}
