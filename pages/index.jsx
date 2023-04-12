import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import instagram from'../public/instagram.png'
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
          <h1>Nosso site esta em construcao</h1>
        <h2>Siga-nos nas redes sociais e fiquei por dentro! </h2>
        <Link href={'https://instagram.com/minastemtudodebom'} target='_blank'>
          <Image className='instagram' src={instagram} alt='instagram' width={50} />    
        </Link> 
            </main>
    </div>
  )
}
