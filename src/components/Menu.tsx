"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {

    const[open, setOpen] = useState(false)
  return (
    <div>
        <Image src="/menu.png" alt='' width={28} height={28} className=' cursor-pointer' onClick={() => setOpen((prev) => !prev)}/>

        {open && (
            <div className=' absolute bg-black text-white left-0 w-full top-20 h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 text-xl z-10'>

                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                 <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>
               
               

                </div>
        )}
    </div>
  )
}

export default Menu