import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import instagram from'../public/instagram.png'
import logo from'../public/MTTDB.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minas Tem Tudo de Bom</title>
        <meta name="description" content="Rixxer Corp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt='logo' width={300}/>
          <h1>Nosso site está em construção</h1>
        <h2>Siga-nos nas redes sociais e fiquei por dentro! </h2>
        <br />
        <Link href={'https://instagram.com/minastemtudodebom'} target='_blank'>
          <Image className='instagram' src={instagram} alt='instagram' width={50} />    
        </Link> 
            </main>
    </div>
  )
}
