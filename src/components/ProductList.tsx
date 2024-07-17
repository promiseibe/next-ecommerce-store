import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductList() {
  return (
    <div className=' mt-12 flex gap-y-16 gap-x-8 justify-between flex-wrap'>
        <Link href={`/test`} className=' shadow-lg p-3 rounded-lg w-full flex flex-col  gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className=' relative w-full h-80'>
            <Image fill sizes='25vw' className='hover:opacity-0 transition-opacity easy duration-500 absolute object-cover rounded-md z-10' src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800 " alt='' /> 
            <Image fill sizes='25vw' className='absolute object-cover rounded-md ' src="https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' /> 
        </div>
        <div className=' flex justify-between '>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-medium'>₦30,000</span>
        </div>
        <div className=' text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama w-max hover:text-white'> Add to Cart</button>
        </Link>
        <Link href={"/test"} className=' shadow-lg p-3 rounded-lg w-full flex flex-col  gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className=' relative w-full h-80'>
            <Image fill sizes='25vw' className='hover:opacity-0 transition-opacity easy duration-500 absolute object-cover rounded-md z-10' src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800 " alt='' /> 
            <Image fill sizes='25vw' className='absolute object-cover rounded-md ' src="https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' /> 
        </div>
        <div className=' flex justify-between '>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-medium'>₦30,000</span>
        </div>
        <div className=' text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama w-max hover:text-white'> Add to Cart</button>
        </Link>
        <Link href={"/test"} className=' shadow-lg p-3 rounded-lg w-full flex flex-col  gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className=' relative w-full h-80'>
            <Image fill sizes='25vw' className='hover:opacity-0 transition-opacity easy duration-500 absolute object-cover rounded-md z-10' src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800 " alt='' /> 
            <Image fill sizes='25vw' className='absolute object-cover rounded-md ' src="https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' /> 
        </div>
        <div className=' flex justify-between '>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-medium'>₦30,000</span>
        </div>
        <div className=' text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama w-max hover:text-white'> Add to Cart</button>
        </Link>
        <Link href={"/test"} className=' shadow-lg p-3 rounded-lg w-full flex flex-col  gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className=' relative w-full h-80'>
            <Image fill sizes='25vw' className='hover:opacity-0 transition-opacity easy duration-500 absolute object-cover rounded-md z-10' src="https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800 " alt='' /> 
            <Image fill sizes='25vw' className='absolute object-cover rounded-md ' src="https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' /> 
        </div>
        <div className=' flex justify-between '>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-medium'>₦30,000</span>
        </div>
        <div className=' text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama w-max hover:text-white'> Add to Cart</button>
        </Link>
    </div>
  )
}

export default ProductList