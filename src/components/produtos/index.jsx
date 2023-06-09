import CardDestaque from './CardDestaque'
import Card from './Card'
import queijo from '../../../public/queijo.jpg'
import Image from 'next/image'

export default function Produtos() {
  return (
    <div>
      <div className="mt-16 flex items-center justify-center gap-5">
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
        <h2 className="text-2xl font-bold text-vermelho">Destaques</h2>
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5">
        <CardDestaque
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <CardDestaque
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <CardDestaque
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
      </div>
      <div
        id="produtos"
        className="mt-16 flex items-center justify-center gap-5"
      >
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
        <h2 className="text-2xl font-bold text-vermelho">Produtos</h2>
        <div className="h-meuh w-16 bg-vermelho md:w-56" />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-5 px-5">
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
        <Card
          imagem={
            <Image
              src={queijo}
              alt="imagem do produto que esta sendo vendido"
            />
          }
          produto={'Queijo Minas'}
          valor={'R$100,00'}
          pagamento={
            'à vista R$ 135,79 | economize 3% no PIX 3x de R$ 46,66 sem juros'
          }
        />
      </div>
    </div>
  )
}
