'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faUser,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../public/minas-removebg-preview.png'

import { useState } from 'react'
import Image from 'next/image'
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      {showSidebar ? (
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-vermelho"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="right-10 top-6 z-30 flex cursor-pointer items-center"
          fill="#EB3237"
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`text-yellow1 fixed right-0 top-0 z-40 flex h-full w-[70vw]  flex-col bg-beje transition-all duration-1000 ease-in-out ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <Link
          href="??"
          className=" text-yellow1 mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <FontAwesomeIcon icon={faUser} className="h-5 text-vermelho" />
          <p>Minha Conta</p>
        </Link>
        <Link
          href="??"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <FontAwesomeIcon icon={faComments} className="h-5 text-vermelho" />
          <p>Atendimento</p>
        </Link>
        <Link
          href="??"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-5 text-vermelho"
          />
          <p>Meu Carrinho</p>
        </Link>
        <Link
          href="quem-somos"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <p>Quem somos</p>
        </Link>
        <Link
          href="politica-de-privacidade"
          className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <p>Política de privacidade</p>
        </Link>
        <Link
          href="envio"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <p>Envio</p>
        </Link>
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </>
  )
}
