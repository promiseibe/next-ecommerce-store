"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GrCaretPrevious } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Pagination({currentPage,hasNext, hasPrev}: {currentPage:number, hasNext:boolean, hasPrev:boolean}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();
    const createPageUrl =  (pageNumber:number) => {
        
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`)

  }
    return (
    <div className=" flex justify-center w-full">
        <button onClick={()=>createPageUrl(currentPage-1)} className=" rounded-lg bg-lama text-white mx-4 p-3 text-sm  cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200" disabled={!hasPrev}>{<MdArrowBackIos />}</button>
        <button onClick={()=>createPageUrl(currentPage+1)} className=" rounded-lg bg-lama text-white p-3 text-sm  cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200" disabled={!hasNext}><MdArrowForwardIos /></button>
    
    </div>
  )
}

export default Pagination