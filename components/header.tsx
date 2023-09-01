'use client'

import React, { useState } from 'react'
import { X, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  const Links = [
    { name: 'Sobre', link: '/about' },
    { name: 'Preço', link: '/price' },
    { name: 'Contato', link: '/contact' }
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-[#1E2749]">
        <Link
          href={'/'}
          className="text-2xl cursor-pointer font-bold text-[#FAFAFF] tracking-tighter"
        >
          CluedUp.
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-[#FAFAFF]"
        >
          {open ? <X /> : <Menu />}
        </div>
        <ul
          className={`md:flex md:items-center md:gap-24 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] bg-[#1E2749] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          <div className="flex flex-col md:flex-row text-lg">
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-[#E4D9FF] hover:text-[#FAFAFF] duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </div>
          <Button className="text-lg relative">
            Fazer login
            <span className="absolute top-0 right-0">
              <span className="animate-ping inline-flex absolute h-3 w-3 rounded-full bg-sky-400 opacity-75 top-0 right-0"></span>
              <span className="inline-flex absolute h-3 w-3 rounded-full bg-sky-500 top-0 right-0"></span>
            </span>
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Header
