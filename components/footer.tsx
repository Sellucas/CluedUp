import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFF] h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-20">
      <div className="p-5 ">
        <ul>
          <Link
            href={'/'}
            className="text-gray-800 font-bold text-3xl pb-6 tracking-tighter"
          >
            CluedUp.
          </Link>
          <div className="flex gap-6 pb-5">
            <Github className="text-2xl cursor-pointer hover:text-yellow-600" />
            <Twitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <Linkedin className="text-2xl cursor-pointer hover:text-blue-600" />
          </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Menu</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Login
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Cadastre-se
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Preço
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Sobre
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Redes Socias</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Instagram
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Tiktok
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Twitter
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Youtube
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">Suporte</p>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Contato
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Apoie este serviço
          </li>
          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            Termos e Condições
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
