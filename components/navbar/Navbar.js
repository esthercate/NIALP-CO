import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosMenu } from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Project', link: '/' },
    { name: 'Reviews', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div className='border-b border-p-gray w-full'>
      <div className='navbar md:flex uppercase justify-between px-8 py-5 text-sm'>
        <div className='flex gap-2'>
          <Image src='/assets/icons8-crane-48.png' alt='construction crane' width={48} height={48} />
          <Link href='/' className='flex flex-col justify-center text-xl font-bold'>
            NIALP
          </Link>
        </div>
        <div onClick={() => setNavbarOpen(!navbarOpen)} className='text-3xl absolute right-8 top-7 cursor-pointer md:hidden hover:text-p-orange'>
          {navbarOpen ? <AiOutlineClose /> : <IoIosMenu />}
        </div>
        <div className='pt-3'>
          <ul className={`md:flex gap-10 md:z-auto z-[-1] absolute md:static transition-all duration-500 ease-in ${navbarOpen ? 'top-20 opacity-100' : 'left-[-490px] md:opacity-100 opacity-0'}`}>
            {Links.map((link) => (
              <li key={link.name} className='hover:text-p-orange font-medium active:text-p-orange duration-500 md:my-0 my-7'>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar