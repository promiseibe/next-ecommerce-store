"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

// Search Components Page
function SearchBar() {
    const router = useRouter();
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string

        if(name) {
            router.push(`/list?name=${name}`)
        }
    }
  return (
   <form onSubmit={handleSearch} className=' flex items-center justify-between gap-4 bg-gray-100 flex-1 p-2 rounded-md'>
    <input type='text' name='name' placeholder='Search...' className=' flex-1 px-4 py-1 bg-transparent outline-none' />
    <button className=' cursor-pointer' >
        <Image src="/search.png" alt='' width={16} height={16} />
    </button>
   </form>
  )
}

export default SearchBar