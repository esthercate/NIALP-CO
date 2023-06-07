import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='border-b border-p-gray'>
      <div className='navbar flex uppercase justify-between p-8 text-sm'>
        <div>
          <Link href='/'>NIALP</Link>
        </div>
        <div>
          <ul className='flex gap-10'>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>About</Link>
            </li>
            <li className='hover:text-p-orange active:text-p-orange'>
              <Link href='/'>Services</Link>
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