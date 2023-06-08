import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='border-b border-p-gray'>
      <div className='navbar flex uppercase justify-between px-8 py-5 text-sm'>
        <div className='flex gap-2'>
          <Image src='/assets/icons8-crane-48.png' alt='construction crane' width={48} height={48} />
          <Link href='/' className='flex flex-col justify-center text-xl font-bold'>
            NIALP
          </Link>
        </div>
        <div className='pt-3'>
          <ul className='flex gap-10'>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>About</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Services</Link>git 
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Project</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Reviews</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar