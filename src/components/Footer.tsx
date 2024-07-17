import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FooterScreen() {
const date = new Date();
const getFullYear = date.getFullYear()
  return (
    <div className=' py-24 px-4 md:px-8   lg:px-16 xl:32  relative bg-gray-100 text-sm mt-24 '>
      {/* TOP */}

      <div className=' flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
        <Link href="/">
    <div className=' text-xl tracking-wide font-bold'>
             Basic Hotels
    </div>
 
      </Link>

      <p>Ebenma street ogbor hill, aba abia state nigeria</p>
      <span className=' font-semibold'>example@gmail.com</span>
      <span className=' font-semibold'>+2348130390557</span>
      <div className=' flex gap-6'>
        <Image src="/facebook.png" alt='' width={16} height={16} />
        <Image src="/instagram.png" alt='' width={16} height={16} />
        <Image src="/youtube.png" alt='' width={16} height={16} />
        <Image src="/x.png" alt='' width={16} height={16} />

      </div>

        
      
        
          </div>  {/* CENTER */}
          <div className=' hidden lg:flex justify-between w-1/2'>
          <div className=' flex flex-col gap-6'>
            <h1 className=' font-medium col justify-between text-lg'> CONTACT US </h1>

              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
            <div className=' flex flex-col gap-6'>
            <h1 className=' font-medium col justify-between text-lg'> SHOP </h1>

              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
            <div className=' flex flex-col gap-6'>
            <h1 className=' font-medium col justify-between text-lg'> HELP </h1>

              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
      
        
          </div>
            {/* RIGHT */}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
            <h1 className=' font-medium text-lg'>SUBSCRIBE</h1>
            <p>Be the first to get the latest news about trends, promotions, and much more</p>
            <div className='flex'>
              <input type='text' placeholder='Email address ' className='p-4 w-3/4'/>
             
              <button className=' w-3/4 bg-lama text-white'>JOIN</button>
               </div>
               <span className=' font-semibold'>Secure Payments</span>
              <div className=' flex justify-between'>
                <Image src="/discover.png" alt='' width={40} height={20} />
                <Image src="/skrill.png" alt='' width={40} height={20} />
                <Image src="/paypal.png" alt='' width={40} height={20} />
                <Image src="/mastercard.png" alt='' width={40} height={20} />
                <Image src="/visa.png" alt='' width={40} height={20} />
          
            </div>
            </div>
         
      </div>
 {/* Bottom */}
 <div className=' flex flex-col md:flex-row items-center text-center justify-between gap-8 mt-16'>
 <div className=' text-gray-500'>
        &copy; <span id="current-year"></span> {getFullYear} Hotel Materials. All rights reserved.
      </div>
 </div>
 
    </div>
  )
}

export default FooterScreen