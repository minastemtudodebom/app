import Image from 'next/image'
import logo from '../../../public/minas-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const data = new Date()
  const ano = data.getFullYear()
  return (
    <div className="flex flex-col">
      <dir className="flex flex-col items-center justify-between pr-10 md:flex-row">
        <div>
          <Image src={logo} alt="logo Minas tem tudo de bom" width={200} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} className="h-5 text-vermelho" />
        </div>
      </dir>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm">
          {ano},Minas tem tudo de bom - Todos os Direitos Reservados
        </p>
        <div className="flex">
          <p className="text-sm">Developed by&nbsp; </p>{' '}
          <a href="" className="font-bold text-vermelho">
            Rixxer &trade;
          </a>
        </div>
      </div>
    </div>
  )
}
