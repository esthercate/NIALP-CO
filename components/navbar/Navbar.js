import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Project', link: '/' },
    { name: 'Reviews', link: '/' },
    { name: 'Contact', link: '/' },
  ]
  return (
    <div className='border-b border-p-gray'>
      <div className='navbar md:flex uppercase justify-between px-8 py-5 text-sm'>
        <div className='flex gap-2'>
          <Image src='/assets/icons8-crane-48.png' alt='construction crane' width={48} height={48} />
          <Link href='/' className='flex flex-col justify-center text-xl font-bold'>
            NIALP
          </Link>
        </div>
        <div className='pt-3'>
          <ul className='md:flex gap-10'>
            {Links.map((link) => (
              <li key={link.name} className='hover:text-p-orange active:text-p-orange'>
                <Link href={link.link}>{ link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar