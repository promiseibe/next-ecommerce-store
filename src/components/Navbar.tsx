import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'

function Navbar() {
  return (
    <div className=' h-20 px-4 md:px-8   lg:px-16 xl:32  relative '>
      {/* MOBILE */}
      <div className=' h-full flex justify-between md:hidden items-center '>
    <Link href="/">
    <div className=' text-xl tracking-wide font-bold'>
             Basic Hotels
    </div>
 
      </Link>
      <Menu/>
      </div>
      
      {/* LARGE SCREEN */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full '>
        {/* LEFT */}
        <div className=' w-full flex items-center gap-12'>
        <Link href="/" className=' flex items-center gap-3'>
        <Image src="/logo.png" alt="" width={24} height={24} />
        <div>
          <p className=' text-xl tracking-wide font-bold'>Basic hotels</p>
          
    </div>
        </Link>
        <div className=' hidden xl:flex gap-4'>
            <Link href="/">Homepage</Link>
            <Link href="/"> Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
        </div>
        </div>

        {/* RIGHT */}
        <div className=' w-full   flex items-center justify-between gap-8'>
        <SearchBar/>
        <NavbarIcons/>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar
