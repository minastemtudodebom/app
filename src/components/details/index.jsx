'use client'
import { faPix } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Envio from './Envio'
import Foto from './Foto'
import FotoMini from './FotoMini'
import Descricao from './Descricao'
import Footer from '../footer'

export default function Details({ title, price, avista, parcelado }) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="flex flex-col justify-around md:flex-row">
        <FotoMini />
        <Foto />
        <div className="mt-20 flex flex-col items-center justify-center gap-5 md:items-start">
          <div className="text-5xl font-black text-preto">{title}</div>
          <div className="text-4xl font-bold text-vermelho">{price}</div>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="h-5 w-10 text-preto"
              />
              <p className="font-bold text-vermelho">{avista}</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faPix} className="h-5 w-10 text-preto" />
              <p className="font-bold text-vermelho">economize 3% no PIX</p>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="h-5 w-10 text-vermelho"
              />
              <p className="text-preto">{parcelado}</p>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <div className="flex w-28 items-center justify-center gap-5 rounded-xl border border-vermelho">
                <button
                  className="text-2xl text-vermelho"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <p className="text-xl text-vermelho">{count}</p>
                <button
                  className="text-xl text-vermelho"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <button className=" w-32 rounded-xl bg-vermelho px-5 py-1 font-bold text-beje transition-all duration-300 ease-in-out hover:bg-red-500">
                Comprar
              </button>
            </div>
          </div>
          <Envio />
        </div>
      </div>
      <div>
        <Descricao descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia labore dolor, ipsam officiis ipsa aliquid hic doloribus aperiam laboriosam consequuntur consectetur explicabo assumenda, est pariatur sapiente eos amet earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia labore dolor, ipsam officiis ipsa aliquid hic doloribus aperiam laboriosam consequuntur consectetur explicabo assumenda, est pariatur sapiente eos amet earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia labore dolor, ipsam officiis ipsa aliquid hic doloribus aperiam laboriosam consequuntur consectetur explicabo assumenda, est pariatur sapiente eos amet earum." />
      </div>
      <Footer />
    </div>
  )
}
