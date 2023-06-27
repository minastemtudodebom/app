import Image from 'next/image'
import Logo from '../../../public/minas-removebg-preview.png'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faUser,
  faCartShopping,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <div className="font-sans">
        <div className="bg-vermelho">
          <h2 className="flex h-5 items-center justify-center text-sm font-bold text-beje">
            Frete Grátis nas compras acima de R$ 300,00{' '}
          </h2>
        </div>
        <div className="flex items-center justify-between px-5 md:justify-around">
          <div className="flex h-20 items-center justify-start md:h-32">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo minas tem tudo de bom"
                className="w-32 md:w-48"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="flex h-10 w-80 items-center justify-center rounded-2xl bg-vermelho text-center text-beje placeholder:text-beje"
            />
          </div>
          <div className="hidden gap-10 md:flex ">
            <div className="space-2 flex flex-col items-center justify-center">
              <Link href="/" className="flex flex-col items-center ">
                <FontAwesomeIcon
                  icon={faHome}
                  className="h-10 w-10 text-vermelho"
                />
                <p className="text-preto transition-all duration-300 ease-in-out hover:text-vermelho">
                  Início
                </p>
              </Link>
            </div>
            <div className="space-2 flex flex-col items-center justify-center">
              <Link href="/cadastro" className="flex flex-col items-center ">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-10 w-10 text-vermelho"
                />
                <p className="text-preto transition-all duration-300 ease-in-out hover:text-vermelho">
                  Minha conta
                </p>
              </Link>
            </div>
            <div className="space-2 flex flex-col items-center justify-center">
              <a href="" className="flex flex-col items-center ">
                <FontAwesomeIcon
                  icon={faComments}
                  className="h-10 w-10 text-vermelho"
                />
                <p className="text-preto transition-all duration-300 ease-in-out hover:text-vermelho">
                  Atendimento
                </p>
              </a>
            </div>
            <div className="space-2 flex flex-col items-center justify-center">
              <a href="" className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="h-10 w-10 text-vermelho"
                />
                <p className="text-preto transition-all duration-300 ease-in-out hover:text-vermelho">
                  Meu carrinho
                </p>
              </a>
            </div>
          </div>
          <div className="blcok md:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="hidden h-9 items-center justify-around bg-vermelho font-bold text-beje drop-shadow-dark2 md:flex">
        <button>QUEIJO</button>
        <button>QUEIJO</button>
        <button>QUEIJO</button>
        <button>QUEIJO</button>
        <button>QUEIJO</button>
      </div>
    </div>
  )
}
